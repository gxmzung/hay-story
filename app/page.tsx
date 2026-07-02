import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f5f5]">
      <nav className="flex items-center justify-between px-8 py-6 text-sm tracking-[0.25em]">
        <Link href="/" className="font-semibold">
          HAYOUNG STUDIO
        </Link>

        <div className="flex gap-8 text-neutral-400">
          <Link href="/collection" className="hover:text-white">
            COLLECTION
          </Link>
          <Link href="/order" className="hover:text-white">
            ORDER
          </Link>
          <Link href="/cart" className="hover:text-white">
            CART
          </Link>
        </div>
      </nav>

      <section className="flex min-h-[80vh] flex-col justify-center px-8">
        <p className="text-sm tracking-[0.4em] text-neutral-500">
          STORY BASED FASHION BRAND
        </p>

        <h1 className="mt-8 max-w-5xl text-6xl font-semibold leading-none md:text-8xl">
          A STORY
          <br />
          FOR YOUR
          <br />
          MOMENT.
        </h1>

        <p className="mt-8 max-w-xl leading-8 text-neutral-400">
          옷을 먼저 보여주기보다, 브랜드의 분위기와 이야기를 먼저 보여주는
          미니멀 패션 스튜디오.
        </p>

        <div className="mt-12 flex gap-4">
          <Link
            href="/collection"
            className="border border-white px-8 py-4 text-sm tracking-[0.25em] transition hover:bg-white hover:text-black"
          >
            ENTER
          </Link>

          <Link
            href="/order"
            className="border border-neutral-600 px-8 py-4 text-sm tracking-[0.25em] text-neutral-400 transition hover:border-white hover:text-white"
          >
            CUSTOM ORDER
          </Link>
        </div>
      </section>
    </main>
  );
}