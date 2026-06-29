import Header from "../src/components/Header";
import CategoryTabs from "../src/components/CategoryTabs";
import MainBanner from "../src/components/MainBanner";
import QuickMenu from "../src/components/QuickMenu";
import BrandCircleList from "../src/components/BrandCircleList";
import ProductGrid from "../src/components/ProductGrid";
import DesignerTalk from "../src/components/DesignerTalk";
import Footer from "../src/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <CategoryTabs />
      <MainBanner />
      <QuickMenu />
      <BrandCircleList />
      <ProductGrid />
      <DesignerTalk />
      <Footer />
    </main>
  );
}