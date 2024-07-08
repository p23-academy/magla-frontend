import AdminLayoutTopbar from "./AdminLayoutTopbar.jsx";
import {Outlet} from "react-router-dom";
import AdminLayoutSidebar from "./sidebar/AdminLayoutSidebar.jsx";

const AdminLayout = () => {
  return (
    <div className={"flex flex-col h-screen"}>
      <AdminLayoutTopbar/>
      <div className={"flex flex-grow"}>
        <AdminLayoutSidebar/>
        <div className={"flex flex-grow"}>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}

export default AdminLayout