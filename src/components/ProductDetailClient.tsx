"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { Product } from "../types/product";

export default function ProductDetailClient({ product }: { product: Product }) {
  const [liked, setLiked] = useState(false);
  const [message, setMessage] = useState("");

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link href="/" className="text-sm text-neutral-500 hover:text-black">
          ← 홈으로 돌아가기
        </Link>

        <section className="mt-10 grid gap-12 md:grid-cols-2">
          <div className="relative h-[720px] overflow-hidden rounded-3xl bg-neutral-100">
            <Image src={product.image} alt={product.name} fill className="object-cover" />
          </div>

          <div className="pt-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-neutral-400">
              HAYOUNG STUDIO
            </p>

            <h1 className="mt-5 text-5xl font-bold">{product.name}</h1>
            <p className="mt-6 text-3xl font-semibold">{product.price}</p>

            <div className="mt-10 rounded-3xl bg-[#f7f3ee] p-6">
              <p className="text-sm tracking-[0.25em] text-neutral-400">STORY</p>
              <p className="mt-4 leading-8 text-neutral-700">{product.story}</p>
            </div>

            <div className="mt-8 grid gap-3">
              <button
                onClick={() => setMessage("주문 요청이 생성되었습니다. 디자이너가 확인 후 연락드립니다.")}
                className="rounded-full bg-black px-8 py-4 text-white"
              >
                주문하기
              </button>

              <button
                onClick={() => setLiked((prev) => !prev)}
                className="rounded-full border border-black px-8 py-4"
              >
                {liked ? "찜 완료 ♥" : "찜하기 ♡"}
              </button>

              <button
                onClick={() => setMessage("디자이너 문의가 준비되었습니다. 원하는 분위기와 상황을 남겨주세요.")}
                className="rounded-full border border-neutral-300 px-8 py-4"
              >
                디자이너에게 문의하기
              </button>
            </div>

            {message && (
              <div className="mt-6 rounded-2xl bg-[#f7f3ee] p-5 text-neutral-700">
                {message}
              </div>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}