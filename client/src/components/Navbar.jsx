import { useState } from "react"
import { Link } from "react-router-dom"

const Navbar = () => {
  const [active, setActive] = useState(false)
  const [options, setOptions] = useState(false)

  const handleOptions = () => {
    setActive(prev => !prev)
    setOptions(prev => !prev)

  }
  
  const handleClick = () => {
    setActive(false)
    setOptions(false)
  }
  return (
    <div className="z-[100] w-full fixed top-0 left-0 h-16">
      <div className="flex px-4 w-full justify-center h-full bg-white border-b-[1px] border-gray-300">
        <div className=" relative flex gap-2 w-full max-w-[1240px] items-center justify-between">
          {/**Logo */}
          <div>
            <Link to="/">
              <h1 className="font-bold tracking-wide text-lg">Bumblebee</h1>
            </Link>
          </div>
          {/**Links */}
          <div className=" hidden md:flex items-center gap-4">
            <span className=" cursor-pointer">Home</span>
            <span className=" whitespace-nowrap cursor-pointer">About Us</span>
            <span className=" cursor-pointer">Benefits</span>
            <span className=" cursor-pointer">Teachers</span>

          </div>
          {/**Buttons */}
          <div className="flex gap-2 items-center">
            <Link to="/login">
              <button className="hidden md:block whitespace-nowrap border-[1px] border-blue-600 px-4 py-2 rounded-md font-semibold bg-white text-blue-600 hover:opacity-50 active:opacity-20 ease-in-out duration-200 transition-all">Sign in</button>
            </Link>
            <Link to="/register">
              <button className="hidden md:block whitespace-nowrap border-[1px] border-blue-600 px-4 py-2 rounded-md font-semibold bg-blue-600 text-white hover:opacity-50 active:opacity-20 ease-in-out duration-200 transition-all">Sign up</button>
            </Link>

            <div onClick={handleOptions} className='z-[101] flex md:hidden cursor-pointer relative w-8 h-[20px]'>
              <div className={` ${active ? 'opacity-0' : ''} absolute bg-gray-400 top-0 w-full h-[15%] rounded-md transition-all duration-200`}></div>
              <div className={` ${active ? 'rotate-45' : ''} absolute bg-gray-400 top-[40%] w-full h-[15%] rounded-md transition-all duration-200`}></div>
              <div className={` ${active ? '-rotate-45' : ''} absolute bg-gray-400 top-[40%] w-full h-[15%] rounded-md transition-all duration-200`}></div>
              <div className={` ${active ? 'opacity-0' : ''} absolute bg-gray-400 bottom-0 w-full h-[15%] rounded-md transition-all duration-200`}></div>
            </div>
          </div>
          {/**Overlay */}
          {
            options && <div onClick={handleClick} className="md:hidden bg-black/20 fixed right-0 top-0  w-full h-full"></div>
          }
          {/**Options */}
          {
            options && (
              <div className="z-[1000] md:hidden bg-white absolute right-0 top-16 h-auto px-16 py-4 border-[1px] border-gray-300 rounded-lg">
                <div className="flex flex-col gap-4 w-full h-full text-lg font-semibold tracking-wide">
                  <span onClick={handleOptions} className=" cursor-pointer">Home</span>
                  <span onClick={handleOptions} className=" whitespace-nowrap cursor-pointer">About Us</span>
                  <span onClick={handleOptions} className=" cursor-pointer">Benefits</span>
                  <span onClick={handleOptions} className=" cursor-pointer">Teachers</span>
                  <Link onClick={handleOptions} to="/login">
                    <button className="whitespace-nowrap border-[1px] border-blue-600 px-4 py-2 rounded-md font-semibold bg-white text-blue-600">Sign in</button>
                  </Link>
                  <Link onClick={handleOptions} to="/register">
                    <button className="whitespace-nowrap border-[1px] border-blue-600 px-4 py-2 rounded-md font-semibold bg-blue-600 text-white">Sign up</button>
                  </Link>

                </div>
              </div>
            )
          } 

        </div>
      </div>

    </div>
  )
}

export default Navbar