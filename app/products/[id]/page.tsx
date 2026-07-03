import Link from "next/link";

const products = {
  "first-day-shirt": {
    name: "First Day Shirt",
    category: "SHIRT",
    price: "49,000",
    moment: "첫 출근 / 면접 / 발표",
    description:
      "이니셜, 날짜, 짧은 문구를 담을 수 있는 새로운 시작을 위한 베이직 셔츠입니다.",
    custom: ["이니셜 자수", "날짜 각인", "짧은 문구", "라벨 메시지"],
  },
  "new-chapter-blouse": {
    name: "New Chapter Blouse",
    category: "BLOUSE",
    price: "54,000",
    moment: "새 학기 / 새로운 관계",
    description:
      "부담스럽지 않지만 단정한 첫인상을 남길 수 있는 세미 포멀 블라우스입니다.",
    custom: ["이니셜 자수", "소매 포인트", "라벨 메시지"],
  },
  "moment-jacket": {
    name: "Moment Jacket",
    category: "OUTER",
    price: "79,000",
    moment: "면접 / 발표 / 첫 미팅",
    description:
      "중요한 순간에 안정감과 신뢰감을 주는 미니멀 자켓형 아우터입니다.",
    custom: ["안쪽 라벨 문구", "날짜 각인", "포장 카드"],
  },
};

type ProductId = keyof typeof products;

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products[params.id as ProductId];

  if (!product) {
    return (
      <main className="min-h-screen bg-[#0f0f0f] px-8 py-20 text-white">
        <h1 className="text-3xl font-semibold">Product not found</h1>
        <Link href="/collection" className="mt-8 inline-block underline">
          Back to collection
        </Link>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-6xl">
        <Link href="/collection" className="text-sm tracking-[0.25em] text-neutral-400">
          ← COLLECTION
        </Link>

        <div className="mt-16 grid gap-12 md:grid-cols-2">
          <div className="flex min-h-[620px] items-center justify-center bg-[#1a1a1a]">
            <div className="text-center">
              <p className="text-xs tracking-[0.35em] text-neutral-500">
                {product.category}
              </p>
              <h1 className="mt-6 text-5xl font-semibold leading-tight">
                {product.name}
              </h1>
            </div>
          </div>

          <div className="py-6">
            <p className="text-sm tracking-[0.35em] text-neutral-500">
              {product.moment}
            </p>

            <h1 className="mt-6 text-5xl font-semibold">{product.name}</h1>

            <p className="mt-6 text-2xl font-semibold">₩{product.price}</p>

            <p className="mt-8 max-w-xl leading-8 text-neutral-400">
              {product.description}
            </p>

            <div className="mt-10">
              <h2 className="text-xl font-semibold">Custom Options</h2>

              <div className="mt-5 flex flex-wrap gap-3">
                {product.custom.map((option) => (
                  <span
                    key={option}
                    className="rounded-full border border-neutral-700 px-5 py-3 text-sm text-neutral-300"
                  >
                    {option}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-12 flex gap-4">
              <Link
                href={`/order?product=${params.id}`}
                className="inline-block bg-white px-10 py-4 text-sm font-semibold tracking-[0.2em] text-black transition hover:bg-neutral-300"
              >
                ORDER
              </Link>

              <Link
                href="/cart"
                className="inline-block border border-white px-10 py-4 text-sm font-semibold tracking-[0.2em] transition hover:bg-white hover:text-black"
              >
                CART
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}