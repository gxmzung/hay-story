const designers = [
  {
    name: "HAYOUNG",
    label: "Main Designer",
    color: "bg-[#d8c7b4]",
  },
  {
    name: "STORY",
    label: "Story Wear",
    color: "bg-[#efe7dc]",
  },
  {
    name: "ORDER",
    label: "Custom Made",
    color: "bg-[#c9b79c]",
  },
  {
    name: "AI",
    label: "Style Finder",
    color: "bg-[#b8afa5]",
  },
  {
    name: "ARCHIVE",
    label: "Growth Log",
    color: "bg-[#ddd6cc]",
  },
];

export default function BrandCircleList() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold">Story Brand</h2>
          <button className="text-sm text-neutral-500">전체보기</button>
        </div>

        <div className="flex gap-6 overflow-x-auto">
          {designers.map((designer) => (
            <article
              key={designer.name}
              className="min-w-[120px] text-center"
            >
              <div
                className={`mx-auto flex h-24 w-24 items-center justify-center rounded-full ${designer.color}`}
              >
                <span className="text-xs font-semibold tracking-[0.2em] text-white">
                  {designer.name}
                </span>
              </div>

              <h3 className="mt-3 text-sm font-semibold">{designer.name}</h3>
              <p className="mt-1 text-xs text-neutral-500">{designer.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}