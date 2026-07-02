import Header from "../../../src/components/Header";
import CategoryTabs from "../../../src/components/CategoryTabs";
import ProductGrid from "../../../src/components/ProductGrid";
import Footer from "../../../src/components/Footer";
import { products } from "../../../src/data/products";

type CategoryPageProps = {
  params: Promise<{
    name: string;
  }>;
};

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { name } = await params;
  const categoryName = decodeURIComponent(name);

  const filtered =
    categoryName === "전체"
      ? products
      : products.filter((product) => product.category === categoryName);

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <CategoryTabs />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm tracking-[0.3em] text-neutral-400">CATEGORY</p>

        <h1 className="mt-4 text-5xl font-bold">{categoryName}</h1>

        <p className="mt-6 max-w-2xl leading-8 text-neutral-500">
          {categoryName} 카테고리에 맞는 상품과 스타일을 보여드립니다.
        </p>
      </section>

      <ProductGrid
        subtitle="CATEGORY PRODUCTS"
        title={`${categoryName} 상품`}
        items={filtered}
      />

      <Footer />
    </main>
  );
}