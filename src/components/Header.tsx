"use client";

import { Heart, Menu, Search, ShoppingBag, User } from "lucide-react";
import Link from "next/link";
const menus = ["STORY", "NEW", "BEST", "ORDER", "COMMUNITY", "DESIGNER"];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="flex h-16 items-center justify-between border-b border-neutral-800 px-6 md:px-10">
        <div className="flex items-center gap-5">
          <button>
            <Menu size={24} />
          </button>

          <h1 className="text-xl font-bold tracking-wide md:text-2xl">
            HAYOUNG STUDIO
          </h1>
        </div>

        <div className="hidden gap-8 text-sm font-medium md:flex">
          {menus.map((menu) => (
            <button key={menu} className="transition hover:text-neutral-300">
              {menu}
            </button>
          ))}
        </div>

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
        <input
          placeholder="어떤 이야기를 입고 싶나요?"
          className="w-full rounded-xl bg-white px-5 py-3 text-black outline-none"
        />
      </div>
    </header>
  );
}