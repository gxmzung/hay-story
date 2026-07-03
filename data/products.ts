export type Product = {
  id: string;
  name: string;
  category: string;
  price: number;
  priceLabel: string;
  moment: string;
  description: string;
  custom: string[];
};

export const products: Product[] = [
  {
    id: "first-day-shirt",
    name: "First Day Shirt",
    category: "SHIRT",
    price: 49000,
    priceLabel: "49,000",
    moment: "첫 출근 / 면접 / 발표",
    description:
      "이니셜, 날짜, 짧은 문구를 담을 수 있는 새로운 시작을 위한 베이직 셔츠.",
    custom: ["이니셜 자수", "날짜 각인", "짧은 문구", "라벨 메시지"],
  },
  {
    id: "new-chapter-blouse",
    name: "New Chapter Blouse",
    category: "BLOUSE",
    price: 54000,
    priceLabel: "54,000",
    moment: "새 학기 / 새로운 관계",
    description:
      "부담스럽지 않지만 단정한 첫인상을 남길 수 있는 세미 포멀 블라우스.",
    custom: ["이니셜 자수", "소매 포인트", "라벨 메시지"],
  },
  {
    id: "moment-jacket",
    name: "Moment Jacket",
    category: "OUTER",
    price: 79000,
    priceLabel: "79,000",
    moment: "면접 / 발표 / 첫 미팅",
    description:
      "중요한 순간에 안정감과 신뢰감을 주는 미니멀 자켓형 아우터.",
    custom: ["안쪽 라벨 문구", "날짜 각인", "포장 카드"],
  },
];

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductByName(name: string) {
  return products.find((product) => product.name === name);
}