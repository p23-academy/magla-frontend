import {Form, redirect, useActionData, useLoaderData} from "react-router-dom";
import {createNewItem, uploadImage} from "../../../data/items/itemsRepo.js";
import Button from "../../components/Button.jsx";
import FormInput from "../../components/forms/FormInput.jsx";
import {getAllCategories} from "../../../data/categories/categoriesRepo.js";

export const newItemLoader = async () => {
  const categoriesResponse = await getAllCategories()
  const categories = categoriesResponse.data;
  return {categories}
}

export const newItemFormAction = async ({request}) => {
  const formData = await request.formData()
  const formId = formData.get("form-id")
  if (formId === "item") {
    const name = formData.get("name");
    const description = formData.get("description");
    const price = formData.get("price");
    const category = formData.get("category");
    const imageUrl = formData.get("imageUrl");
    const itemBody = {
      name,
      description,
      price,
      category,
      imageUrl,
    }
    const response = await createNewItem(itemBody)
    if (response.status === 200) {
      return redirect("/admin/items")
    } else {
      return redirect("/admin/items/new")
    }
  } else if (formId === "upload") {
    const file = formData.get("file");
    const response = await uploadImage(file)
    if (response.status === 200) {
      const fileUrl = response.data.fileUrl
      return {
        fileUrl
      }
    } else {
      return redirect("/admin/items/new")
    }
  }
}

const ItemsAdminNewItemView = () => {
  const {categories} = useLoaderData()
  const actionData = useActionData()

  return (
    <div className={"flex flex-col p-2 gap-2"}>
      <h5 className={"text-lg font-bold"}>Novi artikl</h5>
      <div className={"flex gap-4"}>
        <Form method="POST" className={"flex flex-col gap-2"}>
          <FormInput
            required={true}
            label={"Naziv"}
            name={"name"}
          />
          <FormInput
            required={true}
            label={"Opis"}
            name={"description"}
          />
          <FormInput
            required={true}
            label={"Cijena"}
            name={"price"}
            type={"number"}
          />
          <select className={"border-2 border-black p-1"} name={"category"}>
            {categories.map((category, index) => (
              <option key={index} value={category._id}>{category.name}</option>
            ))}
          </select>
          <input type={"hidden"} name={"form-id"} value={"item"}/>
          <input type={"hidden"} name={"imageUrl"} value={actionData?.fileUrl}/>
          <Button type="submit" text={"Snimi"}/>
        </Form>
        <Form className={"flex flex-col gap-2"} method={"post"} encType={"multipart/form-data"}>
          <h2 className={"text-lg font-bold"}>Slika</h2>
          <input type={"hidden"} name={"form-id"} value={"upload"}/>
          <img className={"w-48 h-48 bg-orange-100 border border-black"} src={actionData?.fileUrl}/>
          <input type="file" name="file"/>
          <Button type="submit" text={"Dodaj sliku"} />
        </Form>
      </div>
    </div>
  )
}

export default ItemsAdminNewItemView;