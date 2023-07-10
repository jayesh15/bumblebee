import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"
import { useState } from "react"

const Tasks = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  const { isLoading: isloadingTasks, isError: isErrorTasks, data: tasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => newRequest.get('tasks').then((res) => res.data)
  })

  const assignedTasks = tasks && tasks.filter(task => task.assignedTo.studentId === user._id);

  
  
  const handleDoneTask = (taskId) =>{
      
      
      try {
        newRequest.patch(`tasks/${taskId}`)
        alert("Task Marked as Done")
      } catch (error) {
        alert(error)
      }
  }

  return (
    <div className="  flex flex-col p-4 gap-4 w-full items-center">

      {
        isloadingTasks ? "Loading tasks..." : isErrorTasks ? "Something went Wrong" : (
          assignedTasks.map((task) => (
            <>
              <div className="flex flex-col items-center gap-2 w-full px-2 md:px-4 py-4 border-[1px] border-gray-300 rounded-lg">
                <div className="flex gap-2 flex-wrap w-full justify-between items-baseline">
                  <p className=" font-bold text-xl ">{task.title}</p>
                  <p className=" font-semibold">Assinged: <span className=" font-semibold text-sm text-gray-600">{new Date(task.createdAt).toLocaleDateString('en-GB')}</span></p>
                </div>
                <div>
                  <p className=" font-bold ">Description</p>
                  <p className=" text-justify">{task.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam veritatis optio praesentium temporibus laboriosam facere? Omnis accusamus fugiat inventore corporis.</p>
                </div>
                <div className="flex w-full">
                <p className=" font-semibold">Due date: <span className=" font-semibold text-sm text-gray-600">{new Date(task.deadline).toLocaleDateString('en-GB')}</span></p>
                </div>
                <button onClick={()=>handleDoneTask(task._id)} className=" w-full max-w-[100px] px-4 py-2 bg-blue-500 rounded-md font-semibold text-white hover:opacity-70 active:opacity-30 ease-in-out duration-150 transition-all">Done</button>
              </div>
            </>
          ))
        )
      }

    </div>
  )
}

export default Tasks