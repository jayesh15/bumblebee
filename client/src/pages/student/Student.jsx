import { Outlet } from "react-router-dom"
import StudentSidebar from "../../components/student/StudentSidebar"

const Student = () => {
  return (
    <div>
        <StudentSidebar/>
        <Outlet/>
    </div>
  )
}

export default Student