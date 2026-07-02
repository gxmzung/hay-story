import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

const posts = [
  {
    moment: "첫 출근",
    title: "긴장보다 신뢰가 먼저 보였던 하루",
    content:
      "처음 출근하는 날, 너무 튀지 않지만 단정한 분위기를 만들고 싶었어요.",
    tag: "A New Start",
  },
  {
    moment: "면접",
    title: "차분하게 나를 보여준 순간",
    content:
      "말보다 첫인상이 먼저 닿는 자리에서, 단정한 실루엣이 큰 힘이 됐어요.",
    tag: "Interview",
  },
  {
    moment: "생일",
    title: "나를 조금 더 특별하게 느낀 날",
    content:
      "화려하지 않아도 오늘의 나를 기억하게 만드는 스타일이 좋았어요.",
    tag: "Birthday",
  },
  {
    moment: "새로운 시작",
    title: "다시 시작하는 사람을 위한 옷",
    content:
      "무언가를 다시 선택하는 날, 옷이 작은 용기가 되어줬어요.",
    tag: "New Chapter",
  },
];

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="bg-[#111] px-6 py-28 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-[0.4em] text-neutral-500">
            COMMUNITY
          </p>

          <h1 className="mt-8 text-6xl font-bold leading-tight md:text-8xl">
            MOMENTS
            <br />
            PEOPLE WORE.
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-neutral-400">
            고객들이 자신의 순간에 어떤 옷을 선택했는지 기록하는 공간입니다.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="text-sm tracking-[0.3em] text-neutral-400">
              STYLE LOG
            </p>
            <h2 className="mt-4 text-4xl font-bold">사람들의 순간 기록</h2>
          </div>

          <button className="border border-black px-6 py-3 text-sm tracking-[0.2em] transition hover:bg-black hover:text-white">
            WRITE
          </button>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map((post) => (
            <article
              key={post.title}
              className="border border-neutral-200 bg-[#f7f7f7] p-8 transition hover:-translate-y-1 hover:bg-white"
            >
              <p className="text-xs tracking-[0.25em] text-neutral-400">
                {post.tag}
              </p>

              <h3 className="mt-4 text-2xl font-bold">{post.title}</h3>

              <p className="mt-4 leading-8 text-neutral-600">
                {post.content}
              </p>

              <p className="mt-8 text-sm font-semibold text-neutral-500">
                #{post.moment}
              </p>
            </article>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}