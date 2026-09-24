import React, { useState, useEffect } from 'react';
import { TabType, ProductItem } from './types';
import { PRODUCTS } from './data/products';
import { OverviewPage } from './components/pages/OverviewPage';
import { ProductsPage } from './components/pages/ProductsPage';
import { QHRPage } from './components/pages/QHRPage';
import { SolutionsPage } from './components/pages/SolutionsPage';
import { CompanyPage } from './components/pages/CompanyPage';
import { BottomNav } from './components/BottomNav';
import { DemoModal } from './components/DemoModal';
import { MenuDrawer } from './components/MenuDrawer';
import { ProductDetailModal } from './components/ProductDetailModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  const [previousTab, setPreviousTab] = useState<TabType>('overview');
  const [isDemoOpen, setIsDemoOpen] = useState(false);
  const [demoProduct, setDemoProduct] = useState('qhr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);

  // Scroll to top when changing views
  const handleSelectTab = (tab: TabType) => {
    if (activeTab !== tab) {
      setPreviousTab(activeTab);
      setActiveTab(tab);
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const handleOpenDemo = (productId?: string) => {
    setDemoProduct(productId || (activeTab === 'qhr' ? 'qhr' : 'overview'));
    setIsDemoOpen(true);
  };

  const handleSelectProduct = (product: ProductItem) => {
    if (product.id === 'qhr') {
      handleSelectTab('qhr');
    } else {
      setSelectedProduct(product);
    }
  };

  const handleBackFromQHR = () => {
    handleSelectTab(previousTab === 'qhr' ? 'overview' : previousTab);
  };

  // Sync document title
  useEffect(() => {
    if (activeTab === 'qhr') {
      document.title = 'QHR - HR Management Platform | Qurinom Solutions';
    } else if (activeTab === 'products') {
      document.title = 'Qurinom Solutions - Products Catalog';
    } else {
      document.title = 'Qurinom Solutions - Technology Products Built to Solve Real-World Problems';
    }
  }, [activeTab]);

  return (
    <div className="min-h-screen bg-[#0B0F19] text-[#F8FAFC] flex flex-col font-sans selection:bg-[#FF6A3D] selection:text-white">
      {/* Active Tab View */}
      {activeTab === 'overview' && (
        <OverviewPage
          onSelectTab={handleSelectTab}
          onOpenDemo={handleOpenDemo}
          onSelectProduct={handleSelectProduct}
          onOpenMenu={() => setIsMenuOpen(true)}
        />
      )}

      {activeTab === 'products' && (
        <ProductsPage
          onSelectTab={handleSelectTab}
          onOpenDemo={handleOpenDemo}
          onSelectProduct={handleSelectProduct}
          onOpenMenu={() => setIsMenuOpen(true)}
        />
      )}

      {activeTab === 'qhr' && (
        <QHRPage
          onBack={handleBackFromQHR}
          onOpenDemo={handleOpenDemo}
          onNavigateHome={() => handleSelectTab('overview')}
          onNavigateProducts={() => handleSelectTab('products')}
        />
      )}

      {activeTab === 'solutions' && (
        <SolutionsPage
          onSelectTab={handleSelectTab}
          onOpenDemo={handleOpenDemo}
          onOpenMenu={() => setIsMenuOpen(true)}
        />
      )}

      {activeTab === 'company' && (
        <CompanyPage
          onSelectTab={handleSelectTab}
          onOpenDemo={handleOpenDemo}
          onOpenMenu={() => setIsMenuOpen(true)}
        />
      )}

      {/* Global Bottom Navigation (persistent on overview, products, solutions, company) */}
      {activeTab !== 'qhr' && (
        <BottomNav
          activeTab={activeTab}
          onSelectTab={handleSelectTab}
        />
      )}

      {/* Interactive Live Demo Modal */}
      <DemoModal
        isOpen={isDemoOpen}
        onClose={() => setIsDemoOpen(false)}
        defaultProduct={demoProduct}
      />

      {/* Mobile Drawer Menu */}
      <MenuDrawer
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        activeTab={activeTab}
        onSelectTab={handleSelectTab}
        onOpenDemo={() => setIsDemoOpen(true)}
      />

      {/* Modal for Product Details Preview (StoreFlaunt, WeeVids, My Holy Trip, Snapp Buddy) */}
      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onBookDemo={(prodId) => handleOpenDemo(prodId)}
        onNavigateToQHR={() => handleSelectTab('qhr')}
      />
    </div>
  );
}
