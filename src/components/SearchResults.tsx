import Image from "next/image";
import Link from "next/link";
import { products } from "../data/products";

export default function SearchResults({ query }: { query?: string }) {
  const keyword = query?.toLowerCase().trim() ?? "";

  const filtered = keyword
    ? products.filter((p) =>
        [p.name, p.story, p.price].some((value) =>
          value.toLowerCase().includes(keyword)
        )
      )
    : products;

  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm text-neutral-500">
          총 {filtered.length}개의 결과
        </p>

        {filtered.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-6 md:grid-cols-4">
            {filtered.map((p) => (
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
                    HAYOUNG STUDIO
                  </p>

                  <h3 className="mt-1 font-semibold">{p.name}</h3>

                  <p className="mt-2 line-clamp-2 text-sm leading-6 text-neutral-500">
                    {p.story}
                  </p>

                  <p className="mt-3 font-bold">{p.price}</p>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl bg-[#f7f3ee] p-10 text-center">
            <p className="text-lg font-semibold">검색 결과가 없습니다.</p>

            <p className="mt-2 text-neutral-500">
              원하는 옷이 없다면, 당신의 이야기를 바탕으로 직접 주문서를
              만들어보세요.
            </p>

            <Link
              href="/order"
              className="mt-6 inline-block rounded-full bg-black px-8 py-4 text-white"
            >
              커스텀 주문서 작성하기
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}