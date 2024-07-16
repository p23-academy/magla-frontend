import {useNavigate} from "react-router-dom";
import Button from "../../components/buttons/Button.jsx";

const OrdersAdminListItemView = ({order}) => {
  const navigate = useNavigate()

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
    <div className={"w-full flex justify-between rounded bg-orange-200 p-2"}>
      <div>
        <p className={"font-bold"}>{order.buyerName}</p>
        <p>{order.buyerAddress}</p>
        <p>{order.total?.toFixed(2)} KM</p>
        <p>Status: {formattedStatus}</p>
      </div>
      <div className={"flex justify-end gap-2"}>
        <Button onClick={() => navigate(`/admin/orders/view/${order._id}`)} text={"Otvori"}/>
      </div>
    </div>
  )
}

export default OrdersAdminListItemView