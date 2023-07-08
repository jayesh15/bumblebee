import { useState } from "react";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const TaskForm = ({ studId }) => {
    const navigate = useNavigate()
    const [taskData, setTaskData] = useState({
        title: "",
        description: "",
        assignedTo: studId,
        deadline: "",
    });
    console.log(taskData)
    const [err, setErr] = useState(null)

    const handleChange = (e) => {
        setTaskData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleAssignedTask = async(e) => {
        e.preventDefault();
        try {

            await newRequest.post('/tasks/addTask', {
                ...taskData,
            })
            alert("Task Assigned Successfully!")
            navigate("/faculty")


        } catch (error) {
            setErr(error.response.data)
            console.log(error)

        }
    }
    return (
        <form onSubmit={handleAssignedTask} className="flex flex-col items-center gap-2 w-full h-auto p-4">
            <h1 className=" text-xl lg:text-2xl font-bold">Task Details</h1>
            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                <h1 className="text-md md:text-lg">Title<span className=" text-red-500 ml-1">*</span></h1>
                <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="title" id="title" placeholder="Enter Title" />
            </div>
            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                <h1 className="text-md md:text-lg">Description<span className=" text-red-500 ml-1">*</span></h1>
                <textarea onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="description" id="description" placeholder="Enter Decription" />
            </div>
            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                <h1 className="text-md md:text-lg">Deadline<span className=" text-red-500 ml-1">*</span></h1>
                <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="date" name="deadline" id="deadline" placeholder="Enter Title" />
            </div>

            <div className="mt-4 w-full">
                <button className=" bg-blue-500 w-full py-2 rounded-md text-white hover:opacity-70 active:opacity-25 transition-all duration-100 ease-in-out" type="submit">Assign Task</button>
            </div>
            <div>
                <p className=" text-red-500 font-semibold">{err && err}</p>
            </div>

        </form>
    )
}

export default TaskForm