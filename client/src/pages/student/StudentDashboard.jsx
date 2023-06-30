const StudentDashboard = () => {
  return (
    <div className="p-4 h-full flex flex-col items-center w-full">
      {/**OverView */}
      <div className="flex w-full h-fit bg-blue-200 rounded-lg p-4">
        <div className="w-full flex gap-2">
          <div className=" w-full sm:w-[60%] flex gap-4 items-center justify-center">
            <div className="flex flex-col items-start p-2 gap-4">
              <h1 className=" text-blue-900 font-bold text-xl">Hello, Mrunal</h1>
              <div className="flex flex-col gap-1">
                <p className=" text-lg text-gray-700">You have completed <span className=" font-bold">2 tasks</span> and <span className=" font-bold">1 task</span> is remaining today.</p>
                <p className=" text-lg text-gray-700 font-semibold">Keep up the good work!</p>
              </div>
            </div>
          </div>
          <div className="hidden sm:flex w-48 h-auto">
            <img className=" w-full h-full object-contain" src="/assets/ImgStudents.png" alt="" />

          </div>


        </div>
      </div>
    </div>
  )
}

export default StudentDashboard