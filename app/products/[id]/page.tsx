import Link from "next/link";
import { getProductById } from "@/data/products";

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <main className="min-h-screen bg-[#0f0f0f] px-8 py-20 text-white">
        <h1 className="text-3xl font-semibold">Product not found</h1>
        <Link href="/collection" className="mt-8 inline-block underline">
          Back to collection
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-6xl">
        <Link
          href="/collection"
          className="text-sm tracking-[0.25em] text-neutral-400 hover:text-white"
        >
          ← COLLECTION
        </Link>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="flex min-h-[620px] items-center justify-center bg-[#1a1a1a]">
            <div className="text-center">
              <p className="text-xs tracking-[0.35em] text-neutral-500">
                {product.category}
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-tight">
                {product.name}
              </h1>
            </div>
          </div>

          <div className="py-6">
            <p className="text-sm tracking-[0.35em] text-neutral-500">
              {product.moment}
            </p>

            <h1 className="mt-6 text-5xl font-semibold">{product.name}</h1>

            <p className="mt-6 text-2xl font-semibold">
              ₩{product.price.toLocaleString()}
            </p>

            <p className="mt-8 max-w-xl leading-8 text-neutral-400">
              {product.description}
            </p>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">Custom Options</h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {product.custom.map((option) => (
                  <span
                    key={option}
                    className="rounded-full border border-neutral-700 px-5 py-3 text-sm text-neutral-300"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Link
                href={`/order?product=${product.id}`}
                className="inline-block bg-white px-10 py-4 text-sm font-semibold tracking-[0.2em] text-black transition hover:bg-neutral-300"
              >
                ORDER
              </Link>

              <Link
                href="/cart"
                className="inline-block border border-white px-10 py-4 text-sm font-semibold tracking-[0.2em] transition hover:bg-white hover:text-black"
              >
                CART
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}