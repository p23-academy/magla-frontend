const CheckoutItemView = ({item}) => {

  return (
    <div className={"w-full flex items-center gap-2 bg-orange-200 p-2 rounded-lg"}>
      <img className={"w-24 h-24"} src={item.imageUrl}/>
      <div className={"flex flex-grow flex-col"}>
        <p className={"text-xl font-medium"}>{item.name}</p>
        <span className={"text-lg"}>{item.price?.toFixed(2)} KM</span>
        <span className={"text-lg"}>1 kom</span>
      </div>
    </div>
  )
}

export default CheckoutItemView