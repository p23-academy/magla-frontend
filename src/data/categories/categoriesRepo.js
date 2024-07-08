import axios from "axios";

export const getAllCategories = async () => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/categories',
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const getCategoryById = async (categoryId) => {
  try {
    const response = await axios({
      url: `http://localhost:3000/api/v1/categories/${categoryId}`,
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const deleteCategory = async (categoryId) => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/categories',
      method: 'delete',
      data: {
        id: categoryId,
      }
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const createNewCategory = async (categoryName) => {
  try {
    const response = await axios({
      url: 'http://localhost:3000/api/v1/categories',
      method: 'post',
      data: {
        name: categoryName,
      }
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}

export const updateCategory = async (categoryId, categoryName) => {
  try {
    const response = await axios({
      url: `http://localhost:3000/api/v1/categories/${categoryId}`,
      method: 'post',
      data: {
        name: categoryName,
      }
    })
    return response
  } catch (error) {
    console.error(error)
    return error.response
  }
}