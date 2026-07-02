"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { products } from "../data/products";
import { getFavorites, toggleFavorite } from "../lib/favorites";

export default function FavoritesClient() {
  const [favoriteIds, setFavoriteIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return getFavorites();
  });

  const favoriteItems = products.filter((product) =>
    favoriteIds.includes(String(product.id))
  );

  const handleRemove = (id: string | number) => {
    toggleFavorite(String(id));
    setFavoriteIds(getFavorites());
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm tracking-[0.3em] text-neutral-400">FAVORITES</p>
      <h1 className="mt-4 text-4xl font-bold">찜한 상품</h1>

      {favoriteItems.length > 0 ? (
        <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">
          {favoriteItems.map((item) => (
            <article key={item.id}>
              <Link href={`/products/${item.id}`}>
                <div className="relative h-[360px] overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
              </Link>

              <p className="mt-4 text-xs font-bold text-neutral-500">
                {item.brand}
              </p>
              <h2 className="mt-1 font-semibold">{item.name}</h2>
              <p className="mt-2 text-sm text-neutral-500">{item.category}</p>
              <p className="mt-3 font-bold">{item.price}</p>

              <button
                onClick={() => handleRemove(item.id)}
                className="mt-3 text-sm text-neutral-500 hover:text-black"
              >
                찜 해제
              </button>
            </article>
          ))}
        </div>
      ) : (
        <div className="mt-10 rounded-3xl bg-[#f7f3ee] p-10 text-center">
          <p className="text-xl font-bold">찜한 상품이 없습니다.</p>
          <Link
            href="/collection"
            className="mt-6 inline-block rounded-full bg-black px-8 py-4 text-white"
          >
            상품 보러가기
          </Link>
        </div>
      )}
    </section>
  );
}