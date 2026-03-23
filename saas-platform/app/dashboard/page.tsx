"use client";

import { useState } from "react";

// ─── NICHO CONFIG (white-label engine) ───────────────────────────────────────
const NICHE_CONFIGS: Record<string, {
  name: string;
  tagline: string;
  accent: string;
  accentLight: string;
  accentDark: string;
  icon: string;
  modules: string[];
  kpis: { label: string; value: string; delta: string; trend: string }[];
}> = {
  imoveis: {
    name: "ImóvelPro",
    tagline: "Gestão Imobiliária Inteligente",
    accent: "#C9A84C",
    accentLight: "#F0DFA0",
    accentDark: "#8B6914",
    icon: "🏠",
    modules: ["Dashboard", "Imóveis", "Clientes", "Contratos", "Avaliações", "Financeiro", "Relatórios"],
    kpis: [
      { label: "Imóveis Ativos", value: "124", delta: "+8", trend: "up" },
      { label: "Visitas este mês", value: "47", delta: "+12", trend: "up" },
      { label: "Contratos Fechados", value: "9", delta: "+3", trend: "up" },
      { label: "Receita MRR", value: "R$ 18.400", delta: "+5%", trend: "up" },
    ],
  },
  juridico: {
    name: "LexPro",
    tagline: "Gestão para Advogados",
    accent: "#2D5F8A",
    accentLight: "#A8C8E8",
    accentDark: "#1A3A55",
    icon: "⚖️",
    modules: ["Dashboard", "Processos", "Clientes", "Prazos", "Petições IA", "Honorários", "Relatórios"],
    kpis: [
      { label: "Processos Ativos", value: "83", delta: "+5", trend: "up" },
      { label: "Prazos esta semana", value: "12", delta: "-3", trend: "down" },
      { label: "Audiências", value: "6", delta: "+2", trend: "up" },
      { label: "Honorários Mês", value: "R$ 24.800", delta: "+11%", trend: "up" },
    ],
  },
  saude: {
    name: "ClínicaPro",
    tagline: "Gestão de Clínicas e Consultórios",
    accent: "#1A9E6E",
    accentLight: "#A0E4CC",
    accentDark: "#0F5C3F",
    icon: "🩺",
    modules: ["Dashboard", "Pacientes", "Agenda", "Prontuários", "Financeiro", "Estoque", "Relatórios"],
    kpis: [
      { label: "Consultas Hoje", value: "18", delta: "+4", trend: "up" },
      { label: "Pacientes Ativos", value: "342", delta: "+21", trend: "up" },
      { label: "Taxa Retorno", value: "78%", delta: "+6%", trend: "up" },
      { label: "Faturamento Mês", value: "R$ 31.200", delta: "+9%", trend: "up" },
    ],
  },
  beleza: {
    name: "SalãoPro",
    tagline: "Gestão para Salões e Barbearias",
    accent: "#D4447A",
    accentLight: "#F4A8C4",
    accentDark: "#8B1A4A",
    icon: "💇",
    modules: ["Dashboard", "Agenda", "Clientes", "Serviços", "Comissões", "Estoque", "Relatórios"],
    kpis: [
      { label: "Agendamentos Hoje", value: "24", delta: "+6", trend: "up" },
      { label: "Clientes Cadastrados", value: "1.240", delta: "+48", trend: "up" },
      { label: "Taxa Ocupação", value: "87%", delta: "+7%", trend: "up" },
      { label: "Faturamento Mês", value: "R$ 14.600", delta: "+14%", trend: "up" },
    ],
  },
};

