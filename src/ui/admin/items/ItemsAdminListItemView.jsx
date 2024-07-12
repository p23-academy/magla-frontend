import {deleteItem} from "../../../data/items/itemsRepo.js";
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button.jsx";

const ItemsAdminListItemView = ({item, categories}) => {
  const navigate = useNavigate()

  const deleteItemLocal = async (item) => {
    if (confirm(`Da li ste sigurni da želite obrisat ${item.name}`) === true) {
      const response = await deleteItem(item._id);
      if (response.status === 200) {
        setItemState(null)
      }
    }
  }

  const [itemState, setItemState] = useState(item);
  if (itemState == null) {
    return null
  }

  return (
    <div className={"w-full flex gap-2 items-center rounded bg-orange-200 p-2"}>
      <img className={"w-16 h-16"} src={itemState.imageUrl}/>
      <div className={"flex flex-col"}>
        <span>{itemState.name}</span>
        <span>{itemState.price?.toFixed(2)} KM</span>
        <span className={"text-fuchsia-600"}>{categories.find(c => c._id === itemState.category)?.name}</span>
      </div>
      <div className={"flex ml-auto justify-end gap-2"}>
        <Button onClick={() => navigate(`/admin/items/edit/${item._id}`)} text={"Minjaj"}/>
        <Button onClick={() => deleteItemLocal(itemState)} text={"Briši"}/>
      </div>
    </div>
  )
}

export default ItemsAdminListItemView