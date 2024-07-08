import axios from "axios";

export const getAllItems = async () => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/items',
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const getItemById = async (itemId) => {
  try {
    const response = await axios({
      url: `http://localhost:3000/api/v1/items/${itemId}`,
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const deleteItem = async (itemId) => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/items',
      method: 'delete',
      data: {
        id: itemId,
      }
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const createNewItem = async (itemBody) => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/items',
      method: 'post',
      data: itemBody
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const updateItem = async (itemId, itemBody) => {
  try {
    const response = await axios({
      url: `http://localhost:3000/api/v1/items/${itemId}`,
      method: 'post',
      data: itemBody
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const uploadImage = async (file) => {
  try {
    const response = await axios({
      url: `http://localhost:3000/api/v1/upload`,
      method: 'post',
      data: {
        file
      },
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
    console.log(response)
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}