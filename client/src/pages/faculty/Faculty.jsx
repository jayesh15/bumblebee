import { Outlet } from "react-router-dom"
import FacultySidebar from "../../components/faculty/FacultySidebar"
import { useEffect, useState } from "react";
import FacultyNavbar from "../../components/faculty/FacultyNavbar";

const Faculty = () => {
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
        isMobile ? <FacultyNavbar/>:<FacultySidebar />
      }
      <div className=" flex flex-1">
        <Outlet />
      </div>

    </div>
  )
}

export default Faculty