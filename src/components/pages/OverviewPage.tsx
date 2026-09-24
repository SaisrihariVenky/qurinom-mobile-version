import React, { useState, useEffect } from 'react';
import { TabType, ProductItem } from '../../types';
import { PRODUCTS, BRAND_LOGO } from '../../data/products';

interface OverviewPageProps {
  onSelectTab: (tab: TabType) => void;
  onOpenDemo: (productId?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenMenu: () => void;
}

export const OverviewPage: React.FC<OverviewPageProps> = ({
  onSelectTab,
  onOpenDemo,
  onSelectProduct,
  onOpenMenu
}) => {
  // Real-time telemetry pulse & throughput fluctuation
  const [throughput, setThroughput] = useState(1240);
  const [activeStaff, setActiveStaff] = useState(482);
  const [pointsOffset, setPointsOffset] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      // gentle realistic jitter
      setThroughput(prev => {
        const delta = Math.floor(Math.random() * 9) - 4;
        const nextVal = prev + delta;
        return nextVal < 1220 ? 1225 : nextVal > 1260 ? 1255 : nextVal;
      });
      setPointsOffset(prev => (prev + 1) % 10);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-[#0B0F19] text-[#F8FAFC] flex flex-col min-h-screen w-full max-w-full overflow-x-hidden antialiased">
      {/* STICKY TOP HEADER */}
      <header className="fixed top-0 inset-x-0 z-50 pt-safe bg-[#0B0F19]/90 backdrop-blur-md border-b border-white/10 shadow-sm transition-all">
        <div className="h-16 px-4 flex items-center justify-between gap-3 max-w-md mx-auto w-full">
          {/* Brand Logo */}
          <button 
            className="flex items-center min-w-0 transition-transform active:scale-95 text-left" 
            onClick={() => onSelectTab('overview')} 
            aria-label="Qurinom Solutions Home"
          >
            <img 
              src={BRAND_LOGO} 
              alt="Qurinom Solutions" 
              className="h-8 w-auto object-contain" 
            />
          </button>
          {/* Header Action Controls */}
          <div className="flex items-center gap-2.5 shrink-0">
            <button 
              onClick={() => onOpenDemo('overview')}
              className="min-h-[36px] px-3.5 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-400 hover:from-orange-500 hover:to-amber-300 text-white font-semibold text-[12px] tracking-wide flex items-center gap-1.5 shadow-glow-primary border border-white/10 transition-transform active:scale-95"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
              </span>
              <span>Demo</span>
            </button>
            <button 
              onClick={onOpenMenu}
              aria-label="Open Navigation" 
              className="w-9 h-9 rounded-full bg-[#1A2338]/90 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white transition-all active:scale-95 shadow-sm" 
              type="button"
            >
              <span className="material-symbols-outlined text-[20px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* MAIN VIEWPORT CONTENT (Mobile 390px Optimized Container) */}
      <main className="flex-1 flex flex-col w-full max-w-md mx-auto pt-20 pb-24 px-4 gap-7 overflow-x-hidden">
        {/* 1. HERO SECTION */}
        <section className="flex flex-col gap-4 pt-1">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1 rounded-full bg-[#1A2338]/90 border border-orange-500/30 backdrop-blur-md shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6A3D] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6A3D]"></span>
            </span>
            <span className="font-mono text-[11px] font-semibold text-orange-400 tracking-wider uppercase">PRODUCT INNOVATION // V4.2</span>
          </div>
          {/* Headline & Subtitle */}
          <div className="flex flex-col gap-3 pt-0.5">
            <h1 className="text-[30px] leading-[36px] font-extrabold tracking-tight text-white">
              Technology Products Built to <span className="bg-gradient-to-r from-orange-400 to-amber-300 text-transparent bg-clip-text">Solve Real-World Problems</span>
            </h1>
            <p className="text-[14px] leading-relaxed text-slate-300 font-normal">
              Innovative digital platforms engineered to simplify enterprise workflows, accelerate velocity, and eliminate operational friction at scale.
            </p>
          </div>
          {/* Action CTAs */}
          <div className="flex flex-col gap-2.5 w-full pt-1">
            <button 
              onClick={() => onSelectTab('products')}
              className="w-full min-h-[48px] rounded-xl bg-[#FF6A3D] hover:bg-[#FF5420] text-white font-semibold text-[14px] flex items-center justify-center gap-2 shadow-glow-primary transition-all active:scale-[0.98]"
            >
              <span>Explore Products</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button 
              onClick={() => onOpenDemo('overview')}
              className="w-full min-h-[48px] rounded-xl bg-[#131B2E] hover:bg-[#1E2942] text-slate-200 border border-[#1F2C47] font-medium text-[14px] flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <span className="material-symbols-outlined text-[18px] text-[#38BDF8]">calendar_today</span>
              <span>Request a Demo</span>
            </button>
          </div>
          {/* Live Telemetry Card */}
          <div className="w-full rounded-2xl bg-[#131B2E] border border-[#1F2C47] p-4 shadow-card-subtle flex flex-col gap-3 relative overflow-hidden">
            {/* Ambient subtle glow behind sparkline */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center justify-between border-b border-[#1F2C47]/70 pb-2.5">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse"></span>
                <span className="font-mono text-[11px] font-semibold uppercase text-slate-200 tracking-wider">Live Telemetry Mesh</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] border border-[#38BDF8]/20 font-medium">QHR-CORE: SYNCED</span>
            </div>
            {/* Metric Grid */}
            <div className="grid grid-cols-2 gap-2.5">
              <div className="p-2.5 rounded-xl bg-[#0F1626] border border-[#1F2C47]/60 flex flex-col">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Active Staff</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[20px] font-bold text-white tracking-tight">{activeStaff}</span>
                  <span className="text-[11px] text-[#38BDF8] font-mono">/ 500 node</span>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-[#0F1626] border border-[#1F2C47]/60 flex flex-col">
                <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider">Attendance SLA</span>
                <div className="flex items-baseline gap-1 mt-0.5">
                  <span className="text-[20px] font-bold text-orange-400 tracking-tight">98.4%</span>
                  <span className="text-[11px] text-emerald-400 font-mono">+0.6%</span>
                </div>
              </div>
            </div>
            {/* Inline SVG Sparkline strictly responsive to container width */}
            <div className="w-full pt-1">
              <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-1">
                <span>Throughput Realtime</span>
                <span className="text-[#38BDF8] font-semibold">{throughput.toLocaleString()} req/s</span>
              </div>
              <div className="w-full h-12 bg-[#0B0F19] rounded-lg p-1.5 border border-[#1F2C47]/50 flex items-center">
                <svg className="w-full h-full" fill="none" preserveAspectRatio="none" viewBox="0 0 300 40">
                  <path 
                    d={`M0,32 C20,${30 - (pointsOffset % 4)} 40,36 60,20 C80,${8 + (pointsOffset % 3)} 100,28 120,18 C140,8 160,22 180,${12 - (pointsOffset % 4)} 200,4 220,16 240,6 C260,2 280,14 300,10`} 
                    stroke="#FF6A3D" 
                    strokeLinecap="round" 
                    strokeWidth="2.2" 
                    vectorEffect="non-scaling-stroke"
                  />
                  <path 
                    d={`M0,32 C20,${30 - (pointsOffset % 4)} 40,36 60,20 C80,${8 + (pointsOffset % 3)} 100,28 120,18 C140,8 160,22 180,${12 - (pointsOffset % 4)} 200,4 220,16 240,6 C260,2 280,14 300,10 L300,40 L0,40 Z`} 
                    fill="url(#sparkGlow)" 
                    opacity="0.25"
                  />
                  <defs>
                    <linearGradient id="sparkGlow" x1="0" x2="0" y1="0" y2="1">
                      <stop offset="0%" stopColor="#FF6A3D" />
                      <stop offset="100%" stopColor="#FF6A3D" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
            </div>
            {/* Sub status badge */}
            <div className="flex items-center justify-between px-2.5 py-1.5 rounded-lg bg-[#0F1626] border border-[#1F2C47]/50 text-[11px]">
              <div className="flex items-center gap-1.5 text-slate-300">
                <span className="material-symbols-outlined text-[15px] text-[#38BDF8]">videocam</span>
                <span className="truncate">StoreFlaunt Node: +1.2k stream views</span>
              </div>
              <span className="font-mono font-semibold text-emerald-400">READY</span>
            </div>
          </div>
          {/* Quick Metrics Row */}
          <div className="grid grid-cols-3 gap-2 pt-1">
            <div className="rounded-xl bg-[#131B2E] border border-[#1F2C47] p-2.5 text-center">
              <div className="text-[18px] font-bold text-orange-400 leading-none">5+</div>
              <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Flagships</div>
            </div>
            <div className="rounded-xl bg-[#131B2E] border border-[#1F2C47] p-2.5 text-center">
              <div className="text-[18px] font-bold text-[#38BDF8] leading-none">100+</div>
              <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Innovators</div>
            </div>
            <div className="rounded-xl bg-[#131B2E] border border-[#1F2C47] p-2.5 text-center">
              <div className="text-[18px] font-bold text-emerald-400 leading-none">99.9%</div>
              <div className="text-[10px] font-mono text-slate-400 mt-1 uppercase tracking-wider">Core SLA</div>
            </div>
          </div>
        </section>

        {/* 2. CORE CREED SECTION */}
        <section className="flex flex-col gap-3.5 pt-2">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] font-semibold text-[#38BDF8] uppercase tracking-widest">ENGINEERING CREED</span>
            <h2 className="text-[24px] leading-tight font-extrabold text-white tracking-tight">Built Around Products. Driven by Innovation.</h2>
          </div>
          <div className="flex flex-col gap-2.5">
            {/* Creed 1 */}
            <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#1D273F] border border-[#1F2C47] flex items-center justify-center shrink-0 text-orange-400 shadow-sm">
                <span className="material-symbols-outlined text-[22px]">neurology</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-white leading-snug">AI-Powered Systems</h3>
                <p className="text-[13px] text-slate-300 leading-relaxed">Contextual models turning unstructured workforce, video, and geo-data into operational assets.</p>
              </div>
            </div>
            {/* Creed 2 */}
            <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#1D273F] border border-[#1F2C47] flex items-center justify-center shrink-0 text-[#38BDF8] shadow-sm">
                <span className="material-symbols-outlined text-[22px]">hub</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-white leading-snug">Cross-Platform Mesh</h3>
                <p className="text-[13px] text-slate-300 leading-relaxed">Zero-friction API interop ensuring seamless synchronization across mobile native, web, and edge.</p>
              </div>
            </div>
            {/* Creed 3 */}
            <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex items-start gap-3 shadow-sm">
              <div className="w-10 h-10 rounded-xl bg-[#1D273F] border border-[#1F2C47] flex items-center justify-center shrink-0 text-emerald-400 shadow-sm">
                <span className="material-symbols-outlined text-[22px]">bolt</span>
              </div>
              <div className="flex flex-col gap-1 min-w-0">
                <h3 className="text-[15px] font-semibold text-white leading-snug">Radical Innovation</h3>
                <p className="text-[13px] text-slate-300 leading-relaxed">Reactive architectures custom-tailored for next-generation user flows and sub-100ms response cycles.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 3. FEATURED PRODUCTS DIRECTORY (All 5 Flagships) */}
        <section className="flex flex-col gap-4 pt-2" id="products">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#FF6A3D]"></span>
              <span className="font-mono text-[11px] font-semibold text-orange-400 uppercase tracking-widest">PROPRIETARY FLEET</span>
            </div>
            <h2 className="text-[24px] leading-tight font-extrabold text-white tracking-tight">Explore Our Products</h2>
            <p className="text-[13px] text-slate-400 leading-normal">High-performance suite designed for workforce orchestration, commerce, video intelligence, and friction-free engagement.</p>
          </div>
          
          <div className="flex flex-col gap-4">
            {/* Product 1: QHR Platform */}
            <article className="rounded-2xl bg-[#131B2E] border border-[#1F2C47] overflow-hidden shadow-card-subtle flex flex-col">
              <div className="relative w-full h-44 bg-[#0F1626]">
                <img 
                  alt="QHR Platform biometric mobile dashboard" 
                  className="w-full h-full object-cover" 
                  src={PRODUCTS[0].heroImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-black/40"></div>
                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-orange-500/90 text-white font-mono text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md">HR ENGINE // FLAGSHIP</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-slate-300 font-mono text-[10px] border border-white/10 backdrop-blur-md">V4.2 PROD</span>
                </div>
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 border border-white/10 backdrop-blur-md text-[11px] text-emerald-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  Auto-Payroll Synced
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="text-[17px] font-bold text-white tracking-tight">QHR Platform</h3>
                  <p className="text-[13px] text-slate-300 mt-1 leading-relaxed">Enterprise workforce operations, precise geo-fenced attendance, automated payroll, and instant compliance reporting.</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Biometric Sync</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Payroll Automation</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#38BDF8]/20 text-[11px] font-mono text-[#38BDF8]">Geo-Tracking</span>
                </div>
                <button 
                  onClick={() => onSelectTab('qhr')}
                  className="w-full min-h-[44px] rounded-xl bg-[#FF6A3D] hover:bg-[#FF5420] text-white text-[13px] font-semibold flex items-center justify-center gap-2 mt-1 shadow-glow-primary transition-colors active:scale-98"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Product 2: StoreFlaunt */}
            <article className="rounded-2xl bg-[#131B2E] border border-[#1F2C47] overflow-hidden shadow-card-subtle flex flex-col">
              <div className="relative w-full h-44 bg-[#0F1626]">
                <img 
                  alt="StoreFlaunt mobile live shopping app" 
                  className="w-full h-full object-cover" 
                  src={PRODUCTS[1].heroImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-black/40"></div>
                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-cyan-500/90 text-slate-950 font-mono text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">HYPERLOCAL COMMERCE</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-slate-300 font-mono text-[10px] border border-white/10 backdrop-blur-md">V2.8 PROD</span>
                </div>
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 border border-white/10 backdrop-blur-md text-[11px] text-cyan-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400"></span>
                  3.8km Nearby Merchant Hub
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="text-[17px] font-bold text-white tracking-tight">StoreFlaunt Commerce</h3>
                  <p className="text-[13px] text-slate-300 mt-1 leading-relaxed">Bridging physical store inventory with high-conversion live social video, instant dispatch, and local customer discovery.</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Nearby Retail Feed</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Live Video Buy</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#38BDF8]/20 text-[11px] font-mono text-[#38BDF8]">Order Telemetry</span>
                </div>
                <button 
                  onClick={() => onSelectProduct(PRODUCTS[1])}
                  className="w-full min-h-[44px] rounded-xl bg-[#1E2942] hover:bg-[#233150] text-slate-200 border border-[#1F2C47] text-[13px] font-semibold flex items-center justify-center gap-2 mt-1 transition-colors active:scale-98"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[16px] text-[#38BDF8]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Product 3: WeeVids */}
            <article className="rounded-2xl bg-[#131B2E] border border-[#1F2C47] overflow-hidden shadow-card-subtle flex flex-col">
              <div className="relative w-full h-44 bg-[#0F1626]">
                <img 
                  alt="WeeVids creator video studio interface" 
                  className="w-full h-full object-cover" 
                  src={PRODUCTS[2].heroImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-black/40"></div>
                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-violet-500/90 text-white font-mono text-[10px] font-semibold tracking-wider uppercase backdrop-blur-md">CREATOR INFRASTRUCTURE</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-slate-300 font-mono text-[10px] border border-white/10 backdrop-blur-md">V3.1 PROD</span>
                </div>
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 border border-white/10 backdrop-blur-md text-[11px] text-violet-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-violet-400"></span>
                  Render Pipeline: 60 FPS
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="text-[17px] font-bold text-white tracking-tight">WeeVids Studio</h3>
                  <p className="text-[13px] text-slate-300 mt-1 leading-relaxed">Social video creation and distribution hub featuring built-in micro-endorsements, royalty tracking, and cloud rendering.</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Video Engine</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Skill Endorsements</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#38BDF8]/20 text-[11px] font-mono text-[#38BDF8]">Cloud Render</span>
                </div>
                <button 
                  onClick={() => onSelectProduct(PRODUCTS[2])}
                  className="w-full min-h-[44px] rounded-xl bg-[#1E2942] hover:bg-[#233150] text-slate-200 border border-[#1F2C47] text-[13px] font-semibold flex items-center justify-center gap-2 mt-1 transition-colors active:scale-98"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[16px] text-[#38BDF8]">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Product 4: My Holy Trip */}
            <article className="rounded-2xl bg-[#131B2E] border border-[#1F2C47] overflow-hidden shadow-card-subtle flex flex-col">
              <div className="relative w-full h-44 bg-[#0F1626]">
                <img 
                  alt="My Holy Trip spiritual pilgrimage telemetry" 
                  className="w-full h-full object-cover" 
                  src={PRODUCTS[3].heroImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-black/40"></div>
                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 font-mono text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">HERITAGE TELEMETRY</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-slate-300 font-mono text-[10px] border border-white/10 backdrop-blur-md">V1.9 PROD</span>
                </div>
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 border border-white/10 backdrop-blur-md text-[11px] text-amber-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400"></span>
                  Offline Sanctuary Maps Active
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="text-[17px] font-bold text-white tracking-tight">My Holy Trip</h3>
                  <p className="text-[13px] text-slate-300 mt-1 leading-relaxed">Spiritual tourism architecture integrating real-time temple schedules, sacred route mapping, and pilgrim transit safety.</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Sacred Network</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Route Mapping</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-orange-500/20 text-[11px] font-mono text-orange-400">Transit Sync</span>
                </div>
                <button 
                  onClick={() => onSelectProduct(PRODUCTS[3])}
                  className="w-full min-h-[44px] rounded-xl bg-[#1E2942] hover:bg-[#233150] text-slate-200 border border-[#1F2C47] text-[13px] font-semibold flex items-center justify-center gap-2 mt-1 transition-colors active:scale-98"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[16px] text-orange-400">arrow_forward</span>
                </button>
              </div>
            </article>

            {/* Product 5: Snapp Buddy */}
            <article className="rounded-2xl bg-[#131B2E] border border-[#1F2C47] overflow-hidden shadow-card-subtle flex flex-col">
              <div className="relative w-full h-44 bg-[#0F1626]">
                <img 
                  alt="Snapp Buddy instant event facial recognition photo sharing" 
                  className="w-full h-full object-cover" 
                  src={PRODUCTS[4].heroImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-black/40"></div>
                <div className="absolute top-3 inset-x-3 flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-full bg-teal-400/90 text-slate-950 font-mono text-[10px] font-bold tracking-wider uppercase backdrop-blur-md">AI EVENT OPTICS</span>
                  <span className="px-2 py-0.5 rounded bg-black/60 text-slate-300 font-mono text-[10px] border border-white/10 backdrop-blur-md">V2.4 PROD</span>
                </div>
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-black/75 border border-white/10 backdrop-blur-md text-[11px] text-teal-300 font-mono">
                  <span className="w-1.5 h-1.5 rounded-full bg-teal-400"></span>
                  Zero-Install Instant Mesh
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div>
                  <h3 className="text-[17px] font-bold text-white tracking-tight">Snapp Buddy</h3>
                  <p className="text-[13px] text-slate-300 mt-1 leading-relaxed">Zero-friction event photo distribution. Guests scan once to receive AI-filtered high-resolution pictures delivered instantly to mobile.</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Zero-App Cloud</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#1F2C47] text-[11px] font-mono text-slate-300">Facial Tagging</span>
                  <span className="px-2.5 py-1 rounded-md bg-[#1B253D] border border-[#38BDF8]/20 text-[11px] font-mono text-[#38BDF8]">Instant QR Sync</span>
                </div>
                <button 
                  onClick={() => onSelectProduct(PRODUCTS[4])}
                  className="w-full min-h-[44px] rounded-xl bg-[#1E2942] hover:bg-[#233150] text-slate-200 border border-[#1F2C47] text-[13px] font-semibold flex items-center justify-center gap-2 mt-1 transition-colors active:scale-98"
                >
                  <span>View Details</span>
                  <span className="material-symbols-outlined text-[16px] text-[#38BDF8]">arrow_forward</span>
                </button>
              </div>
            </article>
          </div>
        </section>

        {/* 4. ARCHITECTURAL CAPABILITY MATRIX (Clean 2-Column Grid) */}
        <section className="flex flex-col gap-3.5 pt-2">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] font-semibold text-orange-400 uppercase tracking-widest">ARCHITECTURAL MATRIX</span>
            <h2 className="text-[21px] font-bold text-white tracking-tight">Built Around Innovation</h2>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {/* Cap 1 */}
            <div className="p-3 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400 mb-0.5">
                <span className="material-symbols-outlined text-[19px]">smart_toy</span>
              </div>
              <h3 className="text-[14px] font-bold text-white leading-tight">Intelligent Experiences</h3>
              <p className="text-[12px] text-slate-400 leading-snug">Contextual models responding in real time.</p>
            </div>
            {/* Cap 2 */}
            <div className="p-3 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/15 border border-cyan-500/30 flex items-center justify-center text-[#38BDF8] mb-0.5">
                <span className="material-symbols-outlined text-[19px]">auto_mode</span>
              </div>
              <h3 className="text-[14px] font-bold text-white leading-tight">Autonomous Workflows</h3>
              <p className="text-[12px] text-slate-400 leading-snug">Administrative work shifted to background daemons.</p>
            </div>
            {/* Cap 3 */}
            <div className="p-3 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 mb-0.5">
                <span className="material-symbols-outlined text-[19px]">cloud_sync</span>
              </div>
              <h3 className="text-[14px] font-bold text-white leading-tight">Scalable Fabric</h3>
              <p className="text-[12px] text-slate-400 leading-snug">Elastic serverless handling 10x traffic surges.</p>
            </div>
            {/* Cap 4 */}
            <div className="p-3 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-0.5">
                <span className="material-symbols-outlined text-[19px]">verified_user</span>
              </div>
              <h3 className="text-[14px] font-bold text-white leading-tight">Platform Security</h3>
              <p className="text-[12px] text-slate-400 leading-snug">SOC-2 readiness with zero-trust token handshakes.</p>
            </div>
            {/* Cap 5 */}
            <div className="p-3 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-0.5">
                <span className="material-symbols-outlined text-[19px]">monitoring</span>
              </div>
              <h3 className="text-[14px] font-bold text-white leading-tight">Predictive Insights</h3>
              <p className="text-[12px] text-slate-400 leading-snug">Forecasting operational staffing & demand curves.</p>
            </div>
            {/* Cap 6 */}
            <div className="p-3 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="w-8 h-8 rounded-lg bg-rose-500/15 border border-rose-500/30 flex items-center justify-center text-rose-400 mb-0.5">
                <span className="material-symbols-outlined text-[19px]">touch_app</span>
              </div>
              <h3 className="text-[14px] font-bold text-white leading-tight">User-Centered Craft</h3>
              <p className="text-[12px] text-slate-400 leading-snug">Sub-100ms render speeds and ruthless UX clarity.</p>
            </div>
          </div>
        </section>

        {/* 5. FLAGSHIP SPOTLIGHT (QHR Control Plane) */}
        <section className="flex flex-col gap-3 pt-2">
          <div className="p-4 rounded-2xl bg-gradient-to-b from-[#16213A] to-[#101728] border border-orange-500/30 shadow-card-subtle flex flex-col gap-3.5">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-orange-400 text-[20px]">badge</span>
                <span className="font-mono text-[10px] font-bold text-orange-400 uppercase tracking-wider">FLAGSHIP SPOTLIGHT</span>
              </div>
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-[#1E2942] border border-[#1F2C47] text-slate-300">ENTERPRISE</span>
            </div>
            <div>
              <h3 className="text-[19px] font-bold text-white leading-tight">Simplify HR Operations with QHR</h3>
              <p className="text-[13px] text-slate-300 mt-1 leading-relaxed">Designed to replace fragmented spreadsheets with one centralized, audit-ready personnel platform.</p>
            </div>
            {/* Quick 2x2 Feature Mini-Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div className="p-2 rounded-xl bg-[#0B0F19]/80 border border-[#1F2C47]/70 flex items-center gap-2">
                <span className="material-symbols-outlined text-[#38BDF8] text-[17px]">folder_shared</span>
                <span className="text-[11px] font-medium text-slate-200 truncate">Employee Records</span>
              </div>
              <div className="p-2 rounded-xl bg-[#0B0F19]/80 border border-[#1F2C47]/70 flex items-center gap-2">
                <span className="material-symbols-outlined text-orange-400 text-[17px]">pin_drop</span>
                <span className="text-[11px] font-medium text-slate-200 truncate">Geo-Attendance</span>
              </div>
              <div className="p-2 rounded-xl bg-[#0B0F19]/80 border border-[#1F2C47]/70 flex items-center gap-2">
                <span className="material-symbols-outlined text-cyan-400 text-[17px]">event_available</span>
                <span className="text-[11px] font-medium text-slate-200 truncate">Leave Tracking</span>
              </div>
              <div className="p-2 rounded-xl bg-[#0B0F19]/80 border border-[#1F2C47]/70 flex items-center gap-2">
                <span className="material-symbols-outlined text-emerald-400 text-[17px]">payments</span>
                <span className="text-[11px] font-medium text-slate-200 truncate">Auto Payroll</span>
              </div>
            </div>
            {/* Audit cycle bar */}
            <div className="p-3 rounded-xl bg-[#0B0F19]/90 border border-[#1F2C47]/80 flex flex-col gap-2">
              <div className="flex justify-between items-center text-[11px] font-mono">
                <span className="text-slate-400 uppercase">Next Payroll Cycle:</span>
                <span className="text-orange-400 font-bold">3 Days Left</span>
              </div>
              <div className="w-full h-2 rounded-full bg-[#1A253E] overflow-hidden">
                <div className="h-full bg-gradient-to-r from-orange-500 to-amber-400 w-[84%] rounded-full"></div>
              </div>
              <div className="flex justify-between items-center text-[10px] font-mono text-slate-400">
                <span>Status: Verified Node</span>
                <span className="text-emerald-400 font-semibold">84% Synced</span>
              </div>
            </div>
            <button 
              onClick={() => onSelectTab('qhr')}
              className="w-full min-h-[46px] rounded-xl bg-[#FF6A3D] hover:bg-[#FF5420] text-white font-semibold text-[13px] flex items-center justify-center gap-2 shadow-glow-primary transition-all active:scale-98"
            >
              <span>Explore QHR Platform</span>
              <span className="material-symbols-outlined text-[17px]">launch</span>
            </button>
          </div>
        </section>

        {/* 6. WHY QURINOM PRODUCTS */}
        <section className="flex flex-col gap-3.5 pt-2">
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] font-semibold text-[#38BDF8] uppercase tracking-widest">WHY QURINOM</span>
            <h2 className="text-[21px] font-bold text-white tracking-tight">Why Qurinom Products?</h2>
            <p className="text-[13px] text-slate-400 leading-relaxed">We don't build vaporware. Every product is battle-tested in live commercial workflows.</p>
          </div>
          <div className="grid grid-cols-2 gap-2.5">
            {/* Value 1 */}
            <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-white">Pragmatic Tech</span>
                <span className="font-mono text-[11px] font-bold text-orange-400">01</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-snug">Hardened runtimes without fragile abstractions.</p>
            </div>
            {/* Value 2 */}
            <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-white">Frictionless UX</span>
                <span className="font-mono text-[11px] font-bold text-[#38BDF8]">02</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-snug">Intuitive control planes with near zero training.</p>
            </div>
            {/* Value 3 */}
            <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-white">Effortless Scale</span>
                <span className="font-mono text-[11px] font-bold text-emerald-400">03</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-snug">Ready to scale smoothly from 10 to 10k nodes.</p>
            </div>
            {/* Value 4 */}
            <div className="p-3.5 rounded-2xl bg-[#131B2E] border border-[#1F2C47] flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="text-[14px] font-bold text-white">Measurable ROI</span>
                <span className="font-mono text-[11px] font-bold text-indigo-400">04</span>
              </div>
              <p className="text-[12px] text-slate-400 leading-snug">40% reduction in manual operational overhead.</p>
            </div>
          </div>
        </section>

        {/* 7. FINAL CONVERSION BANNER */}
        <section className="p-5 rounded-2xl bg-gradient-to-b from-[#182440] to-[#101729] border border-[#1F2C47] shadow-card-subtle flex flex-col items-center text-center gap-3.5 relative overflow-hidden">
          <div className="w-12 h-12 rounded-2xl bg-[#202F52] border border-white/10 flex items-center justify-center text-orange-400 shadow-glow-primary/20">
            <span className="material-symbols-outlined text-[26px]">rocket_launch</span>
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="text-[21px] font-extrabold text-white tracking-tight leading-tight">
              Explore Products Built for Real-World Needs
            </h2>
            <p className="text-[13px] text-slate-300 leading-relaxed max-w-[300px] mx-auto">
              Join hundreds of teams orchestrating their future on Qurinom Solutions’ proprietary software stack.
            </p>
          </div>
          <div className="flex flex-col gap-2.5 w-full pt-1">
            <button 
              onClick={() => onSelectTab('products')}
              className="w-full min-h-[48px] rounded-xl bg-[#FF6A3D] hover:bg-[#FF5420] text-white font-semibold text-[14px] flex items-center justify-center gap-2 shadow-glow-primary transition-all active:scale-98"
            >
              <span>Explore All Products</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
            <button 
              onClick={() => onOpenDemo('overview')}
              className="w-full min-h-[48px] rounded-xl bg-[#131B2E] hover:bg-[#1E2942] text-slate-200 border border-[#1F2C47] font-medium text-[14px] flex items-center justify-center gap-2 transition-all active:scale-98"
            >
              <span className="material-symbols-outlined text-[18px] text-[#38BDF8]">headset_mic</span>
              <span>Schedule Platform Demo</span>
            </button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-1 text-[11px] font-mono text-slate-400">
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#38BDF8]">check_circle</span>
              <span>Instant Sandbox</span>
            </div>
            <div className="flex items-center gap-1">
              <span className="material-symbols-outlined text-[14px] text-[#38BDF8]">check_circle</span>
              <span>Zero Credit Card</span>
            </div>
          </div>
        </section>

        {/* 8. MOBILE FOOTER */}
        <footer className="pt-4 pb-8 flex flex-col gap-5 border-t border-[#1F2C47]/80">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="text-[16px] font-bold text-white">Qurinom Solutions</span>
              <span className="px-2 py-0.5 rounded bg-[#38BDF8]/10 text-[#38BDF8] font-mono text-[9px] font-semibold border border-[#38BDF8]/20">ENTERPRISE TECH</span>
            </div>
            <p className="text-[12px] text-slate-400 leading-relaxed">Architecting next-generation enterprise suites, cloud intelligence, and scalable digital ecosystems.</p>
          </div>
          {/* Footer Quick Links Grid */}
          <div className="grid grid-cols-2 gap-4 text-[13px]">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] font-bold uppercase text-orange-400 tracking-wider">Flagships</span>
              <div className="flex flex-col gap-1.5 text-slate-400">
                <button onClick={() => onSelectTab('qhr')} className="text-left hover:text-white transition-colors">QHR Platform</button>
                <button onClick={() => onSelectProduct(PRODUCTS[1])} className="text-left hover:text-white transition-colors">StoreFlaunt Commerce</button>
                <button onClick={() => onSelectProduct(PRODUCTS[2])} className="text-left hover:text-white transition-colors">WeeVids Studio</button>
                <button onClick={() => onSelectProduct(PRODUCTS[3])} className="text-left hover:text-white transition-colors">My Holy Trip</button>
                <button onClick={() => onSelectProduct(PRODUCTS[4])} className="text-left hover:text-white transition-colors">Snapp Buddy</button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[10px] font-bold uppercase text-[#38BDF8] tracking-wider">Enterprise</span>
              <div className="flex flex-col gap-1.5 text-slate-400">
                <button onClick={() => onSelectTab('company')} className="text-left hover:text-white transition-colors">About Company</button>
                <button onClick={() => onOpenDemo('overview')} className="text-left hover:text-white transition-colors">Schedule Demo</button>
                <button onClick={() => onSelectTab('solutions')} className="text-left hover:text-white transition-colors">Security Vault</button>
                <button onClick={() => onOpenDemo('support')} className="text-left hover:text-white transition-colors">Support Desk</button>
                <span className="text-slate-500">Privacy & Terms</span>
              </div>
            </div>
          </div>
          {/* Social and Network Icons */}
          <div className="flex items-center gap-2.5 pt-1">
            <div className="w-9 h-9 rounded-lg bg-[#131B2E] border border-[#1F2C47] flex items-center justify-center text-slate-400 hover:text-orange-400 transition-colors">
              <span className="material-symbols-outlined text-[18px]">terminal</span>
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#131B2E] border border-[#1F2C47] flex items-center justify-center text-slate-400 hover:text-[#38BDF8] transition-colors">
              <span className="material-symbols-outlined text-[18px]">public</span>
            </div>
            <div className="w-9 h-9 rounded-lg bg-[#131B2E] border border-[#1F2C47] flex items-center justify-center text-slate-400 hover:text-emerald-400 transition-colors">
              <span className="material-symbols-outlined text-[18px]">hub</span>
            </div>
          </div>
          <div className="flex flex-col gap-1 text-[10px] font-mono text-slate-500 pt-1 border-t border-[#1F2C47]/40">
            <div>© 2025 QURINOM SOLUTIONS PVT. LTD. ALL RIGHTS RESERVED.</div>
            <div className="text-slate-600">OBSIDIAN RUNTIME V4.8 // 390PX VIEWPORT COMPLIANT</div>
          </div>
        </footer>
      </main>
    </div>
  );
};
