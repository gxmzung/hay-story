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

const products = [
  {
    name: "Soft Beige Shirt",
    price: "42,000원",
    color: "bg-[#d8c7b4]",
    story: "새로운 공간에 들어서는 사람을 위한 부드러운 첫인상.",
  },
  {
    name: "Calm Wide Slacks",
    price: "58,000원",
    color: "bg-[#b8afa5]",
    story: "차분하지만 흔들리지 않는 하루를 위한 실루엣.",
  },
  {
    name: "Story Knit Cardigan",
    price: "64,000원",
    color: "bg-[#c9b79c]",
    story: "조금 더 따뜻한 사람이 되고 싶은 날의 옷.",
  },
];

export default function Home() {
  const [selected, setSelected] = useState<string | null>(null);
  const [question, setQuestion] = useState<string | null>(null);

  const [styleSituation, setStyleSituation] = useState("첫 출근");
  const [styleMood, setStyleMood] = useState("차분한");
  const [styleFit, setStyleFit] = useState("레귤러");
  const [styleResult, setStyleResult] = useState<string | null>(null);

  const [orderResult, setOrderResult] = useState(false);
  const [orderMoment, setOrderMoment] = useState("첫 출근");
  const [orderMood, setOrderMood] = useState("차분한");
  const [orderStory, setOrderStory] = useState("");

  const handleStyleFind = () => {
    setStyleResult(
      `${styleSituation} 상황에는 ${styleMood} 분위기를 살리면서 ${styleFit} 핏으로 정리한 스타일을 추천해요. 너무 과하지 않지만, 그 순간의 나를 조금 더 선명하게 보여줄 수 있는 옷이 좋습니다.`
    );
  };

  return (
    <main className="min-h-screen bg-[#f7f3ee] text-[#1f1f1f]">
      <nav className="fixed left-0 top-0 z-50 flex w-full items-center justify-between bg-[#f7f3ee]/80 px-6 py-4 backdrop-blur-md md:px-12">
        <span className="text-sm font-semibold tracking-[0.3em]">HAYOUNG</span>
        <div className="hidden gap-6 text-sm text-neutral-500 md:flex">
          <a href="#about">About</a>
          <a href="#style">AI Style</a>
          <a href="#order">Custom Order</a>
          <a href="#collection">Collection</a>
          <a href="#talk">Designer Talk</a>
        </div>
      </nav>

      <section className="flex min-h-screen flex-col items-center justify-center px-6 pb-20 pt-28 text-center">
        <p className="mb-4 text-xs tracking-[0.35em] text-neutral-500 md:text-sm">
          HAYOUNG STUDIO
        </p>

        <h1 className="max-w-3xl text-4xl font-semibold leading-tight md:text-7xl">
          Find your own story.
        </h1>

        <p className="mt-6 max-w-xl text-base leading-8 text-neutral-600 md:text-lg">
          옷을 고르는 일이 아니라, 나의 순간을 고르는 공간. 새 출발, 첫
          출근, 면접, 여행, 그리고 다시 시작하는 사람들을 위한 브랜드.
        </p>

        <div className="mt-10 grid w-full max-w-3xl grid-cols-2 gap-3 md:grid-cols-3 md:gap-4">
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
          <div className="mt-8 w-full max-w-xl rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-sm text-neutral-400">Selected Moment</p>
            <h2 className="mt-2 text-2xl font-semibold">{selected}</h2>
            <p className="mt-3 leading-7 text-neutral-600">
              {messages[selected]}
            </p>
          </div>
        )}

        <section
          id="about"
          className="mt-20 grid w-full max-w-5xl gap-8 rounded-[2rem] bg-white p-6 text-left shadow-sm md:grid-cols-2 md:p-8"
        >
          <div>
            <p className="text-sm tracking-[0.3em] text-neutral-400">
              ABOUT BRAND
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-tight md:text-4xl">
              누군가가 정해준 길이 아니라,
              <br />
              직접 선택한 길을 위한 옷.
            </h2>
          </div>

          <div className="space-y-5 text-base leading-8 text-neutral-600 md:text-lg md:leading-9">
            <p>
              HAYOUNG STUDIO는 옷을 단순한 상품이 아니라 한 사람이 지나온
              고민과 선택의 기록으로 바라봅니다.
            </p>
            <p>
              좋아하는 것과 잘하는 것 사이에서 흔들렸던 사람들, 다시 시작하는
              사람들, 자신의 이야기를 찾아가는 사람들을 위한 브랜드입니다.
            </p>
          </div>
        </section>

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

              <div className="mt-5 flex flex-wrap gap-3">
                <span className="rounded-full bg-white px-4 py-2 text-sm">
                  예상 제작 기간 7~14일
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm">
                  추천 원단 Cotton Blend
                </span>
                <span className="rounded-full bg-white px-4 py-2 text-sm">
                  Semi-Custom
                </span>
              </div>
            </div>
          )}
        </section>

        <section id="collection" className="mt-16 w-full max-w-5xl">
          <p className="text-sm tracking-[0.3em] text-neutral-400">
            RECOMMENDED STORIES
          </p>
          <h2 className="mt-3 text-3xl font-semibold">
            오늘의 순간에 어울리는 옷
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className="rounded-[2rem] bg-white p-5 text-left shadow-sm"
              >
                <div
                  className={`relative flex h-52 items-center justify-center overflow-hidden rounded-[1.5rem] ${product.color}`}
                >
                  <div className="absolute top-5 h-6 w-24 rounded-full bg-white/40" />
                  <div className="h-32 w-24 rounded-b-2xl rounded-t-[3rem] bg-white/70 shadow-sm" />
                  <div className="absolute bottom-5 text-xs tracking-[0.25em] text-white/80">
                    HAY
                  </div>
                </div>

                <h3 className="mt-5 text-xl font-semibold">{product.name}</h3>
                <p className="mt-2 text-neutral-500">{product.story}</p>
                <div className="mt-5 flex items-center justify-between">
                  <span className="font-medium">{product.price}</span>
                  <button className="rounded-full bg-black px-4 py-2 text-sm text-white">
                    Story 보기
                  </button>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          id="talk"
          className="mt-20 w-full max-w-4xl rounded-[2rem] bg-[#1f1f1f] p-6 text-left text-white md:p-8"
        >
          <p className="text-sm tracking-[0.3em] text-neutral-400">
            DESIGNER TALK
          </p>
          <h2 className="mt-4 text-3xl font-semibold">
            왜 이 옷을 만들었나요?
          </h2>
          <p className="mt-4 leading-8 text-neutral-300">
            디자이너의 생각과 옷에 담긴 이야기를 대화하듯 확인할 수 있어요.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "이 옷은 어떤 사람을 위한 옷인가요?",
              "이 컬렉션의 분위기는 무엇인가요?",
              "새로운 시작에 어울리는 이유는?",
            ].map((item) => (
              <button
                key={item}
                onClick={() => setQuestion(item)}
                className="rounded-full border border-neutral-600 px-5 py-3 text-sm transition hover:bg-white hover:text-black"
              >
                {item}
              </button>
            ))}
          </div>

          {question && (
            <div className="mt-8 rounded-3xl bg-white p-6 text-black">
              <p className="text-sm text-neutral-400">Question</p>
              <h3 className="mt-2 text-xl font-semibold">{question}</h3>
              <p className="mt-4 leading-8 text-neutral-600">
                이 옷은 아직 자신의 길을 찾는 사람을 위해 만들었습니다.
                낯선 시작 앞에서도 스스로를 잃지 않도록, 편안하지만 단단한
                분위기를 담았습니다.
              </p>
            </div>
          )}
        </section>

        <footer className="mt-20 border-t border-neutral-300 px-6 py-10 text-center text-sm text-neutral-500">
          <p className="tracking-[0.3em]">HAYOUNG STUDIO</p>
          <p className="mt-3">Started from a dream. Built for your story.</p>
        </footer>
      </section>
    </main>
  );
}