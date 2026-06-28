const brands = ["HAYOUNG", "STORY", "ORDER", "AI", "ARCHIVE", "CUSTOM", "LOOK", "DREAM"];

export default function BrandCircleList() {
  return (
    <section className="bg-white px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="mb-6 text-xl font-bold">Story Brand</h2>
        <div className="flex gap-8">
          {brands.map((brand) => (
            <div key={brand} className="text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[#efe7dc] text-xs font-bold">
                {brand}
              </div>
              <p className="mt-3 text-sm font-semibold">{brand}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}