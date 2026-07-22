import React, { useState } from 'react';
import { CoffeeProduct, GrindOption } from '../types/coffee';
import { X, Star, ShoppingBag, Check, ShieldCheck, MapPin, Sparkles } from 'lucide-react';

interface ProductQuickViewModalProps {
  product: CoffeeProduct | null;
  onClose: () => void;
  onAddToCart: (product: CoffeeProduct, quantity: number, grind: GrindOption) => void;
}

export const ProductQuickViewModal: React.FC<ProductQuickViewModalProps> = ({
  product,
  onClose,
  onAddToCart,
}) => {
  if (!product) return null;

  const [quantity, setQuantity] = useState(1);
  const [selectedGrind, setSelectedGrind] = useState<GrindOption>('Pha Phin (Medium-Coarse)');
  const [added, setAdded] = useState(false);

  const grindOptions: GrindOption[] = [
    'Nguyên Hạt (Whole Bean)',
    'Pha Phin (Medium-Coarse)',
    'Pha Máy (Espresso)',
    'Cold Brew (Coarse)',
  ];

  const formatVND = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  const handleAdd = () => {
    onAddToCart(product, quantity, selectedGrind);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#120C0A]/80 backdrop-blur-md overflow-y-auto animate-fade-rise">
      
      {/* Modal Container */}
      <div className="relative w-full max-w-4xl bg-[#251B17] border border-[#D4A373]/30 rounded-3xl overflow-hidden shadow-2xl my-8">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2.5 rounded-full liquid-glass text-[#FBF5ED] hover:text-[#D4A373] transition-colors"
          aria-label="Đóng modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid md:grid-cols-12 gap-0">
          
          {/* Left Column: Product Image & Flavor Tags */}
          <div className="md:col-span-6 relative bg-[#1C1310] min-h-[350px] flex items-center justify-center p-6">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover max-h-[450px] rounded-2xl border border-[#3A2B24]"
            />
            <div className="absolute bottom-10 left-10 right-10 liquid-glass p-4 rounded-2xl border border-[#D4A373]/30">
              <div className="flex items-center gap-2 text-xs text-[#D4A373] font-semibold mb-1">
                <MapPin className="w-3.5 h-3.5" />
                <span>Nguồn gốc xuất xứ:</span>
              </div>
              <p className="text-sm font-bold text-[#FBF5ED]">{product.origin}</p>
            </div>
          </div>

          {/* Right Column: Details & Grind Selector */}
          <div className="md:col-span-6 p-6 sm:p-8 space-y-6 flex flex-col justify-between">
            
            <div className="space-y-4">
              
              {/* Rating & Category */}
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-1 text-[#E6C280] font-bold">
                  <Star className="w-4 h-4 fill-[#E6C280] text-transparent" />
                  <span>{product.rating}</span>
                  <span className="text-[#FBF5ED]/40 font-normal">({product.reviewCount} đánh giá từ khách mua)</span>
                </div>
                <span className="px-2.5 py-0.5 rounded-full bg-[#1C1310] text-[#D4A373] font-semibold border border-[#3A2B24]">
                  {product.roastLevel}
                </span>
              </div>

              {/* Title & Subtitle */}
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FBF5ED]">
                  {product.name}
                </h2>
                <p className="text-xs text-[#D4A373] font-medium mt-1">
                  {product.subtitle}
                </p>
              </div>

              {/* Description */}
              <p className="text-xs text-[#FBF5ED]/70 leading-relaxed">
                {product.description}
              </p>

              {/* Flavor Profile Radar Chips */}
              <div>
                <span className="block text-[11px] font-semibold text-[#FBF5ED]/50 uppercase tracking-wider mb-2">
                  Tầng Hương Vị Nổi Bật:
                </span>
                <div className="flex items-center gap-1.5 flex-wrap">
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
                  Kích Thước Xay (Grind Size):
                </span>
                <div className="grid grid-cols-2 gap-2">
                  {grindOptions.map((grind) => {
                    const isSelected = selectedGrind === grind;
                    return (
                      <button
                        key={grind}
                        onClick={() => setSelectedGrind(grind)}
                        className={`p-2.5 rounded-xl text-xs font-semibold border text-left transition-all ${
                          isSelected
                            ? 'bg-[#D4A373] text-[#120C0A] border-[#D4A373]'
                            : 'bg-[#1C1310] text-[#FBF5ED]/70 border-[#3A2B24] hover:text-[#FBF5ED] hover:border-[#D4A373]/40'
                        }`}
                      >
                        {grind}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Quantity Controls */}
              <div className="flex items-center gap-4 pt-2">
                <span className="text-xs text-[#FBF5ED]/60 font-semibold">Số lượng:</span>
                <div className="flex items-center border border-[#3A2B24] rounded-full bg-[#1C1310]">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-3.5 py-1.5 text-sm text-[#FBF5ED] hover:text-[#D4A373]"
                  >
                    -
                  </button>
                  <span className="px-3 py-1.5 text-xs font-bold text-[#E6C280]">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-3.5 py-1.5 text-sm text-[#FBF5ED] hover:text-[#D4A373]"
                  >
                    +
                  </button>
                </div>
              </div>

            </div>

            {/* Modal Bottom Bar: Price & Submit Button */}
            <div className="pt-4 border-t border-[#3A2B24] flex items-center justify-between gap-4">
              <div>
                <span className="block text-[10px] text-[#FBF5ED]/40 uppercase font-semibold">Tổng tiền sản phẩm</span>
                <span className="text-2xl font-extrabold text-[#E6C280]">
                  {formatVND(product.price * quantity)}
                </span>
              </div>

              <button
                onClick={handleAdd}
                className={`px-8 py-3.5 rounded-full font-bold text-xs flex items-center gap-2 transition-all shadow-lg ${
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

      </div>

    </div>
  );
};
