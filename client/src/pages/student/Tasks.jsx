import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"

const Tasks = () => {
  const user = JSON.parse(localStorage.getItem("currentUser"))
  const { isLoading: isloadingTasks, isError: isErrorTasks, data: tasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => newRequest.get('tasks').then((res) => res.data)
  })

  const assignedTasks = tasks && tasks.filter(task => task.assignedTo.studentId === user._id);

  return (
    <div className="  flex w-full">{
      isloadingTasks ? "..." : isErrorTasks ? "Error" : (
        assignedTasks.map((task) => (
          <>
            <div>
              <h1>{task.title}</h1>
            </div>
          </>
        ))
      )
    }</div>
  )
}

export default Tasks