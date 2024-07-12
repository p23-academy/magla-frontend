const CART_LOCAL_STORAGE_KEY = "cart"

export const getCart = () => {
  const cart = JSON.parse(localStorage.getItem(CART_LOCAL_STORAGE_KEY) || "[]")
  console.log(cart)
  return cart
}

export const addToCart = (item) => {
  const cart = getCart()
  cart.push(item)
  localStorage.setItem(CART_LOCAL_STORAGE_KEY, JSON.stringify(cart))
  window.dispatchEvent(new Event('cartUpdated'))
  return cart
}

export const clearCart = () => {
  localStorage.removeItem(CART_LOCAL_STORAGE_KEY)
  window.dispatchEvent(new Event('cartUpdated'))
}