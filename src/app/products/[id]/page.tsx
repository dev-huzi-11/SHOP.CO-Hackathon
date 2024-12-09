"use client";

import React, { useState, useEffect } from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import { Star } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Products from "@/app/data/products.json";
import { Button } from "@/components/ui/button";
import ProductReviews from "@/components/Reviews";
import { Product } from "@/components/ProductCard";

type ProductPageProps = {
  params: Promise<{ id: string }>;
  searchParams?: { [key: string]: string | string[] | undefined };
};

export default function ProductPage({ params }: ProductPageProps) {
  const [product, setProduct] = useState<Product | null>(null);
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState<number>(1);

  // Fetch the product data
  useEffect(() => {
    const getProduct = async () => {
      const { id } = await params;
      const foundProduct = Products.find((p) => p.id === Number(id));
      if (!foundProduct) {
        notFound();
      } else {
        setProduct(foundProduct);
      }
    };
    getProduct();
  }, [params]);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        size={20}
        className={`${
          rating >= i + 1
            ? "text-yellow-500"
            : rating > i
            ? "text-yellow-500 opacity-50"
            : "text-gray-300"
        } fill-current`}
      />
    ));
  };

  const handleSizeSelect = (size: string) => setSelectedSize(size);

  const colorOption = [
    { color: "blue", className: "bg-blue-600" },
    { color: "black", className: "bg-black" },
    { color: "white", className: "bg-white border border-gray-300" },
  ];

  const sizes = [
    { id: 1, name: "Small" },
    { id: 2, name: "Medium" },
    { id: 3, name: "Large" },
    { id: 4, name: "X-Large" },
  ];

  const handleSelectedColor = (color: string) => {
    setSelectedColor(color);
  };

  const updateQuantity = (change: number) => {
    setQuantity((prevQuantity) => Math.max(1, prevQuantity + change));
  };

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container w-full px-4 py-8 min-h-screen">
      <div className="max-w-7xl mx-auto ">
        <div className="mb-6">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/">Home</BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>Shop</BreadcrumbPage>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage>{product.title}</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>

        <div className="flex flex-col gap-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="flex flex-col-reverse md:flex-row items-center gap-4">
              <div className="flex md:flex-col gap-4 overflow-x-auto md:overflow-visible">
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="min-w-[100px] md:w-24 bg-[#F0EEED] p-2">
                    <Image
                      width={100}
                      height={100}
                      src={product.image}
                      alt={`${product.title} Thumbnail ${i + 1}`}
                      className="rounded-lg cursor-pointer object-cover w-full h-full"
                    />
                  </div>
                ))}
              </div>

              <div className="flex-grow">
                <Image
                  width={500}
                  height={500}
                  src={product.image}
                  alt={product.title}
                  className="w-100 h-100 rounded-lg object-cover md:w-full md:h-full"
                />
              </div>
            </div>

            <div className="space-y-6 px-6">
              <h1 className="text-3xl md:text-5xl font-bold">{product.title}</h1>
              <div className="flex items-center gap-1">
                {renderStars(product.rating)}
                <span className="ml-2 text-gray-500 text-sm">
                  {product.rating}/5
                </span>
              </div>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="text-2xl md:text-3xl font-semibold">
                  {product.newPrice}
                </span>
                {product.oldPrice && (
                  <span className="text-gray-500 line-through text-xl md:text-3xl">
                    {product.oldPrice}
                  </span>
                )}
                {product.off && (
                  <span className="bg-red-500 text-white px-2 py-1 rounded">
                    {product.off}
                  </span>
                )}
              </div>
              <div className="max-w-lg">
                <p className="text-gray-500">{product.description}</p>
              </div>

              <div className="flex gap-4 flex-wrap">
                {colorOption.map((colorOption, i) => (
                  <div
                    key={i}
                    onClick={() => handleSelectedColor(colorOption.color)}
                    className={`relative w-10 h-10 rounded-full cursor-pointer ${
                      colorOption.className
                    } ${
                      selectedColor === colorOption.color
                        ? "ring-2 ring-offset-2 ring-black-400"
                        : ""
                    }`}
                  >
                    {selectedColor === colorOption.color && (
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Image
                          src="/icon/checkmark.svg"
                          alt="Selected"
                          width={16}
                          height={16}
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-2">
                {sizes.map((size) => (
                  <Button
                    onClick={() => handleSizeSelect(size.name)}
                    className={`px-4 md:px-8 py-4 md:py-6 text-sm rounded-full hover:bg-black hover:text-white ${
                      selectedSize === size.name
                        ? "bg-black text-white"
                        : "bg-gray-100 text-black border border-gray-300"
                    }`}
                    key={size.id}
                  >
                    {size.name}
                  </Button>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center gap-4">
                  <Button
                    variant={"outline"}
                    onClick={() => updateQuantity(-1)}
                    className="px-6 py-5 text-lg rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    -
                  </Button>
                  <span className="font-semibold">{quantity}</span>
                  <Button
                    variant={"outline"}
                    onClick={() => updateQuantity(1)}
                    className="px-6 py-5 text-lg rounded-full bg-gray-100 hover:bg-gray-200"
                  >
                    +
                  </Button>
                </div>
                <Button className="w-full py-6 rounded-full">
                  Add to Cart
                </Button>
              </div>
            </div>
          </div>
          <div className="w-full">
            <ProductReviews />
          </div>
        </div>
      </div>
    </div>
  );
}
