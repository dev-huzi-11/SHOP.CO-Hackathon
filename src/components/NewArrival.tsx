"use client";

import React from "react";
import { Button } from "./ui/button";
import ProductCard from "./ProductCard";
import { Product } from "./ProductCard";
import Data from "@/app/data/products.json";
import Link from "next/link";

const NewArrival = () => {
  return (
    <div className="w-full px-6 my-20">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-5xl font-bold text-center">New Arrivals</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {Data.filter((e) => e.category === "new-arrival").map(
            (newProduct: Product) => (
              <Link key={newProduct.id} href={`/products/${newProduct.id}`}>
                <ProductCard product={newProduct} />
              </Link>
            )
          )}
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button className="text-black text-base bg-white hover:bg-gray-100 mt-10 px-12 py-6">
          View All
        </Button>
      </div>
    </div>
  );
};

export default NewArrival;
