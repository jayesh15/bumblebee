import { Outlet } from "react-router-dom"
import StudentSidebar from "../../components/student/StudentSidebar"
import { useEffect, useState } from "react"
import MobileNavbar from "../../components/student/MobileNavbar"
import StudentProfile from "../../components/student/StudentProfile"
import StudentHeader from "../../components/student/StudentHeader"
import newRequest from "../../utils/newRequest"
import { useQuery } from "@tanstack/react-query"

const Student = () => {
  const { isLoading: isloadingTasks, isError: isErrorTasks, data: tasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => newRequest.get('tasks').then((res) => res.data)
  })
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
        isMobile ? <MobileNavbar/>:<StudentSidebar />
      }
      <div className=" flex flex-col flex-1 overflow-y-auto bg-primary">
        {
          !isMobile && <StudentHeader/>
        }
        <Outlet context={[isloadingTasks, isErrorTasks, tasks]} />
      </div>
      {
        isProfile && <StudentProfile isloadingTasks={isloadingTasks} isErrorTasks = {isErrorTasks} tasks={tasks} />
      }
    

    </div>
  )
}

export default Student