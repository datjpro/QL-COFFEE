import React from 'react';
import { CoffeeProduct, CoffeeCategory } from '../types/coffee';
import { CategoryFilter } from '../components/CategoryFilter';
import { ProductGrid } from '../components/ProductGrid';
import { Coffee } from 'lucide-react';

interface ProductsPageProps {
  products: CoffeeProduct[];
  activeCategory: CoffeeCategory;
  onSelectCategory: (category: CoffeeCategory) => void;
  activeRoast: string;
  onSelectRoast: (roast: string) => void;
  sortBy: 'popular' | 'price-low' | 'price-high' | 'rating';
  onSelectSort: (sort: 'popular' | 'price-low' | 'price-high' | 'rating') => void;
  onQuickView: (product: CoffeeProduct) => void;
  onAddToCart: (product: CoffeeProduct) => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  products,
  activeCategory,
  onSelectCategory,
  activeRoast,
  onSelectRoast,
  sortBy,
  onSelectSort,
  onQuickView,
  onAddToCart,
}) => {
  return (
    <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#251B17] border border-[#D4A373]/30 text-[#D4A373] text-xs font-semibold uppercase tracking-wider mb-2">
          <Coffee className="w-3.5 h-3.5" />
          <span>Danh Mục Cà Phê Di Sản</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#FBF5ED]">
          Tất Cả Sản Phẩm <span className="crema-gradient-text">Hạt &amp; Dụng Cụ</span>
        </h1>
        <p className="text-xs sm:text-sm text-[#FBF5ED]/70 mt-2">
          Hạt mộc tuyển chọn rang mới trong vòng 48h, thức uống đóng chai pha sẵn và dụng cụ pha chế chuyên nghiệp.
        </p>
      </div>

      {/* Category & Sub-filters */}
      <CategoryFilter
        activeCategory={activeCategory}
        onSelectCategory={onSelectCategory}
        activeRoast={activeRoast}
        onSelectRoast={onSelectRoast}
        sortBy={sortBy}
        onSelectSort={onSelectSort}
        totalResults={products.length}
      />

      {/* Grid */}
      <ProductGrid
        products={products}
        onQuickView={onQuickView}
        onAddToCart={onAddToCart}
      />

    </div>
  );
};
