import { useOutletContext } from "react-router-dom";
const StudentDashboard = () => {
  const [isloadingTasks, isErrorTasks, tasks] = useOutletContext();
  const user = JSON.parse(localStorage.getItem('currentUser'));
  // Calculate task counts
  const calculateTaskCounts = () => {
    if (isloadingTasks || isErrorTasks) {
      return {
        isPending: 0,
        isCompleted: 0,
        total: 0,
      };
    }

    const counts = {
      isPending: 0,
      isCompleted: 0,
      total: tasks.length,
    };

    tasks.forEach((task) => {
      if (task.isPending) counts.isPending++;
      if (task.isCompleted) counts.isCompleted++;
    });

    return counts;
  };
  const taskCounts = calculateTaskCounts();

  return (
    <div className="p-4 h-full flex flex-col items-center w-full">
      {/**OverView */}
      <div className="flex w-full h-fit bg-gradient-to-br from-sky-200 to-blue-400 rounded-lg p-4">
        <div className="w-full flex gap-2">
          <div className=" w-full sm:w-[60%] flex gap-4 items-center justify-center">
            <div className="flex flex-col items-start p-2 gap-4">
              <h1 className=" text-blue-900 font-bold text-xl">Hello, {user.username}</h1>
              <div className="flex flex-col gap-1">

                {
                  isloadingTasks ? "Loading Details..." :
                    isErrorTasks ? "Something went Wrong" : (
                      tasks.length === 0 ? (
                        <>
                          <p className=" text-lg text-gray-700">You have <span className=" font-bold">No tasks</span> remaining.</p>
                          <p className=" text-lg text-gray-700 font-semibold">Keep up the good work!</p>
                        </>) : (
                        <>
                          <p className=" text-lg text-gray-700">You have completed <span className=" font-bold">{taskCounts.isCompleted} tasks</span> and <span className=" font-bold">{taskCounts.isPending} task</span> is remaining.</p>
                          <p className=" text-lg text-gray-700 font-semibold">Keep up the good work!</p>
                        </>
                      )
                    )
                }
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