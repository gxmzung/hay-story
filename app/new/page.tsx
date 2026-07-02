import Header from "../../src/components/Header";
import ProductGrid from "../../src/components/ProductGrid";
import Footer from "../../src/components/Footer";

export default function NewPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <ProductGrid subtitle="NEW" title="New Arrivals" />
      <Footer />
    </main>
  );
}