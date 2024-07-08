import {Link} from "react-router-dom";

const AdminSidebarButton = ({
  text,
  to
}) => {
  return (
    <Link to={to}>
      <button className="h-20 bg-fuchsia-400 rounded w-full font-medium">
        {text}
      </button>
    </Link>
  )
}

export default AdminSidebarButton