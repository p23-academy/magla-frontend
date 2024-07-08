import axios from "axios";

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