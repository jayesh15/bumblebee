import { BiTask } from 'react-icons/bi'
import { MdOutlineDashboard, MdSettings } from 'react-icons/md'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { FaChevronLeft } from 'react-icons/fa'
import { SlCalender } from 'react-icons/sl'
import { Link } from "react-router-dom"
import { useEffect, useState } from 'react'


const links = [
  {
      id: 1,
      path: "/faculty/",
      name: "Dashboard",
      icon: <MdOutlineDashboard className="text-[30px]"/>
  },
  {
      id: 2,
      path: "/faculty/managetasks",
      name: "Tasks",
      icon: <BiTask className="text-[30px]"/>
  },
  {
      id: 3,
      path: "/faculty/markattendance",
      name: "Attendance",
      icon: <LiaUserCheckSolid className="text-[30px]"/>
  },
  
  {
      id: 4,
      path: "/faculty/classes",
      name: "Classes",
      icon: <SlCalender className="text-[30px]"/>
  },
]


const FacultySidebar = () => {
  const [open, setOpen] = useState(true)
  const [showText, setShowText] = useState(true)
  const handleOpen = () => {
    setOpen(prev => !prev)
  }
  useEffect(() => {
    let timeout;
    if (open) {
      timeout = setTimeout(() => {
        setShowText(true);
      }, 200);
    } else {
      setShowText(false);
    }
    return () => {
      clearTimeout(timeout);
    };
  }, [open]);
  return (
    <div className={` relative ${open ? "w-[300px]" : "w-[80px]"} flex bg-blue-600 bg-white-100  h-full ease-out duration-500 transition-all`}>
      <div onClick={handleOpen} className=' cursor-pointer absolute border-2 border-blue-600 -right-3 top-[2.7rem] p-1 bg-white rounded-full'>
        <FaChevronLeft className={` ${open ? "" : "rotate-180"} text-[16px] text-blue-600 ease-in-out duration-200 transition-all`} />
      </div>
      <div className="flex flex-col w-full h-full">
        <div className='flex w-full justify-center items-center h-16 border-b-[1px]'>
            <h1 className=' whitespace-nowrap font-bold text-yellow-300 text-2xl'>B<span className={`${open? "opacity-100 tracking-widest ":"opacity-0 hidden"} ease-in-out duration-1000 transition-all`}>umblebee</span></h1>
        </div>
        <div className="mt-4 flex flex-col overflow-y-auto p-2 items-center justify-between w-full h-full">
          {/**Actions */}
          <div className={`flex w-full ${open ? " " : "items-center"}  flex-col gap-2`}>
            {
              links.map((link) => (
                <Link key={link.id} to={`${link.path}`}>
    
                    <div className="group hover:bg-white/90 p-2 flex text-white hover:text-blue-900 items-center gap-2 rounded-md ease-in-out duration-150 transition-all">
                      {link.icon}
                      {
                        showText ? <span className="  whitespace-nowrap font-semibold tracking-wider text-lg">{link.name}</span> : null
                      }
                    </div>
                </Link>
              ))
            }

          </div>
          {/**Settings */}
          <div className={`flex w-full ${open ? " " : "items-center"}  flex-col gap-2 ease-in-out duration-200 transition-all`}>
            <Link to="/faculty/settings">
              <div className="group hover:bg-white/90 flex p-2 text-white hover:text-blue-900 items-center gap-2 rounded-md ease-in-out duration-150 transition-all">
                <MdSettings className=' text-[30px]'/>
                {
                  showText ? <span className=" font-semibold tracking-wider text-lg">Settings</span> : null
                }
              </div>
            </Link>
          </div>
        </div>

      </div>

    </div>
  )
}

export default FacultySidebar