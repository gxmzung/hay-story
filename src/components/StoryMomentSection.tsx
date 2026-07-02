import Link from "next/link";

const moments = [
  {
    title: "첫 출근",
    subtitle: "A New Start",
    image:
      "https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "면접",
    subtitle: "Interview",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "데이트",
    subtitle: "Date",
    image:
      "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "새로운 시작",
    subtitle: "New Chapter",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function StoryMomentSection() {
  return (
    <section className="bg-[#f7f7f7] px-6 py-20">
      <div className="mx-auto max-w-7xl">
        <p className="text-sm tracking-[0.3em] text-neutral-400">
          STORY MOMENTS
        </p>

        <h2 className="mt-4 text-4xl font-bold">
          순간별 스타일 제안
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {moments.map((item) => (
            <Link key={item.title} href={`/search?query=${encodeURIComponent(item.title)}`} className="group">
              <article className="overflow-hidden bg-white shadow-sm">
                <div className="h-[420px] overflow-hidden bg-neutral-200">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="p-6">
                  <p className="text-sm text-neutral-400">{item.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-semibold">{item.title}</h3>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}