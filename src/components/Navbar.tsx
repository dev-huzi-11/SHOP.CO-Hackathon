"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, Search, ShoppingCart, User } from "lucide-react";
// import { integralCF } from '@/app/ui/fonts'
import { cn } from "@/lib/utils";
import Sale from "./Sale";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="w-full bg-white shadow-sm">
      <Sale />

      {/* Main Navbar */}
      <div className="border-b bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Mobile Menu Button */}
            <Button
              variant={"ghost"}
              className="lg:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-6 w-6" />
            </Button>

            {/* Logo */}
            <Link href="/" className="text-xl md:text-2xl font-bold">
              SHOP.CO
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              <Link href="/shop" className="hover:text-gray-600">
                Shop
              </Link>
              <Link href="#" className="hover:text-gray-600">
                On Sale
              </Link>
              <Link href="/#new-arrival" className="hover:text-gray-600">
                New Arrivals
              </Link>
              <Link href="/#brands" className="hover:text-gray-600">
                Brands
              </Link>
            </nav>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
              <div className="relative w-full">
                <Input
                  type="search"
                  placeholder="Search for products..."
                  className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-lg focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              </div>
            </div>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <Button className="lg:hidden" variant={"outline"}>
                <Search className="h-6 w-6" />
              </Button>
              <Link href="/cart">
                <ShoppingCart className="h-6 w-6" />
              </Link>
              <Link href="#">
                <User className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(
          "absolute inset-0 bg-white transform transition-transform duration-300 lg:hidden",
          isMenuOpen ? "translate-y-0" : "-translate-y-full"
        )}
      >
        <div className="p-4">
          <Button
            className="absolute right-4 top-4 p-2 text-2xl"
            onClick={() => setIsMenuOpen(false)}
          >
            X
          </Button>
          <nav className="mt-12 space-y-6">
            <Link
              href="/shop"
              className="block text-lg hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Shop
            </Link>
            <Link
              href="#"
              className="block text-lg hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              On Sale
            </Link>
            <Link
              href="#"
              className="block text-lg hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              New Arrivals
            </Link>
            <Link
              href="/products"
              className="block text-lg hover:text-gray-600"
              onClick={() => setIsMenuOpen(false)}
            >
              Brands
            </Link>
          </nav>
          {/* Mobile Search */}
          <div className="mt-8">
            <div className="relative">
              <Input
                type="search"
                placeholder="Search for products..."
                className="w-full py-2 pl-10 pr-4 bg-gray-100 rounded-lg focus:outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
