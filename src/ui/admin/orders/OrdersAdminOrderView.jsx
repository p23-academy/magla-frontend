import {Form, redirect, useActionData, useLoaderData} from "react-router-dom";
import {getOrderById, updateOrderStatus} from "../../../data/orders/ordersRepo.js";
import Button from "../../components/buttons/Button.jsx";
import OrdersAdminOrderItemView from "./OrdersAdminOrderItemView.jsx";

export const ordersAdminOrderViewLoader = async ({params}) => {
  console.log("loader")
  const orderId = params.id;
  const response = await getOrderById(orderId)
  if (response.status === 200) {
    const order = response.data
    return {order}
  } else {
    return redirect("/admin/orders")
  }
}

export const ordersAdminOrderViewAction = async ({request}) => {
  console.log("action")
  const formData = await request.formData();
  const orderId = formData.get("id")
  const status = formData.get("status")
  const orderStatusResponse = await updateOrderStatus(orderId, status)
  if (orderStatusResponse.status === 200) {
    return null
  } else {
    return {error: "Došlo je do greške. Molimo pokušajte ponovo"}
  }
}

const OrdersAdminOrderView = () => {
  const {order} = useLoaderData()
  const actionData = useActionData()

  let formattedStatus;
  switch (order.status) {
    case "new":
      formattedStatus = <span className={"text-green-600 font-bold"}>Nova</span>
      break;
    case "in-process":
      formattedStatus = <span className={"text-blue-600 font-bold"}>U procesu</span>
      break;
    case "shipped":
      formattedStatus = <span className={"text-fuchsia-600 font-bold"}>Isporučena</span>
      break;
    case "cancelled":
      formattedStatus = <span className={"text-red-600 font-bold"}>Odbijena</span>
      break;
  }

  return (
    <div className={"flex flex-col flex-grow p-2 bg-orange-50 gap-2 overflow-y-auto"}>
      <h4 className={"text-xl font-bold"}>Narudžba {order._id}</h4>
      <div className={"flex flex-col gap-2 bg-orange-200 p-2 rounded-lg"}>
        <p className={"text-lg"}>Kupac: {order.buyerName}</p>
        <p className={"text-lg"}>Adresa: {order.buyerAddress}</p>
        <p className={"text-lg"}>Telefon: {order.buyerPhone}</p>
        <p className={"text-lg"}>Status: {formattedStatus}</p>
      </div>
      {actionData?.error && <p className={"text-red-500 font-bold"}>{actionData.error}</p>}
      <div className={"flex flex-col gap-2 w-full"}>
        {order.items.map((item, index) => (
          <OrdersAdminOrderItemView key={index} item={item}/>
        ))}
      </div>
      {order.status === "new" &&
        <Form className={"flex flex-col"} method={"post"}>
          <input type={"hidden"} name={"id"} value={order._id}/>
          <input type={"hidden"} name={"status"} value={"in-process"}/>
          <Button text={"Zaprimio"} type="submit"/>
        </Form>
      }
      {order.status === "in-process" &&
        <Form className={"flex flex-col"} method={"post"}>
          <input type={"hidden"} name={"id"} value={order._id}/>
          <input type={"hidden"} name={"status"} value={"shipped"}/>
          <Button text={"Poslo"} type="submit"/>
        </Form>
      }
      {order.status === "new" &&
        <Form className={"flex flex-col"} method={"post"}>
          <input type={"hidden"} name={"id"} value={order._id}/>
          <input type={"hidden"} name={"status"} value={"cancelled"}/>
          <Button className={"bg-red-600"} text={"Odbij"} type="submit"/>
        </Form>
      }
    </div>
  )
}

export default OrdersAdminOrderView