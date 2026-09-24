import React, { useState, useMemo } from 'react';
import { TabType, ProductItem } from '../../types';
import { PRODUCTS, BRAND_LOGO } from '../../data/products';

interface ProductsPageProps {
  onSelectTab: (tab: TabType) => void;
  onOpenDemo: (productId?: string) => void;
  onSelectProduct: (product: ProductItem) => void;
  onOpenMenu: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onSelectTab,
  onOpenDemo,
  onSelectProduct,
  onOpenMenu
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [currentFilter, setCurrentFilter] = useState<'all' | 'business' | 'social' | 'travel' | 'events'>('all');

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((item) => {
      const matchesCategory = currentFilter === 'all' || item.category === currentFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        item.name.toLowerCase().includes(q) ||
        item.shortDesc.toLowerCase().includes(q) ||
        item.longDesc.toLowerCase().includes(q) ||
        item.tags.some((t) => t.toLowerCase().includes(q)) ||
        item.categoryLabel.toLowerCase().includes(q);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, currentFilter]);

  return (
    <div className="bg-[#0B0F19] text-[#F8FAFC] font-sans antialiased min-h-screen flex flex-col overflow-x-hidden selection:bg-[#FF6A3D] selection:text-white">
      {/* Fixed Top Header */}
      <header className="fixed top-0 inset-x-0 z-50 pt-safe bg-[#0B0F19]/90 backdrop-blur-md border-b border-[#1F2C47]/70 shadow-lg">
        <div className="h-14 px-4 flex items-center justify-between gap-3 max-w-md mx-auto w-full">
          {/* Qurinom Brand Logo */}
          <button 
            onClick={() => onSelectTab('overview')}
            className="flex items-center py-1 group transition-transform duration-300 hover:scale-[1.02] active:opacity-85 text-left" 
            aria-label="Home"
          >
            <img 
              src={BRAND_LOGO} 
              alt="Qurinom Solutions Logo" 
              className="h-8 w-auto object-contain transition-transform duration-300 group-hover:scale-105" 
            />
          </button>
          {/* Quick Action CTAs */}
          <div className="flex items-center gap-2">
            <button 
              onClick={() => onOpenDemo('products-catalog')}
              className="h-8 px-3.5 rounded-full bg-gradient-to-r from-orange-400 to-amber-300 hover:from-orange-500 hover:to-amber-400 text-white text-[12px] font-semibold tracking-wide flex items-center justify-center gap-1.5 shadow-[0_2px_12px_rgba(255,106,61,0.35)] transition-all active:scale-95 border border-white/10"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-pulse"></span>
              <span>Demo</span>
            </button>
            <button 
              onClick={onOpenMenu}
              aria-label="Toggle Navigation Menu" 
              className="w-9 h-9 rounded-full bg-[#131B2E] hover:bg-[#1A253E] border border-[#1F2C47] text-[#94A3B8] hover:text-white flex items-center justify-center transition-all active:scale-95" 
              type="button"
            >
              <span className="material-symbols-outlined text-[19px]">menu</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Wrapper */}
      <main className="flex-1 w-full max-w-md mx-auto pt-[calc(3.5rem+env(safe-area-inset-top,0px))] pb-28 px-4 flex flex-col gap-5 overflow-x-hidden">
        {/* Hero / Breadcrumb / Heading Section */}
        <section className="pt-2 flex flex-col gap-2.5">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1.5 text-[#94A3B8] font-mono uppercase tracking-wider text-[11px]">
              <button onClick={() => onSelectTab('overview')} className="hover:text-[#FF6A3D] transition-colors">
                Home
              </button>
              <span className="text-[#1F2C47]">/</span>
              <span className="text-[#FF6A3D] font-semibold">Products</span>
            </div>
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#131B2E] border border-[#1F2C47] text-[#38BDF8] text-[10px] font-mono tracking-wider font-semibold">
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] animate-pulse"></span>
              V4.8 CATALOG
            </span>
          </div>
          <div className="flex flex-col gap-1.5 mt-0.5">
            <h1 className="text-[32px] font-extrabold tracking-tight leading-[38px] text-white">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-rose-400 to-amber-300">Products</span>
            </h1>
            <p className="text-[14px] text-slate-300 leading-relaxed max-w-sm">
              Explore Qurinom Solutions suite of proprietary digital engines engineered for enterprise scale, edge vision, and real-time velocity.
            </p>
          </div>
          <div className="mt-0.5 flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#131B2E]/70 border border-[#1F2C47]/80 text-[#94A3B8] text-[11px] font-mono">
            <span className="material-symbols-outlined text-[15px] text-[#38BDF8]">verified_user</span>
            <span>SOC2 / ISO Certified • 99.98% Uptime SLA</span>
          </div>
        </section>

