import { useState } from "react"
import { BiTask } from 'react-icons/bi'
import { AiOutlineFileDone, AiOutlineTable } from 'react-icons/ai'
import { MdOutlineDashboard, MdOutlineEvent, MdSettings } from 'react-icons/md'
import { LiaUserCheckSolid } from 'react-icons/lia'
import { SlCalender } from 'react-icons/sl'
import { Link } from "react-router-dom"


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
const MobileNavbar = () => {
    const [active, setActive] = useState(false)
    const handleActive = () => {
        setActive(prev => !prev)
    }
    return (
        <div className="z-[100] top-0 left-0 h-16 w-full">
            <div className=" flex px-2 h-full w-full items-center justify-between  bg-white border-b-[1px] border-gray-300">
                {/**Profile Img */}
                <div>
                    <img className="w-12 h-12 rounded-full object-cover object-center" src="/assets/noProfile.png" alt="" />
                </div>
                {/**Location */}
                <div>
                    <span>Dashboard</span>
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
                <div className={`fixed ${active ? " opacity-100" : " opacity-0"} top-0 right-0 bg-black/50 w-full h-full ease-in-out duration-1000 transition-all`} />
                <div className={`fixed ${active ? "right-0" : " -right-[100%]"} top-0 bg-blue-700 w-[60%] h-full ease-in-out duration-1000 transition-all`} >
                    <div className="flex flex-col w-full h-full">
                        <div className="flex px-12 items-center w-full min-h-16 h-16 ">
                            <h1 className=" text-yellow-400 font-bold tracking-wide text-lg">BumbleBee</h1>
                        </div>
                        <div className="mt-4 flex flex-col overflow-y-auto p-2 items-center justify-between w-full h-full">
                            {/**Actions */}
                            <div className=" flex w-full flex-col gap-2">
                                {
                                    links.map((link) => (
                                        <Link key={link.id} to={`${link.path}`}>
                                            <div className="group hover:bg-white/90 px-12 py-2 flex text-white hover:text-blue-900 items-center gap-2 rounded-md ease-in-out duration-150 transition-all">
                                                {link.icon}
                                                <span className="font-semibold tracking-wider text-lg">{link.name}</span>
                                            </div>
                                        </Link>
                                    ))
                                }

                            </div>
                            {/**Settings */}
                            <div className="flex w-full flex-col gap-2">
                                <Link to="/student/">
                                    <div className="group hover:bg-white/90 flex px-12 py-2 text-white hover:text-blue-900 items-center gap-2 rounded-md ease-in-out duration-150 transition-all">
                                        <MdSettings size={24} />
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

export default MobileNavbar