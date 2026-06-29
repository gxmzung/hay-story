"use client";

import { useState } from "react";

const questions = [
  {
    q: "왜 이 옷을 만들었나요?",
    a: "새로운 시작 앞에서 너무 튀지 않지만, 스스로를 단단하게 느낄 수 있는 옷을 상상했습니다.",
  },
  {
    q: "어떤 사람을 위한 옷인가요?",
    a: "정해진 길보다 자신이 선택한 길을 걷고 싶은 사람들을 위한 옷입니다.",
  },
  {
    q: "이 브랜드의 핵심 분위기는 무엇인가요?",
    a: "따뜻하지만 가볍지 않고, 차분하지만 존재감 있는 분위기를 지향합니다.",
  },
];

export default function DesignerTalk() {
  const [selected, setSelected] = useState(questions[0]);

  return (
    <section className="bg-[#1f1f1f] px-6 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2">
        <div>
          <p className="text-sm tracking-[0.3em] text-neutral-400">
            DESIGNER TALK
          </p>

          <h2 className="mt-4 text-4xl font-bold leading-tight">
            옷에 담긴 이야기를
            <br />
            디자이너에게 묻다.
          </h2>

          <p className="mt-6 max-w-md leading-8 text-neutral-300">
            단순한 상품 설명이 아니라, 왜 이 옷이 만들어졌는지 대화하듯
            확인할 수 있습니다.
          </p>
        </div>

        <div>
          <div className="flex flex-wrap gap-3">
            {questions.map((item) => (
              <button
                key={item.q}
                onClick={() => setSelected(item)}
                className="rounded-full border border-neutral-600 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
              >
                {item.q}
              </button>
            ))}
          </div>

          <div className="mt-8 rounded-3xl bg-white p-8 text-black">
            <p className="text-sm text-neutral-400">Question</p>
            <h3 className="mt-2 text-2xl font-bold">{selected.q}</h3>

            <p className="mt-5 leading-8 text-neutral-600">{selected.a}</p>
          </div>
        </div>
      </div>
    </section>
  );
}