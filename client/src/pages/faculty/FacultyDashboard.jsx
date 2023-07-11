import { FaChildren } from 'react-icons/fa6'
import { BiTask } from 'react-icons/bi'
import {MdPendingActions,MdAssignment} from 'react-icons/md'
import { useQuery } from '@tanstack/react-query'
import newRequest from '../../utils/newRequest'
const FacultyDashboard = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['studentsT'],
    queryFn: () => newRequest.get('students').then((res) => res.data)
  })
  const { isLoading: isLoadingTasks, isError: isErrorTasks, data: tasks } = useQuery({
    queryKey: ['tasks'],
    queryFn: () => newRequest.get('tasks').then((res) => res.data)
  })
  // Calculate task counts
  const calculateTaskCounts = () => {
    if (isLoadingTasks || isErrorTasks) {
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
    <div className="flex flex-col w-full h-full p-4">
      <div className="grid w-full grid-cols-1 md:grid-cols-2 gap-4">
        <div className="flex py-8 px-4  justify-center items-center gap-4 w-full  rounded-lg  bg-gradient-to-br from-blue-300 to-blue-500">
          <div className=' p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl'>
            <FaChildren className='text-white text-[25px]' />
          </div>
          <div className='flex gap-2 items-baseline '>
            <p className="hidden sm:block font-medium text-yellow-300 text-lg">No. of Students</p>
            <p className=" font-bold text-yellow-300 text-2xl">
              {
                isLoading ? "..." :
                  isError ? "" :
                    (data.length)
              }
            </p>
          </div>
        </div>
        <div className="flex py-8 px-4 justify-center items-center gap-4 w-full  rounded-lg bg-gradient-to-br from-blue-300 to-blue-500">
          <div className=' p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl'>
            <MdAssignment className=' text-white text-[25px]' />
          </div>
          <div className='flex gap-2 items-baseline '>
            <p className="hidden sm:block font-medium text-yellow-300 text-lg">Tasks Assigned</p>
            <p className=" font-bold text-yellow-300 text-2xl">{taskCounts.total}</p>
          </div>
        </div>
        <div className="flex py-8 px-4  justify-center items-center gap-4 w-full  rounded-lg  bg-gradient-to-br from-blue-300 to-blue-500">
          <div className=' p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl'>
            <BiTask className=' text-white text-[25px]' />
          </div>
          <div className='flex gap-2 items-baseline '>
            <p className="hidden sm:block font-medium text-yellow-300 text-lg">Tasks Completed</p>
            <p className=" font-bold text-yellow-300 text-2xl">{taskCounts.isCompleted}</p>
          </div>
        </div>
        <div className="flex py-8 px-4 justify-center items-center gap-4 w-full  rounded-lg bg-gradient-to-br from-blue-300 to-blue-500">
          <div className=' p-4 bg-gradient-to-br from-blue-600 to-blue-800 rounded-2xl'>
            <MdPendingActions className='text-white text-[25px]' />
          </div>
          <div className='flex gap-2 items-baseline '>
            <p className="hidden sm:block font-medium text-yellow-300 text-lg">Tasks Pending</p>
            <p className=" font-bold text-yellow-300 text-2xl">{taskCounts.isPending}</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FacultyDashboard