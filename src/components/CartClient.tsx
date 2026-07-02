"use client";

import Link from "next/link";
import { useState } from "react";
import { products } from "../data/products";
import { getCart, removeFromCart } from "../lib/cart";
import { formatPrice, parsePrice } from "../lib/price";

export default function CartClient() {
  const [cartIds, setCartIds] = useState<string[]>(() => {
    if (typeof window === "undefined") return [];
    return getCart();
  });

  const cartItems = products.filter((product) =>
    cartIds.includes(String(product.id))
  );

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + parsePrice(item.price),
    0
  );

  const hasCustomPrice = cartItems.some((item) => item.price.includes("상담"));

  const handleRemove = (id: string | number) => {
    const productId = String(id);

    removeFromCart(productId);
    setCartIds(getCart());
  };

  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm tracking-[0.3em] text-neutral-400">CART</p>
      <h1 className="mt-4 text-4xl font-bold">장바구니</h1>

      {cartItems.length > 0 ? (
        <>
          <div className="mt-10 grid gap-6">
            {cartItems.map((item) => (
              <article
                key={item.id}
                className="flex items-center justify-between rounded-3xl border border-neutral-200 p-6"
              >
                <div>
                  <p className="text-sm font-semibold text-neutral-400">
                    {item.brand}
                  </p>
                  <h2 className="mt-2 text-2xl font-bold">{item.name}</h2>
                  <p className="mt-2 text-neutral-500">{item.story}</p>
                  <p className="mt-2 text-sm text-neutral-400">
                    {item.category}
                  </p>
                </div>

                <div className="text-right">
                  <p className="text-xl font-bold">{item.price}</p>

                  <button
                    onClick={() => handleRemove(item.id)}
                    className="mt-3 text-sm text-neutral-500 hover:text-black"
                  >
                    삭제
                  </button>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-10 rounded-3xl bg-[#f7f3ee] p-8 text-right">
            <p className="text-sm text-neutral-500">예상 결제 금액</p>

            <p className="mt-2 text-3xl font-bold">
              {formatPrice(totalPrice)}
            </p>

            {hasCustomPrice && (
              <p className="mt-3 text-sm text-neutral-500">
                상담 후 결정 상품은 총액에 포함되지 않았습니다.
              </p>
            )}

            <Link
              href="/order"
              className="mt-6 inline-block rounded-full bg-black px-8 py-4 text-white"
            >
              주문서 작성하기
            </Link>
          </div>
        </>
      ) : (
        <div className="mt-10 rounded-3xl bg-[#f7f3ee] p-10 text-center">
          <p className="text-xl font-bold">장바구니가 비어 있습니다.</p>
          <p className="mt-3 text-neutral-500">
            마음에 드는 상품을 담아보세요.
          </p>

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