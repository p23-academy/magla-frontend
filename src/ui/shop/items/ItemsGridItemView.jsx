import Button from "../../components/Button.jsx";

const ItemsGridItemView = ({item}) => {
  const addToCart = () => {

  }

  return (
    <div className={"flex flex-col gap-1 justify-center items-center bg-orange-100 rounded-lg p-2 w-48"}>
      <h5 className={"text-lg font-medium text-center"}>{item.name}</h5>
      <img className={"w-24 h-24"} src={item.imageUrl}/>
      <p className={"text-sm font-light"}>{item.description}</p>
      <p className={"text-md text-fuchsia-600"}>{item.price?.toFixed(2)} KM</p>
      <Button onClick={() => addToCart(item)} text={"Kupi"}/>
    </div>
  )
}

export default ItemsGridItemView