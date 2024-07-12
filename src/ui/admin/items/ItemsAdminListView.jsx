import {getAllItems} from "../../../data/items/itemsRepo.js";
import {useLoaderData, useNavigate} from "react-router-dom";
import ItemsAdminListItemView from "./ItemsAdminListItemView.jsx";
import Button from "../../components/buttons/Button.jsx";
import {getAllCategories} from "../../../data/categories/categoriesRepo.js";

export const itemsListLoader = async () => {
  const itemsResponse = await getAllItems()
  const items = itemsResponse.data;
  const categoriesResponse = await getAllCategories()
  const categories = categoriesResponse.data;
  return {items, categories}
}

const ItemsAdminListView = () => {
  const {items, categories} = useLoaderData()
  const navigate = useNavigate();
  return (
    <div className={"w-full h-full p-2"}>
      <div className={"flex justify-between mb-2"}>
        <h5 className={"text-xl font-bold"}>Artikli</h5>
        <Button text={"Novi artikl"} onClick={() => navigate('/admin/items/new')}/>
      </div>
      <div className={"flex flex-col gap-2"}>
        {items.map((item, index) => (
          <ItemsAdminListItemView key={index} item={item} categories={categories}/>
        ))}
      </div>
    </div>
  )
}

export default ItemsAdminListView;