import {clearCart, getCart} from "../../data/cart/cartRepo.js";
import CheckoutItemView from "./CheckoutItemView.jsx";
import {Form, redirect} from "react-router-dom";
import BigFormInput from "../components/forms/BigFormInput.jsx";
import BigButton from "../components/buttons/BigButton.jsx";
import {makeOrder} from "../../data/orders/ordersRepo.js";

export const checkoutAction = async ({request}) => {
  const formData = await request.formData();
  const buyerName = formData.get("buyerName");
  const buyerAddress = formData.get("buyerAddress");
  const buyerPhone = formData.get("buyerPhone");
  const orderResponse = await makeOrder(buyerName, buyerAddress, buyerPhone);
  if (orderResponse.status === 200) {
    clearCart();
    return redirect("/shop/all")
  } else {
    return {error: "Nemere"}
  }
}

const CheckoutView = () => {
  const cart = getCart()

  return (
    <div className={"h-screen w-screen p-4 bg-orange-50 flex flex-col items-center gap-4"}>
      <h1 className={"text-4xl font-bold my-4"}>Narudžba</h1>
      <div className={"flex flex-col gap-2 w-1/2"}>
        {cart.map((item, index) => (
          <CheckoutItemView key={index} item={item}/>
        ))}
      </div>
      <Form className={"flex flex-col gap-4 w-1/2"} method={"post"}>
        <div className={"flex flex-col p-4 gap-4 w-full items-center bg-orange-200 rounded-lg"}>
          <BigFormInput label={"Ime i prezime"} name={"buyerName"} required={true}/>
          <BigFormInput label={"Adresa"} name={"buyerAddress"} required={true}/>
          <BigFormInput label={"Broj telefona"} name={"buyerPhone"} required={true}/>
        </div>
        <BigButton type={"submit"} text={"Naruči"} className={"w-full mt-4"}/>
      </Form>
    </div>
  )
}

export default CheckoutView