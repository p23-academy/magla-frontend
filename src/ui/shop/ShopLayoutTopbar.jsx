import {Link, useNavigate} from "react-router-dom";
import Button from "../components/buttons/Button.jsx";
import {useState} from "react";
import {decodeToken} from "../../data/auth/authRepo.js";

const ShopLayoutTopbar = ({categories}) => {
  const navigate = useNavigate()
  const token = localStorage.getItem("token")
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(token !== null)

  const isUserAdmin = decodeToken(token)?.role === "admin"

  const authButtonOnClick = () => {
    if (isUserLoggedIn) {
      logout()
    } else {
      login()
    }
  }

  const login = () => {
    navigate("/login")
  }

  const logout = () => {
    localStorage.removeItem("token")
    setIsUserLoggedIn(false)
  }

  return (
    <div className={"flex flex-col"}>
      <div className={"flex justify-between bg-orange-200 h-14 p-2 items-center border-b border-black"}>
        <div className={"flex"}>
          <Link to={"/shop/all"}>
            <p className={"text-2xl font-bold"}>Prodavnica magle</p>
          </Link>
        </div>
        <div className={"flex gap-2"}>
          {isUserAdmin &&
            <Button onClick={() => {navigate("/admin")}} text={"Admin"} className={"!bg-fuchsia-400"}/>
          }
          <Button onClick={authButtonOnClick} text={isUserLoggedIn ? "Logout" : "Login"}/>
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