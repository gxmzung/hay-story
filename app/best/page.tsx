import Header from "../../src/components/Header";
import CategoryTabs from "../../src/components/CategoryTabs";
import ProductGrid from "../../src/components/ProductGrid";
import Footer from "../../src/components/Footer";
import { products } from "../../src/data/products";

export default function BestPage() {
  const bestItems = products.slice(0, 4);

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <CategoryTabs />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm tracking-[0.3em] text-neutral-400">BEST</p>
        <h1 className="mt-4 text-5xl font-bold">Best Pieces</h1>

        <p className="mt-6 max-w-2xl leading-8 text-neutral-500">
          가장 많이 선택된 대표 스타일입니다.
        </p>
      </section>

      <ProductGrid subtitle="BEST ITEMS" title="베스트 상품" items={bestItems} />
      <Footer />
    </main>
  );
}