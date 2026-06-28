import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <p className="text-sm tracking-[0.25em] text-neutral-400">
              RECOMMENDED STORIES
            </p>
            <h2 className="mt-2 text-2xl font-bold">
              오늘의 순간에 어울리는 옷
            </h2>
          </div>

          <button className="text-sm text-neutral-500 hover:text-black">
            더보기
          </button>
        </div>

        <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
          {products.map((p) => (
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

                <p className="mt-3 font-bold">
                  <span className="text-red-500">{p.discount}</span>{" "}
                  {p.price}
                </p>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}