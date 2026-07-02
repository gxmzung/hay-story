import Header from "../../src/components/Header";
import CategoryTabs from "../../src/components/CategoryTabs";
import StoryMomentSection from "../../src/components/StoryMomentSection";
import Footer from "../../src/components/Footer";

export default function CollectionPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <CategoryTabs />

      <section className="mx-auto max-w-7xl px-6 py-16">
        <p className="text-sm tracking-[0.3em] text-neutral-400">
          COLLECTION
        </p>

        <h1 className="mt-4 text-5xl font-bold">2026 First Collection</h1>

        <p className="mt-6 max-w-2xl leading-8 text-neutral-500">
          새로운 시작, 첫 출근, 면접, 생일처럼 각자의 순간에 어울리는 스타일을
          제안합니다. 원하는 순간을 선택하면 해당 무드의 상품을 볼 수 있습니다.
        </p>
      </section>

      <StoryMomentSection />
      <Footer />
    </main>
  );
}