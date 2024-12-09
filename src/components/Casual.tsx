import React from "react";
import ProductCard from "./ProductCard";
import { Button } from "./ui/button";
import Link from "next/link";
import { Product } from "./ProductCard";
import Data from "@/app/data/products.json"

const Casual = () => {
  return (
    <div className="w-full px-6 my-4 flex flex-col items-center">
      <div className="max-w-[1400px] mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {Data.filter((e) => e.category === "casual").map((data: Product) => (
            <Link key={data.id} href={`/products/${data.id}`}>
            <ProductCard product={data} />
          </Link>
          ))}
        </div>
      </div>
      <Button className="text-black text-base bg-white hover:bg-gray-100 mt-10 px-12 py-6">
        Load More
      </Button>
    </div>
  );
};

export default Casual;
