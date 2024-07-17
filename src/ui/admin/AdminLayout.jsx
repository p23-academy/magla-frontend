import AdminLayoutTopbar from "./AdminLayoutTopbar.jsx";
import {Outlet} from "react-router-dom";
import AdminLayoutSidebar from "./sidebar/AdminLayoutSidebar.jsx";

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