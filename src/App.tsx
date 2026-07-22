import React, { useState, useMemo } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import { COFFEE_PRODUCTS } from './data/coffeeProducts';
import { CoffeeProduct, CartItem, CoffeeCategory, GrindOption } from './types/coffee';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { SideBanners } from './components/SideBanners';
import { FloatingPromotionToast } from './components/FloatingPromotionToast';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';

// Pages
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductDetailPage } from './pages/ProductDetailPage';
import { PromotionsPage } from './pages/PromotionsPage';
import { KnowledgePage } from './pages/KnowledgePage';
import { AboutPage } from './pages/AboutPage';
import { PhinCustomizer } from './components/PhinCustomizer';

export function AppContent() {
  // Products & Filter state
  const [products, setProducts] = useState<CoffeeProduct[]>(COFFEE_PRODUCTS);
  const [activeCategory, setActiveCategory] = useState<CoffeeCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeRoast, setActiveRoast] = useState('Tất Cả Mức Rang');
  const [sortBy, setSortBy] = useState<'popular' | 'price-low' | 'price-high' | 'rating'>('popular');

  // Modals & Cart state
  const [quickViewProduct, setQuickViewProduct] = useState<CoffeeProduct | null>(null);
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isGiftWrap, setIsGiftWrap] = useState(false);

  // Add to cart handler
  const handleAddToCart = (
    product: CoffeeProduct,
    quantity: number = 1,
    grind: GrindOption = 'Pha Phin (Medium-Coarse)'
  ) => {
    setCartItems((prevItems) => {
      const existingIdx = prevItems.findIndex((item) => item.product.id === product.id && item.selectedGrind === grind);
      if (existingIdx > -1) {
        const updated = [...prevItems];
        updated[existingIdx].quantity += quantity;
        return updated;
      } else {
        return [...prevItems, { product, quantity, selectedGrind: grind }];
      }
    });
  };

  // Cart quantity update
  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      handleRemoveItem(productId);
      return;
    }
    setCartItems((prev) =>
      prev.map((item) => (item.product.id === productId ? { ...item, quantity: newQuantity } : item))
    );
  };

  // Cart item remove
  const handleRemoveItem = (productId: string) => {
    setCartItems((prev) => prev.filter((item) => item.product.id !== productId));
  };

  // Proceed to checkout
  const handleProceedToCheckout = (discount: number, giftWrap: boolean) => {
    setDiscountAmount(discount);
    setIsGiftWrap(giftWrap);
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  // Filtered products computation
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        if (activeCategory !== 'all' && p.category !== activeCategory) return false;
        if (activeRoast !== 'Tất Cả Mức Rang' && p.roastLevel !== activeRoast) return false;
        if (searchQuery.trim()) {
          const q = searchQuery.toLowerCase();
          const matchName = p.name.toLowerCase().includes(q);
          const matchSub = p.subtitle.toLowerCase().includes(q);
          const matchOrigin = p.origin.toLowerCase().includes(q);
          const matchFlavor = p.flavorNotes.some((n) => n.toLowerCase().includes(q));
          if (!matchName && !matchSub && !matchOrigin && !matchFlavor) return false;
        }
        return true;
      })
      .sort((a, b) => {
        if (sortBy === 'price-low') return a.price - b.price;
        if (sortBy === 'price-high') return b.price - a.price;
        if (sortBy === 'rating') return b.rating - a.rating;
        return (b.reviewCount || 0) - (a.reviewCount || 0);
      });
  }, [products, activeCategory, searchQuery, activeRoast, sortBy]);

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#120C0A] text-[#FBF5ED] font-sans antialiased selection:bg-[#D4A373] selection:text-[#120C0A] flex flex-col justify-between">
      
      <div>
        {/* Navigation Bar */}
        <Navbar
          cartCount={totalCartItems}
          onOpenCart={() => setIsCartOpen(true)}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
        />

        {/* Side Banners Left & Right */}
        <SideBanners />

        {/* Page Routes */}
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                products={products}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={(p) => handleAddToCart(p, 1)}
              />
            }
          />

          <Route
            path="/products"
            element={
              <ProductsPage
                products={filteredProducts}
                activeCategory={activeCategory}
                onSelectCategory={setActiveCategory}
                activeRoast={activeRoast}
                onSelectRoast={setActiveRoast}
                sortBy={sortBy}
                onSelectSort={setSortBy}
                onQuickView={(p) => setQuickViewProduct(p)}
                onAddToCart={(p) => handleAddToCart(p, 1)}
              />
            }
          />

          <Route
            path="/product/:id"
            element={
              <ProductDetailPage
                products={products}
                onAddToCart={handleAddToCart}
                onQuickView={(p) => setQuickViewProduct(p)}
              />
            }
          />

          <Route
            path="/customizer"
            element={
              <div className="pt-20">
                <PhinCustomizer
                  onAddToCart={(prod, grind) => handleAddToCart(prod, 1, grind as GrindOption)}
                />
              </div>
            }
          />

          <Route path="/promotions" element={<PromotionsPage />} />
          <Route path="/knowledge" element={<KnowledgePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer />

      {/* Floating Non-Intrusive Campaign Toast */}
      <FloatingPromotionToast />

      {/* Global Modals */}
      <ProductQuickViewModal
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        isOpen={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        onUpdateQuantity={handleUpdateQuantity}
        onRemoveItem={handleRemoveItem}
        onProceedToCheckout={handleProceedToCheckout}
      />

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        discountAmount={discountAmount}
        isGiftWrap={isGiftWrap}
        onOrderSuccess={() => {
          setCartItems([]);
          setIsCheckoutOpen(false);
        }}
      />

    </div>
  );
}

export function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
