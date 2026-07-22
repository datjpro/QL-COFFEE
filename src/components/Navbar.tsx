import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ShoppingBag, Search, Coffee, MapPin, Menu, X, Sparkles, PhoneCall, Tag, BookOpen } from 'lucide-react';

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
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (location.pathname !== '/products') {
      navigate('/products');
    }
  };

  const navLinks = [
    { path: '/', label: 'Trang Chủ' },
    { path: '/products', label: 'Sản Phẩm' },
    { path: '/customizer', label: 'Pha Phin Virtual', icon: <Sparkles className="w-3.5 h-3.5 text-[#D4A373]" /> },
    { path: '/promotions', label: 'Ưu Đãi & Khuyến Mãi', badge: 'HOT' },
    { path: '/knowledge', label: 'Cẩm Nang Cà Phê', icon: <BookOpen className="w-3.5 h-3.5 text-[#E6C280]" /> },
    { path: '/about', label: 'Về Vàđà Coffee' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'liquid-glass py-3 bg-[#120C0A]/95 backdrop-blur-md border-b border-[#3A2B24]'
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
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
          </Link>

          {/* Navigation Links Desktop */}
          <nav className="hidden lg:flex items-center gap-6 text-xs font-semibold text-[#FBF5ED]/80">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center gap-1.5 transition-colors relative py-1 ${
                    isActive
                      ? 'text-[#D4A373] font-bold'
                      : 'hover:text-[#D4A373]'
                  }`}
                >
                  {link.icon}
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#E07A5F] text-[#FBF5ED] text-[9px] font-extrabold uppercase">
                      {link.badge}
                    </span>
                  )}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#D4A373] rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Actions Right */}
          <div className="flex items-center gap-3">
            
            {/* Search Input Desktop */}
            <form onSubmit={handleSearchSubmit} className="relative hidden xl:block w-48">
              <input
                type="text"
                placeholder="Tìm hạt, dụng cụ..."
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                className="w-full bg-[#251B17]/80 text-[#FBF5ED] text-xs px-3.5 py-2 pl-9 rounded-full border border-[#3A2B24] focus:outline-none focus:border-[#D4A373] placeholder:text-[#FBF5ED]/40"
              />
              <Search className="w-3.5 h-3.5 text-[#D4A373] absolute left-3 top-1/2 -translate-y-1/2" />
            </form>

            {/* Hotline */}
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
              className="lg:hidden p-2 text-[#FBF5ED] hover:text-[#D4A373]"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        <div className="mt-3 xl:hidden">
          <form onSubmit={handleSearchSubmit} className="relative">
            <input
              type="text"
              placeholder="Tìm Robusta, Arabica, Cà phê muối..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="w-full bg-[#251B17] text-[#FBF5ED] text-xs px-3.5 py-2 pl-9 rounded-full border border-[#3A2B24] focus:outline-none focus:border-[#D4A373]"
            />
            <Search className="w-3.5 h-3.5 text-[#D4A373] absolute left-3 top-1/2 -translate-y-1/2" />
          </form>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-[#1C1310] border border-[#3A2B24] space-y-3">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`block text-sm py-1.5 px-3 rounded-xl transition-colors ${
                  location.pathname === link.path
                    ? 'bg-[#D4A373] text-[#120C0A] font-bold'
                    : 'text-[#FBF5ED] hover:text-[#D4A373]'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    {link.icon}
                    <span>{link.label}</span>
                  </div>
                  {link.badge && (
                    <span className="px-1.5 py-0.5 rounded-full bg-[#E07A5F] text-[#FBF5ED] text-[9px] font-extrabold">
                      {link.badge}
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
};
