export default function MainBanner() {
  return (
    <section className="bg-white px-6 py-6">
      <div className="mx-auto grid max-w-7xl grid-cols-3 gap-4">
        {[
          ["STORY COLLECTION", "Find your own story.", "직접 선택한 길을 위한 옷.", "bg-[#d8c7b4]"],
          ["CUSTOM ORDER", "당신의 순간을 들려주세요.", "세미 커스텀 주문서 만들기.", "bg-black text-white"],
          ["AI STYLE FINDER", "오늘의 나에게 어울리는 스타일.", "상황과 분위기로 추천받기.", "bg-[#efe7dc]"],
        ].map(([tag, title, desc, color]) => (
          <div key={title} className={`h-[360px] rounded-3xl p-8 ${color}`}>
            <p className="text-sm tracking-[0.3em] opacity-60">{tag}</p>
            <h2 className="mt-6 text-4xl font-bold leading-tight">{title}</h2>
            <p className="mt-24 text-base opacity-80">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}