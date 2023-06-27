import { Outlet } from "react-router-dom"
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"

const Home = () => {
  return (
    <div className="flex min-h-screen w-full flex-col justify-between">
      <Navbar />
      
      <div className="mt-16 flex w-full">
        <Outlet />
      </div>
      <Footer />
    </div>
  )
}

export default Home