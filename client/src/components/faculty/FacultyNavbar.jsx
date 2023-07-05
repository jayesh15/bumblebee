import { useState } from "react"
import { BiTask } from 'react-icons/bi'
import { MdLogout, MdOutlineDashboard, MdSettings } from 'react-icons/md'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { SlCalender } from 'react-icons/sl'
import { Link, useLocation, useNavigate } from "react-router-dom"
import newRequest from "../../utils/newRequest"


const links = [
    {
        id: 1,
        path: "/faculty",
        name: "Dashboard",
        icon: <MdOutlineDashboard className="text-[22px]"/>
    },
    {
        id: 2,
        path: "/faculty/managetasks",
        name: "Tasks",
        icon: <BiTask className="text-[22px]"/>
    },
    {
        id: 3,
        path: "/faculty/markattendance",
        name: "Attendance",
        icon: <LiaUserCheckSolid className="text-[22px]"/>
    },
    
    {
        id: 4,
        path: "/faculty/classes",
        name: "Classes",
        icon: <SlCalender className="text-[22px]"/>
    },
    {
        id: 5,
        path: "/faculty/settings",
        name: "Settings",
        icon: <MdSettings className=' text-[22px]' />
      },
]
const FacultyNavbar = () => {
    const user = JSON.parse(localStorage.getItem('currentUser'))
    const location = useLocation()
    const navigate = useNavigate()
    const [active, setActive] = useState(false)
    const handleActive = () => {
        setActive(prev => !prev)
    }
    const handleClick = () => {
        setActive(false)
    }
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
        <div className="z-[100] top-0 left-0 h-16 w-full">
            <div className=" flex px-2 h-full w-full items-center justify-between  bg-white border-b-[1px] border-gray-200">
                {/**Profile Img */}
                <div>
                    <img className="w-12 h-12 rounded-full object-cover object-center" src={user?.img || "/assets/noProfile.png"} alt="" />
                </div>
                {/**Location */}
                <div>
                    <span className=" font-semibold uppercase tracking-wide">
                        {
                            location.pathname === "/faculty/events" ? "Events" :
                            location.pathname === "/faculty/managetasks"? "Tasks" :
                            location.pathname === "/faculty/markattendance"? "Attendance" :
                            location.pathname === "/faculty/classes"? "Classes" :
                            "Dashboard"
                        
                        }
                    </span>
                </div>
                {/**Hamburger */}
                <div>
                    <div onClick={handleActive} className='z-[101] flex cursor-pointer relative w-8 h-[20px]'>
                        <div className={` ${active ? 'opacity-0' : ' bg-gray-400'} absolute top-0 w-full h-[15%] rounded-md transition-all duration-200`}></div>
                        <div className={` ${active ? 'rotate-45 bg-white' : ' bg-gray-400'} absolute top-[40%] w-full h-[15%] rounded-md transition-all duration-200`}></div>
                        <div className={` ${active ? '-rotate-45 bg-white' : ' bg-gray-400'} absolute top-[40%] w-full h-[15%] rounded-md transition-all duration-200`}></div>
                        <div className={` ${active ? 'opacity-0' : ' bg-gray-400'} absolute bottom-0 w-full h-[15%] rounded-md transition-all duration-200`}></div>
                    </div>
                </div>

                {/**Options */}
                <div onClick={handleClick} className={`fixed ${active ? " opacity-100 right-0" : " opacity-0 -right-[100%]"} top-0  bg-black/40 w-full h-full`} />
                <div className={`fixed ${active ? "right-0" : " -right-[100%]"} top-0 bg-secondary w-[80%] sm:w-[60%] h-full ease-in-out duration-500 transition-all`} >
                    <div className="flex flex-col justify-between w-full h-full">
                        <div className='p-4 flex w-full justify-center items-center min-h-16 h-16 border-b-[1px]'>
                            <h1 className='font-bold text-white text-lg tracking-wide'>Bumblebee</h1>
                        </div>
                        <div className="mt-4 flex flex-col overflow-y-auto p-4 items-center justify-between w-full h-full">
                            {/**Actions */}
                            <div className=" flex w-full flex-col gap-2">
                                {
                                    links.map((link) => (
                                        <Link onClick={handleClick} key={link.id} to={`${link.path}`}>
                                            <div className={` ${location.pathname === link.path ? "bg-white text-blue-600" : " text-gray-200"} hover:bg-sky-100 p-2 sm:px-12 flex hover:text-blue-900 items-center gap-4 rounded-md ease-in-out duration-150 transition-all`}>
                                                {link.icon}
                                                <span className="font-medium tracking-wide text-lg">{link.name}</span>
                                            </div>
                                        </Link>
                                    ))
                                }

                            </div>
                            {/**Settings */}
                            <div className="flex w-full flex-col gap-2">
                                
                                    <div onClick={handleLogout} className=" cursor-pointer group hover:bg-sky-100 flex p-2 sm:px-12 text-gray-200 hover:text-blue-900 items-center gap-4 rounded-md ease-in-out duration-150 transition-all">
                                        <MdLogout className=" text-[22px]" />
                                        <span className=" font-medium tracking-wide text-lg">Logout</span>
                                    </div>
                               
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FacultyNavbar