export function parsePrice(price: string): number {
  if (price.includes("상담")) return 0;

  return Number(price.replace(/[^0-9]/g, ""));
}

export function formatPrice(value: number): string {
  return `${value.toLocaleString("ko-KR")}원`;
}