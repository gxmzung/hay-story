import Header from "../src/components/Header";
import CategoryTabs from "../src/components/CategoryTabs";
import MainBanner from "../src/components/MainBanner";
import QuickMenu from "../src/components/QuickMenu";
import BrandCircleList from "../src/components/BrandCircleList";
import MomentSelector from "../src/components/MomentSelector";
import AiStyleFinder from "../src/components/AiStyleFinder";
import CustomOrder from "../src/components/CustomOrder";
import ProductGrid from "../src/components/ProductGrid";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#1f1f1f]">
      <Header />
      <CategoryTabs />
      <MainBanner />
      <QuickMenu />
      <BrandCircleList />

      <section className="flex flex-col items-center bg-[#f7f3ee] px-6 py-10 text-center">
        <MomentSelector />
        <AiStyleFinder />
        <CustomOrder />
      </section>

      <ProductGrid />
      <Footer />
    </main>
  );
}