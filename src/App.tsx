import React, { useState, useMemo } from 'react';
import { COFFEE_PRODUCTS } from './data/coffeeProducts';
import { CoffeeProduct, CartItem, CoffeeCategory, GrindOption } from './types/coffee';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { CategoryFilter } from './components/CategoryFilter';
import { ProductGrid } from './components/ProductGrid';
import { PhinCustomizer } from './components/PhinCustomizer';
import { HeritageStory } from './components/HeritageStory';
import { CustomerReviews } from './components/CustomerReviews';
import { Footer } from './components/Footer';
import { ProductQuickViewModal } from './components/ProductQuickViewModal';
import { CartDrawer } from './components/CartDrawer';
import { CheckoutModal } from './components/CheckoutModal';

export function App() {
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

  // Filtered & Sorted products computation
  const filteredProducts = useMemo(() => {
    return products
      .filter((p) => {
        // Category filter
        if (activeCategory !== 'all' && p.category !== activeCategory) return false;

        // Roast filter
        if (activeRoast !== 'Tất Cả Mức Rang' && p.roastLevel !== activeRoast) return false;

        // Search query filter
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
        return (b.reviewCount || 0) - (a.reviewCount || 0); // popular default
      });
  }, [products, activeCategory, searchQuery, activeRoast, sortBy]);

  const totalCartItems = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-[#120C0A] text-[#FBF5ED] font-sans antialiased selection:bg-[#D4A373] selection:text-[#120C0A]">
      
      {/* Sticky Header Navigation */}
      <Navbar
        cartCount={totalCartItems}
        onOpenCart={() => setIsCartOpen(true)}
        searchQuery={searchQuery}
        onSearchChange={setSearchQuery}
      />

      {/* Main Content */}
      <main>
        {/* Hero Banner */}
        <HeroSection />

        {/* Product Catalog Section */}
        <section id="catalog" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 scroll-mt-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FBF5ED]">
              Bộ Sưu Tập <span className="crema-gradient-text">Cà Phê Di Sản</span>
            </h2>
            <p className="text-xs sm:text-sm text-[#FBF5ED]/70 mt-2">
              Tuyển chọn những hạt cà phê hảo hạng nhất từ độ cao 1.650m Cầu Đất &amp; Đất đỏ Bazan Đắk Lắk.
            </p>
          </div>

          {/* Filters Bar */}
          <CategoryFilter
            activeCategory={activeCategory}
            onSelectCategory={setActiveCategory}
            activeRoast={activeRoast}
            onSelectRoast={setActiveRoast}
            sortBy={sortBy}
            onSelectSort={setSortBy}
            totalResults={filteredProducts.length}
          />

          {/* Product Grid */}
          <ProductGrid
            products={filteredProducts}
            onQuickView={(prod) => setQuickViewProduct(prod)}
            onAddToCart={(prod) => handleAddToCart(prod, 1)}
          />
        </section>

        {/* Virtual Phin Customizer */}
        <PhinCustomizer
          onAddToCart={(prod, grind) => handleAddToCart(prod, 1, grind as GrindOption)}
        />

        {/* Heritage Story Section */}
        <HeritageStory />

        {/* Customer Testimonials */}
        <CustomerReviews />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
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

export default App;
