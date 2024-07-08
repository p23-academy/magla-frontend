import {Form, redirect, useLoaderData} from "react-router-dom";
import {getItemById, updateItem} from "../../../data/items/itemsRepo.js";
import Button from "../../components/Button.jsx";
import FormInput from "../../components/forms/FormInput.jsx";
import {getAllCategories} from "../../../data/categories/categoriesRepo.js";

export const editItemFormLoader = async ({params}) => {
  const itemId = params.id;
  const response = await getItemById(itemId)
  if (response.status === 200) {
    const item = response.data
    const categoriesResponse = await getAllCategories()
    const categories = categoriesResponse.data;
    return {item, categories}
  } else {
    return redirect("/admin/items")
  }
}

export const editItemFormAction = async ({request}) => {
  const formData = await request.formData()
  const itemId = formData.get("id")
  const name = formData.get("name");
  const description = formData.get("description");
  const price = formData.get("price");
  const category = formData.get("category");
  const itemBody = {
    name,
    description,
    price,
    category,
  }
  const response = await updateItem(itemId, itemBody)
  if (response.status === 200) {
    return redirect("/admin/items")
  } else {
    return redirect(`/admin/items/edit/${itemId}`)
  }
}

const ItemsAdminEditItemView = () => {
  const {item, categories} = useLoaderData()

  return (
    <div className={"flex flex-col p-2 gap-2"}>
      <h5 className={"text-lg font-bold"}>Minjaj artikl</h5>
      <Form method="POST" className={"flex flex-col gap-2"}>
        <FormInput
          required={true}
          label={"Naziv"}
          name={"name"}
          initialValue={item.name}
        />
        <FormInput
          required={true}
          label={"Opis"}
          name={"description"}
          initialValue={item.description}
        />
        <FormInput
          required={true}
          label={"Cijena"}
          name={"price"}
          initialValue={item.price}
          type={"number"}
        />
        <select name={"category"} defaultValue={item.category}>
          {categories.map((category, index) => (
            <option key={index} value={category._id}>{category.name}</option>
          ))}
        </select>
        <input type={"hidden"} value={item._id} name={"id"}/>
        <Button type="submit" text={"Snimi"}/>
      </Form>
    </div>
  )
}

export default ItemsAdminEditItemView;