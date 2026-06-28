const quickMenus = [
  "오늘의 추천",
  "첫 출근룩",
  "면접룩",
  "생일룩",
  "세미커스텀",
  "디자이너 토크",
  "AI 추천",
  "새로운 시작",
];

export default function QuickMenu() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-6">
        <div className="grid grid-cols-4 gap-3 md:grid-cols-8">
          {quickMenus.map((menu) => (
            <button
              key={menu}
              className="rounded-2xl border border-neutral-200 bg-neutral-50 px-3 py-4 text-sm font-medium transition hover:bg-black hover:text-white"
            >
              {menu}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}