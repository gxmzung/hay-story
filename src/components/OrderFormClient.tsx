"use client";

import { useState } from "react";

export default function OrderFormClient() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="mt-10 grid gap-5">
      <input className="rounded-2xl border p-4" placeholder="이름" />
      <input className="rounded-2xl border p-4" placeholder="연락처" />

      <select className="rounded-2xl border p-4">
        <option>첫 출근</option>
        <option>면접</option>
        <option>생일</option>
        <option>새로운 시작</option>
      </select>

      <textarea
        rows={6}
        className="rounded-2xl border p-4"
        placeholder="원하는 분위기와 상황을 적어주세요."
      />

      <button
        onClick={() => setSubmitted(true)}
        className="rounded-full bg-black px-8 py-4 text-white"
      >
        주문 요청 보내기
      </button>

      {submitted && (
        <div className="rounded-2xl bg-[#f7f3ee] p-5 text-neutral-700">
          주문 요청이 저장되었습니다. 디자이너가 확인 후 연락드립니다.
        </div>
      )}
    </div>
  );
}