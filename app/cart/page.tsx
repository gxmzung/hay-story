import Link from "next/link";
import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import { products } from "../../src/data/products";

export default function CartPage() {
  const cartItems = products.slice(0, 2);

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm tracking-[0.3em] text-neutral-400">CART</p>
        <h1 className="mt-4 text-4xl font-bold">장바구니</h1>

        <div className="mt-10 grid gap-6">
          {cartItems.map((item) => (
            <article
              key={item.id}
              className="flex items-center justify-between rounded-3xl border border-neutral-200 p-6"
            >
              <div>
                <p className="text-sm font-semibold text-neutral-400">
                  HAYOUNG STUDIO
                </p>
                <h2 className="mt-2 text-2xl font-bold">{item.name}</h2>
                <p className="mt-2 text-neutral-500">{item.story}</p>
              </div>

              <p className="text-xl font-bold">{item.price}</p>
            </article>
          ))}
        </div>

        <div className="mt-10 rounded-3xl bg-[#f7f3ee] p-8 text-right">
          <p className="text-sm text-neutral-500">예상 결제 금액</p>
          <p className="mt-2 text-3xl font-bold">100,000원</p>

          <Link
            href="/order"
            className="mt-6 inline-block rounded-full bg-black px-8 py-4 text-white"
          >
            주문서 작성하기
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}