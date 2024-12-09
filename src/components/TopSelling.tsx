"use client";
import React from "react";
import { Button } from "./ui/button"; 
import ProductCard from "./ProductCard"; 
import { Product } from "./ProductCard";
import Products from "@/app/data/products.json";
import Link from "next/link";

const TopSelling = () => {
  return (
    <div className="w-full px-6 my-20 flex flex-col items-center">
      <div className="max-w-[1400px] mx-auto">
        <h1 className="text-5xl font-bold text-center">Top Selling</h1>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mt-10">
          {Products.filter((e) => e.category === "top-selling").map((product: Product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      </div>
      <Button className=" text-black text-base bg-white hover:bg-gray-100 mt-10 px-12 py-6">
        View All
      </Button>
    </div>
  );
};

export default TopSelling;
