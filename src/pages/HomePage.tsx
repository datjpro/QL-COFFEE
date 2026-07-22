import React from 'react';
import { Link } from 'react-router-dom';
import { CoffeeProduct } from '../types/coffee';
import { HeroSection } from '../components/HeroSection';
import { ProductCard } from '../components/ProductCard';
import { Sparkles, ArrowRight, Compass, ShieldCheck, Flame, BookOpen } from 'lucide-react';
import { CustomerReviews } from '../components/CustomerReviews';

interface HomePageProps {
  products: CoffeeProduct[];
  onQuickView: (product: CoffeeProduct) => void;
  onAddToCart: (product: CoffeeProduct) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  products,
  onQuickView,
  onAddToCart,
}) => {
  const bestSellers = products.filter((p) => p.isBestSeller || p.rating >= 4.9).slice(0, 4);

  return (
    <div>
      {/* Hero Section */}
      <HeroSection />

      {/* Best Sellers Showcase Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-2">
              <Flame className="w-3.5 h-3.5 text-[#E07A5F]" />
              <span>Tuyển Chọn Bán Chạy</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#FBF5ED]">
              Sản Phẩm <span className="crema-gradient-text">Được Yêu Thích Nhất</span>
            </h2>
          </div>

          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A373] hover:text-[#E6C280] transition-colors group"
          >
            <span>Xem tất cả danh mục sản phẩm</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestSellers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onQuickView={onQuickView}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>
      </section>

      {/* Virtual Phin Lab Banner Teaser */}
      <section className="py-16 bg-[#1C1310] border-y border-[#3A2B24] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-8 items-center bg-[#251B17] p-8 sm:p-12 rounded-3xl border border-[#D4A373]/30 shadow-2xl relative">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#1C1310] text-[#D4A373] text-xs font-semibold uppercase">
                <Sparkles className="w-3.5 h-3.5 text-[#E6C280]" />
                <span>Trải Nghiệm Đáo Để Virtual Phin Lab</span>
              </div>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF5ED]">
                Tự Thiết Kế Tỷ Lệ Cà Phê Theo Gu Cá Nhân
              </h3>
              <p className="text-xs sm:text-sm text-[#FBF5ED]/70 leading-relaxed max-w-xl">
                Điều chỉnh từng gram hạt rang mộc Robusta Đắk Lắk &amp; Arabica Cầu Đất, tỷ lệ sữa đặc và nhiệt độ nước chiết xuất. Chúng tôi sẽ phối trộn và đóng gói van 1 chiều giao tận nhà!
              </p>
              <div className="pt-2">
                <Link
                  to="/customizer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] font-extrabold text-xs hover:scale-105 transition-transform shadow-lg"
                >
                  <span>Bắt đầu tự phối hạt ngay</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 flex justify-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-b from-[#D4A373]/20 to-transparent p-4 flex items-center justify-center">
                <div className="w-40 h-40 rounded-full bg-[#120C0A] border-2 border-[#D4A373] flex flex-col items-center justify-center text-center p-4">
                  <span className="font-serif text-xl font-bold text-[#E6C280]">100% Custom</span>
                  <span className="text-[10px] text-[#FBF5ED]/60 mt-1">Dự đoán hương vị &amp; Caffeine theo thời gian thực</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Encyclopedia Knowledge Teaser */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8 items-center bg-[#1C1310] p-8 rounded-3xl border border-[#3A2B24]">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#251B17] text-[#E6C280] text-xs font-semibold">
              <BookOpen className="w-3.5 h-3.5" />
              <span>Góc Kiến Thức Cà Phê</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#FBF5ED]">
              Khám Phá Cẩm Nang &amp; Huyền Thoại Cà Phê Việt
            </h3>
            <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
              Bạn có biết sự khác biệt giữa sơ chế Honey và Anaerobic Fermentation? Hoặc bí quyết đánh bông kem trứng Hà Nội không tanh? Đọc ngay cẩm nang chuyên sâu của chúng tôi.
            </p>
            <Link
              to="/knowledge"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#D4A373] hover:text-[#FBF5ED] transition-colors"
            >
              <span>Vào Cẩm Nang Cà Phê</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-4 text-xs">
            <div className="p-4 rounded-2xl bg-[#251B17] border border-[#3A2B24]">
              <span className="text-lg">🌋</span>
              <h4 className="font-bold text-[#FBF5ED] mt-1">Thổ Nhượng 3 Miền</h4>
              <p className="text-[10px] text-[#FBF5ED]/50">Cầu Đất, Đắk Lắk, Sơn La</p>
            </div>
            <div className="p-4 rounded-2xl bg-[#251B17] border border-[#3A2B24]">
              <span className="text-lg">☕</span>
              <h4 className="font-bold text-[#FBF5ED] mt-1">Bí Quyết Pha Phin</h4>
              <p className="text-[10px] text-[#FBF5ED]/50">Chuẩn 25g bột / 100ml nước</p>
            </div>
          </div>
        </div>
      </section>

      {/* Customer Testimonials */}
      <CustomerReviews />
    </div>
  );
};
