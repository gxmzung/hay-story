import Link from "next/link";
import SiteNav from "@/components/SiteNav";
import { products } from "@/data/products";

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-6xl">
        <SiteNav />

        <div className="mt-20">
          <p className="text-sm tracking-[0.35em] text-neutral-500">
            COLLECTION
          </p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
            For Your
            <br />
            First Moment.
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-neutral-400">
            첫 출근, 면접, 새 학기, 발표처럼 새로운 시작을 앞둔 순간에 맞춰
            선택할 수 있는 HAYOUNG STUDIO의 첫 컬렉션입니다.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {products.map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="group border border-neutral-800 bg-[#151515] p-6 transition hover:border-neutral-500"
            >
              <div className="flex h-80 items-center justify-center bg-[#1f1f1f] text-center">
                <div>
                  <p className="text-xs tracking-[0.3em] text-neutral-500">
                    {product.category}
                  </p>
                  <p className="mt-4 text-3xl font-semibold leading-tight">
                    {product.name}
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <p className="text-xs tracking-[0.25em] text-neutral-500">
                  {product.moment}
                </p>

                <h2 className="mt-3 text-2xl font-semibold">{product.name}</h2>

                <p className="mt-3 min-h-20 leading-7 text-neutral-400">
                  {product.description}
                </p>

                <div className="mt-6 flex items-center justify-between">
                  <p className="text-lg font-semibold">
                    ₩{product.price.toLocaleString()}
                  </p>
                  <span className="text-xs tracking-[0.25em] text-neutral-400 group-hover:text-white">
                    VIEW
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}