        {/* Sticky Search & Category Filter Section */}
        <section className="sticky top-[calc(3.5rem+env(safe-area-inset-top,0px))] z-40 bg-[#0B0F19]/95 backdrop-blur-md pt-2 pb-3 -mx-4 px-4 border-b border-[#1F2C47]/50 flex flex-col gap-2.5">
          {/* Search Box */}
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-[#94A3B8]">
              <span className="material-symbols-outlined text-[19px]">search</span>
            </div>
            <input 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-9 bg-[#131B2E] border border-[#1F2C47] rounded-xl text-[13.5px] text-[#F8FAFC] placeholder-[#64748B] focus:border-[#FF6A3D] focus:ring-1 focus:ring-[#FF6A3D] focus:outline-none transition-all shadow-inner" 
              placeholder="Search products, telemetry, keywords..." 
              type="text" 
            />
            {searchQuery && (
              <button 
                onClick={() => setSearchQuery('')}
                aria-label="Clear Search" 
                className="absolute inset-y-0 right-2.5 flex items-center text-[#94A3B8] hover:text-white" 
                type="button"
              >
                <span className="material-symbols-outlined text-[17px]">close</span>
              </button>
            )}
          </div>
          {/* Filter Pills (Scrollable with clean snap) */}
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scroll-smooth py-0.5">
            <button 
              onClick={() => setCurrentFilter('all')}
              className={`shrink-0 h-8 px-3.5 rounded-full font-mono text-[11px] font-semibold tracking-wider flex items-center gap-1.5 transition-all ${
                currentFilter === 'all'
                  ? 'bg-[#FF6A3D] text-white shadow-[0_2px_8px_rgba(255,106,61,0.3)]'
                  : 'bg-[#131B2E] border border-[#1F2C47] text-[#94A3B8] hover:text-white hover:border-[#38BDF8]'
              }`}
              type="button"
            >
              <span>All Products</span>
              <span className="bg-black/20 px-1.5 py-0.2 rounded-full text-[10px]">5</span>
            </button>
            <button 
              onClick={() => setCurrentFilter('business')}
              className={`shrink-0 h-8 px-3.5 rounded-full font-mono text-[11px] font-medium tracking-wider flex items-center transition-all ${
                currentFilter === 'business'
                  ? 'bg-[#FF6A3D] text-white shadow-[0_2px_8px_rgba(255,106,61,0.3)]'
                  : 'bg-[#131B2E] border border-[#1F2C47] text-[#94A3B8] hover:text-white hover:border-[#38BDF8]'
              }`}
              type="button"
            >
              <span>Business & HR</span>
            </button>
            <button 
              onClick={() => setCurrentFilter('social')}
              className={`shrink-0 h-8 px-3.5 rounded-full font-mono text-[11px] font-medium tracking-wider flex items-center transition-all ${
                currentFilter === 'social'
                  ? 'bg-[#FF6A3D] text-white shadow-[0_2px_8px_rgba(255,106,61,0.3)]'
                  : 'bg-[#131B2E] border border-[#1F2C47] text-[#94A3B8] hover:text-white hover:border-[#38BDF8]'
              }`}
              type="button"
            >
              <span>Social & Video</span>
            </button>
            <button 
              onClick={() => setCurrentFilter('travel')}
              className={`shrink-0 h-8 px-3.5 rounded-full font-mono text-[11px] font-medium tracking-wider flex items-center transition-all ${
                currentFilter === 'travel'
                  ? 'bg-[#FF6A3D] text-white shadow-[0_2px_8px_rgba(255,106,61,0.3)]'
                  : 'bg-[#131B2E] border border-[#1F2C47] text-[#94A3B8] hover:text-white hover:border-[#38BDF8]'
              }`}
              type="button"
            >
              <span>Travel & Culture</span>
            </button>
            <button 
              onClick={() => setCurrentFilter('events')}
              className={`shrink-0 h-8 px-3.5 rounded-full font-mono text-[11px] font-medium tracking-wider flex items-center transition-all ${
                currentFilter === 'events'
                  ? 'bg-[#FF6A3D] text-white shadow-[0_2px_8px_rgba(255,106,61,0.3)]'
                  : 'bg-[#131B2E] border border-[#1F2C47] text-[#94A3B8] hover:text-white hover:border-[#38BDF8]'
              }`}
              type="button"
            >
              <span>Events & AI</span>
            </button>
          </div>
        </section>

        {/* Product Cards Stack */}
        <div className="flex flex-col gap-5 w-full">
          {/* QHR Product Card */}
          {filteredProducts.some(p => p.id === 'qhr') && (
            <article className="product-card group flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl overflow-hidden shadow-sm transition-all">
              {/* Top Bar */}
              <div className="px-4 py-2.5 bg-[#0D1424] border-b border-[#1F2C47] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]"></span>
                  HR MANAGEMENT • FLAGSHIP
                </span>
                <span className="font-mono text-[10px] text-[#64748B]">ARCH // V3.4</span>
              </div>
              {/* Telemetry Data Grid */}
              <div className="p-3.5 bg-[#0F1626]/70 border-b border-[#1F2C47]/70 flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[10px] uppercase text-[#94A3B8] tracking-wider">Live Runtime Telemetry</span>
                  <span className="font-mono text-[10px] text-[#38BDF8] bg-[#38BDF8]/10 px-2 py-0.5 rounded-full border border-[#38BDF8]/20">CYCLE #14 READY</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#131B2E] p-2.5 rounded-xl border border-[#1F2C47]">
                    <span className="font-mono text-[10px] text-[#64748B] uppercase">Leave Quota Ratio</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-base font-bold text-[#F8FAFC]">94.8%</span>
                      <span className="text-[10px] font-mono text-[#38BDF8]">OPTIMAL</span>
                    </div>
                    <div className="w-full bg-[#1F2C47] h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#38BDF8] h-1.5 rounded-full" style={{ width: '94.8%' }}></div>
                    </div>
                  </div>
                  <div className="bg-[#131B2E] p-2.5 rounded-xl border border-[#1F2C47]">
                    <span className="font-mono text-[10px] text-[#64748B] uppercase">Auto Payroll Exec</span>
                    <div className="flex items-baseline justify-between mt-1">
                      <span className="text-base font-bold text-[#FF6A3D]">0 errors</span>
                      <span className="text-[10px] font-mono text-[#FF6A3D]">2,410 EMP</span>
                    </div>
                    <div className="w-full bg-[#1F2C47] h-1.5 rounded-full mt-2 overflow-hidden">
                      <div className="bg-[#FF6A3D] h-1.5 rounded-full" style={{ width: '100%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Image Banner */}
              <div className="relative h-36 w-full overflow-hidden bg-[#0F1626]">
                <img 
                  className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-300" 
                  alt="Enterprise Human Resources analytics dashboard" 
                  src={PRODUCTS[0].catalogImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-[#0B0F19]/90 backdrop-blur-md border border-[#1F2C47]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D] animate-ping"></span>
                  <span className="font-mono text-[10px] text-[#FF6A3D] uppercase font-medium">Biometric Synced Live</span>
                </div>
              </div>
              {/* Body & Details */}
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-bold text-[#F8FAFC]">QHR</h2>
                  <span className="font-mono text-[10px] text-[#38BDF8] px-2 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30">ENTERPRISE SAAS</span>
                </div>
                <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                  Comprehensive HR management software engineered for automated payroll, biometric attendance, and end-to-end workforce lifecycle governance.
                </p>
                {/* Bullet Points */}
                <div className="flex flex-col gap-2 pt-1">
                  <div className="flex items-start gap-2 text-xs text-[#E2E8F0]">
                    <span className="material-symbols-outlined text-[16px] text-[#FF6A3D] shrink-0 mt-0.5">check_circle</span>
                    <span>Self-service workforce and leave governance portal</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#E2E8F0]">
                    <span className="material-symbols-outlined text-[16px] text-[#FF6A3D] shrink-0 mt-0.5">check_circle</span>
                    <span>Zero-touch multi-state tax compliance & biometric logging</span>
                  </div>
                  <div className="flex items-start gap-2 text-xs text-[#E2E8F0]">
                    <span className="material-symbols-outlined text-[16px] text-[#FF6A3D] shrink-0 mt-0.5">check_circle</span>
                    <span>Direct ledger export to SAP, Workday, and Oracle</span>
                  </div>
                </div>
                {/* Bottom CTA */}
                <div className="pt-2 flex items-center justify-between border-t border-[#1F2C47]/60 mt-1">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#64748B]">
                    <span className="material-symbols-outlined text-[15px] text-[#38BDF8]">bolt</span>
                    <span>LATENCY &lt; 20MS</span>
                  </div>
                  <button 
                    onClick={() => onSelectTab('qhr')}
                    className="h-9 px-4 rounded-xl bg-[#FF6A3D] hover:bg-[#E8562B] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all shadow-sm active:scale-95"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* StoreFlaunt Product Card */}
          {filteredProducts.some(p => p.id === 'storeflaunt') && (
            <article className="product-card group flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl overflow-hidden shadow-sm transition-all">
              <div className="px-4 py-2.5 bg-[#0D1424] border-b border-[#1F2C47] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  DISCOVERY / COMMERCE
                </span>
                <span className="font-mono text-[10px] text-[#64748B]">RETAIL NODE</span>
              </div>
              <div className="relative h-40 w-full overflow-hidden bg-[#0F1626]">
                <img 
                  className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-300" 
                  alt="Hyperlocal interactive video commerce platform" 
                  src={PRODUCTS[1].catalogImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-transparent"></div>
                <div className="absolute top-2.5 right-3 px-2 py-0.5 rounded-full bg-[#0B0F19]/90 backdrop-blur-md border border-[#1F2C47] flex items-center gap-1 text-[10px] font-mono text-[#38BDF8]">
                  <span className="material-symbols-outlined text-[13px]">qr_code_scanner</span>
                  <span>INSTORE SYNC ACTIVE</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-bold text-[#F8FAFC]">StoreFlaunt</h2>
                  <span className="font-mono text-[10px] text-[#38BDF8] px-2 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30">OMNICHANNEL</span>
                </div>
                <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                  Video-based hyperlocal discovery engine connecting digital footfall to physical in-store retail experiences through real-time telemetry.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Geolocation Feeds</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Merchant Spotlight</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># QR In-Store Sync</span>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-[#1F2C47]/60 mt-1">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#64748B]">
                    <span className="material-symbols-outlined text-[15px] text-[#38BDF8]">storefront</span>
                    <span>1.2M+ ACTIVE NODES</span>
                  </div>
                  <button 
                    onClick={() => onSelectProduct(PRODUCTS[1])}
                    className="h-9 px-4 rounded-xl bg-[#0D1424] hover:bg-[#1E293B] border border-[#1F2C47] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all active:scale-95"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px] text-[#FF6A3D]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* WeeVids Product Card */}
          {filteredProducts.some(p => p.id === 'weevids') && (
            <article className="product-card group flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl overflow-hidden shadow-sm transition-all">
              <div className="px-4 py-2.5 bg-[#0D1424] border-b border-[#1F2C47] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  SOCIAL / VIDEO
                </span>
                <span className="font-mono text-[10px] text-[#64748B]">STUDIO CORE</span>
              </div>
              <div className="relative h-40 w-full overflow-hidden bg-[#0F1626]">
                <img 
                  className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-300" 
                  alt="Modern high-frame-rate mobile video creation interface" 
                  src={PRODUCTS[2].catalogImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 left-3 px-2 py-0.5 rounded-full bg-[#0B0F19]/90 backdrop-blur-md border border-[#1F2C47] flex items-center gap-1 text-[10px] font-mono text-[#38BDF8]">
                  <span className="material-symbols-outlined text-[13px]">verified</span>
                  <span>TALENT VERIFICATION PROTOCOL</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-bold text-[#F8FAFC]">WeeVids</h2>
                  <span className="font-mono text-[10px] text-[#38BDF8] px-2 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30">CREATOR INFRA</span>
                </div>
                <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                  Camera-video social platform empowering creators to verify creative talent, tokenize performance metadata, and showcase verifiable portfolios.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Short-Form Studio</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Algorithmic Endorsement</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Verified Badges</span>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-[#1F2C47]/60 mt-1">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#64748B]">
                    <span className="material-symbols-outlined text-[15px] text-[#38BDF8]">videocam</span>
                    <span>60FPS LOW-LATENCY</span>
                  </div>
                  <button 
                    onClick={() => onSelectProduct(PRODUCTS[2])}
                    className="h-9 px-4 rounded-xl bg-[#0D1424] hover:bg-[#1E293B] border border-[#1F2C47] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all active:scale-95"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px] text-[#FF6A3D]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* My Holy Trip Product Card */}
          {filteredProducts.some(p => p.id === 'my-holy-trip') && (
            <article className="product-card group flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl overflow-hidden shadow-sm transition-all">
              <div className="px-4 py-2.5 bg-[#0D1424] border-b border-[#1F2C47] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FF6A3D]"></span>
                  TRAVEL / CULTURE
                </span>
                <span className="font-mono text-[10px] text-[#64748B]">GEO ARCHIVE</span>
              </div>
              <div className="relative h-40 w-full overflow-hidden bg-[#0F1626]">
                <img 
                  className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-300" 
                  alt="Digital architectural rendering and topological telemetry map" 
                  src={PRODUCTS[3].catalogImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-transparent"></div>
                <div className="absolute top-2.5 left-3 px-2 py-0.5 rounded-full bg-[#0B0F19]/90 backdrop-blur-md border border-[#1F2C47] flex items-center gap-1 text-[10px] font-mono text-[#FF6A3D]">
                  <span className="material-symbols-outlined text-[13px]">explore</span>
                  <span>HERITAGE TELEMETRY</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-bold text-[#F8FAFC]">My Holy Trip</h2>
                  <span className="font-mono text-[10px] text-[#FF6A3D] px-2 py-0.5 rounded-full bg-[#FF6A3D]/10 border border-[#FF6A3D]/30">CULTURAL GEO</span>
                </div>
                <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                  Specialized digital archive and navigation engine for discovering sacred sanctuaries, cultural preservation zones, and historic landmarks.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Pilgrimage Telemetry</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Offline Sanctuary Sync</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Ritual Timelines</span>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-[#1F2C47]/60 mt-1">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#64748B]">
                    <span className="material-symbols-outlined text-[15px] text-[#FF6A3D]">temple_hindu</span>
                    <span>18,000+ SITES</span>
                  </div>
                  <button 
                    onClick={() => onSelectProduct(PRODUCTS[3])}
                    className="h-9 px-4 rounded-xl bg-[#0D1424] hover:bg-[#1E293B] border border-[#1F2C47] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all active:scale-95"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px] text-[#FF6A3D]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Snapp Buddy Product Card */}
          {filteredProducts.some(p => p.id === 'snapp-buddy') && (
            <article className="product-card group flex flex-col bg-[#131B2E] border border-[#1F2C47] rounded-2xl overflow-hidden shadow-sm transition-all">
              <div className="px-4 py-2.5 bg-[#0D1424] border-b border-[#1F2C47] flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                  EVENTS / PHOTOGRAPHY
                </span>
                <span className="font-mono text-[10px] text-[#64748B]">AI VISION NODE</span>
              </div>
              <div className="relative h-40 w-full overflow-hidden bg-[#0F1626]">
                <img 
                  className="w-full h-full object-cover brightness-90 group-hover:scale-105 transition-transform duration-300" 
                  alt="Real-time multi-device crowd photography network dashboard" 
                  src={PRODUCTS[4].catalogImage} 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#131B2E] via-transparent to-transparent"></div>
                <div className="absolute bottom-2.5 right-3 px-2 py-0.5 rounded-full bg-[#0B0F19]/90 backdrop-blur-md border border-[#1F2C47] flex items-center gap-1 text-[10px] font-mono text-[#38BDF8]">
                  <span className="material-symbols-outlined text-[13px]">burst_mode</span>
                  <span>ZERO-LATENCY INGEST</span>
                </div>
              </div>
              <div className="p-4 flex flex-col gap-3">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-display font-bold text-[#F8FAFC]">Snapp Buddy</h2>
                  <span className="font-mono text-[10px] text-[#38BDF8] px-2 py-0.5 rounded-full bg-[#38BDF8]/10 border border-[#38BDF8]/30">AI VISION</span>
                </div>
                <p className="text-[13px] leading-relaxed text-[#94A3B8]">
                  Intelligent event photography ecosystem using personal mobile devices, automated edge sorting, and zero-friction instant guest galleries.
                </p>
                <div className="flex flex-wrap gap-1.5 pt-1">
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># AI Composition Guidance</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># Live Photo Wall</span>
                  <span className="px-2.5 py-1 rounded-lg bg-[#0D1424] border border-[#1F2C47] text-[11px] font-mono text-[#94A3B8]"># 1-Scan QR Cloud</span>
                </div>
                <div className="pt-2 flex items-center justify-between border-t border-[#1F2C47]/60 mt-1">
                  <div className="flex items-center gap-1 font-mono text-[11px] text-[#64748B]">
                    <span className="material-symbols-outlined text-[15px] text-[#38BDF8]">photo_camera</span>
                    <span>CLOUD AI ENGINE</span>
                  </div>
                  <button 
                    onClick={() => onSelectProduct(PRODUCTS[4])}
                    className="h-9 px-4 rounded-xl bg-[#0D1424] hover:bg-[#1E293B] border border-[#1F2C47] text-white text-xs font-semibold tracking-wide flex items-center gap-1.5 transition-all active:scale-95"
                  >
                    <span>View Details</span>
                    <span className="material-symbols-outlined text-[16px] text-[#FF6A3D]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </article>
          )}

          {/* Empty State for Searches */}
          {filteredProducts.length === 0 && (
            <div className="flex flex-col items-center justify-center py-10 px-4 bg-[#131B2E] border border-[#1F2C47] rounded-2xl text-center gap-2">
              <span className="material-symbols-outlined text-[36px] text-[#64748B]">search_off</span>
              <span className="text-base font-bold text-[#F8FAFC]">No Products Found</span>
              <p className="text-xs text-[#94A3B8] max-w-[260px]">
                No proprietary suites matched your search terms. Try adjusting your query or filter criteria.
              </p>
              <button 
                onClick={() => {
                  setSearchQuery('');
                  setCurrentFilter('all');
                }}
                className="mt-2 px-4 py-2 rounded-xl bg-[#FF6A3D] text-white font-mono text-xs uppercase font-semibold active:scale-95 transition-transform" 
                type="button"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>

        {/* Bespoke Engineering CTA Card */}
        <section className="mt-2 w-full">
          <div className="relative overflow-hidden p-5 rounded-2xl bg-gradient-to-br from-[#131B2E] via-[#101726] to-[#0B0F19] border border-[#1F2C47] flex flex-col gap-3 shadow-md">
            <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#FF6A3D]/10 rounded-full blur-2xl pointer-events-none"></div>
            <div className="flex items-center gap-1.5 text-[#FF6A3D] font-mono text-[11px] font-semibold tracking-wider uppercase">
              <span className="material-symbols-outlined text-[16px]">construction</span>
              <span>BESPOKE ARCHITECTURE</span>
            </div>
            <h3 className="text-[22px] font-extrabold tracking-tight text-white">
              Need a Bespoke Solution?
            </h3>
            <p className="text-[13px] leading-relaxed text-[#94A3B8]">
              We engineer custom enterprise digital infrastructures, distributed microservices, and dedicated AI models tailored to your proprietary stack.
            </p>
            {/* Bullet Highlights */}
            <div className="flex flex-col gap-1.5 pt-1 text-xs text-[#CBD5E1]">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                <span>Custom microservices & private cloud deployment</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]"></span>
                <span>Dedicated enterprise SLAs with 24/7 DevOps tier</span>
              </div>
            </div>
            <div className="pt-2">
              <button 
                onClick={() => onOpenDemo('bespoke')}
                className="w-full h-11 rounded-xl bg-[#0D1424] hover:bg-[#1E293B] border border-[#1F2C47] text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span>Consult Engineering Team</span>
                <span className="material-symbols-outlined text-[16px] text-[#FF6A3D]">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>

        {/* Bottom Consultation Card */}
        <section className="w-full">
          <div className="p-5 rounded-2xl bg-[#0D1424] border border-[#1F2C47] flex flex-col items-center text-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-[#FF6A3D]/15 border border-[#FF6A3D]/30 flex items-center justify-center text-[#FF6A3D]">
              <span className="material-symbols-outlined text-[24px]">hub</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-mono text-[10px] text-[#FF6A3D] uppercase tracking-widest font-semibold">PRODUCT ARCHITECTS</span>
              <h3 className="text-[22px] font-extrabold tracking-tight text-white">
                Looking for the Right Product?
              </h3>
            </div>
            <p className="text-[13px] text-[#94A3B8] max-w-[280px]">
              Talk directly with our product architects to evaluate which Qurinom suite matches your technical roadmap.
            </p>
            <div className="w-full flex flex-col gap-2 pt-1">
              <button 
                onClick={() => onOpenDemo('products-consultation')}
                className="w-full h-11 rounded-xl bg-[#FF6A3D] hover:bg-[#E8562B] text-white font-mono text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 shadow-[0_2px_12px_rgba(255,106,61,0.35)] transition-all active:scale-95"
              >
                <span className="w-2 h-2 rounded-full bg-white"></span>
                <span>Request a Demo</span>
              </button>
              <button 
                onClick={() => onOpenDemo('schedule-consultation')}
                className="w-full h-11 rounded-xl bg-[#131B2E] hover:bg-[#1A253E] border border-[#1F2C47] text-[#F8FAFC] font-mono text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-2 transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[17px] text-[#38BDF8]">calendar_today</span>
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
        </section>

        {/* Mobile Footer */}
        <footer className="mt-4 pt-6 border-t border-[#1F2C47] flex flex-col gap-5 w-full">
          <div className="flex flex-col gap-1.5">
            <div className="flex items-center gap-2">
              <span className="font-display font-bold text-base text-[#F8FAFC]">Qurinom Solutions</span>
              <span className="px-2 py-0.5 rounded-full bg-[#131B2E] border border-[#1F2C47] text-[#38BDF8] text-[10px] font-mono">ENTERPRISE TECH</span>
            </div>
            <p className="text-xs text-[#94A3B8] leading-relaxed">
              Architecting next-generation enterprise suites, cloud intelligence, and scalable digital ecosystems.
            </p>
          </div>
          {/* Links Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-semibold text-[#FF6A3D] uppercase tracking-wider">Proprietary Platforms</span>
              <div className="flex flex-col gap-1.5 text-xs text-[#94A3B8]">
                <button onClick={() => onSelectTab('qhr')} className="text-left hover:text-white transition-colors">QHR Platform</button>
                <button onClick={() => onSelectProduct(PRODUCTS[1])} className="text-left hover:text-white transition-colors">StoreFlaunt Commerce</button>
                <button onClick={() => onSelectProduct(PRODUCTS[2])} className="text-left hover:text-white transition-colors">WeeVids Studio</button>
                <button onClick={() => onSelectProduct(PRODUCTS[3])} className="text-left hover:text-white transition-colors">My Holy Trip</button>
                <button onClick={() => onSelectProduct(PRODUCTS[4])} className="text-left hover:text-white transition-colors">Snapp Buddy</button>
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-mono text-[11px] font-semibold text-[#38BDF8] uppercase tracking-wider">Enterprise & Connect</span>
              <div className="flex flex-col gap-1.5 text-xs text-[#94A3B8]">
                <button onClick={() => onSelectTab('company')} className="text-left hover:text-white transition-colors">About Company</button>
                <button onClick={() => onOpenDemo('products-catalog')} className="text-left hover:text-white transition-colors">Schedule Demo</button>
                <button onClick={() => onSelectTab('solutions')} className="text-left hover:text-white transition-colors">Security Vault</button>
                <button onClick={() => onOpenDemo('engineering-support')} className="text-left hover:text-white transition-colors">Engineering Support</button>
              </div>
            </div>
          </div>
          {/* Footer Bottom Note */}
          <div className="pt-3 border-t border-[#1F2C47]/50 flex flex-col gap-1 text-[10px] font-mono text-[#64748B]">
            <span>© 2025 QURINOM SOLUTIONS PVT. LTD. ALL RIGHTS RESERVED.</span>
            <span>OBSIDIAN CORE RUNTIME V4.8.2 // HIGH-PERFORMANCE CLOUD</span>
          </div>
        </footer>
      </main>
    </div>
  );
};
