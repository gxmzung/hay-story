export default function ProductDetailPage() {
  return (
    <main className="min-h-screen bg-white">
      <div className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid gap-12 md:grid-cols-2">
          <div className="h-[700px] rounded-3xl bg-[#efe7dc]" />

          <div>
            <p className="text-sm text-neutral-500">
              HAYOUNG STUDIO
            </p>

            <h1 className="mt-3 text-4xl font-bold">
              Soft Beige Shirt
            </h1>

            <p className="mt-4 text-2xl font-semibold">
              42,000원
            </p>

            <p className="mt-10 leading-8 text-neutral-600">
              새로운 공간에 들어서는 사람을 위한
              부드러운 첫인상의 셔츠.
            </p>

            <button className="mt-10 rounded-full bg-black px-8 py-4 text-white">
              주문하기
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}