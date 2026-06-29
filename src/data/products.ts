import { Product } from "../types/product";

export const products: Product[] = [
  {
    id: "soft-beige-shirt",
    brand: "HAYOUNG STUDIO",
    name: "Soft Beige Shirt",
    category: "셔츠",
    price: "42,000원",
    story: "새로운 공간에 들어서는 사람을 위한 부드러운 첫인상.",
    image: "/products/shirt1.svg",
  },
  {
    id: "calm-wide-slacks",
    brand: "CALM ROOM",
    name: "Calm Wide Slacks",
    category: "팬츠",
    price: "58,000원",
    story: "차분하지만 흔들리지 않는 하루를 위한 실루엣.",
    image: "/products/slacks1.svg",
  },
  {
    id: "story-knit-cardigan",
    brand: "STORY WEAR",
    name: "Story Knit Cardigan",
    category: "니트",
    price: "64,000원",
    story: "조금 더 따뜻한 사람이 되고 싶은 날의 옷.",
    image: "/products/cardigan1.svg",
  },
  {
    id: "first-day-blouse",
    brand: "FIRST DAY",
    name: "First Day Blouse",
    category: "상의",
    price: "47,000원",
    story: "첫날의 긴장을 부드럽게 감싸주는 블라우스.",
    image: "/products/blouse1.svg",
  },
];