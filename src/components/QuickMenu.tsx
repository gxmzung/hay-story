const menus = [
  "오늘의 추천",
  "첫 출근룩",
  "면접룩",
  "생일룩",
  "신상 입고",
  "베스트",
  "세미커스텀",
  "디자이너 픽",
];

export default function QuickMenu() {
  return (
    <section className="bg-white px-6 py-5">
      <div className="mx-auto grid max-w-7xl grid-cols-4 gap-3 md:grid-cols-8">
        {menus.map((menu) => (
          <button
            key={menu}
            className="rounded-xl border bg-neutral-50 py-4 text-sm transition hover:bg-black hover:text-white"
          >
            {menu}
          </button>
        ))}
      </div>
    </section>
  );
}