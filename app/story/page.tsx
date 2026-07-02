import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function StoryPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm tracking-[0.3em] text-neutral-400">STORY</p>
        <h1 className="mt-4 text-5xl font-bold">Our Story</h1>

        <p className="mt-8 max-w-3xl leading-8 text-neutral-600">
          HAYOUNG STUDIO는 옷을 단순한 상품이 아니라, 한 사람이 지나온
          순간과 선택의 기록으로 바라봅니다.
        </p>
      </section>

      <Footer />
    </main>
  );
}