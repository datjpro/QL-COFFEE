import React, { useState, useEffect } from 'react';
import { ShoppingBag, Search, Coffee, MapPin, Menu, X, Sparkles, PhoneCall } from 'lucide-react';

interface NavbarProps {
  cartCount: number;
  onOpenCart: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  cartCount,
  onOpenCart,
  searchQuery,
  onSearchChange,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'liquid-glass py-3 bg-[#120C0A]/90 backdrop-blur-md border-b border-[#3A2B24]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#D4A373] to-[#E6C280] p-0.5 shadow-lg group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#120C0A] rounded-full flex items-center justify-center">
                <Coffee className="w-5 h-5 text-[#D4A373] group-hover:rotate-12 transition-transform duration-300" />
              </div>
            </div>
            <div>
              <span className="font-serif text-2xl font-bold tracking-tight text-[#FBF5ED] group-hover:text-[#D4A373] transition-colors">
                VÀĐÀ<span className="text-[#D4A373]">.</span>COFFEE
              </span>
              <span className="block text-[10px] tracking-widest text-[#D4A373] uppercase font-semibold">
                Cà Phê Di Sản Việt
              </span>
            </div>
          </a>

          {/* Navigation Desktop */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-[#FBF5ED]/80">
            <a href="#catalog" className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5">
              <span>Sản Phẩm</span>
            </a>
            <a href="#phin-customizer" className="hover:text-[#D4A373] transition-colors flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" />
              <span>Pha Phin Virtual</span>
            </a>
            <a href="#heritage" className="hover:text-[#D4A373] transition-colors">
              Hành Trình Di Sản
            </a>
            <a href="#reviews" className="hover:text-[#D4A373] transition-colors">
              Đánh Giá
            </a>
            <a href="#footer" className="hover:text-[#D4A373] transition-colors flex items-center gap-1 text-xs text-[#D4A373] bg-[#251B17] px-3 py-1.5 rounded-full border border-[#3A2B24]">
              <MapPin className="w-3 h-3" />
              <span>Hà Nội • Sài Gòn • Đà Lạt</span>
            </a>
          </nav>

          {/* Actions Right */}
          <div className="flex items-center gap-3">
            {/* Search Input Desktop */}
            <div className="relative hidden lg:block w-56">
              <input
                type="text"
                placeholder="Tìm cà phê, dụng cụ..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#251B17]/80 text-[#FBF5ED] text-xs px-3.5 py-2 pl-9 rounded-full border border-[#3A2B24] focus:outline-none focus:border-[#D4A373] transition-colors placeholder:text-[#FBF5ED]/40"
              />
              <Search className="w-3.5 h-3.5 text-[#D4A373] absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            {/* Phone Hot-line */}
            <a
              href="tel:19006868"
              className="hidden sm:flex items-center gap-1.5 text-xs text-[#D4A373] hover:text-[#FBF5ED] transition-colors px-2.5 py-1.5 rounded-full border border-[#3A2B24]/60 bg-[#1C1310]/50"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span className="font-semibold">1900 6868</span>
            </a>

            {/* Cart Button */}
            <button
              onClick={onOpenCart}
              className="relative p-2.5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] hover:opacity-90 active:scale-95 transition-all shadow-md flex items-center gap-2 px-4 font-semibold text-xs"
              aria-label="Giỏ hàng"
            >
              <ShoppingBag className="w-4 h-4" />
              <span className="hidden sm:inline">Giỏ hàng</span>
              {cartCount > 0 && (
                <span className="bg-[#120C0A] text-[#FBF5ED] text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[#FBF5ED] hover:text-[#D4A373]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 lg:hidden">
          <div className="relative">
            <input
              type="text"
              placeholder="Tìm Robusta, Arabica, Cà phê muối..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#251B17] text-[#FBF5ED] text-xs px-3.5 py-2 pl-9 rounded-full border border-[#3A2B24] focus:outline-none focus:border-[#D4A373]"
            />
            <Search className="w-3.5 h-3.5 text-[#D4A373] absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-3 p-4 rounded-2xl bg-[#1C1310] border border-[#3A2B24] space-y-3">
            <a
              href="#catalog"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#FBF5ED] hover:text-[#D4A373]"
            >
              Sản Phẩm Cà Phê
            </a>
            <a
              href="#phin-customizer"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#FBF5ED] hover:text-[#D4A373]"
            >
              Giả Lập Pha Phin Virtual
            </a>
            <a
              href="#heritage"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#FBF5ED] hover:text-[#D4A373]"
            >
              Hành Trình Di Sản Việt
            </a>
            <a
              href="#reviews"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-sm text-[#FBF5ED] hover:text-[#D4A373]"
            >
              Đánh Giá Khách Hàng
            </a>
          </div>
        )}
      </div>
    </header>
  );
};
