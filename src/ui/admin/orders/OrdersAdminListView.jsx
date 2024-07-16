import {getAllOrders} from "../../../data/orders/ordersRepo.js";
import {useLoaderData} from "react-router-dom";
import OrdersAdminListItemView from "./OrdersAdminListItemView.jsx";

export const ordersListLoader = async () => {
  const ordersResponse = await getAllOrders()
  const orders = ordersResponse.data;
  return {orders}
}

const OrdersAdminListView = () => {
  const {orders} = useLoaderData()
  return (
    <div className={"w-full h-full p-2"}>
      <div className={"flex justify-between mb-2"}>
        <h5 className={"text-xl font-bold"}>Narudžbe</h5>
      </div>
      <div className={"flex flex-col gap-2"}>
        {orders.map((order, index) => (
          <OrdersAdminListItemView key={index} order={order}/>
        ))}
      </div>
    </div>
  )
}

export default OrdersAdminListView;