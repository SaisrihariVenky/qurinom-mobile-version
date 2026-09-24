import React from 'react';
import { TabType } from '../../types';
import { BRAND_LOGO } from '../../data/products';

interface CompanyPageProps {
  onSelectTab: (tab: TabType) => void;
  onOpenDemo: (productId?: string) => void;
  onOpenMenu: () => void;
}

export const CompanyPage: React.FC<CompanyPageProps> = ({
  onSelectTab,
  onOpenDemo,
  onOpenMenu
}) => {
  return (
    <div className="bg-[#0B0F19] text-[#F8FAFC] flex flex-col min-h-screen w-full max-w-full overflow-x-hidden antialiased">
      {/* Top Header */}
      <header className="fixed top-0 inset-x-0 z-50 pt-safe bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/10 shadow-sm transition-all">
        <div className="h-16 px-4 flex items-center justify-between gap-3 max-w-md mx-auto w-full">
          <button onClick={() => onSelectTab('overview')} className="flex items-center text-left">
            <img src={BRAND_LOGO} alt="Qurinom Solutions" className="h-8 w-auto object-contain" />
          </button>
          <div className="flex items-center gap-2.5">
            <button
              onClick={() => onOpenDemo('company')}
              className="min-h-[36px] px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 text-white font-semibold text-[12px] tracking-wide flex items-center gap-1.5 shadow-glow-primary border border-white/10 active:scale-95 transition-transform"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse" />
              <span>Demo</span>
            </button>
            <button 
              onClick={onOpenMenu}
              className="w-9 h-9 rounded-full bg-[#1A2338]/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white"
            >
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex flex-col w-full max-w-md mx-auto pt-20 pb-28 px-4 gap-6 overflow-x-hidden">
        {/* Header */}
        <section className="flex flex-col gap-2 pt-1">
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#1A2338]/90 border border-[#FF6A3D]/30">
            <span className="w-2 h-2 rounded-full bg-[#FF6A3D] animate-ping" />
            <span className="font-mono text-[11px] font-semibold text-orange-400 tracking-wider uppercase">
              QURINOM SOLUTIONS PVT. LTD.
            </span>
          </div>
          <h1 className="text-[28px] font-extrabold text-white leading-tight mt-1">
            Technology Products Built to <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Empower Global Teams</span>
          </h1>
          <p className="text-xs text-slate-300 leading-relaxed">
            Qurinom Solutions is a product innovation powerhouse architecting modern cloud ecosystems, workforce automation tools, and media infrastructure.
          </p>
        </section>

        {/* Global Presence */}
        <section className="p-4 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-3">
          <div className="flex items-center justify-between border-b border-[#1F2C47] pb-2">
            <span className="font-mono text-[11px] font-bold text-white uppercase tracking-wider">Engineering Centers</span>
            <span className="font-mono text-[10px] text-[#38BDF8]">GLOBAL NODES</span>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            <div className="p-2.5 rounded-xl bg-[#0E1524] border border-[#1F2C47]">
              <span className="text-[10px] font-mono text-[#FF6A3D] block font-semibold">INDIA HQ</span>
              <div className="font-bold text-white mt-1">Hyderabad & Bengaluru</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Core Product Lab</div>
            </div>
            <div className="p-2.5 rounded-xl bg-[#0E1524] border border-[#1F2C47]">
              <span className="text-[10px] font-mono text-[#38BDF8] block font-semibold">GLOBAL AP</span>
              <div className="font-bold text-white mt-1">Singapore</div>
              <div className="text-[11px] text-slate-400 mt-0.5">Regional Gateway</div>
            </div>
          </div>
        </section>

        {/* Operating Pillars */}
        <section className="flex flex-col gap-2.5">
          <span className="font-mono text-[11px] text-slate-400 uppercase tracking-wider">Our Core Tenets</span>
          <div className="p-3.5 rounded-xl bg-[#131B2E] border border-[#1F2C47] flex items-start gap-3">
            <span className="font-mono text-xs font-bold text-orange-400 bg-[#0E1524] p-1.5 rounded-lg border border-[#1F2C47]">01</span>
            <div>
              <h4 className="text-xs font-bold text-white">Pragmatic Over Hyped</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">We engineer software that runs smoothly in mission-critical commercial workloads day in, day out.</p>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#131B2E] border border-[#1F2C47] flex items-start gap-3">
            <span className="font-mono text-xs font-bold text-[#38BDF8] bg-[#0E1524] p-1.5 rounded-lg border border-[#1F2C47]">02</span>
            <div>
              <h4 className="text-xs font-bold text-white">Sub-100ms Latency SLA</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">From biometric punches to multi-tier payroll calculations, our architectures prioritize zero perceptible lag.</p>
            </div>
          </div>
          <div className="p-3.5 rounded-xl bg-[#131B2E] border border-[#1F2C47] flex items-start gap-3">
            <span className="font-mono text-xs font-bold text-emerald-400 bg-[#0E1524] p-1.5 rounded-lg border border-[#1F2C47]">03</span>
            <div>
              <h4 className="text-xs font-bold text-white">Institutional Grade Security</h4>
              <p className="text-[11px] text-slate-400 mt-0.5">Rigorous SOC-2 and ISO compliance ensure enterprise data remains strictly private and auditable.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-5 rounded-2xl bg-[#0E1524] border border-[#1F2C47] text-center flex flex-col items-center gap-3">
          <h3 className="text-base font-bold text-white">Ready to Partner with Qurinom?</h3>
          <p className="text-xs text-slate-300">
            Join hundreds of forward-thinking teams operating on our proprietary platforms.
          </p>
          <button
            onClick={() => onOpenDemo('company-partnership')}
            className="w-full h-11 rounded-xl bg-[#FF6A3D] text-white font-semibold text-xs flex items-center justify-center gap-2 active:scale-95 transition-transform"
          >
            <span>Get in Touch with Founders</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </section>
      </main>
    </div>
  );
};
