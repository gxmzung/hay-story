import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function CommunityPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="mx-auto max-w-5xl px-6 py-24">
        <p className="text-sm tracking-[0.3em] text-neutral-400">COMMUNITY</p>
        <h1 className="mt-4 text-5xl font-bold">Community</h1>

        <p className="mt-8 max-w-3xl leading-8 text-neutral-600">
          고객의 순간, 후기, 스타일 기록을 모아두는 공간입니다.
        </p>
      </section>

      <Footer />
    </main>
  );
}