import Link from "next/link";

const heroImage =
  "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?auto=format&fit=crop&w=1200&q=80";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0f0f0f] text-[#f5f5f5]">
      <nav className="relative flex items-center justify-center px-8 py-6 text-sm tracking-[0.25em]">
        <Link href="/" className="absolute left-8 font-semibold">
          HAYOUNG STUDIO
        </Link>
          <Link href="/story" className="hover:text-white">
            STORY
          </Link>
        <div className="flex gap-10 text-neutral-400">
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

      <section className="grid min-h-[82vh] items-center gap-10 px-8 md:grid-cols-2">
        <div>
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

          <div className="mt-12">
            <Link
              href="/collection"
              className="inline-block border border-white px-10 py-4 text-sm tracking-[0.25em] transition hover:bg-white hover:text-black"
            >
              ENTER
            </Link>
          </div>
        </div>

        <div className="relative hidden h-[620px] md:block">
          <div className="absolute right-0 top-0 h-[560px] w-[78%] bg-neutral-800" />

          <div className="absolute right-16 top-16 h-[560px] w-[72%] overflow-hidden border border-neutral-700 bg-[#1b1b1b]">
            <img
              src={heroImage}
              alt="Minimal fashion editorial"
              className="h-full w-full object-cover grayscale"
            />

            <div className="absolute inset-0 bg-black/35" />

            <div className="absolute left-6 top-6 text-xs tracking-[0.35em] text-neutral-300">
              2026 FIRST COLLECTION
            </div>

            <div className="absolute bottom-6 left-6 text-sm text-neutral-300">
              minimal / black / grey / story
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}