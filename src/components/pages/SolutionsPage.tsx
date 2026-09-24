import React from 'react';
import { TabType } from '../../types';
import { BRAND_LOGO } from '../../data/products';

interface SolutionsPageProps {
  onSelectTab: (tab: TabType) => void;
  onOpenDemo: (productId?: string) => void;
  onOpenMenu: () => void;
}

export const SolutionsPage: React.FC<SolutionsPageProps> = ({
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
              onClick={() => onOpenDemo('solutions')}
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
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#1A2338]/90 border border-[#38BDF8]/30">
            <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
            <span className="font-mono text-[11px] font-semibold text-[#38BDF8] tracking-wider uppercase">
              ENTERPRISE ARCHITECTURE
            </span>
          </div>
          <h1 className="text-[28px] font-extrabold text-white leading-tight mt-1">
            Enterprise Solutions & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-amber-300">Custom Engineering</span>
          </h1>
          <p className="text-xs text-slate-300 leading-relaxed">
            Battle-tested technical frameworks engineered for Fortune 500 enterprises, high-growth startups, and sovereign data systems.
          </p>
        </section>

        {/* 4 Pillars */}
        <section className="flex flex-col gap-3.5">
          <div className="p-4 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#FF6A3D]/15 text-[#FF6A3D] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">hub</span>
            </div>
            <h3 className="text-base font-bold text-white">Workforce Operations Matrix</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Consolidate multi-subsidiary attendance, biometric clocks, and automated statutory tax reconciliation into one tamper-proof distributed database.
            </p>
            <div className="mt-1 flex items-center gap-2 text-[11px] font-mono text-[#38BDF8]">
              <span className="material-symbols-outlined text-[14px]">check</span>
              <span>Direct Workday / SAP S/4HANA bridge</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-2">
            <div className="w-9 h-9 rounded-xl bg-[#38BDF8]/15 text-[#38BDF8] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">storefront</span>
            </div>
            <h3 className="text-base font-bold text-white">Hyperlocal Retail & Commerce Mesh</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Connect in-store physical inventories with sub-second live video feeds, localized consumer discovery, and POS cloud synchronizers.
            </p>
            <div className="mt-1 flex items-center gap-2 text-[11px] font-mono text-[#38BDF8]">
              <span className="material-symbols-outlined text-[14px]">check</span>
              <span>1.2M+ active merchant node throughput</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-2">
            <div className="w-9 h-9 rounded-xl bg-purple-500/15 text-purple-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">videocam</span>
            </div>
            <h3 className="text-base font-bold text-white">Media & High-Frame Video Streaming</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              Ultra low-latency 60FPS mobile video ingestion, automated edge transcoding, and cryptographic micro-royalty attribution.
            </p>
            <div className="mt-1 flex items-center gap-2 text-[11px] font-mono text-[#38BDF8]">
              <span className="material-symbols-outlined text-[14px]">check</span>
              <span>Zero-buffer edge CDN deployment</span>
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-2">
            <div className="w-9 h-9 rounded-xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">security</span>
            </div>
            <h3 className="text-base font-bold text-white">Zero-Trust Security & Compliance Vault</h3>
            <p className="text-xs text-slate-400 leading-relaxed">
              SOC2 Type II, ISO 27001, and GDPR compliance built into every telemetry ingestion pipeline with end-to-end tokenized access control.
            </p>
            <div className="mt-1 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
              <span className="material-symbols-outlined text-[14px]">verified</span>
              <span>Continuous cryptographic audit trail</span>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="p-5 rounded-2xl bg-gradient-to-b from-[#182440] to-[#101729] border border-[#1F2C47] flex flex-col items-center text-center gap-3">
          <h3 className="text-lg font-bold text-white">Discuss an Enterprise Project</h3>
          <p className="text-xs text-slate-300">
            Work directly with our system architects to build customized microservices and cloud infrastructures.
          </p>
          <button
            onClick={() => onOpenDemo('custom-enterprise')}
            className="w-full h-11 rounded-xl bg-[#FF6A3D] text-white font-semibold text-xs flex items-center justify-center gap-2 shadow-glow-primary active:scale-95 transition-transform"
          >
            <span>Consult Solutions Architect</span>
            <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
          </button>
        </section>
      </main>
    </div>
  );
};
