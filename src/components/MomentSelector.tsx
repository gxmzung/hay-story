"use client";

import { useState } from "react";

const moments = [
  "새 학기",
  "첫 출근",
  "면접",
  "여행",
  "새로운 시작",
  "나를 바꾸고 싶은 날",
];

const messages: Record<string, string> = {
  "새 학기": "낯선 공간에서도 나답게 시작할 수 있는 단정한 룩을 추천해요.",
  "첫 출근": "긴장보다 신뢰가 먼저 보이는 깔끔한 스타일이 좋아요.",
  면접: "차분하지만 존재감 있는 실루엣으로 첫인상을 정리해요.",
  여행: "가볍고 편하지만 사진 속 분위기까지 남는 옷을 골라요.",
  "새로운 시작": "어제와 다른 나를 보여주는 작은 변화부터 시작해요.",
  "나를 바꾸고 싶은 날":
    "분위기를 바꾸는 옷 한 벌로 오늘의 나를 다시 설계해요.",
};

export default function MomentSelector() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section className="w-full max-w-3xl py-6">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
        {moments.map((moment) => (
          <button
            key={moment}
            onClick={() => setSelected(moment)}
            className="rounded-3xl border border-neutral-300 bg-white/60 px-4 py-5 text-base shadow-sm transition hover:-translate-y-1 hover:bg-white md:px-5 md:py-6 md:text-lg"
          >
            {moment}
          </button>
        ))}
      </div>

      {selected && (
        <div className="mx-auto mt-8 w-full max-w-xl rounded-3xl bg-white p-6 shadow-sm">
          <p className="text-sm text-neutral-400">Selected Moment</p>
          <h2 className="mt-2 text-2xl font-semibold">{selected}</h2>
          <p className="mt-3 leading-7 text-neutral-600">
            {messages[selected]}
          </p>
        </div>
      )}
    </section>
  );
}