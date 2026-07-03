import Link from "next/link";

const cartItems = [
  {
    name: "First Day Shirt",
    option: "M / Initial: YJ / Message: Begin Again",
    price: 49000,
    quantity: 1,
  },
];

export default function CartPage() {
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const shipping = 3000;
  const total = subtotal + shipping;

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-sm font-semibold tracking-[0.25em]">
            HAYOUNG STUDIO
          </Link>

          <div className="flex gap-8 text-xs tracking-[0.25em] text-neutral-400">
            <Link href="/story" className="hover:text-white">
              STORY
            </Link>
            <Link href="/collection" className="hover:text-white">
              COLLECTION
            </Link>
            <Link href="/order" className="hover:text-white">
              ORDER
            </Link>
          </div>
        </div>

        <div className="mt-20">
          <p className="text-sm tracking-[0.35em] text-neutral-500">CART</p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
            Your
            <br />
            Moment Bag.
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-neutral-400">
            선택한 제품과 커스터마이징 옵션을 확인하는 장바구니 화면입니다.
            현재는 실제 결제 전 단계의 MVP 구조입니다.
          </p>
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-[1fr_0.45fr]">
          <div className="space-y-6">
            {cartItems.map((item) => (
              <div
                key={item.name}
                className="grid gap-6 border border-neutral-800 bg-[#151515] p-6 md:grid-cols-[180px_1fr_auto]"
              >
                <div className="flex h-48 items-center justify-center bg-[#1f1f1f] text-center">
                  <div>
                    <p className="text-xs tracking-[0.3em] text-neutral-500">
                      SHIRT
                    </p>
                    <p className="mt-3 text-xl font-semibold">FIRST DAY</p>
                  </div>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold">{item.name}</h2>
                  <p className="mt-4 leading-7 text-neutral-400">
                    {item.option}
                  </p>

                  <div className="mt-6 flex gap-3">
                    <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-400">
                      세미 커스텀
                    </span>
                    <span className="rounded-full border border-neutral-700 px-4 py-2 text-sm text-neutral-400">
                      첫 출근
                    </span>
                  </div>
                </div>

                <div className="text-right">
                  <p className="text-lg font-semibold">
                    ₩{item.price.toLocaleString()}
                  </p>
                  <p className="mt-3 text-sm text-neutral-500">
                    Qty {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <aside className="h-fit border border-neutral-800 bg-[#151515] p-8">
            <p className="text-sm tracking-[0.35em] text-neutral-500">
              ORDER SUMMARY
            </p>

            <div className="mt-8 space-y-5 text-sm text-neutral-400">
              <div className="flex justify-between">
                <span>Subtotal</span>
                <span>₩{subtotal.toLocaleString()}</span>
              </div>

              <div className="flex justify-between">
                <span>Shipping</span>
                <span>₩{shipping.toLocaleString()}</span>
              </div>

              <div className="border-t border-neutral-800 pt-5">
                <div className="flex justify-between text-lg font-semibold text-white">
                  <span>Total</span>
                  <span>₩{total.toLocaleString()}</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              className="mt-8 w-full bg-white px-8 py-5 text-sm font-semibold tracking-[0.25em] text-black transition hover:bg-neutral-300"
            >
              CHECKOUT
            </button>

            <p className="mt-6 leading-7 text-neutral-500">
              실제 결제 기능은 추후 구현 예정입니다. 현재 단계에서는 주문 흐름과
              커스터마이징 경험을 검증합니다.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}