// ─── MOCK ACTIVITY DATA ───────────────────────────────────────────────────────
const RECENT_ACTIVITY = [
  { id: 1, type: "new", text: "Novo cliente cadastrado", sub: "Maria Silva • há 5min", dot: "green" },
  { id: 2, type: "alert", text: "Prazo vencendo amanhã", sub: "Contrato #0482 • urgente", dot: "orange" },
  { id: 3, type: "success", text: "Pagamento recebido", sub: "R$ 1.200,00 • João Mendes", dot: "green" },
  { id: 4, type: "info", text: "Relatório gerado", sub: "Mensal — Março 2026", dot: "blue" },
  { id: 5, type: "new", text: "Agendamento confirmado", sub: "Carlos Rocha • 14h30", dot: "green" },
];

const BAR_DATA = [
  { month: "Out", val: 62 },
  { month: "Nov", val: 78 },
  { month: "Dez", val: 55 },
  { month: "Jan", val: 85 },
  { month: "Fev", val: 91 },
  { month: "Mar", val: 74 },
];

// ─── ICONS (inline SVG) ───────────────────────────────────────────────────────
const Icons = {
  menu: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>,
  bell: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>,
  search: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>,
  up: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="18 15 12 9 6 15"/></svg>,
  down: <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="6 9 12 15 18 9"/></svg>,
  settings: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>,
  logout: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>,
  ai: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>,
};

// ─── MODULE ICONS MAP ─────────────────────────────────────────────────────────
const moduleIcons: Record<string, string> = {
  Dashboard: "◈", Imóveis: "🏠", Clientes: "👥", Contratos: "📄",
  Avaliações: "📊", Financeiro: "💰", Relatórios: "📈", Processos: "⚖️",
  Prazos: "⏰", "Petições IA": "✨", Honorários: "💼", Pacientes: "🩺",
  Agenda: "📅", Prontuários: "📋", Estoque: "📦", Serviços: "✂️",
  Comissões: "💸", Configurações: "⚙️",
};

