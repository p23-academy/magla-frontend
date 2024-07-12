import Button from "../../components/buttons/Button.jsx";
import {addToCart} from "../../../data/cart/cartRepo.js";

const ItemsGridItemView = ({item}) => {

  return (
    <div className={"flex flex-col gap-1 justify-center items-center bg-orange-100 rounded-lg p-2 w-48"}>
      <h5 className={"text-xl font-medium text-center mb-2"}>{item.name}</h5>
      <img className={"w-24 h-24"} src={item.imageUrl}/>
      <p className={"text-md font-light"}>{item.description}</p>
      <p className={"text-lg text-fuchsia-600"}>{item.price?.toFixed(2)} KM</p>
      <Button onClick={() => addToCart(item)} text={"Dodaj u korpu"}/>
    </div>
  )
}

export default ItemsGridItemView