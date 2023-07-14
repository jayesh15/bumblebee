import { BsBell } from 'react-icons/bs'
import { Link } from 'react-router-dom'


const FacultyProfile = ({isloadingTasks, isErrorTasks, tasks}) => {
    
    const getFormattedDate = (dateString) => {
        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, '0'); // Get the day and pad with leading zero if necessary
        const month = date.toLocaleString('default', { month: 'short' }); // Get the month abbreviation
    
        return {
            day,
            month
        };
    
    }
    const user = JSON.parse(localStorage.getItem('currentUser'))
    return (
        <div className="flex w-[300px] h-full border-l-[1px] bg-white">
            <div className="flex flex-col w-full h-full justify-start">
                {/**Profile Detail */}
                <div className="p-2 flex gap-2 items-center h-16 border-b-[1px] w-full">
                    <div className='p-2 border-r-2 border-gray-300'>
                        <BsBell className=' text-gray-500 text-[20px]' />
                    </div>
                    <div className=' aspect-square w-1/4'>
                        <img className='border-[1px] border-gray-400 w-full h-full rounded-full object-cover object-center' src="/assets/teacher.png" alt="" />
                    </div>
                    <div className='flex flex-col items-start w-full'>
                        <h1 className=' font-bold'>{user.username} </h1>
                        <p className=' font-semibold text-gray-600'>Class B</p>
                    </div>
                </div>
                {/**Tasks */}
                <div className='mt-2 px-4 flex w-full'>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-between items-center'>
                            <h1 className=' font-bold text-lg tracking-wide'>Tasks</h1>
                            <Link to='/faculty/managetasks'>
                                <p className=' text-blue-600 font-semibold'>See All</p>
                            </Link>
                        </div>
                        <div className='mt-4 flex flex-col items-center w-full gap-4'>
                            {
                                isloadingTasks ? "loading Tasks..." :
                                    isErrorTasks ? "Something went wrong" :
                                        (
                                            tasks.length === 0 ? "No Tasks Assigned" : (
                                                tasks.map((task) => (
                                                    <div key={task.id} className='flex gap-2 h-16 w-full justify-start items-center'>
                                                        <div className=' border-[1px] border-gray-300 h-full justify-between w-20  rounded-md overflow-hidden flex items-center flex-col'>
                                                            <div className='flex w-full h-full items-center justify-center'>
                                                                <p className=' font-semibold'>{getFormattedDate(task.deadline).day}</p>
                                                            </div>
                                                            <div className='bg-blue-600 flex w-full h-full items-center justify-center'>
                                                                <p className=' text-white text-sm'>{getFormattedDate(task.deadline).month}</p>
                                                            </div>
                                                        </div>
                                                        <div className='flex flex-col items-start w-full h-full justify-between py-1'>
                                                            <div className=' overflow-auto w-full h-full flex'>
                                                                <h1 className='font-bold'>{task.title}</h1>
                                                            </div>
                                                            <div className=' overflow-auto w-full h-full flex'>
                                                                <h1 className='font-semibold text-sm text-gray-500'>{new Date(task.createdAt).toLocaleDateString('en-GB')}</h1>
                                                            </div>

                                                        </div>
                                                    </div>
                                                ))
                                            )
                                        )
                            }
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default FacultyProfile