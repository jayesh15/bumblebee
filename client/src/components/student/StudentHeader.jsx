import {BiSearch} from 'react-icons/bi'
const StudentHeader = () => {
  return (
    <div className="flex p-2 justify-between w-full items-center h-14 bg-white border-b-[1px] ">
        <div className='flex w-full'>
            <h1 className=" text-lg font-semibold tracking-wide">Welcome Mrunal</h1>
        </div>
        <div className='flex w-full gap-2 justify-end items-center p-2'>
            <BiSearch className=' text-gray-500 text-[20px]' />
            <input className='focus:outline-none bg-transparent p-1 border-[1px] border-gray-300 rounded-md' type="text" name='search' placeholder='Search Tasks' />
        </div>
    </div>
  )
}

export default StudentHeader