// ─── MAIN APP ─────────────────────────────────────────────────────────────────
export default function SaaSPlatform() {
  const [activeNiche, setActiveNiche] = useState("imoveis");
  const [activeModule, setActiveModule] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [showNichePicker, setShowNichePicker] = useState(false);

  const config = NICHE_CONFIGS[activeNiche];
  const maxBar = Math.max(...BAR_DATA.map((d) => d.val));

  return (
    <div style={{ fontFamily: "'DM Sans', 'Segoe UI', sans-serif", display: "flex", height: "100vh", background: "#F4F5F7", overflow: "hidden" }}>

      {/* ── SIDEBAR ── */}
      <aside style={{
        width: sidebarOpen ? 240 : 64,
        background: "#0F1117",
        display: "flex", flexDirection: "column",
        transition: "width 0.25s cubic-bezier(.4,0,.2,1)",
        overflow: "hidden", flexShrink: 0, position: "relative", zIndex: 10,
      }}>
        {/* Logo */}
        <div style={{ padding: "20px 16px 16px", borderBottom: "1px solid #1E2130" }}>
          <div
            onClick={() => setShowNichePicker(!showNichePicker)}
            style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", borderRadius: 10, padding: "8px 10px", background: showNichePicker ? "#1E2130" : "transparent", transition: "background .2s" }}
          >
            <div style={{ width: 34, height: 34, borderRadius: 8, background: config.accent, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 18, flexShrink: 0 }}>
              {config.icon}
            </div>
            {sidebarOpen && (
              <div style={{ overflow: "hidden" }}>
                <div style={{ color: "#FFF", fontWeight: 700, fontSize: 14, whiteSpace: "nowrap", lineHeight: 1.2 }}>{config.name}</div>
                <div style={{ color: "#6B7280", fontSize: 11, whiteSpace: "nowrap" }}>Trocar nicho ▾</div>
              </div>
            )}
          </div>

          {/* Niche Picker Dropdown */}
          {showNichePicker && sidebarOpen && (
            <div style={{ marginTop: 8, background: "#1A1D27", borderRadius: 10, overflow: "hidden", border: "1px solid #2A2D3A" }}>
              {Object.entries(NICHE_CONFIGS).map(([key, nc]) => (
                <div
                  key={key}
                  onClick={() => { setActiveNiche(key); setShowNichePicker(false); setActiveModule("Dashboard"); }}
                  style={{ display: "flex", alignItems: "center", gap: 10, padding: "10px 14px", cursor: "pointer", background: activeNiche === key ? "#252836" : "transparent", transition: "background .15s" }}
                >
                  <span style={{ fontSize: 16 }}>{nc.icon}</span>
                  <div>
                    <div style={{ color: activeNiche === key ? config.accent : "#CCC", fontSize: 13, fontWeight: 600 }}>{nc.name}</div>
                    <div style={{ color: "#555", fontSize: 10 }}>{nc.tagline}</div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Nav modules */}
        <nav style={{ flex: 1, padding: "12px 10px", overflowY: "auto" }}>
          {config.modules.map((mod) => {
            const active = activeModule === mod;
            return (
              <div
                key={mod}
                onClick={() => setActiveModule(mod)}
                style={{
                  display: "flex", alignItems: "center", gap: 12,
                  padding: "9px 10px", borderRadius: 8, marginBottom: 2,
                  cursor: "pointer", transition: "all .15s",
                  background: active ? config.accent + "22" : "transparent",
                  borderLeft: active ? `3px solid ${config.accent}` : "3px solid transparent",
                }}
              >
                <span style={{ fontSize: 16, flexShrink: 0, width: 20, textAlign: "center" }}>{moduleIcons[mod] || "•"}</span>
                {sidebarOpen && (
                  <span style={{ color: active ? config.accent : "#8B8FA8", fontSize: 13.5, fontWeight: active ? 600 : 400, whiteSpace: "nowrap" }}>{mod}</span>
                )}
              </div>
            );
          })}
        </nav>

        {/* AI Badge */}
        {sidebarOpen && (
          <div style={{ margin: "0 12px 12px", padding: "12px", borderRadius: 10, background: `linear-gradient(135deg, ${config.accentDark}88, ${config.accentDark}44)`, border: `1px solid ${config.accent}44` }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
              <span style={{ color: config.accent }}>{Icons.ai}</span>
              <span style={{ color: config.accent, fontSize: 12, fontWeight: 700 }}>IA Ativa</span>
            </div>
            <p style={{ color: "#8B8FA8", fontSize: 11, margin: 0, lineHeight: 1.5 }}>Agente analisando seus dados em tempo real</p>
          </div>
        )}

        {/* Bottom actions */}
        <div style={{ padding: "10px", borderTop: "1px solid #1E2130" }}>
          {([["Configurações", Icons.settings], ["Sair", Icons.logout]] as [string, React.ReactNode][]).map(([label, icon]) => (
            <div key={label} style={{ display: "flex", alignItems: "center", gap: 12, padding: "9px 10px", borderRadius: 8, cursor: "pointer", color: "#6B7280", fontSize: 13 }}>
              {icon}
              {sidebarOpen && <span>{label}</span>}
            </div>
          ))}
        </div>
      </aside>

      {/* ── MAIN ── */}
      <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>

        {/* ── TOPBAR ── */}
        <header style={{
          height: 60, background: "#FFF", borderBottom: "1px solid #E8EAF0",
          display: "flex", alignItems: "center", padding: "0 24px", gap: 16, flexShrink: 0,
        }}>
          <button onClick={() => setSidebarOpen(!sidebarOpen)} style={{ background: "none", border: "none", cursor: "pointer", color: "#6B7280", padding: 4, borderRadius: 6 }}>
            {Icons.menu}
          </button>

          {/* Search */}
          <div style={{ flex: 1, maxWidth: 380, display: "flex", alignItems: "center", gap: 8, background: "#F4F5F7", borderRadius: 8, padding: "8px 14px" }}>
            <span style={{ color: "#9CA3AF" }}>{Icons.search}</span>
            <input placeholder={`Buscar em ${config.name}...`} style={{ border: "none", background: "none", outline: "none", fontSize: 13.5, color: "#374151", width: "100%" }} />
          </div>

          <div style={{ flex: 1 }} />

          {/* IA status pill */}
          <div style={{ display: "flex", alignItems: "center", gap: 6, background: config.accent + "15", border: `1px solid ${config.accent}40`, borderRadius: 20, padding: "5px 12px" }}>
            <div style={{ width: 7, height: 7, borderRadius: "50%", background: config.accent, boxShadow: `0 0 6px ${config.accent}` }} />
            <span style={{ fontSize: 12, color: config.accentDark, fontWeight: 600 }}>Agente IA online</span>
          </div>

          {/* Bell */}
          <div style={{ position: "relative", cursor: "pointer", padding: 8, borderRadius: 8, background: "#F4F5F7", color: "#6B7280" }}>
            {Icons.bell}
            <div style={{ position: "absolute", top: 6, right: 6, width: 8, height: 8, borderRadius: "50%", background: "#EF4444", border: "2px solid #FFF" }} />
          </div>

          {/* Avatar */}
          <div style={{ width: 36, height: 36, borderRadius: "50%", background: `linear-gradient(135deg, ${config.accent}, ${config.accentDark})`, display: "flex", alignItems: "center", justifyContent: "center", color: "#FFF", fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
            U
          </div>
        </header>

        {/* ── CONTENT ── */}
        <main style={{ flex: 1, overflow: "auto", padding: 28 }}>

          {/* Page header */}
          <div style={{ marginBottom: 28 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span style={{ fontSize: 22 }}>{moduleIcons[activeModule] || config.icon}</span>
              <div>
                <h1 style={{ margin: 0, fontSize: 22, fontWeight: 700, color: "#111827" }}>{activeModule}</h1>
                <p style={{ margin: 0, fontSize: 13, color: "#9CA3AF" }}>{config.tagline} — {new Date().toLocaleDateString("pt-BR", { weekday: "long", day: "numeric", month: "long" })}</p>
              </div>
            </div>
          </div>

          {/* KPI CARDS */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(210px, 1fr))", gap: 16, marginBottom: 24 }}>
            {config.kpis.map((kpi, i) => (
              <div key={i} style={{ background: "#FFF", borderRadius: 14, padding: "20px 22px", boxShadow: "0 1px 4px #0000000A", border: "1px solid #F0F1F5", position: "relative", overflow: "hidden" }}>
                {/* accent bar */}
                <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg, ${config.accent}, ${config.accentLight})` }} />
                <div style={{ fontSize: 12, color: "#9CA3AF", fontWeight: 500, marginBottom: 8 }}>{kpi.label}</div>
                <div style={{ fontSize: 26, fontWeight: 800, color: "#111827", lineHeight: 1 }}>{kpi.value}</div>
                <div style={{ display: "flex", alignItems: "center", gap: 4, marginTop: 8 }}>
                  <span style={{ color: kpi.trend === "up" ? "#10B981" : "#EF4444" }}>
                    {kpi.trend === "up" ? Icons.up : Icons.down}
                  </span>
                  <span style={{ fontSize: 12, color: kpi.trend === "up" ? "#10B981" : "#EF4444", fontWeight: 600 }}>{kpi.delta} este mês</span>
                </div>
              </div>
            ))}
          </div>

          {/* CHARTS ROW */}
          <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: 16, marginBottom: 24 }}>

            {/* Bar chart */}
            <div style={{ background: "#FFF", borderRadius: 14, padding: "22px 24px", boxShadow: "0 1px 4px #0000000A", border: "1px solid #F0F1F5" }}>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 20 }}>
                <div>
                  <div style={{ fontWeight: 700, color: "#111827", fontSize: 15 }}>Performance Mensal</div>
                  <div style={{ fontSize: 12, color: "#9CA3AF" }}>Últimos 6 meses</div>
                </div>
                <div style={{ fontSize: 12, background: config.accent + "15", color: config.accentDark, padding: "5px 12px", borderRadius: 20, fontWeight: 600 }}>
                  ↑ 19% vs período anterior
                </div>
              </div>
              {/* bars */}
              <div style={{ display: "flex", alignItems: "flex-end", gap: 10, height: 120 }}>
                {BAR_DATA.map((d, i) => {
                  const h = (d.val / maxBar) * 100;
                  const isLast = i === BAR_DATA.length - 1;
                  return (
                    <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
                      <div style={{ fontSize: 11, color: "#6B7280", fontWeight: 600 }}>{d.val}</div>
                      <div style={{
                        width: "100%", height: `${h}%`, borderRadius: "5px 5px 3px 3px", minHeight: 8,
                        background: isLast
                          ? `linear-gradient(180deg, ${config.accent}, ${config.accentDark})`
                          : "#E8EAF0",
                        transition: "height .4s ease",
                      }} />
                      <div style={{ fontSize: 11, color: "#9CA3AF" }}>{d.month}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Recent activity */}
            <div style={{ background: "#FFF", borderRadius: 14, padding: "22px 24px", boxShadow: "0 1px 4px #0000000A", border: "1px solid #F0F1F5" }}>
              <div style={{ fontWeight: 700, color: "#111827", fontSize: 15, marginBottom: 16 }}>Atividade Recente</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {RECENT_ACTIVITY.map((act) => {
                  const dotColors: Record<string, string> = { green: "#10B981", orange: "#F59E0B", blue: "#3B82F6" };
                  return (
                    <div key={act.id} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                      <div style={{ width: 8, height: 8, borderRadius: "50%", background: dotColors[act.dot], marginTop: 5, flexShrink: 0 }} />
                      <div>
                        <div style={{ fontSize: 13, color: "#374151", fontWeight: 500, lineHeight: 1.3 }}>{act.text}</div>
                        <div style={{ fontSize: 11, color: "#9CA3AF" }}>{act.sub}</div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* AI INSIGHT BANNER */}
          <div style={{
            borderRadius: 14, padding: "18px 22px",
            background: `linear-gradient(135deg, ${config.accentDark}EE, ${config.accentDark}BB)`,
            display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
            boxShadow: `0 4px 20px ${config.accent}30`,
          }}>
            <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
              <div style={{ width: 40, height: 40, borderRadius: 10, background: config.accent + "30", border: `1px solid ${config.accent}60`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                <span style={{ color: config.accentLight }}>{Icons.ai}</span>
              </div>
              <div>
                <div style={{ color: "#FFF", fontWeight: 700, fontSize: 14, marginBottom: 3 }}>💡 Insight do Agente IA</div>
                <div style={{ color: config.accentLight, fontSize: 13, opacity: 0.85 }}>
                  Com base nos seus dados, identificamos potencial de crescimento de 23% em clientes inativos. Deseja gerar uma campanha automática de reengajamento?
                </div>
              </div>
            </div>
            <div style={{ display: "flex", gap: 8, flexShrink: 0 }}>
              <button style={{ padding: "8px 16px", borderRadius: 8, border: `1px solid ${config.accent}80`, background: "transparent", color: config.accentLight, fontSize: 13, cursor: "pointer", fontWeight: 500 }}>
                Ignorar
              </button>
              <button style={{ padding: "8px 16px", borderRadius: 8, border: "none", background: config.accent, color: "#FFF", fontSize: 13, cursor: "pointer", fontWeight: 700, boxShadow: `0 2px 10px ${config.accent}60` }}>
                Gerar Agora ✨
              </button>
            </div>
          </div>

        </main>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700;800&display=swap');
        * { box-sizing: border-box; }
        ::-webkit-scrollbar { width: 5px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: #2A2D3A; border-radius: 4px; }
      `}</style>
    </div>
  );
}
