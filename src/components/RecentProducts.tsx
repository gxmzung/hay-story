"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "../data/products";
import { getRecentProducts } from "../lib/recent";

export default function RecentProducts() {
  const [recentIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return getRecentProducts();
  });

  const recentItems = products.filter((product) =>
    recentIds.includes(String(product.id))
  );

  if (recentItems.length === 0) {
    return (
      <div className="border p-8">
        <h2 className="text-2xl font-bold">최근 본 상품</h2>
        <p className="mt-3 text-sm text-neutral-500">아직 없습니다.</p>
      </div>
    );
  }

  return (
    <div className="border p-8">
      <h2 className="text-2xl font-bold">최근 본 상품</h2>

      <div className="mt-5 grid grid-cols-3 gap-3">
        {recentItems.slice(0, 3).map((item) => (
          <Link key={item.id} href={`/products/${item.id}`}>
            <div className="relative h-24 overflow-hidden bg-neutral-100">
              <Image
                src={item.image}
                alt={item.name}
                fill
                className="object-cover"
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}