import {getAllCategories} from "../../../data/categories/categoriesRepo.js";
import {useLoaderData, useNavigate} from "react-router-dom";
import CategoriesAdminListItemView from "./CategoriesAdminListItemView.jsx";
import Button from "../../components/buttons/Button.jsx";

export const categoriesListLoader = async () => {
  const categoriesResponse = await getAllCategories()
  const categories = categoriesResponse.data;
  return {categories}
}

const CategoriesAdminListView = () => {
  const {categories} = useLoaderData()
  const navigate = useNavigate();
  return (
    <div className={"w-full h-full p-2"}>
      <div className={"flex justify-between mb-2"}>
        <h5 className={"text-xl font-bold"}>Kategorije</h5>
        <Button text={"Nova kategorija"} onClick={() => navigate('/admin/categories/new')}/>
      </div>
      <div className={"flex flex-col gap-2"}>
        {categories.map((category, index) => (
          <CategoriesAdminListItemView key={index} category={category}/>
        ))}
      </div>
    </div>
  )
}

export default CategoriesAdminListView;