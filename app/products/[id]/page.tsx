import { notFound } from "next/navigation";
import { products } from "../../../src/data/products";
import ProductDetailClient from "../../../src/components/ProductDetailClient";

type ProductPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) notFound();

  return <ProductDetailClient product={product} />;
}