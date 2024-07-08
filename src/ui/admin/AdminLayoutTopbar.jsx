import {Link} from "react-router-dom";

const AdminLayoutTopbar = () => {
  return (
    <div className={"flex justify-between bg-orange-200 h-12 p-2 items-center border-b border-black"}>
      <div className={"flex"}>
        <Link to={"/"}>
          <p className={"text-xl font-bold"}>Prodavnica magle</p>
        </Link>
      </div>
      <div>
        <Link to={"/"}>
          <p className={"text-xl text-fuchsia-600"}>Logout</p>
        </Link>
      </div>
    </div>
  )
}

export default AdminLayoutTopbar;