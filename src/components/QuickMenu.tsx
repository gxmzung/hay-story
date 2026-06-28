const menus = ["오늘의 추천", "첫 출근룩", "면접룩", "생일룩", "세미커스텀", "디자이너 토크", "AI 추천", "새로운 시작"];

export default function QuickMenu() {
  return (
    <section className="bg-white px-6 py-5">
      <div className="mx-auto grid max-w-7xl grid-cols-8 gap-3">
        {menus.map((menu) => (
          <button key={menu} className="rounded-xl border bg-neutral-50 py-4 text-sm hover:bg-black hover:text-white">
            {menu}
          </button>
        ))}
      </div>
    </section>
  );
}