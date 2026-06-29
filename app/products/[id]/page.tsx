import { notFound } from "next/navigation";
import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";
import ProductDetailClient from "../../../src/components/ProductDetailClient";
import { products } from "../../../src/data/products";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return (
    <>
      <Header />
      <ProductDetailClient product={product} />
      <Footer />
    </>
  );
}