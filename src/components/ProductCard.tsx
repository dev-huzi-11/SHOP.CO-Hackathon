"use client";
import React from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import { Star } from "lucide-react";

export interface Product {
  id: number;
  off?: string;
  image: string;
  title: string;
  newPrice: string;
  oldPrice?: string;
  rating: number;
  reviews?: number;
  category? : string;
  description?: string;
}

interface ProductProps {
  product: Product;
}

const ProductCard: React.FC<ProductProps> = ({ product }) => {
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(
          <Star key={i} size={20} className="text-yellow-500 fill-current" />
        );
      } else if (rating + 0.5 >= i) {
        stars.push(
          <Star
            key={i}
            size={20}
            className="text-yellow-500 fill-current opacity-50"
          />
        );
      } else {
        stars.push(<Star key={i} size={20} className="text-gray-300" />);
      }
    }
    return stars;
  };

  return (
    <Card className="cursor-pointer">
      <div className="relative">
        <CardHeader className="relative bg-[#f1f1f1]">
          <Image
            width={200}
            height={200}
            src={product.image}
            alt={product.title}
            className="w-full h-48 object-contain"
          />
        </CardHeader>
        <CardContent>
          <h3 className="font-medium text-base mt-4">{product.title}</h3>
          <div className="flex items-center gap-1 mt-2">
            {renderStars(product.rating)}
            <span className="ml-2 text-gray-500 text-sm">
              {product.rating}/5
            </span>
          </div>
          <div className="flex gap-3 mt-2 items-center">
            <span className="text-lg">{product.newPrice}</span>
            {product.oldPrice && (
              <span className="text-gray-500 line-through text-base">
                {product.oldPrice}
              </span>
            )}
            {product.off && (
              <div className="bg-[#FF33331A] text-[#FF3333] px-3.5 py-1.5 rounded-2xl">
                <p>{product.off}</p>
              </div>
            )}
          </div>
        </CardContent>
      </div>
    </Card>
  );
};

export default ProductCard;
