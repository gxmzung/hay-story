import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";
import CartClient from "../../src/components/CartClient";

export default function CartPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />
      <CartClient />
      <Footer />
    </main>
  );
}