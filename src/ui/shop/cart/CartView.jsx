import CartItemView from "./CartItemView.jsx";
import {useEffect, useState} from "react";
import {clearCart, getCart} from "../../../data/cart/cartRepo.js";
import BigButton from "../../components/buttons/BigButton.jsx";
import {useNavigate} from "react-router-dom";

const CartView = () => {
  const [cart, setCart] = useState(getCart());
  const navigate = useNavigate();

  useEffect(() => {
    window.addEventListener('cartUpdated', () => {
      setCart(getCart())
    });
  }, []);

  return (
    <div className={"flex flex-col flex-grow w-96 bg-orange-100 border-l border-black"}>
      <div className={"flex flex-col flex-grow gap-2 p-2 overflow-auto"}>
        {cart.map((item, index) => (
          <CartItemView key={index} item={item}/>
        ))}
      </div>
      <div className={"flex flex-col gap-2 p-2"}>
        <BigButton className={"w-full bg-gray-400"} text={"Isprazni korpu"} onClick={() => clearCart()}/>
        <BigButton className={"w-full"} text={"Naruči"} onClick={() => navigate('/checkout')}/>
      </div>
    </div>
  )
}

export default CartView;