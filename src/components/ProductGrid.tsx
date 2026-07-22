import React from 'react';
import { CoffeeProduct } from '../types/coffee';
import { ProductCard } from './ProductCard';
import { CoffeeSearchEmpty } from './CoffeeSearchEmpty';

interface ProductGridProps {
  products: CoffeeProduct[];
  onQuickView: (product: CoffeeProduct) => void;
  onAddToCart: (product: CoffeeProduct) => void;
}

export const ProductGrid: React.FC<ProductGridProps> = ({
  products,
  onQuickView,
  onAddToCart,
}) => {
  if (products.length === 0) {
    return <CoffeeSearchEmpty />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 pt-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onQuickView={onQuickView}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  );
};
