import { BiTask } from 'react-icons/bi'
import { AiOutlineFileDone, AiOutlineTable } from 'react-icons/ai'
import { MdOutlineDashboard, MdOutlineEvent, MdSettings } from 'react-icons/md'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { SlCalender } from 'react-icons/sl'
import { Link, useLocation } from "react-router-dom"


const links = [
  {
    id: 1,
    path: "/student/",
    name: "Dashboard",
    icon: <MdOutlineDashboard size={20} />
  },
  {
    id: 2,
    path: "/student/events",
    name: "Upcoming Events",
    icon: <MdOutlineEvent size={20} />
  },
  {
    id: 3,
    path: "/student/tasks",
    name: "Tasks",
    icon: <BiTask size={20} />
  },
  {
    id: 4,
    path: "/student/reports",
    name: "Reports",
    icon: <AiOutlineFileDone size={20} />
  },
  {
    id: 5,
    path: "/student/attendance",
    name: "Attendance",
    icon: <LiaUserCheckSolid size={20} />
  },
  {
    id: 6,
    path: "/student/timetable",
    name: "Timetable",
    icon: <AiOutlineTable size={20} />
  },
  {
    id: 7,
    path: "/student/calender",
    name: "Calender",
    icon: <SlCalender size={18} />
  },
]


const StudentSidebar = () => {
  return (
    <div className="flex bg-blue-600 bg-white-100 w-[300px] h-full">
      <div className="flex flex-col w-full h-full">
        <div className="flex px-12 items-center w-full min-h-16 h-16 ">
          <h1 className=" text-yellow-400 font-bold tracking-wide text-lg">BumbleBee</h1>
        </div>
        <div className="mt-4 flex flex-col overflow-y-auto p-2 items-center justify-between w-full h-full">
          {/**Actions */}
          <div className=" flex w-full flex-col gap-2">
            {
              links.map((link) => (
                <Link  key={link.id} to={`${link.path}`}>
                  <div className="group hover:bg-white/90 p-2 flex text-white hover:text-blue-900 items-center gap-2 rounded-md ease-in-out duration-150 transition-all">
                    {link.icon}
                    <span className="font-semibold tracking-wider text-lg">{link.name}</span>
                  </div>
                </Link>
              ))
            }

          </div>
          {/**Settings */}
          <div className="flex w-full flex-col gap-2">
            <Link to="/student/settings">
              <div className="group hover:bg-white/90 flex p-2 text-white hover:text-blue-900 items-center gap-2 rounded-md ease-in-out duration-150 transition-all">
                <MdSettings size={24} />
                <span className=" font-semibold tracking-wider text-lg">Settings</span>
              </div>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default StudentSidebar