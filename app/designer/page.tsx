import Header from "../../src/components/Header";
import DesignerTalk from "../../src/components/DesignerTalk";
import Footer from "../../src/components/Footer";

export default function DesignerPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <DesignerTalk />
      <Footer />
    </main>
  );
}