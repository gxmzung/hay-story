import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import FavoritesClient from "../../src/components/FavoritesClient";

export default function FavoritesPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <FavoritesClient />
      <Footer />
    </main>
  );
}