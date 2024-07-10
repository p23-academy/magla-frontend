import {Outlet, useLoaderData} from "react-router-dom";
import ShopLayoutTopbar from "./ShopLayoutTopbar.jsx";
import {getAllCategories} from "../../data/categories/categoriesRepo.js";

export const shopLayoutLoader = async () => {
  const categoriesResponse = await getAllCategories()
  let categories = [{
    "_id": "all",
    "name": "Sve magle",
  }]
  if (categoriesResponse.status === 200) {
    categories = [
      ...categories,
      ...categoriesResponse.data
    ]
  }
  return {categories}
}

const ShopLayout = () => {
  const {categories} = useLoaderData()

  return (
    <div className={"flex flex-col h-screen"}>
      <ShopLayoutTopbar categories={categories}/>
      <div className={"flex flex-grow"}>
        <Outlet/>
      </div>
    </div>
  )
}

export default ShopLayout