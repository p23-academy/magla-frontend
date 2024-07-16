const OrdersAdminOrderItemView = ({item}) => {

  return (
    <div className={"w-full flex items-center gap-2 bg-orange-200 p-2 rounded-lg"}>
      <img className={"w-20 h-20"} src={item.imageUrl}/>
      <div className={"flex flex-grow flex-col"}>
        <p className={"text-lg"}>{item.name}</p>
        <span className={""}>{item.price?.toFixed(2)} KM</span>
        <span className={""}>1 kom</span>
      </div>
    </div>
  )
}

export default OrdersAdminOrderItemView