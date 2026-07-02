const RECENT_KEY = "hayoung-recent";

export function getRecentProducts(): string[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(RECENT_KEY);
  return data ? JSON.parse(data) : [];
}

export function addRecentProduct(id: string) {
  const recent = getRecentProducts().filter((item) => item !== id);
  const updated = [id, ...recent].slice(0, 6);

  localStorage.setItem(RECENT_KEY, JSON.stringify(updated));
}