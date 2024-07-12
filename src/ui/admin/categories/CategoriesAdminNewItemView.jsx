import {Form, redirect} from "react-router-dom";
import {createNewCategory} from "../../../data/categories/categoriesRepo.js";
import Button from "../../components/buttons/Button.jsx";
import FormInput from "../../components/forms/FormInput.jsx";

export const newCategoryFormAction = async ({request}) => {
  const formData = await request.formData()
  const name = formData.get("name");
  const response = await createNewCategory(name)
  if (response.status === 200) {
    return redirect("/admin/categories")
  } else {
    return redirect("/admin/categories/new")
  }
}

const CategoriesAdminNewItemView = () => {
  return (
    <div className={"flex flex-col p-2 gap-2"}>
      <h5 className={"text-lg font-bold"}>Nova kategorija</h5>
      <Form method="POST" className={"flex flex-col gap-2"}>
        <FormInput
          required={true}
          label={"Naziv"}
          name={"name"}
        />
        <Button type="submit" text={"Dodaj"} />
      </Form>
    </div>
  )
}

export default CategoriesAdminNewItemView;