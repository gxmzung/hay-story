import Header from "../../src/components/Header";
import CategoryTabs from "../../src/components/CategoryTabs";
import ProductGrid from "../../src/components/ProductGrid";
import Footer from "../../src/components/Footer";
import { products } from "../../src/data/products";

export default function NewPage() {
  const newItems = products.slice().reverse();

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <CategoryTabs />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm tracking-[0.3em] text-neutral-400">NEW</p>
        <h1 className="mt-4 text-5xl font-bold">New Arrivals</h1>

        <p className="mt-6 max-w-2xl leading-8 text-neutral-500">
          새롭게 추가된 하영 스튜디오의 스타일을 확인해보세요.
        </p>
      </section>

      <ProductGrid subtitle="NEW ITEMS" title="이번 시즌 신상품" items={newItems} />
      <Footer />
    </main>
  );
}