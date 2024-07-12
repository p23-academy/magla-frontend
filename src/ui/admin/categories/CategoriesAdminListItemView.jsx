import {deleteCategory} from "../../../data/categories/categoriesRepo.js";
import {useState} from "react";
import {Link, useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button.jsx";

const CategoriesAdminListItemView = ({category}) => {
  const navigate = useNavigate()

  const deleteCategoryLocal = async (category) => {
    if (confirm(`Da li ste sigurni da želite obrisat ${category.name}`) === true) {
      const response = await deleteCategory(category._id);
      if (response.status === 200) {
        setCategoryState(null)
      }
    }
  }

  const [categoryState, setCategoryState] = useState(category);
  if (categoryState == null) {
    return null
  }

  return (
    <div className={"w-full flex justify-between rounded bg-orange-200 p-2"}>
      <div>
        {categoryState.name}
      </div>
      <div className={"flex justify-end gap-2"}>
        <Button onClick={() => navigate(`/admin/categories/edit/${category._id}`)} text={"Minjaj"}/>
        <Button onClick={() => deleteCategoryLocal(categoryState)} text={"Briši"} />
      </div>
    </div>
  )
}

export default CategoriesAdminListItemView