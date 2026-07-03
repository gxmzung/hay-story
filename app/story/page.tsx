export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-20 text-[#f5f5f5]">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm tracking-[0.35em] text-neutral-500">
          BRAND STORY
        </p>

        <h1 className="mt-8 text-5xl font-semibold leading-tight md:text-7xl">
          새로운 시작을
          <br />
          위한 옷
        </h1>

        <p className="mt-10 max-w-3xl leading-8 text-neutral-400">
          HAYOUNG STUDIO는 첫 출근, 면접, 새 학기, 발표, 새로운 관계처럼
          인생의 전환점을 앞둔 사람들을 위한 세미 커스터마이징 패션 브랜드를
          지향합니다.
        </p>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          <div className="border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold">Moment</h2>
            <p className="mt-4 leading-7 text-neutral-400">
              상품보다 먼저 고객의 상황을 이해합니다.
            </p>
          </div>

          <div className="border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold">Custom</h2>
            <p className="mt-4 leading-7 text-neutral-400">
              이니셜, 날짜, 짧은 문구로 개인의 이야기를 담습니다.
            </p>
          </div>

          <div className="border border-neutral-800 p-6">
            <h2 className="text-xl font-semibold">First Product</h2>
            <p className="mt-4 leading-7 text-neutral-400">
              첫 제품은 First Day Shirt를 중심으로 검증합니다.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}