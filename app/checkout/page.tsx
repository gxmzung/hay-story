import Link from "next/link";
import SiteNav from "@/components/SiteNav";

export default function CheckoutPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-6xl">
        <SiteNav />

        <div className="mt-20">
          <p className="text-sm tracking-[0.35em] text-neutral-500">
            CHECKOUT
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
            Complete
            <br />
            Your Moment.
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-neutral-400">
            주문자 정보와 배송 정보를 입력하는 화면입니다. 현재는 실제 결제
            기능이 아닌 쇼핑몰 주문 흐름 검증용 MVP입니다.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.45fr]">
          <form className="space-y-8 border border-neutral-800 bg-[#151515] p-8">
            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                NAME
              </label>
              <input
                type="text"
                placeholder="이름"
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                PHONE
              </label>
              <input
                type="text"
                placeholder="010-0000-0000"
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                EMAIL
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                ADDRESS
              </label>
              <input
                type="text"
                placeholder="주소"
                className="mt-3 w-full border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <div>
              <label className="block text-sm tracking-[0.25em] text-neutral-500">
                DELIVERY MEMO
              </label>
              <textarea
                rows={5}
                placeholder="배송 요청사항"
                className="mt-3 w-full resize-none border border-neutral-700 bg-[#0f0f0f] px-4 py-4 text-white outline-none placeholder:text-neutral-600"
              />
            </div>

            <Link
              href="/complete"
              className="block w-full bg-white px-8 py-5 text-center text-sm font-semibold tracking-[0.25em] text-black transition hover:bg-neutral-300"
            >
              PLACE ORDER
            </Link>
          </form>

          <aside className="h-fit border border-neutral-800 bg-[#151515] p-8">
            <p className="text-sm tracking-[0.35em] text-neutral-500">
              ORDER SUMMARY
            </p>

            <div className="mt-8 space-y-5 text-sm text-neutral-400">
              <div className="flex justify-between">
                <span>Product</span>
                <span className="text-white">First Day Shirt</span>
              </div>

              <div className="flex justify-between">
                <span>Custom</span>
                <span className="text-white">YJ / Begin Again</span>
              </div>

              <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="text-white">₩49,000</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-white">₩3,000</span>
              </div>

              <div className="border-t border-neutral-800 pt-5">
                <div className="flex justify-between text-lg font-semibold text-white">
                  <span>Total</span>
                  <span>₩52,000</span>
                </div>
              </div>
            </div>

            <p className="mt-8 border-t border-neutral-800 pt-6 leading-7 text-neutral-500">
              다음 단계에서는 주문 내역 저장, 관리자 확인 화면, 결제 연동,
              이메일 알림 기능을 붙일 수 있습니다.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}