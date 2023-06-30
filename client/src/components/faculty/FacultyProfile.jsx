import { BsBell } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const Tasks = [
    {
        id: 1,
        title: "Task 1",
        date: "13",
        month: "Jun",
        subject: "Subject 1",
        teacher: "Teacher 1"
    },
    {
        id: 2,
        title: "Task 2",
        date: "15",
        month: "Jul",
        subject: "Subject 1",
        teacher: "Teacher 1"
    },
    {
        id: 3,
        title: "Task 3",
        date: "18",
        month: "Jul",
        subject: "Subject 2",
        teacher: "Teacher 2"
    }
]
const FacultyProfile = () => {
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
                        <h1 className=' font-bold'>Teacher </h1>
                        <p className=' font-semibold text-gray-600'>Class B</p>
                    </div>
                </div>
                {/**Tasks */}
                <div className='mt-2 px-4 flex w-full'>
                    <div className='flex flex-col w-full'>
                        <div className='flex w-full justify-between items-center'>
                            <h1 className=' font-bold text-lg tracking-wide'>Tasks</h1>
                            <Link to='/student/tasks'>
                                <p className=' text-blue-600 font-semibold'>See All</p>
                            </Link>
                        </div>
                        <div className='mt-4 flex flex-col w-full gap-4'>
                            {
                                Tasks.map((task) => (
                                    <div key={task.id} className='flex gap-2 h-16 w-full justify-start items-center'>
                                        <div className=' border-[1px] border-gray-300 h-full justify-between w-20  rounded-md overflow-hidden flex items-center flex-col'>
                                            <div className='flex w-full h-full items-center justify-center'>
                                                <p className=' font-semibold'>{task.date}</p>
                                            </div>
                                            <div className='bg-blue-600 flex w-full h-full items-center justify-center'>
                                                <p className=' text-white text-sm'>{task.month}</p>
                                            </div>
                                        </div>
                                        <div className='flex flex-col items-start w-full h-full justify-between py-1'>
                                            <div className=' overflow-auto w-full h-full flex'>
                                                <h1 className='font-bold'>{task.title}</h1>
                                            </div>
                                            <div className='flex items-start'>
                                                <p className=' text-sm text-gray-600'>{task.subject}, </p>
                                                <p className='ml-1 text-sm font-medium text-gray-600'>{task.teacher}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>


                    </div>

                </div>

            </div>

        </div>
    )
}

export default FacultyProfile