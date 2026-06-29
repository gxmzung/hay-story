const banners = [
  {
    tag: "STORY COLLECTION",
    title: "Find your own story.",
    desc: "직접 선택한 길을 위한 옷.",
    bg: "bg-[#d8c7b4]",
  },
  {
    tag: "CUSTOM ORDER",
    title: "당신의 순간을 들려주세요.",
    desc: "세미 커스텀 주문서 만들기.",
    bg: "bg-black text-white",
  },
  {
    tag: "AI STYLE FINDER",
    title: "오늘의 나에게 어울리는 스타일.",
    desc: "상황과 분위기로 추천받기.",
    bg: "bg-[#efe7dc]",
  },
];

export default function MainBanner() {
  return (
    <section className="bg-white">
      <div className="grid h-[460px] grid-cols-3">
        {banners.map((banner) => (
          <article
            key={banner.title}
            className={`relative flex flex-col justify-between p-10 ${banner.bg}`}
          >
            <div>
              <p className="text-sm tracking-[0.35em] opacity-60">
                {banner.tag}
              </p>

              <h2 className="mt-8 max-w-md text-4xl font-bold leading-tight">
                {banner.title}
              </h2>
            </div>

            <p className="text-lg font-medium opacity-80">{banner.desc}</p>

            <div className="absolute bottom-8 right-8 rounded-full bg-white/80 px-5 py-2 text-sm font-semibold text-black">
              VIEW
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}