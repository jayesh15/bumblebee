import { BiTask } from 'react-icons/bi'
import { MdLogout, MdOutlineDashboard, MdSettings } from 'react-icons/md'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { SlCalender } from 'react-icons/sl'
import { Link, useLocation } from "react-router-dom"



const links = [
  {
    id: 1,
    path: "/faculty",
    name: "Dashboard",
    icon: <MdOutlineDashboard className="text-[25px]" />
  },
  {
    id: 2,
    path: "/faculty/managetasks",
    name: "Tasks",
    icon: <BiTask className="text-[25px]" />
  },
  {
    id: 3,
    path: "/faculty/markattendance",
    name: "Attendance",
    icon: <LiaUserCheckSolid className="text-[25px]" />
  },

  {
    id: 4,
    path: "/faculty/classes",
    name: "Classes",
    icon: <SlCalender className="text-[25px]" />
  },
  {
    id: 5,
    path: "/faculty/settings",
    name: "Settings",
    icon: <MdSettings className=' text-[25px]' />
  },
]


const FacultySidebar = () => {
  const location = useLocation()
  return (
    <div className="relative w-fit flex bg-white border-r-[1px] h-full ease-out duration-500 transition-all">
      <div className="flex flex-col w-full h-full">
        <div className='mt-1 p-4 flex w-full justify-center items-center border-b-[1px] h-16'>
          <h1 className='font-bold text-lg tracking-wide'>Bumblebee</h1>
        </div>
        <div className="mt-4 flex flex-col overflow-y-auto p-4 items-center justify-between w-full h-full">
          {/**Actions */}
          <div className="flex w-full flex-col gap-2">
            {
              links.map((link) => (
                <Link key={link.id} to={`${link.path}`}>

                  <div className={` ${location.pathname === link.path ? "bg-sky-100 text-blue-600": "text-gray-400"} hover:bg-slate-100 hover:text-gray-600 p-2 flex w-full justify-start rounded-md  gap-4 ease-in-out duration-150 transition-all`}>
                    {link.icon}

                    <span className="  whitespace-nowrap font-medium tracking-wide ">{link.name}</span>

                  </div>
                </Link>
              ))
            }

          </div>
          {/**Settings */}
          <div className={`flex w-full ${open ? " " : "items-center"}  flex-col gap-2 ease-in-out duration-200 transition-all`}>
            <Link to="/">
              <div className="p-2 flex w-full justify-start text-gray-400 hover:bg-slate-100 hover:text-gray-600 rounded-md  gap-4 ease-in-out duration-150 transition-all">
                <MdLogout className='text-[25px]' />

                <span className=" font-medium tracking-wide ">Logout</span>

              </div>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default FacultySidebar