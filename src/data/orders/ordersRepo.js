import {getCart} from "../cart/cartRepo.js";
import axios from "axios";

export const makeOrder = async (buyerName, buyerAddress, buyerPhone) => {
  try {
    const cart = getCart()
    const orderBody = {
      // items: JSON.stringify(cart),
      items: cart,
      buyerName: buyerName,
      buyerAddress: buyerAddress,
      buyerPhone: buyerPhone,
    }
    const response = await axios({
      url: 'http://localhost:3000/api/v1/orders',
      method: 'post',
      data: orderBody
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}