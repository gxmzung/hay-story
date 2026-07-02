"use client";

import Link from "next/link";

export default function MyPageClient() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <p className="text-sm tracking-[0.3em] text-neutral-400">
        MY PAGE
      </p>

      <h1 className="mt-4 text-4xl font-bold">
        안녕하세요,
        <br />
        HAYOUNG STUDIO 고객님.
      </h1>

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Link
          href="/favorites"
          className="border p-8 transition hover:bg-black hover:text-white"
        >
          <h2 className="text-2xl font-bold">찜한 상품</h2>
          <p className="mt-3 text-sm opacity-70">
            저장한 스타일 보기
          </p>
        </Link>

        <Link
          href="/cart"
          className="border p-8 transition hover:bg-black hover:text-white"
        >
          <h2 className="text-2xl font-bold">장바구니</h2>
          <p className="mt-3 text-sm opacity-70">
            담아둔 상품 확인
          </p>
        </Link>

        <div className="border p-8">
          <h2 className="text-2xl font-bold">주문 내역</h2>
          <p className="mt-3 text-sm text-neutral-500">
            준비 중
          </p>
        </div>

        <div className="border p-8">
          <h2 className="text-2xl font-bold">최근 본 상품</h2>
          <p className="mt-3 text-sm text-neutral-500">
            준비 중
          </p>
        </div>
      </div>
    </section>
  );
}