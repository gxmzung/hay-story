import Link from "next/link";

const categories = [
  "전체",
  "상의",
  "셔츠",
  "팬츠",
  "원피스",
  "니트",
  "아우터",
  "가방",
  "소품",
  "세미커스텀",
];

export default function CategoryTabs() {
  return (
    <section className="border-b border-neutral-200 bg-white">
      <div className="mx-auto flex max-w-7xl gap-6 overflow-x-auto px-6 py-4 text-sm font-medium">
        {categories.map((category) => (
          <Link
            key={category}
            href={
              category === "전체"
                ? "/search"
                : `/search?query=${encodeURIComponent(category)}`
            }
            className="whitespace-nowrap text-neutral-700 transition hover:text-black"
          >
            {category}
          </Link>
        ))}
      </div>
    </section>
  );
}