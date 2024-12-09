"use client";
import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight } from "lucide-react";
import { File } from "lucide-react";

const cartItems = [
  {
    id: 1,
    name: "Casual T-Shirt",
    image: "/products/casual/casual1.png",
    price: 25,
    quantity: 1,
  },
  {
    id: 2,
    name: "Blue Hoodie",
    image: "/products/casual/casual2.png",
    price: 45,
    quantity: 1,
  },
  {
    id: 3,
    name: "Black Jeans",
    image: "/products/casual/casual3.png",
    price: 60,
    quantity: 1,
  },
];

const CartPage = () => {
  const [items, setItems] = useState(cartItems);
  const [couponCode, setCouponCode] = useState<string>("");

  const updateQuantity = (id: number, change: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + change) } // Ensure quantity doesn't go below 1
          : item
      )
    );
  };

  return (
    <div className="w-full px-4 py-20">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-10">Your Cart</h1>

        {/* Cart Layout */}
        <div className="lg:flex gap-6">
          {/* Cart Items */}
          <div className="flex-1">
            {items.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-12 relative"
              >
                {/* Product Details */}
                <div className="flex items-center gap-4">
                  <Image
                    src={item.image}
                    width={80}
                    height={80}
                    alt={item.name}
                    className="rounded-lg"
                  />
                  <div>
                    <h2 className="text-lg font-semibold">{item.name}</h2>
                    <p className="text-gray-500">${item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-4 ">
                  <Button
                    variant={"outline"}
                    onClick={() => updateQuantity(item.id, -1)} // Decrease quantity
                    className="px-3 py-1"
                  >
                    -
                  </Button>
                  <span className="font-semibold">{item.quantity}</span>
                  <Button
                    variant={"outline"}
                    onClick={() => updateQuantity(item.id, 1)} // Increase quantity
                    className="px-3 py-1"
                  >
                    +
                  </Button>
                </div>

                {/* Remove Item */}
                <Image
                  src="/icon/trash.svg"
                  width={20}
                  height={20}
                  alt="Remove"
                  className="cursor-pointer absolute top-4 right-5 "
                />
              </div>
            ))}
          </div>

          {/* Cart Summary */}
          <div className="w-full lg:w-1/3 bg-white shadow-lg p-6 rounded-lg mt-10 lg:mt-0">
            <h2 className="text-2xl font-semibold mb-6">Order Summary</h2>

            {/* Subtotal */}
            <div className="flex justify-between items-center mb-4">
              <span>Subtotal</span>
              <span className="font-bold text-lg">
                $565
              </span>
            </div>

            {/* Discount */}
            <div className="flex justify-between items-center mb-4">
              <span>Discount(-20%)</span>
              <span className="text-red-500">
                -$113
              </span>
            </div>
            <div className="flex justify-between items-center mb-4">
              <span>Delivery Fee</span>
              <span >
                -$15
              </span>
            </div>
              <div className="border-b-2 border-gray-300 my-2"></div>
            {/* Total */}
            <div className="flex justify-between items-center font-bold text-lg my-4">
              <span>Total</span>
              <span>
              $465
              </span>
            </div>

            {/* Coupon Input */}
            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Apply Coupon</h3>
              <div className="flex gap-2 relative">
                <Input
                  type="text"
                  placeholder="Enter coupon code"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  className="w-full px-8 py-6 border rounded-full relative"
                />
                <File className="absolute top-4 left-2" size={15} />
                <Button className="px-10 py-6 rounded-full bg-black text-white">
                  Apply
                </Button>
              </div>
            </div>

            {/* Checkout Button */}
            <Button className="w-full py-6 text-white bg-black rounded-full">
              Proceed to Checkout <ArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
