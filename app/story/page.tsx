import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-[#f7f7f7] text-[#1f1f1f]">
      <Header />

      {/* Hero */}
      <section className="bg-black px-6 py-32 text-white">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-[0.4em] text-neutral-500">
            HAYOUNG STUDIO
          </p>

          <h1 className="mt-8 text-6xl font-bold md:text-8xl">
            WEAR
            <br />
            YOUR STORY.
          </h1>

          <p className="mt-10 max-w-2xl text-lg leading-9 text-neutral-300">
            우리는 옷을 단순한 상품이 아니라,
            한 사람의 순간과 선택을 담는 기록이라고 생각합니다.
          </p>
        </div>
      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-20 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.3em] text-neutral-400">
              OUR PHILOSOPHY
            </p>

            <h2 className="mt-6 text-5xl font-bold">
              옷보다
              <br />
              이야기를 먼저.
            </h2>
          </div>

          <div className="text-lg leading-9 text-neutral-600">
            <p>
              어떤 날은 첫 출근이고,
              어떤 날은 새로운 사람을 만나는 날입니다.
            </p>

            <p className="mt-6">
              HAYOUNG STUDIO는 그 순간의 감정과 분위기에 어울리는
              스타일을 제안합니다.
            </p>

            <p className="mt-6">
              우리는 상품을 판매하기보다,
              당신의 이야기를 입는 경험을 만들고 싶습니다.
            </p>
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="bg-white px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-[0.3em] text-neutral-400">
            VISION
          </p>

          <div className="mt-10 grid gap-10 md:grid-cols-3">
            <div className="border border-neutral-200 p-10">
              <h3 className="text-2xl font-bold">Story</h3>

              <p className="mt-6 leading-8 text-neutral-500">
                고객의 순간과 감정을 중심으로
                스타일을 제안합니다.
              </p>
            </div>

            <div className="border border-neutral-200 p-10">
              <h3 className="text-2xl font-bold">Design</h3>

              <p className="mt-6 leading-8 text-neutral-500">
                미니멀하고 오래 입을 수 있는
                디자인을 추구합니다.
              </p>
            </div>

            <div className="border border-neutral-200 p-10">
              <h3 className="text-2xl font-bold">Custom</h3>

              <p className="mt-6 leading-8 text-neutral-500">
                당신만의 순간을 위한
                세미 커스텀 경험을 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}