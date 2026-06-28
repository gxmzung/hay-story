import { products } from "../data/products";

export default function ProductGrid() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-6 flex items-end justify-between">
          <div>
            <p className="text-sm tracking-[0.25em] text-neutral-400">
              RECOMMENDED STORIES
            </p>
            <h2 className="mt-2 text-2xl font-semibold">
              오늘의 순간에 어울리는 옷
            </h2>
          </div>

          <button className="text-sm text-neutral-500">더보기</button>
        </div>

        <div className="grid grid-cols-2 gap-x-4 gap-y-8 md:grid-cols-4">
          {products.map((product) => (
            <article key={product.id} className="text-left">
              <div
                className={`relative flex aspect-[3/4] items-center justify-center overflow-hidden rounded-2xl ${product.imageColor}`}
              >
                <div className="absolute top-6 h-7 w-28 rounded-full bg-white/40" />
                <div className="h-40 w-28 rounded-b-2xl rounded-t-[3rem] bg-white/70 shadow-sm" />
                <div className="absolute bottom-5 text-xs tracking-[0.25em] text-white/80">
                  HAY
                </div>
              </div>

              <p className="mt-4 text-xs font-semibold text-neutral-500">
                {product.brand}
              </p>

              <h3 className="mt-1 text-sm font-medium">{product.name}</h3>

              <p className="mt-2 line-clamp-2 text-xs leading-5 text-neutral-500">
                {product.story}
              </p>

              <div className="mt-3 flex items-center gap-2">
                <span className="text-sm font-semibold text-red-500">
                  {product.discount}
                </span>
                <span className="text-sm font-semibold">{product.price}</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}