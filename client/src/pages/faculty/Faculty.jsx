import { Outlet } from "react-router-dom"
import FacultySidebar from "../../components/faculty/FacultySidebar"
import { useEffect, useState } from "react";
import FacultyNavbar from "../../components/faculty/FacultyNavbar";
import FacultyProfile from "../../components/faculty/FacultyProfile";
import FacultyHeader from "../../components/faculty/facultyHeader";

const Faculty = () => {
  const [isMobile, setIsMobile] = useState(false)
  const [isProfile, setIsProfile] = useState(false)
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsProfile(window.innerWidth > 1300)
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
      <div className=" flex flex-col flex-1 overflow-y-auto bg-primary">
      {
          !isMobile && <FacultyHeader/>
        }
        <Outlet />
      </div>
      {
        isProfile && <FacultyProfile/>
      }
      </div>

    
  )
}

export default Faculty