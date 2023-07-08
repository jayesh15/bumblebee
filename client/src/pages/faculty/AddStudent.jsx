import { useState } from "react";
import newRequest from "../../utils/newRequest"
import { useNavigate } from 'react-router-dom'
const AddStudent = () => {
    const navigate = useNavigate()
    const [section, setSection] = useState(1);
    const [student, setStudent] = useState({
        username: "",
        email: "",
        password: "",
        role: "student",
        firstname: "",
        surname: "",
        mothername: "",
        fathername: "",
        rollno: "",
        classAssigned: ""




    });


    const [err, setErr] = useState(null)
    const handleNext = () => {
        setSection(section + 1);
    };

    const handleBack = () => {
        setSection(section - 1);
    };
    const handleChange = (e) => {
        setStudent((prev) => {
            return { ...prev, [e.target.name]: e.target.value };
        });
    };

    const handleRegister = async (e) => {
        e.preventDefault()
        try {

            await newRequest.post('/auth/register', {
                ...student,
            })
            alert("Student Account Created!")
            navigate("/faculty")


        } catch (error) {
            setErr(error.response.data)
            console.log(error)

        }

    }
    return (
        <div className="p-4 flex flex-col w-full items-center">
            <form onSubmit={handleRegister} className="border-[1px] border-gray-300 shadow-lg rounded-lg flex px-4 lg:px-6 py-4 flex-col gap-2 w-full max-w-[600px] h-full justify-start items-center">

                {
                    section === 1 ? (
                        <>
                            <h1 className=" text-xl lg:text-2xl font-bold">Add new Student</h1>
                            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                                <h1 className="text-md md:text-lg">Username<span className=" text-red-500 ml-1">*</span></h1>
                                <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="username" id="username" placeholder="Enter Username" />
                            </div>
                            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                                <h1 className="text-md md:text-lg">Email<span className=" text-red-500 ml-1">*</span></h1>
                                <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="email" name="email" id="email" placeholder="Enter Email" />
                            </div>
                            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                                <h1 className="text-md md:text-lg">Password<span className=" text-red-500 ml-1">*</span></h1>
                                <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="password" name="password" id="password" placeholder="Enter Password" />
                            </div>
                            <div className="w-full mt-16 flex items-center justify-end">
                                <div className=" cursor-pointer p-1 font-semibold text-blue-500 hover:opacity-70 active:opacity-30 " onClick={handleNext}>Next</div>
                            </div>
                        </>
                    ) : (
                        <>
                            <h1 className=" text-xl lg:text-2xl font-bold">Fill Details</h1>
                            <div className="mt-4 grid w-full gap-4 grid-cols-1 md:grid-cols-2">
                                <div className="flex w-full py-1 flex-col justify-start items-start">
                                    <h1 className="text-md md:text-lg">Firstname<span className=" text-red-500 ml-1">*</span></h1>
                                    <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="firstname" id="firstname" placeholder="Enter First name" />
                                </div>
                                <div className="flex w-full py-1 flex-col justify-start items-start">
                                    <h1 className="text-md md:text-lg">Surname<span className=" text-red-500 ml-1">*</span></h1>
                                    <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="surname" id="surname" placeholder="Enter Surname" />
                                </div>
                                <div className="flex w-full py-1 flex-col justify-start items-start">
                                    <h1 className="text-md md:text-lg">Mother's Name<span className=" text-red-500 ml-1">*</span></h1>
                                    <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="mothername" id="mothername" placeholder="Enter mother's name" />
                                </div>
                                <div className="flex w-full py-1 flex-col justify-start items-start">
                                    <h1 className="text-md md:text-lg">Father's Name<span className=" text-red-500 ml-1">*</span></h1>
                                    <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="text" name="fathername" id="fathername" placeholder="Enter Father's name" />
                                </div>
                            </div>
                            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                                <h1 className="text-md md:text-lg">Assign Roll No<span className=" text-red-500 ml-1">*</span></h1>
                                <input onChange={handleChange} className="w-full h-12 border-[1px] rounded-md p-2" type="number" name="rollno" id="rollno" placeholder="Enter Roll No" />
                            </div>
                            <div className="mt-2 flex w-full py-1 flex-col justify-start items-start">
                                <h1 className="text-md md:text-lg">Select Class<span className=" text-red-500 ml-1">*</span></h1>
                                <select onChange={handleChange} className=" cursor-pointer border-[1px] border-gray-300 rounded-md w-full p-2" name="classAssigned" id="classAssigned">
                                    <option>--select class--</option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                </select>
                            </div>
                            <div className="mt-8 w-full">
                                <button className=" bg-blue-500 w-full py-2 rounded-md text-white hover:opacity-70 active:opacity-25 transition-all duration-100 ease-in-out" type="submit">Register</button>
                            </div>
                            <div>
                                <p className=" text-red-500 font-semibold">{err && err}</p>
                            </div>

                            <div className="w-full mt-4 flex items-center justify-start">
                                <div className=" cursor-pointer p-1 font-semibold text-blue-500 hover:opacity-70 active:opacity-30" onClick={handleBack}>Back</div>
                            </div>
                        </>
                    )
                }

            </form >
        </div >
    )
}

export default AddStudent