import React from 'react';
import { CoffeeCategory } from '../types/coffee';
import { Coffee, Package, Wine, Wrench, Gift, SlidersHorizontal } from 'lucide-react';

interface CategoryFilterProps {
  activeCategory: CoffeeCategory;
  onSelectCategory: (category: CoffeeCategory) => void;
  activeRoast: string;
  onSelectRoast: (roast: string) => void;
  sortBy: 'popular' | 'price-low' | 'price-high' | 'rating';
  onSelectSort: (sort: 'popular' | 'price-low' | 'price-high' | 'rating') => void;
  totalResults: number;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  activeCategory,
  onSelectCategory,
  activeRoast,
  onSelectRoast,
  sortBy,
  onSelectSort,
  totalResults,
}) => {
  const categories: { id: CoffeeCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'Tất Cả Sản Phẩm', icon: <Coffee className="w-4 h-4" /> },
    { id: 'beans', label: 'Hạt Cà Phê Mộc', icon: <Package className="w-4 h-4" /> },
    { id: 'ready_drink', label: 'Cà Phê Chai Đóng Sẵn', icon: <Wine className="w-4 h-4" /> },
    { id: 'tools', label: 'Dụng Cụ Pha Phin', icon: <Wrench className="w-4 h-4" /> },
    { id: 'gifts', label: 'Hộp Quà Di Sản', icon: <Gift className="w-4 h-4" /> },
  ];

  const roastLevels = [
    'Tất Cả Mức Rang',
    'Rang Vừa (Medium)',
    'Rang Đậm (Dark)',
    'Rang Sáng (Light)',
    'Phối Trộn (Blend)',
  ];

  return (
    <div className="space-y-6">
      
      {/* Category Tabs */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        {categories.map((cat) => {
          const isActive = activeCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => onSelectCategory(cat.id)}
              className={`flex items-center gap-2 px-5 py-3 rounded-2xl text-xs sm:text-sm font-semibold whitespace-nowrap transition-all duration-300 ${
                isActive
                  ? 'bg-gradient-to-r from-[#D4A373] to-[#E6C280] text-[#120C0A] shadow-lg shadow-[#D4A373]/20 scale-105'
                  : 'bg-[#251B17] text-[#FBF5ED]/70 hover:text-[#FBF5ED] hover:bg-[#3A2B24] border border-[#3A2B24]'
              }`}
            >
              {cat.icon}
              <span>{cat.label}</span>
            </button>
          );
        })}
      </div>

      {/* Sub-Filters Bar: Roast Levels & Sorting */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-4 rounded-2xl bg-[#1C1310] border border-[#3A2B24]">
        
        {/* Roast Level Pills */}
        <div className="flex items-center gap-2 flex-wrap">
          <div className="flex items-center gap-1.5 text-xs text-[#D4A373] font-medium mr-1">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Mức rang:</span>
          </div>
          {roastLevels.map((roast) => {
            const isSelected = activeRoast === roast;
            return (
              <button
                key={roast}
                onClick={() => onSelectRoast(roast)}
                className={`px-3 py-1 rounded-full text-xs font-medium transition-colors ${
                  isSelected
                    ? 'bg-[#D4A373] text-[#120C0A] font-bold'
                    : 'bg-[#251B17] text-[#FBF5ED]/60 hover:text-[#FBF5ED] hover:bg-[#3A2B24]'
                }`}
              >
                {roast}
              </button>
            );
          })}
        </div>

        {/* Sort & Result Counter */}
        <div className="flex items-center justify-between sm:justify-end w-full sm:w-auto gap-4">
          <span className="text-xs text-[#FBF5ED]/50">
            Hiển thị <strong className="text-[#D4A373]">{totalResults}</strong> sản phẩm
          </span>

          <select
            value={sortBy}
            onChange={(e) => onSelectSort(e.target.value as any)}
            className="bg-[#251B17] text-[#FBF5ED] text-xs px-3 py-1.5 rounded-xl border border-[#3A2B24] focus:outline-none focus:border-[#D4A373]"
          >
            <option value="popular">Phổ biến nhất</option>
            <option value="rating">Đánh giá cao nhất (5★)</option>
            <option value="price-low">Giá: Thấp đến Cao</option>
            <option value="price-high">Giá: Cao đến Thấp</option>
          </select>
        </div>

      </div>

    </div>
  );
};
