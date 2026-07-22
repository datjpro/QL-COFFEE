import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { CoffeeProduct, GrindOption } from '../types/coffee';
import { ProductCard } from '../components/ProductCard';
import { ArrowLeft, Star, ShoppingBag, MapPin, Check, ShieldCheck, Truck, RotateCcw } from 'lucide-react';

interface ProductDetailPageProps {
  products: CoffeeProduct[];
  onAddToCart: (product: CoffeeProduct, quantity: number, grind: GrindOption) => void;
  onQuickView: (product: CoffeeProduct) => void;
}

export const ProductDetailPage: React.FC<ProductDetailPageProps> = ({
  products,
  onAddToCart,
  onQuickView,
}) => {
  const { id } = useParams<{ id: string }>();
  const product = products.find((p) => p.id === id);

  const [quantity, setQuantity] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState<GrindOption>('Pha Phin (Medium-Coarse)');
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="pt-32 pb-20 text-center max-w-md mx-auto">
        <h2 className="text-xl font-bold text-[#FBF5ED] mb-4">Không tìm thấy sản phẩm này!</h2>
        <Link to="/products" className="px-6 py-2.5 rounded-full bg-[#D4A373] text-[#120C0A] text-xs font-bold">
          Quay lại danh mục sản phẩm
        </Link>
      </div>
    );
  }

  const formatVND = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedGrind);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const grindOptions: GrindOption[] = [
    'Nguyên Hạt (Whole Bean)',
    'Pha Phin (Medium-Coarse)',
    'Pha Máy (Espresso)',
    'Cold Brew (Coarse)',
  ];

  const relatedProducts = products.filter((p) => p.id !== product.id && p.category === product.category).slice(0, 3);

  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Back Button */}
      <div className="mb-6">
        <Link to="/products" className="inline-flex items-center gap-1.5 text-xs text-[#D4A373] hover:text-[#FBF5ED] transition-colors">
          <ArrowLeft className="w-4 h-4" />
          <span>Quay lại Danh mục sản phẩm</span>
        </Link>
      </div>

      {/* Main Detail Grid */}
      <div className="grid lg:grid-cols-12 gap-10 bg-[#251B17] p-6 sm:p-10 rounded-3xl border border-[#3A2B24] shadow-2xl">
        
        {/* Left Column: Image & Origin Badge */}
        <div className="lg:col-span-6 relative space-y-4">
          <div className="relative rounded-2xl overflow-hidden bg-[#1C1310] border border-[#3A2B24] h-[450px]">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-4 left-4 flex flex-col gap-2">
              {product.isBestSeller && (
                <span className="px-3 py-1 rounded-full bg-[#D4A373] text-[#120C0A] text-xs font-extrabold uppercase shadow">
                  Best-Seller
                </span>
              )}
            </div>
            <div className="absolute bottom-4 left-4 right-4 liquid-glass p-3 rounded-xl flex items-center gap-2 text-xs text-[#FBF5ED]">
              <MapPin className="w-4 h-4 text-[#D4A373]" />
              <span>Nguồn gốc: <strong className="text-[#E6C280]">{product.origin}</strong></span>
            </div>
          </div>
        </div>

        {/* Right Column: Info & Ordering */}
        <div className="lg:col-span-6 space-y-6 flex flex-col justify-between">
          
          <div className="space-y-4">
            <div className="flex items-center justify-between text-xs">
              <div className="flex items-center gap-1 text-[#E6C280] font-bold">
                <Star className="w-4 h-4 fill-[#E6C280] text-transparent" />
                <span>{product.rating}</span>
                <span className="text-[#FBF5ED]/40 font-normal">({product.reviewCount} đánh giá)</span>
              </div>
              <span className="px-3 py-1 rounded-full bg-[#1C1310] text-[#D4A373] font-semibold border border-[#3A2B24]">
                {product.roastLevel}
              </span>
            </div>

            <div>
              <h1 className="font-serif text-3xl font-bold text-[#FBF5ED]">
                {product.name}
              </h1>
              <p className="text-xs text-[#D4A373] font-semibold mt-1">
                {product.subtitle}
              </p>
            </div>

            <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
              {product.description}
            </p>

            {/* Flavor Notes */}
            <div>
              <span className="block text-[11px] font-semibold text-[#FBF5ED]/50 uppercase tracking-wider mb-2">
                Hương Vị Nổi Bật:
              </span>
              <div className="flex items-center gap-2 flex-wrap">
                {product.flavorNotes.map((note, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-lg bg-[#1C1310] text-[#D4A373] text-xs font-medium border border-[#3A2B24]"
                  >
                    ✨ {note}
                  </span>
                ))}
              </div>
            </div>

            {/* Grind Selector */}
            <div className="space-y-2">
              <span className="block text-[11px] font-semibold text-[#FBF5ED]/50 uppercase tracking-wider">
                Chọn Kích Thước Xay:
              </span>
              <div className="grid grid-cols-2 gap-2">
                {grindOptions.map((grind) => {
                  const isSelected = selectedGrind === grind;
                  return (
                    <button
                      key={grind}
                      onClick={() => setSelectedGrind(grind)}
                      className={`p-3 rounded-xl text-xs font-semibold border text-left transition-all ${
                        isSelected
                          ? 'bg-[#D4A373] text-[#120C0A] border-[#D4A373]'
                          : 'bg-[#1C1310] text-[#FBF5ED]/70 border-[#3A2B24] hover:text-[#FBF5ED]'
                      }`}
                    >
                      {grind}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs text-[#FBF5ED]/60 font-semibold">Số lượng:</span>
              <div className="flex items-center border border-[#3A2B24] rounded-full bg-[#1C1310]">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 text-sm text-[#FBF5ED] hover:text-[#D4A373]"
                >
                  -
                </button>
                <span className="px-4 text-xs font-bold text-[#E6C280]">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 text-sm text-[#FBF5ED] hover:text-[#D4A373]"
                >
                  +
                </button>
              </div>
            </div>
          </div>

          {/* Pricing & Add to Cart */}
          <div className="pt-6 border-t border-[#3A2B24] flex items-center justify-between gap-4">
            <div>
              <span className="block text-[10px] text-[#FBF5ED]/40 uppercase font-semibold">Tổng tiền</span>
              <span className="text-3xl font-extrabold text-[#E6C280]">
                {formatVND(product.price * quantity)}
              </span>
            </div>

            <button
              onClick={handleAdd}
              className={`px-8 py-4 rounded-full font-bold text-xs flex items-center gap-2 transition-all shadow-lg ${
                added
                  ? 'bg-emerald-500 text-white'
                  : 'bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] hover:scale-105 active:scale-95'
              }`}
            >
              {added ? (
                <>
                  <Check className="w-4 h-4" />
                  <span>Đã thêm vào giỏ!</span>
                </>
              ) : (
                <>
                  <ShoppingBag className="w-4 h-4" />
                  <span>Thêm vào giỏ hàng</span>
                </>
              )}
            </button>
          </div>

        </div>

      </div>

      {/* Related Products Section */}
      {relatedProducts.length > 0 && (
        <div className="mt-16 space-y-6">
          <h3 className="font-serif text-2xl font-bold text-[#FBF5ED]">
            Sản Phẩm <span className="crema-gradient-text">Tương Tự</span>
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {relatedProducts.map((rel) => (
              <ProductCard
                key={rel.id}
                product={rel}
                onQuickView={onQuickView}
                onAddToCart={(p) => onAddToCart(p, 1, 'Pha Phin (Medium-Coarse)')}
              />
            ))}
          </div>
        </div>
      )}

    </div>
  );
};
