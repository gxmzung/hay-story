export default function HeroSection() {
  return (
    <section className="flex min-h-[70vh] flex-col items-center justify-center px-6 pt-16 text-center">
      <p className="mb-4 text-xs tracking-[0.35em] text-neutral-500 md:text-sm">
        HAYOUNG STUDIO
      </p>

      <h1 className="max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
        Find your own story.
      </h1>

      <p className="mt-6 max-w-2xl text-base leading-8 text-neutral-600 md:text-lg">
        옷을 고르는 일이 아니라, 나의 순간을 고르는 공간. 새 출발, 첫 출근,
        면접, 여행, 그리고 다시 시작하는 사람들을 위한 브랜드.
      </p>

      <button className="mt-10 rounded-full bg-black px-8 py-4 text-white transition hover:scale-105">
        AI 스타일 추천 시작하기
      </button>
    </section>
  );
}