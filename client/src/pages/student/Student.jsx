import { Outlet } from "react-router-dom"
import StudentSidebar from "../../components/student/StudentSidebar"
import { useEffect, useState } from "react"
import MobileNavbar from "../../components/student/MobileNavbar"

const Student = () => {
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
    <div className={`flex flex-1 ${isMobile? "flex-col":"flex-row"}`}>
      
      {
        isMobile ? <MobileNavbar/>:<StudentSidebar />
      }
      <div className=" flex flex-1">
        <Outlet />
      </div>

    </div>
  )
}

export default Student