"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import SiteNav from "@/components/SiteNav";

export default function CompletePage() {
  const searchParams = useSearchParams();

  const product = searchParams.get("product") || "First Day Shirt";
  const size = searchParams.get("size") || "M";
  const moment = searchParams.get("moment") || "첫 출근";
  const initial = searchParams.get("initial") || "YJ";
  const date = searchParams.get("date") || "2026.03.02";
  const message = searchParams.get("message") || "Begin Again";
  const total = Number(searchParams.get("total") || 52000);

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-5xl">
        <SiteNav />

        <div className="mt-24 border border-neutral-800 bg-[#151515] p-10 md:p-16">
          <p className="text-sm tracking-[0.35em] text-neutral-500">
            ORDER COMPLETE
          </p>

          <h1 className="mt-8 text-5xl font-semibold leading-tight md:text-7xl">
            Your Moment
            <br />
            Has Started.
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-neutral-400">
            주문이 접수되었습니다. 현재 화면은 실제 결제 완료가 아닌,
            HAYOUNG STUDIO 쇼핑몰 MVP의 주문 완료 흐름을 보여주는 페이지입니다.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="border border-neutral-800 bg-[#0f0f0f] p-6">
              <p className="text-xs tracking-[0.3em] text-neutral-500">
                ORDER
              </p>
              <p className="mt-4 text-2xl font-semibold">HS-2026-0001</p>
            </div>

            <div className="border border-neutral-800 bg-[#0f0f0f] p-6">
              <p className="text-xs tracking-[0.3em] text-neutral-500">
                PRODUCT
              </p>
              <p className="mt-4 text-2xl font-semibold">{product}</p>
            </div>

            <div className="border border-neutral-800 bg-[#0f0f0f] p-6">
              <p className="text-xs tracking-[0.3em] text-neutral-500">
                STATUS
              </p>
              <p className="mt-4 text-2xl font-semibold">Received</p>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-800 pt-8">
            <p className="text-sm tracking-[0.35em] text-neutral-500">
              CUSTOM DETAIL
            </p>

            <div className="mt-6 grid gap-4 text-neutral-400 md:grid-cols-2">
              <p>
                <span className="text-neutral-500">Size</span>
                <br />
                {size}
              </p>
              <p>
                <span className="text-neutral-500">Moment</span>
                <br />
                {moment}
              </p>
              <p>
                <span className="text-neutral-500">Initial</span>
                <br />
                {initial}
              </p>
              <p>
                <span className="text-neutral-500">Date</span>
                <br />
                {date}
              </p>
              <p>
                <span className="text-neutral-500">Message</span>
                <br />
                {message}
              </p>
              <p>
                <span className="text-neutral-500">Total</span>
                <br />
                ₩{total.toLocaleString()}
              </p>
            </div>
          </div>

          <div className="mt-12 border-t border-neutral-800 pt-8">
            <p className="leading-8 text-neutral-400">
              다음 단계에서는 주문 내역 저장, 관리자 확인 화면, 결제 연동,
              이메일 알림 기능을 붙일 수 있습니다. 지금 단계에서는 고객이
              상품을 선택하고, 커스터마이징하고, 장바구니와 주문 완료까지
              이동하는 흐름을 검증합니다.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <Link
              href="/collection"
              className="inline-block bg-white px-8 py-4 text-sm font-semibold tracking-[0.25em] text-black transition hover:bg-neutral-300"
            >
              SHOP MORE
            </Link>

            <Link
              href="/"
              className="inline-block border border-white px-8 py-4 text-sm font-semibold tracking-[0.25em] transition hover:bg-white hover:text-black"
            >
              HOME
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}