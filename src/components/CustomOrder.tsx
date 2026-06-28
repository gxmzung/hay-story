"use client";

import { useState } from "react";

export default function CustomOrder() {
  const [orderResult, setOrderResult] = useState(false);
  const [orderMoment, setOrderMoment] = useState("첫 출근");
  const [orderMood, setOrderMood] = useState("차분한");
  const [orderStory, setOrderStory] = useState("");

  return (
    <section
      id="order"
      className="mt-20 w-full max-w-5xl rounded-[2rem] bg-white p-6 text-left shadow-sm md:p-8"
    >
      <p className="text-sm tracking-[0.3em] text-neutral-400">
        CUSTOM STORY ORDER
      </p>

      <h2 className="mt-4 text-3xl font-semibold">
        당신의 순간을 디자이너에게 들려주세요.
      </h2>

      <p className="mt-4 max-w-2xl leading-8 text-neutral-600">
        옷이 필요한 순간과 원하는 분위기를 알려주시면, 디자이너가 당신의
        이야기에 맞는 스타일을 제안합니다.
      </p>

      <div className="mt-10 grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm text-neutral-500">
            어떤 순간인가요?
          </label>

          <select
            value={orderMoment}
            onChange={(e) => setOrderMoment(e.target.value)}
            className="w-full rounded-2xl border border-neutral-300 p-4"
          >
            <option>첫 출근</option>
            <option>면접</option>
            <option>졸업</option>
            <option>생일</option>
            <option>새로운 시작</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm text-neutral-500">
            원하는 분위기
          </label>

          <select
            value={orderMood}
            onChange={(e) => setOrderMood(e.target.value)}
            className="w-full rounded-2xl border border-neutral-300 p-4"
          >
            <option>차분한</option>
            <option>따뜻한</option>
            <option>단단한</option>
            <option>여성스러운</option>
            <option>편안한</option>
          </select>
        </div>
      </div>

      <div className="mt-5">
        <label className="mb-2 block text-sm text-neutral-500">
          당신의 이야기를 들려주세요.
        </label>

        <textarea
          rows={6}
          value={orderStory}
          onChange={(e) => setOrderStory(e.target.value)}
          className="w-full rounded-2xl border border-neutral-300 p-4"
          placeholder="예) 첫 직장 출근을 앞두고 있어요. 너무 딱딱하지 않지만 신뢰감 있는 분위기를 주고 싶어요."
        />
      </div>

      <button
        onClick={() => setOrderResult(true)}
        className="mt-6 rounded-full bg-black px-6 py-3 text-white"
      >
        AI 주문서 생성하기
      </button>

      {orderResult && (
        <div className="mt-8 rounded-[2rem] bg-[#f7f3ee] p-6">
          <p className="text-sm tracking-[0.25em] text-neutral-400">
            CUSTOM ORDER CARD
          </p>

          <div className="mt-6 grid gap-5 md:grid-cols-2">
            <div>
              <p className="text-sm text-neutral-500">Moment</p>
              <h3 className="mt-1 text-xl font-semibold">{orderMoment}</h3>
            </div>

            <div>
              <p className="text-sm text-neutral-500">Mood</p>
              <h3 className="mt-1 text-xl font-semibold">
                {orderMood} 분위기
              </h3>
            </div>
          </div>

          <div className="mt-6 rounded-3xl bg-white p-6">
            <p className="text-sm text-neutral-400">Designer Suggestion</p>
            <p className="mt-3 leading-8 text-neutral-700">
              {orderStory
                ? `"${orderStory}"라는 이야기를 바탕으로, ${orderMood} 분위기를 살린 세미 커스텀 의상을 제안합니다. ${orderMoment}이라는 순간에 어울리도록 부담스럽지 않지만 오래 기억될 수 있는 실루엣을 중심으로 디자인합니다.`
                : `${orderMoment}이라는 순간에 어울리도록, ${orderMood} 분위기를 살린 세미 커스텀 의상을 제안합니다. 부담스럽지 않지만 오래 기억될 수 있는 실루엣을 중심으로 디자인합니다.`}
            </p>
          </div>
        </div>
      )}
    </section>
  );
}