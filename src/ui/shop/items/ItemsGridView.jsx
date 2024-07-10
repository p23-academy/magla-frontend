import {getAllItems} from "../../../data/items/itemsRepo.js";
import {useLoaderData} from "react-router-dom";
import ItemsGridItemView from "./ItemsGridItemView.jsx";

export const itemsGridViewLoader = async ({params}) => {
  const categoryId = params.catId
  let items = []
  const itemsResponse = await getAllItems()
  if (itemsResponse.status === 200) {
    items = itemsResponse.data
  }
  if (categoryId === "all") {
    return {items}
  } else {
    return {items: items.filter(item => item.category === categoryId)}
  }
}

const ItemsGridView = () => {
  const {items} = useLoaderData()

  return (
    <div className={"w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 justify-items-center items-center"}>
      {items.map((item, index) => (
        <ItemsGridItemView key={index} item={item}/>
      ))}
    </div>
  )
}

export default ItemsGridView;