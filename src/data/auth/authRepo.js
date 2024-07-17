import axios from "axios";
import { jwtDecode } from "jwt-decode";

export const registerUser = async (email, password) => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/register',
      method: 'post',
      data: {
        email: email,
        password: password,
      },
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const loginUser = async (email, password) => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/login',
      method: 'post',
      data: {
        email: email,
        password: password,
      },
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const verifyToken = async (token) => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/verify',
      method: 'post',
      data: {
        token: token,
      },
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const decodeToken = (token) => {
  try {
    const decodedToken = jwtDecode(token);
    return decodedToken
  } catch (error) {
    console.log(error)
  }
}