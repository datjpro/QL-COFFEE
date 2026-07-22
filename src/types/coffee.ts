export type RoastLevel = 'Rang Vừa (Medium)' | 'Rang Đậm (Dark)' | 'Rang Sáng (Light)' | 'Phối Trộn (Blend)';

export type CoffeeCategory = 'all' | 'beans' | 'ready_drink' | 'tools' | 'gifts';

export type GrindOption = 'Nguyên Hạt (Whole Bean)' | 'Pha Phin (Medium-Coarse)' | 'Pha Máy (Espresso)' | 'Cold Brew (Coarse)';

export interface CoffeeProduct {
  id: string;
  name: string;
  subtitle: string;
  category: CoffeeCategory;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  image: string;
  roastLevel: RoastLevel;
  origin: string; // e.g. "Cầu Đất, Đà Lạt (1,600m)"
  flavorNotes: string[];
  altitude?: string;
  acidity: number; // 1 - 5
  body: number; // 1 - 5
  sweetness: number; // 1 - 5
  description: string;
  brewingRecommendation: string;
  inStock: boolean;
  isBestSeller?: boolean;
  isNewRelease?: boolean;
}

export interface CartItem {
  product: CoffeeProduct;
  quantity: number;
  selectedGrind: GrindOption;
  grindNote?: string;
}

export interface CoffeeFilterState {
  category: CoffeeCategory;
  searchQuery: string;
  roastFilter: string;
  sortBy: 'popular' | 'price-low' | 'price-high' | 'rating';
}
