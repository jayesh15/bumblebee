import { BiTask } from 'react-icons/bi'
import { MdLogout, MdOutlineDashboard, MdSettings,MdOutlinePersonAddAlt } from 'react-icons/md'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { SlCalender } from 'react-icons/sl'
import {TbFileSettings} from 'react-icons/tb'
import { Link, useLocation, useNavigate } from "react-router-dom"
import newRequest from '../../utils/newRequest'



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
    path: "/faculty/addStudent",
    name: "Add Student",
    icon: <MdOutlinePersonAddAlt className="text-[25px]" />
  },
  {
    id: 6,
    path: "/faculty/managereports",
    name: "Reports",
    icon: <TbFileSettings className="text-[25px]" />
  },
  {
    id: 7,
    path: "/faculty/settings",
    name: "Settings",
    icon: <MdSettings className=' text-[25px]' />
  },
]


const FacultySidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const handleLogout = async () => {
    try {
      await newRequest.post('auth/logout')
      localStorage.setItem('currentUser', null)
      navigate('/')
      window.location.reload(true)
    } catch (error) {
      alert(error)
    }
  }
  return (
    <div className="w-[220px] flex bg-white border-r-[1px] h-full">
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
            
              <div onClick={handleLogout} className=" cursor-pointer p-2 flex w-full justify-start text-gray-400 hover:bg-slate-100 hover:text-gray-600 rounded-md  gap-4 ease-in-out duration-150 transition-all">
                <MdLogout className='text-[25px]' />

                <span className=" font-medium tracking-wide ">Logout</span>

              </div>
        
          </div>
        </div>

      </div>

    </div>
  )
}

export default FacultySidebar