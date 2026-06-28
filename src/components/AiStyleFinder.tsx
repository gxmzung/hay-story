"use client";

import { useState } from "react";

export default function AiStyleFinder() {
  const [styleSituation, setStyleSituation] = useState("첫 출근");
  const [styleMood, setStyleMood] = useState("차분한");
  const [styleFit, setStyleFit] = useState("레귤러");
  const [styleResult, setStyleResult] = useState<string | null>(null);

  const handleStyleFind = () => {
    setStyleResult(
      `${styleSituation} 상황에는 ${styleMood} 분위기를 살리면서 ${styleFit} 핏으로 정리한 스타일을 추천해요. 너무 과하지 않지만, 그 순간의 나를 조금 더 선명하게 보여줄 수 있는 옷이 좋습니다.`
    );
  };

  return (
    <section
      id="style"
      className="mt-16 w-full max-w-5xl rounded-[2rem] bg-[#efe7dc] p-6 text-left md:p-8"
    >
      <p className="text-sm tracking-[0.3em] text-neutral-500">
        AI STYLE FINDER
      </p>

      <h2 className="mt-4 text-3xl font-semibold">
        오늘의 나에게 어울리는 스타일 찾기
      </h2>

      <div className="mt-8 grid gap-4 md:grid-cols-3">
        <select
          value={styleSituation}
          onChange={(e) => setStyleSituation(e.target.value)}
          className="rounded-2xl border border-neutral-300 bg-white p-4"
        >
          <option>첫 출근</option>
          <option>면접</option>
          <option>새로운 시작</option>
          <option>여행</option>
        </select>

        <select
          value={styleMood}
          onChange={(e) => setStyleMood(e.target.value)}
          className="rounded-2xl border border-neutral-300 bg-white p-4"
        >
          <option>차분한</option>
          <option>따뜻한</option>
          <option>단단한</option>
          <option>여성스러운</option>
        </select>

        <select
          value={styleFit}
          onChange={(e) => setStyleFit(e.target.value)}
          className="rounded-2xl border border-neutral-300 bg-white p-4"
        >
          <option>슬림</option>
          <option>레귤러</option>
          <option>오버핏</option>
        </select>
      </div>

      <button
        onClick={handleStyleFind}
        className="mt-6 rounded-full bg-black px-6 py-3 text-white"
      >
        AI 추천 받기
      </button>

      {styleResult && (
        <div className="mt-6 rounded-3xl bg-white p-6 leading-8 text-neutral-700">
          {styleResult}
        </div>
      )}
    </section>
  );
}