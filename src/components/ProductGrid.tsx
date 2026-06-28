import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="bg-white px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.25em] text-neutral-400">RECOMMENDED STORIES</p>
        <h2 className="mt-2 text-2xl font-bold">오늘의 순간에 어울리는 옷</h2>

        <div className="mt-8 grid grid-cols-4 gap-6">
          {products.map((p) => (
            <article key={p.id}>
              <div className={`h-[360px] rounded-2xl ${p.imageColor}`} />
              <p className="mt-4 text-xs font-bold text-neutral-500">{p.brand}</p>
              <h3 className="mt-1 font-semibold">{p.name}</h3>
              <p className="mt-2 text-sm text-neutral-500">{p.story}</p>
              <p className="mt-3 font-bold">
                <span className="text-red-500">{p.discount}</span> {p.price}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}