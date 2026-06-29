"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OrderFormClient() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [moment, setMoment] = useState("첫 출근");
  const [story, setStory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);

    setTimeout(() => {
      router.push("/order/complete");
    }, 700);
  };

  return (
    <div className="mt-10 grid gap-5">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="rounded-2xl border p-4"
        placeholder="이름"
      />

      <input
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="rounded-2xl border p-4"
        placeholder="연락처"
      />

      <select
        value={moment}
        onChange={(e) => setMoment(e.target.value)}
        className="rounded-2xl border p-4"
      >
        <option>첫 출근</option>
        <option>면접</option>
        <option>생일</option>
        <option>새로운 시작</option>
      </select>

      <textarea
        rows={6}
        value={story}
        onChange={(e) => setStory(e.target.value)}
        className="rounded-2xl border p-4"
        placeholder="원하는 분위기와 상황을 적어주세요."
      />

      <div className="rounded-3xl bg-[#f7f3ee] p-6">
        <p className="text-sm tracking-[0.25em] text-neutral-400">
          AI ORDER PREVIEW
        </p>

        <h2 className="mt-3 text-2xl font-bold">
          {name || "고객"}님의 {moment}을 위한 주문서
        </h2>

        <p className="mt-4 leading-8 text-neutral-600">
          {story
            ? `"${story}"라는 요청을 바탕으로, 디자이너가 상황에 맞는 세미 커스텀 스타일을 제안합니다.`
            : "아직 상세 요청이 입력되지 않았습니다. 원하는 분위기와 상황을 작성하면 주문서가 더 구체화됩니다."}
        </p>
      </div>

      <button
        onClick={handleSubmit}
        className="rounded-full bg-black px-8 py-4 text-white"
      >
        주문 요청 보내기
      </button>

      {submitted && (
        <div className="rounded-2xl bg-[#f7f3ee] p-5 text-neutral-700">
          주문 요청이 저장되었습니다. 완료 페이지로 이동합니다.
        </div>
      )}
    </div>
  );
}