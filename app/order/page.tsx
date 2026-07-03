"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

const productPrices = {
  "First Day Shirt": 49000,
  "New Chapter Blouse": 54000,
  "Moment Jacket": 79000,
};

export default function OrderPage() {
  const router = useRouter();

  const [product, setProduct] = useState("First Day Shirt");
  const [size, setSize] = useState("M");
  const [moment, setMoment] = useState("첫 출근");
  const [initial, setInitial] = useState("YJ");
  const [date, setDate] = useState("2026.03.02");
  const [message, setMessage] = useState("Begin Again");
  const [request, setRequest] = useState("");

  const price = productPrices[product as keyof typeof productPrices];

  const handleAddToCart = () => {
    const params = new URLSearchParams({
      product,
      size,
      moment,
      initial,
      date,
      message,
      request,
      price: String(price),
    });

    router.push(`/cart?${params.toString()}`);
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-5xl">
        <Link
          href="/collection"
          className="text-sm tracking-[0.25em] text-neutral-400 hover:text-white"
        >
          ← COLLECTION
        </Link>

        <div className="mt-16">
          <p className="text-sm tracking-[0.35em] text-neutral-500">
            CUSTOM ORDER
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
            Make It
            <br />
            Your Moment.
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-neutral-400">
            첫 출근, 면접, 새 학기, 발표처럼 중요한 순간을 위해 이니셜,
            날짜, 짧은 문구를 선택해 나만의 제품을 구성해보세요.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.8fr]">
          <form className="space-y-8 border border-neutral-800 bg-[#151515] p-8">
            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                PRODUCT
              </label>
              <select
                value={product}
                onChange={(event) => setProduct(event.target.value)}
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none"
              >
                <option>First Day Shirt</option>
                <option>New Chapter Blouse</option>
                <option>Moment Jacket</option>
              </select>
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                SIZE
              </label>
              <select
                value={size}
                onChange={(event) => setSize(event.target.value)}
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none"
              >
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                MOMENT
              </label>
              <select
                value={moment}
                onChange={(event) => setMoment(event.target.value)}
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none"
              >
                <option>첫 출근</option>
                <option>면접</option>
                <option>새 학기</option>
                <option>발표</option>
                <option>새로운 관계</option>
                <option>새로운 도시</option>
              </select>
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                INITIAL
              </label>
              <input
                type="text"
                value={initial}
                onChange={(event) => setInitial(event.target.value)}
                placeholder="예: YJ"
                maxLength={6}
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                DATE
              </label>
              <input
                type="text"
                value={date}
                onChange={(event) => setDate(event.target.value)}
                placeholder="예: 2026.03.02"
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                MESSAGE
              </label>
              <input
                type="text"
                value={message}
                onChange={(event) => setMessage(event.target.value)}
                placeholder="예: Begin Again"
                maxLength={24}
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                REQUEST
              </label>
              <textarea
                value={request}
                onChange={(event) => setRequest(event.target.value)}
                placeholder="추가 요청사항을 적어주세요."
                rows={5}
                className="mt-3 w-full resize-none border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <button
              type="button"
              onClick={handleAddToCart}
              className="w-full bg-white px-8 py-5 text-sm font-semibold tracking-[0.25em] text-black transition hover:bg-neutral-300"
            >
              ADD TO CART
            </button>
          </form>

          <aside className="h-fit border border-neutral-800 bg-[#151515] p-8">
            <p className="text-sm tracking-[0.35em] text-neutral-500">
              PREVIEW
            </p>

            <div className="mt-8 flex h-80 items-center justify-center bg-[#1f1f1f]">
              <div className="text-center">
                <p className="text-xs tracking-[0.35em] text-neutral-500">
                  CUSTOM LABEL
                </p>
                <p className="mt-5 text-3xl font-semibold">
                  {message || "Your Message"}
                </p>
                <p className="mt-2 text-sm text-neutral-400">
                  {initial || "INITIAL"} · {date || "DATE"}
                </p>
              </div>
            </div>

            <div className="mt-8 space-y-4 text-sm text-neutral-400">
              <div className="flex justify-between gap-6">
                <span>Product</span>
                <span className="text-right text-white">{product}</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Size</span>
                <span className="text-right text-white">{size}</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Moment</span>
                <span className="text-right text-white">{moment}</span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Custom</span>
                <span className="text-right text-white">
                  Initial / Date / Message
                </span>
              </div>

              <div className="flex justify-between gap-6">
                <span>Price</span>
                <span className="text-right text-white">
                  ₩{price.toLocaleString()}
                </span>
              </div>
            </div>

            {request && (
              <div className="mt-8 border-t border-neutral-800 pt-6">
                <p className="text-sm tracking-[0.25em] text-neutral-500">
                  REQUEST
                </p>
                <p className="mt-3 leading-7 text-neutral-400">{request}</p>
              </div>
            )}

            <p className="mt-8 border-t border-neutral-800 pt-6 leading-7 text-neutral-500">
              현재 페이지는 실제 결제 기능이 아닌, 세미 커스터마이징 주문
              흐름을 검증하기 위한 MVP 화면입니다.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}