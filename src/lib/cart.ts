const CART_KEY = "hayoung-cart";

export function getCart(): string[] {
  if (typeof window === "undefined") return [];

  const data = localStorage.getItem(CART_KEY);
  return data ? JSON.parse(data) : [];
}

export function addToCart(id: string) {
  const cart = getCart();

  if (!cart.includes(id)) {
    cart.push(id);
  }

  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function removeFromCart(id: string) {
  const cart = getCart().filter((item) => item !== id);
  localStorage.setItem(CART_KEY, JSON.stringify(cart));
}

export function clearCart() {
  localStorage.removeItem(CART_KEY);
}