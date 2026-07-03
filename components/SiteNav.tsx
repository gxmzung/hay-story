import Link from "next/link";

type SiteNavProps = {
  center?: boolean;
};

export default function SiteNav({ center = false }: SiteNavProps) {
  if (center) {
    return (
      <nav className="relative flex items-center justify-center px-8 py-6 text-sm tracking-[0.25em]">
        <Link href="/" className="absolute left-8 font-semibold">
          HAYOUNG STUDIO
        </Link>

        <div className="flex gap-10 text-neutral-400">
          <Link href="/story" className="hover:text-white">
            STORY
          </Link>
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
    );
  }

  return (
    <nav className="flex items-center justify-between">
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
        <Link href="/cart" className="hover:text-white">
          CART
        </Link>
      </div>
    </nav>
  );
}