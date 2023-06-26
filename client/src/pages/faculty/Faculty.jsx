import { Outlet } from "react-router-dom"
import FacultySidebar from "../../components/faculty/FacultySidebar"

const Faculty = () => {
  return (
    <div>
        <FacultySidebar/>
        <Outlet/>
    </div>
  )
}

export default Faculty