export default function MainBanner() {
  return (
    <section className="bg-white">
      <div className="mx-auto grid max-w-7xl gap-4 px-6 py-6 md:grid-cols-3">
        <article className="flex min-h-[360px] flex-col justify-between rounded-3xl bg-[#d8c7b4] p-8">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-white/80">
              STORY COLLECTION
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight text-white">
              Find your
              <br />
              own story.
            </h2>
          </div>

          <p className="max-w-xs leading-7 text-white/90">
            누군가가 정해준 길이 아니라, 직접 선택한 길을 위한 옷.
          </p>
        </article>

        <article className="flex min-h-[360px] flex-col justify-between rounded-3xl bg-[#1f1f1f] p-8 text-white">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-white/50">
              CUSTOM ORDER
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              당신의 순간을
              <br />
              들려주세요.
            </h2>
          </div>

          <button className="w-fit rounded-full bg-white px-5 py-3 text-sm font-medium text-black">
            주문서 만들기
          </button>
        </article>

        <article className="flex min-h-[360px] flex-col justify-between rounded-3xl bg-[#efe7dc] p-8">
          <div>
            <p className="text-sm font-medium tracking-[0.25em] text-neutral-500">
              AI STYLE FINDER
            </p>
            <h2 className="mt-4 text-4xl font-semibold leading-tight">
              오늘의 나에게
              <br />
              어울리는 스타일.
            </h2>
          </div>

          <p className="max-w-xs leading-7 text-neutral-600">
            상황, 분위기, 핏을 선택하면 나에게 맞는 스타일을 추천합니다.
          </p>
        </article>
      </div>
    </section>
  );
}