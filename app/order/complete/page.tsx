import Link from "next/link";
import Header from "../../../src/components/Header";
import Footer from "../../../src/components/Footer";

export default function OrderCompletePage() {
  return (
    <main className="min-h-screen bg-white text-[#1f1f1f]">
      <Header />

      <section className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-6 py-16 text-center">
        <p className="text-sm tracking-[0.3em] text-neutral-400">
          ORDER COMPLETE
        </p>

        <h1 className="mt-4 text-4xl font-bold">
          주문 요청이 완료되었습니다.
        </h1>

        <p className="mt-6 leading-8 text-neutral-600">
          당신의 이야기를 바탕으로 디자이너가 스타일을 확인합니다.
          <br />
          이후 제작 방향과 예상 기간을 안내드릴 예정입니다.
        </p>

        <div className="mt-10 flex gap-3">
          <Link
            href="/"
            className="rounded-full bg-black px-8 py-4 text-white"
          >
            홈으로 가기
          </Link>

          <Link
            href="/search"
            className="rounded-full border border-black px-8 py-4"
          >
            다른 옷 보기
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}