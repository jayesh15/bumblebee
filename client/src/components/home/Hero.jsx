const Hero = () => {
  return (
    <div className=" flex justify-center relative w-full min-h-[450px] md:h-[500px] lg:h-[600px] bg-white">
      <div className=" absolute w-full h-full">
        <img className=" w-full h-full object-cover" src="/assets/heroBg2.png" alt="" />
      </div>
      <div className="z-[1] grid grid-cols-1 md:grid-cols-2 ">
        <div className="flex p-4 flex-col gap-4 w-full h-full items-start justify-center">
          <h1 className=" font-bold text-4xl md:text-5xl text-white drop-shadow-lg">Welcome to <span className=" tracking-wider text-blue-600">Bumblebee</span></h1>
          <p className=" text-2xl md:text-3xl font-bold">Putting your Child&apos;s Future in Great Motion</p>
            <button className=" whitespace-nowrap text-white font-semibold text-lg tracking-wide px-4 py-3 rounded-lg bg-sky-600">Get Started</button>
        </div>
        <div className=" hidden md:flex w-full h-full p-10">
          <img className=" lg:scale-90 w-full h-full object-contain" src="/assets/child1.png" alt="" />
        </div>


      </div>


    </div>
  )
}

export default Hero