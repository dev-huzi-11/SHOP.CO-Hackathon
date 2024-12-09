"use client";

import { useEffect, useState } from "react";
import { Star } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  isVerified: boolean;
}

const reviews: Review[] = [
  {
    id: "1",
    author: "Samantha D.",
    rating: 4.5,
    content:
      "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt.",
    date: "August 14, 2023",
    isVerified: true,
  },
  {
    id: "2",
    author: "Alex M.",
    rating: 4,
    content:
      "The t-shirt exceeded my expectations! The colors are vibrant and the print quality is top-notch. Being a UI/UX designer myself, I'm quite picky about aesthetics, and this t-shirt definitely gets a thumbs up from me.",
    date: "August 15, 2023",
    isVerified: true,
  },
  {
    id: "3",
    author: "Ethan R.",
    rating: 3.5,
    content:
      "This t-shirt is a must-have for anyone who appreciates good design. The minimalistic yet stylish pattern caught my eye, and the fit is perfect. I can see the designer's touch in every aspect of this shirt.",
    date: "August 16, 2023",
    isVerified: true,
  },
  {
    id: "4",
    author: "Olivia P.",
    rating: 4,
    content:
      "As a UI/UX enthusiast, I value simplicity and functionality. This t-shirt not only represents those principles but also feels great to wear. It's evident that the designer poured their creativity into making this t-shirt stand out!",
    date: "August 17, 2023",
    isVerified: true,
  },
  {
    id: "5",
    author: "Jackson H.",
    rating: 5,
    content:
      "This is by far the best t-shirt I've purchased! The fit is perfect, and the quality is exceptional. I wear it every week, and it still looks brand new. Totally worth the price.",
    date: "August 18, 2023",
    isVerified: false,
  },
  {
    id: "6",
    author: "Maya L.",
    rating: 3,
    content:
      "The design is cool, but the fabric feels a bit stiff. After a few washes, it became more comfortable, but I was expecting it to feel better from the start. Not bad, just not great.",
    date: "August 19, 2023",
    isVerified: true,
  },
  {
    id: "7",
    author: "Liam J.",
    rating: 4.8,
    content:
      "I absolutely love the design! The fabric is soft, and it fits perfectly. It's my new favorite t-shirt. I've gotten so many compliments, and I'll definitely be buying more from this brand.",
    date: "August 20, 2023",
    isVerified: true,
  },
  {
    id: "8",
    author: "Sophia T.",
    rating: 2,
    content:
      "I'm not a fan of this t-shirt. The material feels cheap, and the print started fading after the first wash. Not what I expected for the price.",
    date: "August 21, 2023",
    isVerified: false,
  },
];

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

const ProductReviews = () => {
  function Component() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      setIsClient(true);
    }, []);

    if (!isClient) {
      return null; // You can return null or some placeholder content for server-side rendering
    }

    return <div>{/* Your client-side dynamic content */}</div>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 lg:px-8">
      <Tabs defaultValue="Rating & Reviews" className="w-full">
        <TabsList className="w-full flex justify-evenly h-16">
          <TabsTrigger
            className="bg-transparent w-full h-full text-lg"
            value="Product Details"
          >
            Product Details
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent w-full h-full text-lg"
            value="Rating & Reviews"
          >
            Rating & Reviews
          </TabsTrigger>
          <TabsTrigger
            className="bg-transparent w-full h-full text-lg"
            value="FAQ'S"
          >
            FAQ'S
          </TabsTrigger>
        </TabsList>

        <TabsContent value="Rating & Reviews">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 my-8">
            <h2 className="text-lg font-medium">All Reviews</h2>
            <div className="flex items-center gap-4">
              <button className="px-4 py-2 bg-black text-white rounded-full hover:bg-gray-900 transition-colors">
                Write a Review
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {reviews.map((review) => (
              <div key={review.id} className="p-6 border rounded-lg">
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-1 my-2">
                    {renderStars(review.rating)}
                    <span className="ml-2 text-gray-500 text-sm">
                      {review.rating}/5
                    </span>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{review.content}</p>
                <p className="mt-4 text-sm text-gray-500">
                  Posted on {review.date}
                </p>
              </div>
            ))}
          </div>

          <button className="mt-8 w-full py-4 border rounded-lg text-center hover:border-black transition-colors">
            Load More Reviews
          </button>
        </TabsContent>

        <TabsContent value="Product Details">
          <p>Product detail is here.</p>
        </TabsContent>

        <TabsContent value="FAQ'S">
          <p>FAQs is here.</p>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ProductReviews;