import About from "../../components/home/About"
import Benefits from "../../components/home/Benefits"
import Hero from "../../components/home/Hero"
import Teachers from "../../components/home/Teachers"

const Content = () => {
  return (
    <div className="flex flex-col w-full gap-10 md:gap-20 h-auto">
        <Hero/>
        <About/>
        <Benefits/>
        <Teachers/>
    </div>
  )
}

export default Content