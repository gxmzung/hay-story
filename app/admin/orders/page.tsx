"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import SiteNav from "@/components/SiteNav";

type Order = {
  id: string;
  customer: string;
  product: string;
  productId: string;
  size: string;
  moment: string;
  initial: string;
  date: string;
  message: string;
  request: string;
  price: number;
  shipping: number;
  total: number;
  status: string;
  createdAt: string;
};

const sampleOrders: Order[] = [
  {
    id: "HS-2026-0001",
    customer: "Sample Customer",
    product: "First Day Shirt",
    productId: "first-day-shirt",
    size: "M",
    moment: "첫 출근",
    initial: "YJ",
    date: "2026.03.02",
    message: "Begin Again",
    request: "",
    price: 49000,
    shipping: 3000,
    total: 52000,
    status: "Received",
    createdAt: "2026-03-02T09:00:00.000Z",
  },
];

export default function AdminOrdersPage() {
  const [orders, setOrders] = useState<Order[]>(sampleOrders);

  useEffect(() => {
    const savedOrders = localStorage.getItem("hayoung-orders");

    if (savedOrders) {
      setOrders(JSON.parse(savedOrders));
    }
  }, []);

  const handleClearOrders = () => {
    localStorage.removeItem("hayoung-orders");
    setOrders(sampleOrders);
  };

  return (
    <main className="min-h-screen bg-[#0f0f0f] px-8 py-12 text-[#f5f5f5]">
      <section className="mx-auto max-w-7xl">
        <SiteNav />

        <div className="mt-20">
          <p className="text-sm tracking-[0.35em] text-neutral-500">ADMIN</p>

          <h1 className="mt-6 text-5xl font-semibold leading-tight md:text-7xl">
            Order
            <br />
            Management.
          </h1>

          <p className="mt-8 max-w-2xl leading-8 text-neutral-400">
            HAYOUNG STUDIO 쇼핑몰에서 들어온 주문과 커스터마이징 정보를
            확인하는 관리자용 MVP 화면입니다.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/collection"
            className="inline-block border border-white px-8 py-4 text-sm font-semibold tracking-[0.25em] transition hover:bg-white hover:text-black"
          >
            BACK TO SHOP
          </Link>

          <button
            type="button"
            onClick={handleClearOrders}
            className="inline-block border border-neutral-700 px-8 py-4 text-sm font-semibold tracking-[0.25em] text-neutral-300 transition hover:border-white hover:text-white"
          >
            CLEAR ORDERS
          </button>
        </div>

        <div className="mt-16 overflow-hidden border border-neutral-800 bg-[#151515]">
          <div className="grid grid-cols-[1.2fr_1fr_1.2fr_0.8fr_0.8fr] border-b border-neutral-800 px-6 py-4 text-xs tracking-[0.25em] text-neutral-500">
            <div>ORDER</div>
            <div>CUSTOMER</div>
            <div>PRODUCT</div>
            <div>TOTAL</div>
            <div>STATUS</div>
          </div>

          {orders.map((order) => (
            <div
              key={order.id}
              className="grid grid-cols-[1.2fr_1fr_1.2fr_0.8fr_0.8fr] border-b border-neutral-800 px-6 py-6 last:border-b-0"
            >
              <div>
                <p className="font-semibold">{order.id}</p>
                <p className="mt-2 text-sm text-neutral-500">
                  {new Date(order.createdAt).toLocaleString("ko-KR")}
                </p>
              </div>

              <div>
                <p>{order.customer}</p>
                <p className="mt-2 text-sm text-neutral-500">
                  Initial: {order.initial}
                </p>
              </div>

              <div>
                <p>{order.product}</p>
                <p className="mt-2 text-sm text-neutral-500">
                  Size {order.size} / {order.moment}
                </p>
                <p className="mt-2 text-sm text-neutral-500">
                  “{order.message}” · {order.date}
                </p>
                {order.request && (
                  <p className="mt-2 text-sm text-neutral-600">
                    Request: {order.request}
                  </p>
                )}
              </div>

              <div>
                <p>₩{order.total.toLocaleString()}</p>
              </div>

              <div>
                <span className="inline-block border border-neutral-700 px-4 py-2 text-xs tracking-[0.2em] text-neutral-300">
                  {order.status}
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 border border-neutral-800 bg-[#151515] p-8">
          <p className="text-sm tracking-[0.35em] text-neutral-500">
            NEXT STEP
          </p>

          <p className="mt-5 max-w-3xl leading-8 text-neutral-400">
            현재는 localStorage 기반 주문 관리 화면입니다. 다음 단계에서는
            Supabase, Firebase, PostgreSQL 같은 DB에 주문 정보를 저장하고,
            관리자 계정에서 주문 상태를 변경할 수 있게 만들 수 있습니다.
          </p>
        </div>
      </section>
    </main>
  );
}