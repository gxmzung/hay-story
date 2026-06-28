import Header from "../src/components/Header";
import HeroSection from "../src/components/HeroSection";
import MomentSelector from "../src/components/MomentSelector";
import AiStyleFinder from "../src/components/AiStyleFinder";
import CustomOrder from "../src/components/CustomOrder";
import CategoryTabs from "../src/components/CategoryTabs";
import MainBanner from "../src/components/MainBanner";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#1f1f1f]">
      <Header />
      <CategoryTabs />
      <MainBanner />
      <HeroSection />

      <section className="flex flex-col items-center px-6 pb-20 text-center">
        <MomentSelector />

        <section
          id="about"
          className="mt-20 grid w-full max-w-5xl gap-8 rounded-[2rem] bg-white p-6 text-left shadow-sm md:grid-cols-2 md:p-8"
        >
          <div>
            <p className="text-sm tracking-[0.3em] text-neutral-400">
              ABOUT BRAND
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              누군가가 정해준 길이 아니라,
              <br />
              직접 선택한 길을 위한 옷.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
            <p>
              HAYOUNG STUDIO는 옷을 단순한 상품이 아니라 한 사람이 지나온
              고민과 선택의 기록으로 바라봅니다.
            </p>
            <p>
              좋아하는 것과 잘하는 것 사이에서 흔들렸던 사람들, 다시 시작하는
              사람들, 자신의 이야기를 찾아가는 사람들을 위한 브랜드입니다.
            </p>
          </div>
        </section>

        <AiStyleFinder />

        <CustomOrder />
      </section>
    </main>
  );
}