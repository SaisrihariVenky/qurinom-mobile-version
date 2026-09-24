import React, { useState, useEffect } from 'react';
import { TabType } from '../../types';
import { BRAND_LOGO } from '../../data/products';

interface QHRPageProps {
  onBack: () => void;
  onOpenDemo: (productId?: string) => void;
  onNavigateHome: () => void;
  onNavigateProducts: () => void;
}

export const QHRPage: React.FC<QHRPageProps> = ({
  onBack,
  onOpenDemo,
  onNavigateHome,
  onNavigateProducts
}) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const [openFaqs, setOpenFaqs] = useState<{ [key: number]: boolean }>({});
  const [secondsAgo, setSecondsAgo] = useState(0.4);
  const [pendingLeaves, setPendingLeaves] = useState(6);
  const [leaveProcessedMessage, setLeaveProcessedMessage] = useState<string | null>(null);
  const [payrollStatus, setPayrollStatus] = useState<'Ready' | 'Processing...' | 'Disbursed'>('Ready');

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsAgo(prev => {
        const next = +(prev + 0.5).toFixed(1);
        return next > 8.0 ? 0.3 : next;
      });
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  const toggleFaq = (index: number) => {
    setOpenFaqs(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleApproveLeave = () => {
    if (pendingLeaves > 0) {
      setPendingLeaves(prev => prev - 1);
      setLeaveProcessedMessage('Leave request for Dev Lead Elena Rostova approved.');
      setTimeout(() => setLeaveProcessedMessage(null), 3000);
    }
  };

  const handleRunPayrollCycle = () => {
    setPayrollStatus('Processing...');
    setTimeout(() => {
      setPayrollStatus('Disbursed');
      setTimeout(() => setPayrollStatus('Ready'), 4000);
    }, 1500);
  };

  return (
    <div className="bg-[#0B0F19] text-slate-100 flex flex-col min-h-screen overflow-x-hidden antialiased select-none">
      {/* 1. STICKY TOP NAVIGATION */}
      <header className="sticky top-0 w-full z-50 pt-safe bg-[#0B0F19]/90 backdrop-blur-xl border-b border-[#1F2C47]/80 shadow-lg">
        <div className="h-14 px-4 flex items-center justify-between gap-2 max-w-full">
          <div className="flex items-center gap-2 min-w-0">
            <button 
              aria-label="Go Back" 
              onClick={onBack}
              className="w-8 h-8 rounded-full bg-[#131B2E] hover:bg-[#1A253F] border border-[#1F2C47] flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95 shrink-0" 
            >
              <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            </button>
            <div className="flex items-center gap-2 min-w-0">
              <button onClick={onNavigateHome} className="flex items-center text-left">
                <img 
                  alt="Qurinom Solutions" 
                  className="h-7 w-auto object-contain shrink-0" 
                  src={BRAND_LOGO} 
                />
              </button>
              <span className="px-2 py-0.5 rounded-full bg-[#FF6A3D]/15 border border-[#FF6A3D]/30 text-[#FF6A3D] font-bold text-[10px] tracking-wider uppercase shrink-0">
                QHR
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <button 
              onClick={() => onOpenDemo('qhr')}
              className="h-8 px-3 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 text-[#0B0F19] text-[12px] font-bold tracking-wide flex items-center gap-1.5 shadow-md shadow-[#FF6A3D]/20 active:scale-95 transition-all" 
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[#0B0F19] animate-pulse"></span>
              Demo
            </button>
            <button 
              onClick={() => onOpenDemo('qhr')}
              className="w-8 h-8 rounded-full bg-[#131B2E] border border-[#1F2C47] flex items-center justify-center text-slate-300 hover:text-white transition-colors cursor-pointer"
            >
              <span className="material-symbols-outlined text-[17px]">person</span>
            </button>
          </div>
        </div>
      </header>

      <main className="flex-1 w-full max-w-full overflow-x-hidden pb-24 flex flex-col">
        {/* HERO SECTION */}
        <section className="px-4 pt-4 pb-6 flex flex-col gap-4">
          {/* Breadcrumb & Tier Badge */}
          <div className="flex items-center justify-between gap-2">
            <nav className="flex items-center gap-1.5 text-[11px] font-medium text-[#94A3B8] tracking-wide">
              <button onClick={onNavigateHome} className="hover:text-slate-200 transition-colors">Home</button>
              <span className="text-slate-600">/</span>
              <button onClick={onNavigateProducts} className="hover:text-slate-200 transition-colors">Products</button>
              <span className="text-slate-600">/</span>
              <span className="text-[#FF6A3D] font-semibold tracking-wider">QHR</span>
            </nav>
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#131B2E] border border-[#1F2C47] text-[10px] font-semibold text-[#38BDF8] uppercase tracking-wider shrink-0">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
              Enterprise Tier
            </div>
          </div>

          {/* Headline & Subtitle */}
          <div className="flex flex-col gap-1.5">
            <h1 className="text-[36px] font-black tracking-tight leading-none text-white">
              QHR<span className="text-[#FF6A3D]">.</span>
            </h1>
            <h2 className="text-[25px] font-extrabold tracking-tight leading-[32px] text-white">
              Simplify HR Management. <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-300">Empower Your Workforce.</span>
            </h2>
            <p className="text-[14px] text-slate-300 leading-relaxed">
              A modern HR management platform engineered to eliminate spreadsheets, automate multi-tier payroll, centralize workforce telemetry, and orchestrate employee lifecycles from hire to retire.
            </p>
          </div>

          {/* Dual Call To Actions */}
          <div className="flex flex-col gap-2.5 pt-1" id="book-demo">
            <button 
              onClick={() => onOpenDemo('qhr')}
              className="w-full h-12 px-4 rounded-xl bg-[#FF6A3D] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FF6A3D]/20 active:scale-[0.98] transition-all"
            >
              <span>Book a Live Demo</span>
              <span className="material-symbols-outlined text-[18px]">calendar_month</span>
            </button>
            <button 
              onClick={() => onOpenDemo('qhr-get-started')}
              className="w-full h-11 px-4 rounded-xl bg-[#131B2E] border border-[#1F2C47] text-white font-medium text-sm flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all hover:bg-[#1A253F]"
            >
              <span>Get Started</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>

          {/* Trust Indicator Stats */}
          <div className="grid grid-cols-3 gap-2 bg-[#131B2E] border border-[#1F2C47] p-2.5 rounded-xl text-center">
            <div className="flex flex-col items-center justify-center py-1">
              <span className="font-display text-sm font-bold text-[#FF6A3D] tracking-tight">★ 4.9/5</span>
              <span className="text-[10px] uppercase font-medium text-[#94A3B8] tracking-wider mt-0.5">Trustpilot</span>
            </div>
            <div className="flex flex-col items-center justify-center py-1 border-x border-[#1F2C47]">
              <span className="font-display text-sm font-bold text-white tracking-tight">50K+</span>
              <span className="text-[10px] uppercase font-medium text-[#94A3B8] tracking-wider mt-0.5">Active Staff</span>
            </div>
            <div className="flex flex-col items-center justify-center py-1">
              <span className="font-display text-xs font-bold text-[#38BDF8] tracking-tight">SOC2/GDPR</span>
              <span className="text-[10px] uppercase font-medium text-[#94A3B8] tracking-wider mt-0.5">Compliant</span>
            </div>
          </div>

          {/* Live Telemetry Card */}
          <div className="bg-[#131B2E] border border-[#1F2C47] rounded-2xl p-3.5 flex flex-col gap-3 shadow-md">
            <div className="flex items-center justify-between pb-2 border-b border-[#1F2C47]">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-ping"></span>
                <span className="text-xs font-semibold uppercase tracking-wider text-slate-200">QHR Telemetry Pulse</span>
              </div>
              <span className="text-[10px] font-mono text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded border border-[#38BDF8]/25">LIVE NODE</span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <div className="bg-[#0E1524] border border-[#1F2C47] rounded-xl p-2.5 flex flex-col justify-between">
                <span className="text-[11px] text-[#94A3B8] uppercase font-medium">Active Staff</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display text-xl font-bold text-white">482</span>
                  <span className="text-[10px] font-medium text-[#FF6A3D]">+14 mo</span>
                </div>
                <div className="w-full bg-[#1F2C47] h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#FF6A3D] h-full w-[84%] rounded-full"></div>
                </div>
              </div>
              <div className="bg-[#0E1524] border border-[#1F2C47] rounded-xl p-2.5 flex flex-col justify-between">
                <span className="text-[11px] text-[#94A3B8] uppercase font-medium">Attendance Rate</span>
                <div className="flex items-baseline gap-1.5 mt-1">
                  <span className="font-display text-xl font-bold text-[#38BDF8]">98.4%</span>
                  <span className="text-[10px] font-medium text-emerald-400">Stable</span>
                </div>
                <div className="w-full bg-[#1F2C47] h-1 rounded-full mt-2 overflow-hidden">
                  <div className="bg-[#38BDF8] h-full w-[98.4%] rounded-full"></div>
                </div>
              </div>
            </div>

            {/* Notification alert if action taken */}
            {leaveProcessedMessage && (
              <div className="p-2 rounded-lg bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 text-xs font-mono animate-in fade-in">
                {leaveProcessedMessage}
              </div>
            )}

            {/* Telemetry Action Rows */}
            <div className="flex flex-col gap-2 pt-1">
              <div className="flex items-center justify-between p-2.5 bg-[#0E1524] border border-[#1F2C47] rounded-xl">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-[#FF6A3D]/10 text-[#FF6A3D] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">time_to_leave</span>
                  </div>
                  <span className="text-xs text-slate-200 font-medium truncate">Leave Requests Pending</span>
                </div>
                <button
                  onClick={handleApproveLeave}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-[#FF6A3D]/15 text-[#FF6A3D] font-semibold shrink-0 hover:bg-[#FF6A3D]/25 transition-colors cursor-pointer"
                >
                  {pendingLeaves > 0 ? `${pendingLeaves} Awaiting` : 'All Cleared ✓'}
                </button>
              </div>

              <div className="flex items-center justify-between p-2.5 bg-[#0E1524] border border-[#1F2C47] rounded-xl">
                <div className="flex items-center gap-2 min-w-0">
                  <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/10 text-[#38BDF8] flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[16px]">payments</span>
                  </div>
                  <span className="text-xs text-slate-200 font-medium truncate">Cycle Payroll Batch</span>
                </div>
                <button
                  onClick={handleRunPayrollCycle}
                  className="text-[11px] px-2 py-0.5 rounded-md bg-[#38BDF8]/15 text-[#38BDF8] font-semibold shrink-0 hover:bg-[#38BDF8]/25 transition-colors cursor-pointer"
                >
                  {payrollStatus}
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* ARCHITECTURAL IMPACT SECTION */}
        <section className="px-4 py-6 bg-[#0E1524] border-y border-[#1F2C47] flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#FF6A3D]"></span>
            <span className="text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">Architectural Impact</span>
          </div>
          <h2 className="text-[22px] font-extrabold tracking-tight leading-snug text-white">
            Everything You Need to Manage HR Efficiently
          </h2>
          <div className="bg-[#131B2E] border border-[#1F2C47] p-3.5 rounded-xl">
            <h3 className="font-display text-sm font-semibold text-[#FF6A3D] mb-1">
              Eliminate Administrative Friction. Scale Confidently.
            </h3>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Legacy personnel administration causes critical bottlenecks. QHR unifies distributed teams, automates statutory deductions, and maintains a synchronized single source of truth across all departments.
            </p>
          </div>
          {/* Metric Callouts */}
          <div className="grid grid-cols-1 gap-2.5">
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#FF6A3D]/15 text-[#FF6A3D] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[22px]">speed</span>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-[#FF6A3D] leading-tight">70% Reduction</div>
                <p className="text-xs text-[#94A3B8] mt-0.5 leading-snug">
                  In monthly payroll processing hours through automated shift reconciliation.
                </p>
              </div>
            </div>
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[22px]">rocket_launch</span>
              </div>
              <div>
                <div className="font-display text-lg font-bold text-[#38BDF8] leading-tight">4.2 Days</div>
                <p className="text-xs text-[#94A3B8] mt-0.5 leading-snug">
                  Average enterprise rollout timeframe with zero IT disruption and bulk CSV sync.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CORE 8 FEATURES (Responsive 2-Column Grid) */}
        <section className="px-4 py-6 flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#FF6A3D]"></span>
            <span className="text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">Modular Capabilities</span>
          </div>
          <h2 className="text-[22px] font-extrabold tracking-tight leading-snug text-white">
            Powerful Features, Simplified
          </h2>
          <div className="grid grid-cols-2 gap-2.5 w-full">
            {/* 1 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col justify-between gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF6A3D]/15 text-[#FF6A3D] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">badge</span>
              </div>
              <div>
                <h3 className="font-semibold text-[13px] text-white leading-tight">Employee Hub</h3>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">Unified profiles, e-records & document vaults.</p>
              </div>
            </div>
            {/* 2 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col justify-between gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">more_time</span>
              </div>
              <div>
                <h3 className="font-semibold text-[13px] text-white leading-tight">Attendance & Time</h3>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">Geofenced clock-in, shifts & biometric logs.</p>
              </div>
            </div>
            {/* 3 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col justify-between gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">event_available</span>
              </div>
              <div>
                <h3 className="font-semibold text-[13px] text-white leading-tight">Leave Manager</h3>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">Multi-tier approval chains & quota balance.</p>
              </div>
            </div>
            {/* 4 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col justify-between gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">account_balance_wallet</span>
              </div>
              <div>
                <h3 className="font-semibold text-[13px] text-white leading-tight">Auto Payroll</h3>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">Direct tax withholding, disbursal & slips.</p>
              </div>
            </div>
            {/* 5 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col justify-between gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#FF6A3D]/15 text-[#FF6A3D] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">touch_app</span>
              </div>
              <div>
                <h3 className="font-semibold text-[13px] text-white leading-tight">Self-Service</h3>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">Direct mobile requests, tax slips & forms.</p>
              </div>
            </div>
            {/* 6 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col justify-between gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">insights</span>
              </div>
              <div>
                <h3 className="font-semibold text-[13px] text-white leading-tight">Performance OKR</h3>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">360 feedback cycles, KPI & goal matrices.</p>
              </div>
            </div>
            {/* 7 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col justify-between gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-purple-500/15 text-purple-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">gavel</span>
              </div>
              <div>
                <h3 className="font-semibold text-[13px] text-white leading-tight">Regulatory Guard</h3>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">Labor regulations & instant audit logs.</p>
              </div>
            </div>
            {/* 8 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col justify-between gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-amber-500/15 text-amber-400 flex items-center justify-center">
                <span className="material-symbols-outlined text-[18px]">calendar_today</span>
              </div>
              <div>
                <h3 className="font-semibold text-[13px] text-white leading-tight">Appraisal Sync</h3>
                <p className="text-[11px] text-[#94A3B8] mt-1 leading-snug">Automated review dates & alerts.</p>
              </div>
            </div>
          </div>
        </section>

        {/* HOW QHR WORKS (Step Process Flow) */}
        <section className="px-4 py-6 bg-[#0E1524] border-y border-[#1F2C47] flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#FF6A3D]"></span>
            <span className="text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">Execution Flow</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            How QHR Works
          </h2>
          <div className="flex flex-col gap-2.5">
            {/* 01 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#FF6A3D] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                01
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Set Up & Policy Config</h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Define organizational hierarchy, statutory compensation schemes, leave rules, and enterprise holiday calendars.
                </p>
              </div>
            </div>
            {/* 02 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#1F2C47] text-[#38BDF8] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                02
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Manage Employees & Sync</h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Bulk-import personnel dossiers, sync active identity systems (SSO, LDAP), and grant role-governed portal access.
                </p>
              </div>
            </div>
            {/* 03 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#1F2C47] text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                03
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Track & Automate Workflows</h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Execute real-time biometric and mobile GPS attendance logging with seamless multi-tier leave approval routing.
                </p>
              </div>
            </div>
            {/* 04 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex items-start gap-3">
              <div className="w-7 h-7 rounded-lg bg-[#38BDF8] text-[#0B0F19] font-mono text-xs font-bold flex items-center justify-center shrink-0">
                04
              </div>
              <div>
                <h3 className="text-sm font-semibold text-white">Analyze & Optimize Insights</h3>
                <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                  Review department headcount turnover trends, appraisal distribution indices, and comprehensive payroll audit trails.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* LIVE SYSTEM TELEMETRY TABS */}
        <section className="px-4 py-6 flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#FF6A3D]"></span>
            <span className="text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">Live System Telemetry</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            See QHR in Action
          </h2>
          {/* Segmented Pill Control */}
          <div className="grid grid-cols-4 gap-1 p-1 bg-[#0E1524] border border-[#1F2C47] rounded-xl" role="tablist">
            <button 
              onClick={() => setActiveTab(0)}
              className={`py-1.5 text-center text-xs rounded-lg transition-all ${
                activeTab === 0 
                  ? 'font-semibold bg-[#FF6A3D] text-white shadow' 
                  : 'font-medium text-[#94A3B8] hover:text-white'
              }`}
            >
              Exec
            </button>
            <button 
              onClick={() => setActiveTab(1)}
              className={`py-1.5 text-center text-xs rounded-lg transition-all ${
                activeTab === 1 
                  ? 'font-semibold bg-[#FF6A3D] text-white shadow' 
                  : 'font-medium text-[#94A3B8] hover:text-white'
              }`}
            >
              Directory
            </button>
            <button 
              onClick={() => setActiveTab(2)}
              className={`py-1.5 text-center text-xs rounded-lg transition-all ${
                activeTab === 2 
                  ? 'font-semibold bg-[#FF6A3D] text-white shadow' 
                  : 'font-medium text-[#94A3B8] hover:text-white'
              }`}
            >
              Attend
            </button>
            <button 
              onClick={() => setActiveTab(3)}
              className={`py-1.5 text-center text-xs rounded-lg transition-all ${
                activeTab === 3 
                  ? 'font-semibold bg-[#FF6A3D] text-white shadow' 
                  : 'font-medium text-[#94A3B8] hover:text-white'
              }`}
            >
              Payroll
            </button>
          </div>

          {/* Tab Panel 0: Exec */}
          {activeTab === 0 && (
            <div className="flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl p-3.5 gap-3 shadow-md">
              <div className="flex items-center justify-between pb-2 border-b border-[#1F2C47]">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Executive Dashboard</span>
                <span className="text-[10px] font-mono text-[#38BDF8]">SYNCED {secondsAgo}s AGO</span>
              </div>
              <div className="bg-[#0E1524] border border-[#1F2C47] p-3 rounded-xl flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#94A3B8] uppercase font-medium">Annual Retention</span>
                  <div className="font-display text-xl font-bold text-white mt-0.5">96.8%</div>
                </div>
                <div className="text-right">
                  <span className="text-[11px] font-semibold text-[#38BDF8]">+3.2% vs Benchmark</span>
                  <span className="block text-[10px] text-[#94A3B8] mt-0.5">Top Quartile Tier</span>
                </div>
              </div>
              {/* Sparkline Graph */}
              <div className="bg-[#0E1524] border border-[#1F2C47] p-3 rounded-xl">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-[11px] text-[#94A3B8] uppercase font-medium">Salary Velocity ($k)</span>
                  <span className="text-xs font-bold text-[#FF6A3D]">$1,420k MTD</span>
                </div>
                <svg className="w-full h-16 text-[#FF6A3D]" fill="none" preserveAspectRatio="none" viewBox="0 0 300 70">
                  <path d="M0,58 L35,50 L75,54 L115,40 L155,44 L195,28 L235,32 L270,16 L300,10" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                  <path d="M0,58 L35,50 L75,54 L115,40 L155,44 L195,28 L235,32 L270,16 L300,10 L300,70 L0,70 Z" fill="rgba(255, 106, 61, 0.15)"></path>
                </svg>
              </div>
              {/* Personnel Distribution */}
              <div className="bg-[#0E1524] border border-[#1F2C47] p-3 rounded-xl flex flex-col gap-2.5">
                <span className="text-[11px] text-[#94A3B8] uppercase font-medium">Personnel Distribution</span>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-300">Engineering & Dev (210)</span>
                    <span className="text-[#FF6A3D] font-bold">43.5%</span>
                  </div>
                  <div className="w-full bg-[#1F2C47] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#FF6A3D] h-full w-[43.5%] rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between text-xs font-medium mb-1">
                    <span className="text-slate-300">Sales & Growth (145)</span>
                    <span className="text-[#38BDF8] font-bold">30.1%</span>
                  </div>
                  <div className="w-full bg-[#1F2C47] h-1.5 rounded-full overflow-hidden">
                    <div className="bg-[#38BDF8] h-full w-[30.1%] rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab Panel 1: Directory */}
          {activeTab === 1 && (
            <div className="flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl p-3.5 gap-2.5 shadow-md">
              <div className="flex items-center justify-between pb-2 border-b border-[#1F2C47]">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Personnel Directory</span>
                <span className="text-[10px] font-mono text-[#38BDF8]">482 MEMBERS</span>
              </div>
              <div className="bg-[#0E1524] border border-[#1F2C47] p-2.5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#FF6A3D] text-white font-bold text-xs flex items-center justify-center">SR</div>
                  <div>
                    <div className="text-xs font-semibold text-white">Sarah Rahman</div>
                    <div className="text-[10px] text-[#94A3B8]">Systems Architect • ENG</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 font-semibold">Onsite</span>
              </div>
              <div className="bg-[#0E1524] border border-[#1F2C47] p-2.5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-[#38BDF8] text-[#0B0F19] font-bold text-xs flex items-center justify-center">MV</div>
                  <div>
                    <div className="text-xs font-semibold text-white">Marcus Vance</div>
                    <div className="text-[10px] text-[#94A3B8]">Payroll Lead • FIN</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-[#38BDF8]/15 text-[#38BDF8] font-semibold">Remote</span>
              </div>
              <div className="bg-[#0E1524] border border-[#1F2C47] p-2.5 rounded-xl flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-indigo-500 text-white font-bold text-xs flex items-center justify-center">ER</div>
                  <div>
                    <div className="text-xs font-semibold text-white">Elena Rostova</div>
                    <div className="text-[10px] text-[#94A3B8]">Fullstack Dev Lead • ENG</div>
                  </div>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded bg-amber-500/15 text-amber-400 font-semibold">Leave Approved</span>
              </div>
            </div>
          )}

          {/* Tab Panel 2: Attend */}
          {activeTab === 2 && (
            <div className="flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl p-3.5 gap-2.5 shadow-md">
              <div className="flex items-center justify-between pb-2 border-b border-[#1F2C47]">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Attendance Radar</span>
                <span className="text-[10px] font-mono text-emerald-400">98.4% LIVE</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="bg-[#0E1524] border border-[#1F2C47] p-2.5 rounded-xl">
                  <span className="text-[10px] uppercase text-[#94A3B8]">Onsite Verified</span>
                  <div className="font-display text-lg font-bold text-white mt-1">392</div>
                </div>
                <div className="bg-[#0E1524] border border-[#1F2C47] p-2.5 rounded-xl">
                  <span className="text-[10px] uppercase text-[#94A3B8]">Remote Clocked</span>
                  <div className="font-display text-lg font-bold text-[#38BDF8] mt-1">82</div>
                </div>
              </div>
              <div className="bg-[#0E1524] border border-[#1F2C47] p-2.5 rounded-xl text-xs text-[#94A3B8]">
                Geofenced location tracking verified for 100% of global active mobile app log-ins.
              </div>
            </div>
          )}

          {/* Tab Panel 3: Payroll */}
          {activeTab === 3 && (
            <div className="flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl p-3.5 gap-2.5 shadow-md">
              <div className="flex items-center justify-between pb-2 border-b border-[#1F2C47]">
                <span className="text-xs font-semibold uppercase tracking-wider text-white">Payroll Reconciliation</span>
                <span className="text-[10px] font-mono text-[#FF6A3D]">OCT BATCH</span>
              </div>
              <div className="bg-[#0E1524] border border-[#1F2C47] p-3 rounded-xl flex flex-col gap-2">
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#94A3B8]">Total Gross Payout</span>
                  <span className="font-bold text-white">$1,248,500</span>
                </div>
                <div className="flex justify-between items-center text-xs">
                  <span className="text-[#94A3B8]">Tax Withheld</span>
                  <span className="font-bold text-[#FF6A3D]">$312,125</span>
                </div>
                <div className="flex justify-between items-center text-xs pt-1 border-t border-[#1F2C47]">
                  <span className="text-slate-200 font-semibold">Net Disbursal</span>
                  <span className="font-bold text-[#38BDF8]">$936,375</span>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* BUILT FOR MODERN TEAMS (Audience Fit) */}
        <section className="px-4 py-6 bg-[#0E1524] border-y border-[#1F2C47] flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#FF6A3D]"></span>
            <span className="text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">User Centric Architecture</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            Built for Modern Teams
          </h2>
          <div className="flex flex-col gap-2.5">
            {/* 1 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3.5 rounded-xl flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#FF6A3D]/15 text-[#FF6A3D] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[17px]">diversity_3</span>
                </div>
                <h3 className="text-sm font-semibold text-white">HR Teams</h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Automate repetitive clerical burden, eliminate payroll mistakes, and maintain statutory audit compliance.
              </p>
            </div>
            {/* 2 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3.5 rounded-xl flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center">
                  <span className="material-symbols-outlined text-[17px]">query_stats</span>
                </div>
                <h3 className="text-sm font-semibold text-white">Business Leaders & C-Suite</h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Gain immediate visibility into department cost velocity, turnover forecasts, and organizational retention indexes.
              </p>
            </div>
            {/* 3 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3.5 rounded-xl flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/15 text-indigo-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[17px]">supervisor_account</span>
                </div>
                <h3 className="text-sm font-semibold text-white">Department Managers</h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Approve leaves with one tap, oversee international timezones, and schedule review milestones seamlessly.
              </p>
            </div>
            {/* 4 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3.5 rounded-xl flex flex-col gap-1.5">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
                  <span className="material-symbols-outlined text-[17px]">account_circle</span>
                </div>
                <h3 className="text-sm font-semibold text-white">Staff & Employees</h3>
              </div>
              <p className="text-xs text-[#94A3B8] leading-relaxed">
                Self-serve autonomy: mobile download of encrypted pay slips, fast clock-ins, and direct goal submissions.
              </p>
            </div>
          </div>
        </section>

        {/* CORE PILLARS (Why Use QHR - 2x2 Grid) */}
        <section className="px-4 py-6 flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#FF6A3D]"></span>
            <span className="text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">Core Pillars</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            Why Use QHR?
          </h2>
          <div className="grid grid-cols-2 gap-2.5 w-full">
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col gap-1">
              <span className="font-display text-sm font-bold text-[#FF6A3D]">01 // Simplify</span>
              <p className="text-[11px] text-[#94A3B8] leading-snug">
                Automated calculations replace chaotic sheets & disjointed emails.
              </p>
            </div>
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col gap-1">
              <span className="font-display text-sm font-bold text-[#38BDF8]">02 // Centralize</span>
              <p className="text-[11px] text-[#94A3B8] leading-snug">
                Personnel data, contracts, and tax profiles in an encrypted cloud vault.
              </p>
            </div>
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col gap-1">
              <span className="font-display text-sm font-bold text-indigo-400">03 // Engage</span>
              <p className="text-[11px] text-[#94A3B8] leading-snug">
                Transparent review cycles build employee trust and retention.
              </p>
            </div>
            <div className="bg-[#131B2E] border border-[#1F2C47] p-3 rounded-xl flex flex-col gap-1">
              <span className="font-display text-sm font-bold text-emerald-400">04 // Scale</span>
              <p className="text-[11px] text-[#94A3B8] leading-snug">
                Engineered for high growth from 20 to 20,000+ staff across subsidiaries.
              </p>
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS (Accordion) */}
        <section className="px-4 py-6 bg-[#0E1524] border-y border-[#1F2C47] flex flex-col gap-3.5">
          <div className="flex items-center gap-2">
            <span className="w-4 h-0.5 bg-[#FF6A3D]"></span>
            <span className="text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">Knowledge Protocol</span>
          </div>
          <h2 className="font-display text-xl font-bold text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col gap-2">
            {/* FAQ 1 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] rounded-xl overflow-hidden">
              <button 
                className="w-full p-3 text-left flex items-center justify-between gap-2 text-sm font-semibold text-white" 
                onClick={() => toggleFaq(1)}
              >
                <span>What is QHR?</span>
                <span 
                  className={`material-symbols-outlined text-[#FF6A3D] text-[20px] transition-transform duration-200 ${
                    openFaqs[1] ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaqs[1] && (
                <div className="px-3 pb-3 text-xs text-[#94A3B8] leading-relaxed border-t border-[#1F2C47]/50 pt-2 animate-in fade-in duration-150">
                  QHR is an enterprise-grade HR Management platform designed by Qurinom Solutions. It unifies core HR operations, payroll processing, biometric attendance, and performance appraisals into one mobile-ready interface.
                </div>
              )}
            </div>

            {/* FAQ 2 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] rounded-xl overflow-hidden">
              <button 
                className="w-full p-3 text-left flex items-center justify-between gap-2 text-sm font-semibold text-white" 
                onClick={() => toggleFaq(2)}
              >
                <span>What HR processes does QHR support?</span>
                <span 
                  className={`material-symbols-outlined text-[#FF6A3D] text-[20px] transition-transform duration-200 ${
                    openFaqs[2] ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaqs[2] && (
                <div className="px-3 pb-3 text-xs text-[#94A3B8] leading-relaxed border-t border-[#1F2C47]/50 pt-2 animate-in fade-in duration-150">
                  QHR supports end-to-end workforce operations: recruitment onboarding, dynamic shift scheduling, leave quota balances, automatic statutory tax deductions, pay slip distribution, and 360-degree appraisal cycles.
                </div>
              )}
            </div>

            {/* FAQ 3 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] rounded-xl overflow-hidden">
              <button 
                className="w-full p-3 text-left flex items-center justify-between gap-2 text-sm font-semibold text-white" 
                onClick={() => toggleFaq(3)}
              >
                <span>Who can use QHR?</span>
                <span 
                  className={`material-symbols-outlined text-[#FF6A3D] text-[20px] transition-transform duration-200 ${
                    openFaqs[3] ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaqs[3] && (
                <div className="px-3 pb-3 text-xs text-[#94A3B8] leading-relaxed border-t border-[#1F2C47]/50 pt-2 animate-in fade-in duration-150">
                  QHR is engineered for organizations of all scales: rapidly expanding startups, SMEs requiring compliance automation, and distributed global enterprises managing thousands of personnel across legal jurisdictions.
                </div>
              )}
            </div>

            {/* FAQ 4 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] rounded-xl overflow-hidden">
              <button 
                className="w-full p-3 text-left flex items-center justify-between gap-2 text-sm font-semibold text-white" 
                onClick={() => toggleFaq(4)}
              >
                <span>Does QHR support employee self-service?</span>
                <span 
                  className={`material-symbols-outlined text-[#FF6A3D] text-[20px] transition-transform duration-200 ${
                    openFaqs[4] ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaqs[4] && (
                <div className="px-3 pb-3 text-xs text-[#94A3B8] leading-relaxed border-t border-[#1F2C47]/50 pt-2 animate-in fade-in duration-150">
                  Yes. Staff members receive access to their personalized mobile portal to file leaves, download signed tax certificates, check work schedules, clock in via geofenced pins, and submit appraisal goals.
                </div>
              )}
            </div>

            {/* FAQ 5 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] rounded-xl overflow-hidden">
              <button 
                className="w-full p-3 text-left flex items-center justify-between gap-2 text-sm font-semibold text-white" 
                onClick={() => toggleFaq(5)}
              >
                <span>Does QHR support attendance & leave?</span>
                <span 
                  className={`material-symbols-outlined text-[#FF6A3D] text-[20px] transition-transform duration-200 ${
                    openFaqs[5] ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaqs[5] && (
                <div className="px-3 pb-3 text-xs text-[#94A3B8] leading-relaxed border-t border-[#1F2C47]/50 pt-2 animate-in fade-in duration-150">
                  Completely. It supports hardware biometric terminal integrations, QR mobile checks, GPS fencing, overtime tracking, and multi-tier approval workflows customizable per department policy.
                </div>
              )}
            </div>

            {/* FAQ 6 */}
            <div className="bg-[#131B2E] border border-[#1F2C47] rounded-xl overflow-hidden">
              <button 
                className="w-full p-3 text-left flex items-center justify-between gap-2 text-sm font-semibold text-white" 
                onClick={() => toggleFaq(6)}
              >
                <span>How can I request a live demo?</span>
                <span 
                  className={`material-symbols-outlined text-[#FF6A3D] text-[20px] transition-transform duration-200 ${
                    openFaqs[6] ? 'rotate-180' : 'rotate-0'
                  }`}
                >
                  expand_more
                </span>
              </button>
              {openFaqs[6] && (
                <div className="px-3 pb-3 text-xs text-[#94A3B8] leading-relaxed border-t border-[#1F2C47]/50 pt-2 animate-in fade-in duration-150">
                  Tap the "Book a Demo" button at any time. Our implementation architects will configure a personalized sandbox instance tailored to your organization's exact headcount and compliance requirements.
                </div>
              )}
            </div>
          </div>
        </section>

        {/* FINAL CONVERSION BANNER */}
        <section className="px-4 py-6">
          <div className="bg-[#131B2E] border border-[#1F2C47] p-4 rounded-2xl flex flex-col gap-3 shadow-xl">
            <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-[#0E1524] border border-[#1F2C47] text-[10px] font-semibold text-[#FF6A3D] uppercase tracking-wider self-start">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]"></span>
              Zero Latency Deployment
            </div>
            <div>
              <h2 className="font-display text-xl font-bold text-white tracking-tight leading-tight">
                Ready to Simplify HR Management?
              </h2>
              <p className="text-xs text-[#94A3B8] mt-1 leading-relaxed">
                Join over 50,000+ professionals supported by QHR's high-performance human resources architecture.
              </p>
            </div>
            <div className="flex flex-col gap-2 pt-1">
              <button 
                onClick={() => onOpenDemo('qhr-footer')}
                className="w-full h-12 rounded-xl bg-[#FF6A3D] text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-lg shadow-[#FF6A3D]/20 active:scale-[0.98] transition-all"
              >
                <span>Book a Live Demo</span>
                <span className="material-symbols-outlined text-[18px]">calendar_month</span>
              </button>
              <button 
                onClick={() => onOpenDemo('qhr-get-started')}
                className="w-full h-11 rounded-xl bg-[#0E1524] border border-[#1F2C47] text-white font-medium text-sm flex items-center justify-center gap-1.5 active:scale-[0.98] transition-all"
              >
                <span>Get Started</span>
                <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
              </button>
            </div>
            <div className="flex items-center justify-between gap-1 pt-2 border-t border-[#1F2C47] text-[10px] text-[#94A3B8]">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#38BDF8] text-[13px]">verified</span>
                <span>14-Day Free Trial</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[#FF6A3D] text-[13px]">lock_open</span>
                <span>Zero Lock-In</span>
              </div>
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-emerald-400 text-[13px]">upload_file</span>
                <span>Instant Import</span>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};
