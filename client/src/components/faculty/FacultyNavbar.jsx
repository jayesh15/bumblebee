import { useState } from "react"
import { BiTask } from 'react-icons/bi'
import { AiOutlineFileDone, AiOutlineTable } from 'react-icons/ai'
import { MdOutlineDashboard, MdOutlineEvent, MdSettings } from 'react-icons/md'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { SlCalender } from 'react-icons/sl'
import { Link, useLocation } from "react-router-dom"


const links = [
    {
        id: 1,
        path: "/faculty/",
        name: "Dashboard",
        icon: <MdOutlineDashboard className="text-[20px] min-w-fit"/>
    },
    {
        id: 2,
        path: "/faculty/managetasks",
        name: "Tasks",
        icon: <BiTask className="text-[20px] min-w-fit"/>
    },
    {
        id: 3,
        path: "/faculty/markattendance",
        name: "Attendance",
        icon: <LiaUserCheckSolid className="text-[20px] min-w-fit"/>
    },
    
    {
        id: 4,
        path: "/faculty/classes",
        name: "Classes",
        icon: <SlCalender className="text-[20px] min-w-fit"/>
    },
]
const FacultyNavbar = () => {
    const location = useLocation()
    const [active, setActive] = useState(false)
    const handleActive = () => {
        setActive(prev => !prev)
    }
    const handleClick = () => {
        setActive(false)
    }
    return (
        <div className="z-[100] top-0 left-0 h-16 w-full">
            <div className=" flex px-2 h-full w-full items-center justify-between  bg-white border-b-[1px] border-gray-200">
                {/**Profile Img */}
                <div>
                    <img className="w-12 h-12 rounded-full object-cover object-center" src="/assets/noProfile.png" alt="" />
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
                <div onClick={handleClick} className={`fixed ${active ? " opacity-100" : " opacity-0"} top-0 right-0 bg-black/50 w-full h-full ease-in-out duration-500 transition-all`} />
                <div className={`fixed ${active ? "right-0" : " -right-[100%]"} top-0 bg-blue-700 w-[60%] h-full ease-in-out duration-500 transition-all`} >
                    <div className="flex flex-col justify-between w-full h-full">
                        <div className="flex px-4 sm:px-12 items-center w-full min-h-16 h-16 ">
                            <h1 className=" text-yellow-400 font-bold tracking-wide text-lg">BumbleBee</h1>
                        </div>
                        <div className="mt-4 flex flex-col overflow-y-auto p-2 items-center justify-between w-full h-full">
                            {/**Actions */}
                            <div className=" flex w-full flex-col gap-2">
                                {
                                    links.map((link) => (
                                        <Link onClick={handleClick} key={link.id} to={`${link.path}`}>
                                            <div className="group hover:bg-white/90 p-2 sm:px-12 flex text-white hover:text-blue-900 items-center gap-2 rounded-md ease-in-out duration-150 transition-all">
                                                {link.icon}
                                                <span className="font-semibold tracking-wider text-lg">{link.name}</span>
                                            </div>
                                        </Link>
                                    ))
                                }

                            </div>
                            {/**Settings */}
                            <div className="flex w-full flex-col gap-2">
                                <Link onClick={handleClick} to="/faculty/settings">
                                    <div className="group hover:bg-white/90 flex p-2 sm:px-12 text-white hover:text-blue-900 items-center gap-2 rounded-md ease-in-out duration-150 transition-all">
                                        <MdSettings className=" text-[20px]"/>
                                        <span className=" font-semibold tracking-wider text-lg">Settings</span>
                                    </div>
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default FacultyNavbar