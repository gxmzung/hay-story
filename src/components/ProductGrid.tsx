import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

type ProductGridProps = {
  title?: string;
  subtitle?: string;
  items?: typeof products;
};

export default function ProductGrid({
  title = "Selected Pieces",
  subtitle = "COLLECTION",
  items = products,
}: ProductGridProps) {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] text-neutral-400">{subtitle}</p>
        <h2 className="mt-4 text-4xl font-bold">{title}</h2>

        <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
          {items.map((p) => (
            <Link key={p.id} href={`/products/${p.id}`}>
              <article className="cursor-pointer transition duration-300 hover:-translate-y-2">
                <div className="relative h-[360px] overflow-hidden rounded-2xl bg-neutral-100">
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    className="object-cover transition duration-300 hover:scale-105"
                  />

                  <div className="absolute bottom-3 left-3 rounded-full bg-white px-4 py-2 text-xs font-semibold shadow">
                    STORY
                  </div>
                </div>

                <p className="mt-4 text-xs font-bold text-neutral-500">
                  {p.brand}
                </p>

                <h3 className="mt-1 font-semibold">{p.name}</h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-500">
                  {p.story}
                </p>

                <p className="mt-2 text-xs text-neutral-400">{p.category}</p>

                <p className="mt-3 font-bold">{p.price}</p>
              </article>
            </Link>
          ))}
        </div>

        {items.length === 0 && (
          <div className="mt-10 rounded-3xl bg-[#f7f3ee] p-10 text-center">
            <p className="text-lg font-semibold">상품이 없습니다.</p>
            <p className="mt-2 text-neutral-500">
              해당 카테고리 상품은 준비 중입니다.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}