const categories = [
  "전체",
  "새로운 시작",
  "첫 출근",
  "면접",
  "여행",
  "생일",
  "세미커스텀",
  "디자이너 스토리",
];

export default function CategoryTabs() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4 text-sm font-medium">
        {categories.map((category) => (
          <button
            key={category}
            className="whitespace-nowrap text-neutral-700 transition hover:text-black"
          >
            {category}
          </button>
        ))}
      </div>
    </section>
  );
}