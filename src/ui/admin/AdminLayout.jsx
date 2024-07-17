import AdminLayoutTopbar from "./AdminLayoutTopbar.jsx";
import {Outlet, redirect} from "react-router-dom";
import AdminLayoutSidebar from "./sidebar/AdminLayoutSidebar.jsx";
import {decodeToken, verifyToken} from "../../data/auth/authRepo.js";

export const adminLayoutLoader = async () => {
  const token = localStorage.getItem("token");
  if (!token) {
    return redirect("/shop/all")
  }
  const verifyTokenResponse = await verifyToken(token)
  if (verifyTokenResponse.status !== 200) {
    localStorage.removeItem("token")
    return redirect("/shop/all")
  }
  const decodedToken = decodeToken(token)
  if (decodedToken.role !== "admin") {
    return redirect("/shop/all")
  }
  return null
}

const AdminLayout = () => {
  return (
    <div className={"w-screen h-screen flex flex-col overflow-hidden"}>
      <AdminLayoutTopbar/>
      <div className={"flex flex-grow overflow-hidden"}>
        <AdminLayoutSidebar/>
        <div className={"flex flex-grow"}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout