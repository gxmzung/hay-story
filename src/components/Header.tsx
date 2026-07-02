"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import { useState } from "react";

const menus = [
  { label: "STORY", href: "/story" },
  { label: "NEW", href: "/new" },
  { label: "BEST", href: "/best" },
  { label: "ORDER", href: "/order" },
  { label: "COMMUNITY", href: "/community" },
  { label: "DESIGNER", href: "/designer" },
];

export default function Header() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    if (!query.trim()) return;
    router.push(`/search?query=${encodeURIComponent(query)}`);
  };

  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="flex h-16 items-center justify-between border-b border-neutral-800 px-6 md:px-10">
        <div className="flex items-center gap-5">
          <button>
            <Menu size={24} />
          </button>

          <Link href="/">
            <h1 className="text-xl font-bold tracking-wide md:text-2xl">
              HAYOUNG STUDIO
            </h1>
          </Link>
        </div>

        <nav className="hidden gap-8 text-sm font-medium md:flex">
          {menus.map((menu) => (
            <Link
              key={menu.label}
              href={menu.href}
              className="transition hover:text-neutral-300"
            >
              {menu.label}
            </Link>
          ))}
        </nav>

        <div className="flex gap-4">
          <Search size={20} />
          <Heart size={20} />
          <Link href="/cart">
            <ShoppingBag size={20} />
          </Link>
          <User size={20} />
        </div>
      </div>

      <div className="bg-neutral-950 px-6 py-4 md:px-10">
        <div className="flex gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") handleSearch();
            }}
            placeholder="어떤 이야기를 입고 싶나요?"
            className="w-full rounded-xl bg-white px-5 py-3 text-black outline-none"
          />

          <button
            onClick={handleSearch}
            className="rounded-xl bg-white px-5 py-3 text-black"
          >
            검색
          </button>
        </div>
      </div>
    </header>
  );
}