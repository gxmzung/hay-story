import Link from "next/link";

export default function CompletePage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-5xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-[0.25em]">
            HAYOUNG STUDIO
          </Link>

          <div className="flex gap-8 text-xs tracking-[0.25em] text-neutral-400">
            <Link href="/story" className="hover:text-white">
              STORY
            </Link>
            <Link href="/collection" className="hover:text-white">
              COLLECTION
            </Link>
            <Link href="/cart" className="hover:text-white">
              CART
            </Link>
          </div>
        </div>

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
              <p className="mt-4 text-2xl font-semibold">First Day Shirt</p>
            </div>

            <div className="border border-neutral-800 bg-[#0f0f0f] p-6">
              <p className="text-xs tracking-[0.3em] text-neutral-500">
                STATUS
              </p>
              <p className="mt-4 text-2xl font-semibold">Received</p>
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