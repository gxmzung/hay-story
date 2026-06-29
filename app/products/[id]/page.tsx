import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { products } from "../../../src/data/products";

type ProductPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetailPage({ params }: ProductPageProps) {
  const { id } = await params;
  const product = products.find((p) => p.id === id);

  if (!product) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <Link href="/" className="text-sm text-neutral-500 hover:text-black">
          ← 홈으로 돌아가기
        </Link>

        <section className="mt-10 grid gap-12 md:grid-cols-2">
          <div className="relative h-[720px] overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover"
            />
          </div>

          <div className="pt-4">
            <p className="text-sm font-semibold tracking-[0.3em] text-neutral-400">
              HAYOUNG STUDIO
            </p>

            <h1 className="mt-5 text-5xl font-bold">{product.name}</h1>

            <p className="mt-6 text-3xl font-semibold">{product.price}</p>

            <div className="mt-10 rounded-3xl bg-[#f7f3ee] p-6">
              <p className="text-sm tracking-[0.25em] text-neutral-400">
                STORY
              </p>
              <p className="mt-4 leading-8 text-neutral-700">
                {product.story}
              </p>
            </div>

            <div className="mt-8 grid gap-3">
              <button className="rounded-full bg-black px-8 py-4 text-white">
                주문하기
              </button>
              <button className="rounded-full border border-black px-8 py-4">
                디자이너에게 문의하기
              </button>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}