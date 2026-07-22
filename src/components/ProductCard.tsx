import React from 'react';
import { CoffeeProduct } from '../types/coffee';
import { Star, Eye, Plus, Check } from 'lucide-react';

interface ProductCardProps {
  product: CoffeeProduct;
  onQuickView: (product: CoffeeProduct) => void;
  onAddToCart: (product: CoffeeProduct) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  product,
  onQuickView,
  onAddToCart,
}) => {
  const [added, setAdded] = React.useState(false);

  const handleAdd = (e: React.MouseEvent) => {
    e.stopPropagation();
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  };

  const formatVND = (price: number) => {
    return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
  };

  return (
    <div
      onClick={() => onQuickView(product)}
      className="group relative rounded-3xl bg-[#251B17] border border-[#3A2B24] overflow-hidden hover:border-[#D4A373]/50 hover:shadow-[0_10px_30px_rgba(0,0,0,0.5)] transition-all duration-300 flex flex-col justify-between cursor-pointer"
    >
      <div>
        {/* Product Image & Floating Badges */}
        <div className="relative h-60 w-full overflow-hidden bg-[#1C1310]">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 brightness-90 group-hover:brightness-100"
          />

          {/* Dark Overlay gradient for contrast */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#251B17] via-transparent to-transparent opacity-80" />

          {/* Top Left Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.isBestSeller && (
              <span className="px-2.5 py-1 rounded-full bg-[#D4A373] text-[#120C0A] text-[10px] font-extrabold uppercase tracking-wider shadow">
                Bán Chạy Best-Seller
              </span>
            )}
            {product.isNewRelease && (
              <span className="px-2.5 py-1 rounded-full bg-[#E07A5F] text-[#FBF5ED] text-[10px] font-extrabold uppercase tracking-wider shadow">
                Mới Món Di Sản
              </span>
            )}
          </div>

          {/* Top Right Quick View Overlay */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              onQuickView(product);
            }}
            className="absolute top-3 right-3 p-2 rounded-full liquid-glass text-[#FBF5ED] hover:text-[#D4A373] opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md"
            title="Xem nhanh chi tiết"
          >
            <Eye className="w-4 h-4" />
          </button>

          {/* Bottom Left Origin Badge */}
          <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-lg bg-[#120C0A]/80 backdrop-blur-sm border border-[#3A2B24] text-[11px] text-[#D4A373] font-semibold">
            {product.origin.split('(')[0]}
          </div>
        </div>

        {/* Card Body */}
        <div className="p-5 space-y-3">
          
          {/* Rating & Roast Level */}
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-1 text-[#E6C280] font-semibold">
              <Star className="w-3.5 h-3.5 fill-[#E6C280] text-transparent" />
              <span>{product.rating}</span>
              <span className="text-[#FBF5ED]/40 text-[10px]">({product.reviewCount})</span>
            </div>

            <span className="text-[11px] text-[#FBF5ED]/60 font-medium">
              {product.roastLevel}
            </span>
          </div>

          {/* Product Title & Subtitle */}
          <div>
            <h3 className="font-serif text-lg font-bold text-[#FBF5ED] group-hover:text-[#D4A373] transition-colors leading-snug">
              {product.name}
            </h3>
            <p className="text-xs text-[#FBF5ED]/60 line-clamp-1 mt-0.5">
              {product.subtitle}
            </p>
          </div>

          {/* Flavor Notes Tags */}
          <div className="flex items-center gap-1.5 flex-wrap pt-1">
            {product.flavorNotes.slice(0, 3).map((note, idx) => (
              <span
                key={idx}
                className="px-2 py-0.5 rounded-md bg-[#1C1310] text-[#D4A373] text-[10px] font-medium border border-[#3A2B24]"
              >
                {note}
              </span>
            ))}
          </div>

        </div>
      </div>

      {/* Card Footer: Price & Add to Cart */}
      <div className="p-5 pt-0 flex items-center justify-between gap-2">
        <div>
          <span className="text-base font-extrabold text-[#E6C280]">
            {formatVND(product.price)}
          </span>
          {product.originalPrice && (
            <span className="block text-[11px] text-[#FBF5ED]/40 line-through">
              {formatVND(product.originalPrice)}
            </span>
          )}
        </div>

        <button
          onClick={handleAdd}
          className={`p-2.5 rounded-full font-bold text-xs transition-all duration-300 flex items-center gap-1.5 px-3.5 ${
            added
              ? 'bg-emerald-500 text-white shadow-lg'
              : 'bg-[#D4A373] text-[#120C0A] hover:bg-[#E6C280] hover:scale-105 active:scale-95'
          }`}
        >
          {added ? (
            <>
              <Check className="w-4 h-4" />
              <span>Đã thêm</span>
            </>
          ) : (
            <>
              <Plus className="w-4 h-4" />
              <span>Thêm vào giỏ</span>
            </>
          )}
        </button>
      </div>
    </div>
  );
};
