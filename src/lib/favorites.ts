const FAVORITE_KEY = "hayoung-favorites";

export function getFavorites(): string[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(FAVORITE_KEY);
  return data ? JSON.parse(data) : [];
}

export function toggleFavorite(id: string) {
  const favorites = getFavorites();

  if (favorites.includes(id)) {
    const updated = favorites.filter((item) => item !== id);
    localStorage.setItem(FAVORITE_KEY, JSON.stringify(updated));
    return false;
  }

  favorites.push(id);
  localStorage.setItem(FAVORITE_KEY, JSON.stringify(favorites));
  return true;
}