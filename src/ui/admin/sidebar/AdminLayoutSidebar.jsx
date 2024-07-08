import AdminSidebarButton from "./AdminSidebarButton.jsx";

const AdminLayoutSidebar = () => {
  return (
    <div className={"flex flex-col p-2 gap-2 w-40 border-r border-black bg-orange-100"}>
      <AdminSidebarButton
        text={"Kategorije"}
        to={"/admin/categories"}
      />
      <AdminSidebarButton
        text={"Artikli"}
        to={"/admin/items"}
      />
    </div>
  )
}

export default AdminLayoutSidebar;