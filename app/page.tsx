import Link from "next/link";

const moments = [
  {
    title: "첫 출근",
    description: "낯선 환경에서 단정함과 자신감이 필요한 순간",
  },
  {
    title: "면접",
    description: "좋은 첫인상과 안정감이 중요한 순간",
  },
  {
    title: "새 학기",
    description: "새로운 관계와 분위기를 준비하는 순간",
  },
  {
    title: "발표",
    description: "사람들 앞에서 나를 보여주어야 하는 순간",
  },
  {
    title: "새로운 관계",
    description: "처음 만나는 사람들에게 나를 표현하는 순간",
  },
  {
    title: "새로운 도시",
    description: "익숙하지 않은 공간에서 나만의 시작을 만드는 순간",
  },
];

const customOptions = [
  "이니셜 자수",
  "날짜 각인",
  "짧은 문구",
  "라벨 메시지",
  "소매 포인트",
  "포장 카드",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7f1ea] text-[#1f1b18]">
      <nav className="flex items-center justify-between px-6 py-5 text-sm md:px-12">
        <Link href="/" className="font-semibold tracking-[0.25em]">
          HAYOUNG STUDIO
        </Link>

        <div className="hidden gap-8 text-xs tracking-[0.25em] text-[#6f6258] md:flex">
          <a href="#concept" className="hover:text-[#1f1b18]">
            CONCEPT
          </a>
          <a href="#product" className="hover:text-[#1f1b18]">
            PRODUCT
          </a>
          <a href="#custom" className="hover:text-[#1f1b18]">
            CUSTOM
          </a>
          <a href="#feedback" className="hover:text-[#1f1b18]">
            FEEDBACK
          </a>
        </div>
      </nav>

      <section className="grid min-h-[82vh] items-center gap-12 px-6 py-16 md:grid-cols-[1.1fr_0.9fr] md:px-12">
        <div>
          <p className="text-sm tracking-[0.35em] text-[#9b7b65]">
            SEMI CUSTOM FASHION BRAND
          </p>

          <h1 className="mt-8 max-w-4xl text-5xl font-semibold leading-tight md:text-7xl">
            새로운 시작을
            <br />
            위한 옷
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-[#5d5149]">
            첫 출근, 면접, 새 학기, 새로운 인간관계.
            <br />
            HAYOUNG STUDIO는 인생의 전환점을 앞둔 사람들이 자신의
            이야기와 취향을 담아 완성할 수 있는 세미 커스터마이징 패션
            브랜드를 지향합니다.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#concept"
              className="rounded-full bg-[#1f1b18] px-8 py-4 text-sm font-medium tracking-[0.15em] text-white transition hover:bg-[#3a312b]"
            >
              CONCEPT 보기
            </a>
            <a
              href="#feedback"
              className="rounded-full border border-[#1f1b18] px-8 py-4 text-sm font-medium tracking-[0.15em] transition hover:bg-white"
            >
              의견 남기기
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="rounded-[2rem] bg-[#eadfd5] p-8 shadow-sm">
            <div className="rounded-[1.5rem] bg-[#fffaf5] p-8">
              <p className="text-xs tracking-[0.3em] text-[#9b7b65]">
                FIRST PRODUCT
              </p>
              <h2 className="mt-6 text-4xl font-semibold leading-tight">
                First Day
                <br />
                Shirt
              </h2>
              <p className="mt-6 leading-8 text-[#6f6258]">
                이니셜, 날짜, 짧은 문구를 담을 수 있는 새로운 시작을 위한
                베이직 셔츠.
              </p>

              <div className="mt-8 rounded-2xl border border-[#e3d4c8] bg-white p-5">
                <p className="text-xs tracking-[0.25em] text-[#9b7b65]">
                  CUSTOM LABEL
                </p>
                <p className="mt-3 text-2xl font-semibold">NEW CHAPTER</p>
                <p className="mt-1 text-sm text-[#8c7b70]">2026.03.02</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="concept" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm tracking-[0.3em] text-[#9b7b65]">CONCEPT</p>
          <h2 className="mt-4 text-4xl font-semibold">
            오늘 어떤 시작 앞에 서 있나요?
          </h2>
          <p className="mt-6 max-w-3xl leading-8 text-[#5d5149]">
            일반 쇼핑몰이 상의, 하의, 아우터처럼 제품 중심으로 옷을
            보여준다면 HAYOUNG STUDIO는 고객의 상황을 먼저 이해하고 그
            순간에 맞는 스타일을 제안합니다.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {moments.map((moment) => (
              <div
                key={moment.title}
                className="rounded-3xl border border-[#e1d2c6] bg-[#fffaf5] p-6"
              >
                <h3 className="text-xl font-semibold">{moment.title}</h3>
                <p className="mt-3 leading-7 text-[#6f6258]">
                  {moment.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="product" className="bg-[#1f1b18] px-6 py-20 text-white md:px-12">
        <div className="mx-auto grid max-w-5xl gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#c7aa95]">
              FIRST PRODUCT
            </p>
            <h2 className="mt-4 text-4xl font-semibold">First Day Shirt</h2>
          </div>

          <div className="space-y-6 leading-8 text-[#d8ccc3]">
            <p>
              첫 제품은 과하게 유행을 타는 아이템보다, 새로운 시작이라는
              콘셉트를 명확히 전달할 수 있는 베이직 셔츠를 중심으로
              검토합니다.
            </p>
            <p>
              셔츠는 첫 출근, 면접, 새 학기, 발표 등 다양한 상황과 연결되며,
              이니셜·날짜·문구·라벨 메시지 같은 세미 커스터마이징 요소를
              적용하기 쉽습니다.
            </p>
          </div>
        </div>
      </section>

      <section id="custom" className="px-6 py-20 md:px-12">
        <div className="mx-auto max-w-5xl">
          <p className="text-sm tracking-[0.3em] text-[#9b7b65]">
            SEMI CUSTOM
          </p>
          <h2 className="mt-4 text-4xl font-semibold">
            작은 선택이 나만의 이야기가 됩니다
          </h2>

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            {customOptions.map((option) => (
              <div
                key={option}
                className="rounded-full border border-[#d9c8ba] bg-[#fffaf5] px-6 py-4 text-center"
              >
                {option}
              </div>
            ))}
          </div>

          <div className="mt-12 rounded-3xl bg-[#fffaf5] p-8">
            <p className="text-sm tracking-[0.25em] text-[#9b7b65]">
              PREVIEW EXAMPLE
            </p>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-3xl font-semibold">Begin Again</p>
                <p className="mt-2 text-[#6f6258]">나의 첫 출근을 위한 문구</p>
              </div>
              <div className="rounded-2xl border border-[#e1d2c6] bg-white p-6">
                <p className="text-xs tracking-[0.25em] text-[#9b7b65]">
                  SHIRT LABEL
                </p>
                <p className="mt-3 text-2xl font-semibold">Begin Again</p>
                <p className="mt-1 text-sm text-[#8c7b70]">YJ · 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="feedback" className="bg-[#eadfd5] px-6 py-20 md:px-12">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm tracking-[0.3em] text-[#9b7b65]">FEEDBACK</p>
          <h2 className="mt-4 text-4xl font-semibold">
            이런 옷이 필요하다고 느끼시나요?
          </h2>
          <p className="mt-6 leading-8 text-[#5d5149]">
            이 사이트는 완성된 쇼핑몰이 아니라, 새로운 시작을 위한 세미
            커스터마이징 패션 브랜드라는 콘셉트가 고객에게 이해되는지
            검증하기 위한 웹 MVP입니다.
          </p>

          <div className="mt-10 rounded-3xl bg-[#fffaf5] p-8 text-left">
            <p className="font-semibold">검증하고 싶은 질문</p>
            <ul className="mt-4 space-y-3 leading-7 text-[#5d5149]">
              <li>1. 이 브랜드 콘셉트가 20대 고객에게 이해되는가?</li>
              <li>2. 첫 제품으로 베이직 셔츠가 적절한가?</li>
              <li>
                3. 상황 중심 UI/UX가 일반 쇼핑몰보다 더 직관적인가?
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}