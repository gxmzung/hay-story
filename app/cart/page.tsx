"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

type CartItem = {
  product: string;
  productId: string;
  size: string;
  moment: string;
  initial: string;
  date: string;
  message: string;
  request: string;
  price: number;
  shipping: number;
  total: number;
};

const defaultCartItem: CartItem = {
  product: "First Day Shirt",
  productId: "first-day-shirt",
  size: "M",
  moment: "첫 출근",
  initial: "YJ",
  date: "2026.03.02",
  message: "Begin Again",
  request: "",
  price: 49000,
  shipping: 3000,
  total: 52000,
};

export default function CartPage() {
  const [cartItem, setCartItem] = useState<CartItem>(defaultCartItem);

  useEffect(() => {
    const savedCart = localStorage.getItem("hayoung-cart");

    if (savedCart) {
      setCartItem(JSON.parse(savedCart));
    }
  }, []);

  const checkoutParams = new URLSearchParams({
    product: cartItem.product,
    productId: cartItem.productId,
    size: cartItem.size,
    moment: cartItem.moment,
    initial: cartItem.initial,
    date: cartItem.date,
    message: cartItem.message,
    request: cartItem.request,
    price: String(cartItem.price),
    shipping: String(cartItem.shipping),
    total: String(cartItem.total),
  });

  const handleClearCart = () => {
    localStorage.removeItem("hayoung-cart");
    setCartItem(defaultCartItem);
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-6xl">
        <SiteNav />

        <div className="mt-20">
          <p className="text-sm tracking-[0.35em] text-neutral-500">CART</p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
            Your
            <br />
            Moment Bag.
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-neutral-400">
            선택한 제품과 커스터마이징 옵션을 확인하는 장바구니 화면입니다.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.45fr]">
          <div className="space-y-6">
            <div className="grid gap-6 border border-neutral-800 bg-[#151515] p-6 md:grid-cols-[180px_1fr_auto]">
              <div className="flex h-48 items-center justify-center bg-[#1f1f1f] text-center">
                <div>
                  <p className="text-xs tracking-[0.3em] text-neutral-500">
                    CUSTOM
                  </p>
                  <p className="mt-3 text-xl font-semibold">MOMENT</p>
                </div>
              </div>

              <div>
                <h2 className="text-2xl font-semibold">{cartItem.product}</h2>

                <p className="mt-4 leading-7 text-neutral-400">
                  Size: {cartItem.size}
                  <br />
                  Moment: {cartItem.moment}
                  <br />
                  Initial: {cartItem.initial}
                  <br />
                  Date: {cartItem.date}
                  <br />
                  Message: {cartItem.message}
                </p>

                {cartItem.request && (
                  <p className="mt-4 leading-7 text-neutral-500">
                    Request: {cartItem.request}
                  </p>
                )}

                <div className="mt-6 flex flex-wrap gap-3">
                  <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-400">
                    세미 커스텀
                  </span>
                  <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-400">
                    {cartItem.moment}
                  </span>
                </div>
              </div>

              <div className="text-right">
                <p className="text-lg font-semibold">
                  ₩{cartItem.price.toLocaleString()}
                </p>
                <p className="mt-3 text-sm text-neutral-500">Qty 1</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <Link
                href={`/order?product=${cartItem.productId}`}
                className="inline-block border border-neutral-700 px-8 py-4 text-sm tracking-[0.25em] text-neutral-300 transition hover:border-white hover:text-white"
              >
                EDIT CUSTOM
              </Link>

              <button
                type="button"
                onClick={handleClearCart}
                className="inline-block border border-neutral-700 px-8 py-4 text-sm tracking-[0.25em] text-neutral-300 transition hover:border-white hover:text-white"
              >
                CLEAR CART
              </button>
            </div>
          </div>

          <aside className="h-fit border border-neutral-800 bg-[#151515] p-8">
            <p className="text-sm tracking-[0.35em] text-neutral-500">
              ORDER SUMMARY
            </p>

            <div className="mt-8 space-y-5 text-sm text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₩{cartItem.price.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₩{cartItem.shipping.toLocaleString()}</span>
              </div>

              <div className="border-t border-neutral-800 pt-5">
                <div className="flex justify-between text-lg font-semibold text-white">
                  <span>Total</span>
                  <span>₩{cartItem.total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <Link
              href={`/checkout?${checkoutParams.toString()}`}
              className="mt-8 block w-full bg-white px-8 py-5 text-center text-sm font-semibold tracking-[0.25em] text-black transition hover:bg-neutral-300"
            >
              CHECKOUT
            </Link>

            <p className="mt-6 leading-7 text-neutral-500">
              현재 장바구니 정보는 브라우저 localStorage에 임시 저장됩니다.
              실제 서비스에서는 DB와 사용자 계정 기반 저장이 필요합니다.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}