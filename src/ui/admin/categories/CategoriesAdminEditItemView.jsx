import {Form, redirect, useLoaderData} from "react-router-dom";
import {getCategoryById, updateCategory} from "../../../data/categories/categoriesRepo.js";
import Button from "../../components/Button.jsx";
import FormInput from "../../components/forms/FormInput.jsx";

export const editCategoryFormLoader = async ({params}) => {
  const categoryId = params.id;
  const response = await getCategoryById(categoryId)
  console.log(response)
  if (response.status === 200) {
    const category = response.data
    return {category}
  } else {
    return redirect("/admin/categories")
  }
}

export const editCategoryFormAction = async ({request}) => {
  const formData = await request.formData()
  const categoryName = formData.get("name");
  const categoryId = formData.get("id")
  const response = await updateCategory(categoryId, categoryName)
  if (response.status === 200) {
    return redirect("/admin/categories")
  } else {
    return redirect(`/admin/categories/edit/${categoryId}`)
  }
}

const CategoriesAdminEditItemView = () => {
  const {category} = useLoaderData()

  return (
    <div className={"flex flex-col p-2 gap-2"}>
      <h5 className={"text-lg font-bold"}>Minjaj kategoriju</h5>
      <Form method="POST" className={"flex flex-col gap-2"}>
        <FormInput
          required={true}
          label={"Naziv"}
          name={"name"}
          initialValue={category.name}
        />
        <input type={"hidden"} value={category._id} name={"id"}/>
        <Button type="submit" text={"Snimi"}/>
      </Form>
    </div>
  )
}

export default CategoriesAdminEditItemView;