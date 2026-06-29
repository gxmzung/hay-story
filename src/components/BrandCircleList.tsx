const tabs = ["전체", "여성", "미니멀", "오피스", "데일리", "커스텀", "신진"];

const brands = [
  "HAYOUNG STUDIO",
  "OWNWAY",
  "SOFT LINE",
  "CALM ROOM",
  "FIRST DAY",
  "NEW START",
  "MOMENT",
  "STORY WEAR",
  "DAILY MOOD",
  "WARM PIECE",
  "MINIMAL FIT",
  "H-LINE",
  "YOUNG CLOSET",
  "BEGIN 22",
  "DREAM ARCHIVE",
  "SEOUL ROOM",
  "DAEJEON MADE",
  "CUSTOM LAB",
  "MOOD SELECT",
  "PIECE STUDIO",
];

export default function BrandCircleList() {
  return (
    <section className="bg-[#f5f5f5] px-6 py-10">
      <div className="mx-auto max-w-7xl">
        <h2 className="text-2xl font-bold">지금 주목할 만한 브랜드</h2>

        <div className="mt-5 flex flex-wrap gap-2">
          {tabs.map((tab, index) => (
            <button
              key={tab}
              className={`rounded-md border px-3 py-2 text-sm ${
                index === 0
                  ? "border-black bg-white font-bold text-black"
                  : "border-neutral-300 bg-white text-neutral-600"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-4 gap-x-6 gap-y-8 md:grid-cols-8 lg:grid-cols-10">
          {brands.map((brand) => (
            <article key={brand} className="text-center">
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-white px-2 text-center text-[10px] font-bold shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                {brand}
              </div>

              <p className="mt-3 line-clamp-2 text-xs text-neutral-600">
                {brand}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}