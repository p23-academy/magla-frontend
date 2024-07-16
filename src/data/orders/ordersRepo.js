import {getCart} from "../cart/cartRepo.js";
import axios from "axios";

export const getAllOrders = async () => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/orders',
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const getOrderById = async (orderId) => {
  try {
    const response = await axios({
      url: `http://localhost:3000/api/v1/orders/${orderId}`,
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const updateOrderStatus = async (orderId, status) => {
  try {
    const orderStatusBody = {
      status: status,
    }
    const response = await axios({
      url: `http://localhost:3000/api/v1/orders/${orderId}`,
      method: 'post',
      data: orderStatusBody
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const makeOrder = async (buyerName, buyerAddress, buyerPhone) => {
  try {
    const cart = getCart()
    const orderBody = {
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