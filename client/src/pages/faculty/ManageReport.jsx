import { useQuery } from "@tanstack/react-query";
import newRequest from "../../utils/newRequest";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import ReportForm from "../../components/faculty/ReportForm";

const ManageReport = () => {
    const { isLoading, isError, data } = useQuery({
        queryKey: ['students'],
        queryFn: () => newRequest.get('students').then((res) => res.data)
    })
    const [openReport, setOpenReport] = useState(false)
    const [selectedStudentId, setSelectedStudentId] = useState(null);
    const handleReport = (studentId) => {
        setOpenReport((prev) => !prev)
        setSelectedStudentId(studentId);

    }
    const handleClose = () => {
        setOpenReport(false)
    }
    return (
        <div className="p-4 pb-24 flex flex-col items-center justify-start w-full h-full">
            <div className="flex flex-col gap-4 items-center w-full h-auto">
                <h1 className=" font-semibold text-lg">Upload Report to Students</h1>
                <div className="flex flex-col max-h-[500px] overflow-y-auto gap-2 items-center w-full">
                    {
                        isLoading ? "Loading Students" :
                            isError ? "Something Went Wrong" :
                                (
                                    data.map((student) => (

                                        <div key={student._id} className="flex w-full max-w-[600px] justify-between items-center p-4 border-[1px] border-gray-300 rounded-lg">
                                            <div className=" flex items-center gap-4">
                                                <div className="flex gap-4 items-center">
                                                    <img className="w-14 h-14 object-cover object-center" src={student?.img || "/assets/noProfile.png"} alt="Student" />
                                                </div>
                                                <div className="flex gap-4 items-center">

                                                    <div className="flex flex-col w-fit overflow-x-auto">
                                                        <h1 className=" font-semibold">{student.firstName}, {student.surname}</h1>
                                                        <p className=" text-sm">Roll No: {student.rollNo}</p>
                                                        <p className=" text-sm">Class: {student.class}</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div>
                                                <button onClick={() => handleReport(student.studentId._id)} className="px-4 py-2 bg-blue-500 text-white font-semibold rounded-md hover:opacity-70 active:opacity-30 duration-150 ease-in-out">Add Report</button>
                                            </div>
                                        </div>

                                    ))
                                )
                    }

                </div>
                
            </div>
            {
                openReport && (
                    <div className="z-[200] fixed  flex justify-center items-center p-4 top-0 left-0 bg-black/30 h-full w-full">
                        <div onClick={handleClose} className="z-[201] cursor-pointer absolute top-2 md:top-5 right-2 md:right-10 p-4 border-[1px] rounded-full bg-white text-black">
                            <AiOutlineClose />
                        </div>
                        <div className=" relative py-10 rounded-lg  max-w-[500px] w-full h-fit max-h-[600px] overflow-y-auto bg-white">
                            <ReportForm studId={selectedStudentId} /> 
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default ManageReport;