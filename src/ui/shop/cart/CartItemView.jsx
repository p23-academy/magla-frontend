import {useState} from "react";

const CartItemView = ({item}) => {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className={"w-full flex items-center gap-2 bg-orange-400 p-2 rounded-lg"}>
      <img className={"w-16 h-16"} src={item.imageUrl}/>
      <div className={"flex flex-grow flex-col"}>
        <p className={"text-lg font-medium"}>{item.name}</p>
        <span className={"text-md"}>{item.price?.toFixed(2)} KM</span>
        <span className={"text-md"}>{quantity} kom</span>
      </div>
    </div>
  )
}

export default CartItemView