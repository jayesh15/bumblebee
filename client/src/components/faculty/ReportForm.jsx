import { useState } from "react";
import newRequest from "../../utils/newRequest";
import { useNavigate } from "react-router-dom";

const ReportForm = ({ studId }) => {
    const navigate = useNavigate()
    const [reportData, setReportData] = useState({
        title: "",
        grade: "",
        description: "",
        assignedTo: studId,

    });
    console.log(reportData)
    const [err, setErr] = useState(null)

    const handleChange = (e) => {
        setReportData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }));
    };
    const handleAssignedReport = async (e) => {
        e.preventDefault();
        try {

            await newRequest.post('reports/addReport', {
                ...reportData,
            })
            alert("Report Assigned Successfully!")
            navigate("/faculty")


        } catch (error) {
            setErr(error.response.data)
            console.log(error)

        }
    }
    return (
        <form onSubmit={handleAssignedReport} className="flex flex-col items-center gap-2 w-full h-auto p-4">
            <h1 className=" text-xl lg:text-2xl font-bold">Report Details</h1>
            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                <h1 className="text-md md:text-lg">Title<span className=" text-red-500 ml-1">*</span></h1>
                <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="title" id="title" placeholder="Enter Title" />
            </div>
            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                <h1 className="text-md md:text-lg">Description<span className=" text-red-500 ml-1">*</span></h1>
                <textarea onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="description" id="description" placeholder="Enter Decription" />
            </div>
            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                <h1 className="text-md md:text-lg">Grade<span className=" text-red-500 ml-1">*</span></h1>
                <select onChange={handleChange} className=" cursor-pointer border-[1px] border-gray-300 rounded-md w-full p-2" name="grade" id="grade">
                    <option>--select grade--</option>
                    <option value="A+">A+</option>
                    <option value="A">A</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="F">F</option>
                </select>
            </div>

            <div className="mt-4 w-full">
                <button className=" bg-blue-500 w-full py-2 rounded-md text-white hover:opacity-70 active:opacity-25 transition-all duration-100 ease-in-out" type="submit">Post Report</button>
            </div>
            <div>
                <p className=" text-red-500 font-semibold">{err && err}</p>
            </div>

        </form>
    )
}

export default ReportForm