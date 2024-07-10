import {Link} from "react-router-dom";

const ShopLayoutTopbar = ({categories}) => {
  return (
    <div className={"flex flex-col"}>
      <div className={"flex justify-between bg-orange-200 h-14 p-2 items-center border-b border-black"}>
        <div className={"flex"}>
          <Link to={"/"}>
            <p className={"text-2xl font-bold"}>Prodavnica magle</p>
          </Link>
        </div>
        <div className={"flex"}>
          <Link to={"/login"}>
            <p className={"text-2xl text-fuchsia-600 font-bold"}>Login</p>
          </Link>
        </div>
      </div>
      <div className={"flex gap-2 bg-orange-100 h-10 p-2 items-center border-b border-black"}>
        {categories.map((category, index) => (
          <>
            <Link key={index} to={`/shop/${category._id}`}>
              <p className={"text-lg"}>{category.name}</p>
            </Link>
            {index < (categories.length - 1) && <p>&#9679;</p>}
          </>
        ))}
      </div>
    </div>
  )
}

export default ShopLayoutTopbar;