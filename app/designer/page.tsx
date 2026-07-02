import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function DesignerPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="bg-[#111] px-6 py-28 text-white">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.4em] text-neutral-500">
              DESIGNER
            </p>

            <h1 className="mt-8 text-6xl font-bold leading-tight md:text-8xl">
              HAYOUNG
              <br />
              STUDIO
            </h1>

            <p className="mt-8 max-w-xl leading-8 text-neutral-400">
              옷을 만드는 사람의 시선에서, 누군가의 새로운 시작과 꿈을 위한
              스타일을 제안합니다.
            </p>
          </div>

          <div className="flex min-h-[520px] items-center justify-center border border-neutral-700 bg-[#1c1c1c]">
            <p className="text-sm tracking-[0.35em] text-neutral-500">
              DESIGNER PORTRAIT
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.3em] text-neutral-400">
              DESIGN PHILOSOPHY
            </p>

            <h2 className="mt-6 text-5xl font-bold leading-tight">
              누군가의 선택을
              <br />
              응원하는 옷.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-9 text-neutral-600">
            <p>
              HAYOUNG STUDIO는 단순히 예쁜 옷보다, 입는 사람의 상황과
              마음에 어울리는 옷을 고민합니다.
            </p>

            <p>
              첫 출근, 면접, 새로운 시작, 다시 꿈을 찾는 순간처럼 인생의
              중요한 장면에 함께할 수 있는 디자인을 지향합니다.
            </p>

            <p>
              미니멀하지만 따뜻하고, 차분하지만 존재감 있는 분위기를
              추구합니다.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f7] px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm tracking-[0.3em] text-neutral-400">
            KEYWORDS
          </p>

          <div className="mt-10 grid gap-6 md:grid-cols-4">
            {["Minimal", "Story", "Custom", "Dream"].map((word) => (
              <div key={word} className="bg-white p-10">
                <h3 className="text-3xl font-bold">{word}</h3>
                <p className="mt-5 leading-7 text-neutral-500">
                  브랜드가 추구하는 핵심 무드와 디자인 방향입니다.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}