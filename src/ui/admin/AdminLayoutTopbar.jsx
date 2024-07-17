import {Link, useNavigate} from "react-router-dom";
import Button from "../components/buttons/Button.jsx";

const AdminLayoutTopbar = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/shop/all")
  }

  return (
    <div className={"flex justify-between bg-orange-200 h-12 p-2 items-center border-b border-black"}>
      <div className={"flex"}>
        <Link to={"/shop/all"}>
          <p className={"text-xl font-bold"}>Prodavnica magle</p>
        </Link>
      </div>
      <div>
        <Button onClick={logout} text={"Logout"}/>
      </div>
    </div>
  )
}

export default AdminLayoutTopbar;