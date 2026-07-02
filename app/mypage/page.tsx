import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import MyPageClient from "../../src/components/MyPageClient";

export default function MyPagePage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <MyPageClient />
      <Footer />
    </main>
  );
}