import Header from "../../src/components/Header";
import Footer from "../../src/components/Footer";

export default function OrderPage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="mx-auto max-w-3xl px-6 py-16">
        <p className="text-sm tracking-[0.3em] text-neutral-400">
          CUSTOM ORDER
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          주문서 작성하기
        </h1>

        <div className="mt-10 grid gap-5">
          <input
            className="rounded-2xl border p-4"
            placeholder="이름"
          />

          <input
            className="rounded-2xl border p-4"
            placeholder="연락처"
          />

          <select className="rounded-2xl border p-4">
            <option>첫 출근</option>
            <option>면접</option>
            <option>생일</option>
            <option>새로운 시작</option>
          </select>

          <textarea
            rows={6}
            className="rounded-2xl border p-4"
            placeholder="원하는 분위기와 상황을 적어주세요."
          />

          <button className="rounded-full bg-black px-8 py-4 text-white">
            주문 요청 보내기
          </button>
        </div>
      </section>

      <Footer />
    </main>
  );
}