import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const Login = () => {
  const [isEmail, setIsEmail] = useState(false)
  const [username, setUsername] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassWord] = useState("")
  const [role, setRole] = useState("student")
  console.log(role)
  const [selectType, setSelectType] = useState('usernameT')

  const handleType = (typeT) => {
    setSelectType(typeT)
  }



  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (role === "student"){
      navigate("/student")
    }else{
      navigate("/faculty")
    }
  }
  return (
    <div className=" flex w-full p-6 min-h-[500px] h-auto justify-center items-center">
      <form onSubmit={handleSubmit} className="flex py-4 px-6 lg:px-8 max-w-[400px] w-full h-fit rounded-lg border-[1px] border-gray-300 shadow-xl flex-col gap-2 justify-center items-center">
        <div>
          <h1 className=" text-xl lg:text-2xl font-bold">Login into your account</h1>
        </div>

        <div className="grid grid-cols-2 border-[1px] border-gray-300 rounded-lg overflow-hidden justify-between">
          <div onClick={() => handleType('usernameT')} className={`${selectType === 'usernameT' ? ' bg-blue-500 text-white' : ''} flex justify-center rounded-md hover:cursor-pointer px-4 py-2 transition-all duration-150 ease-in-out`}>
            <span className=" text-sm">Username</span>
          </div>
          <div onClick={() => handleType('emailT')} className={`${selectType === 'emailT' ? ' bg-blue-500 text-white ' : ' '} flex justify-center rounded-md hover:cursor-pointer px-4 py-2 transition-all duration-150 ease-in-out`}>
            <span className=" text-sm">Email</span>
          </div>
        </div>
        <div className="mt-6 flex gap-2 w-full items-center">
          <h1>Role</h1>
          <select onChange={(e)=>setRole(e.target.value)} className=" cursor-pointer border-[1px] border-gray-300 rounded-md w-full p-2" name="role" id="role">
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </div>
        {
          selectType === "usernameT" ? (
            <>
              <div className=" w-full flex flex-col justify-start items-start gap-1">
                <h1>Username</h1>
                <input onChange={(e) => setUsername(e.target.value)} className=" rounded-md h-10 p-2 border-[1px] w-full" type="text" name="username" id="username" placeholder="Enter Username" />
              </div>


            </>
          ) : (
            <>
              <div className=" w-full flex flex-col justify-start items-start gap-1">
                <h1>Email</h1>
                <input onChange={(e) => setEmail(e.target.value)} className=" rounded-md h-10 p-2 border-[1px] w-full" type="email" name="email" id="email" placeholder="Enter Email" />
              </div>
            </>
          )
        }
        <div className="w-full flex flex-col justify-start items-start gap-1">
          <h1>Password</h1>
          <input onChange={(e) => setPassWord(e.target.value)} className=" rounded-md h-10 p-2 border-[1px] w-full" type="password" name="password" id="password" placeholder="Enter Password" />
        </div>
        <div className="mt-2 w-full">
          <button className=" bg-blue-500 w-full py-2 rounded-md text-white hover:opacity-70 active:opacity-25 transition-all duration-100 ease-in-out" type="submit">Login</button>
        </div>
       
        <div>
          <Link to='/register'>
            <h1 className=" text-blue-500">Create an Account?</h1>
          </Link>
        </div>


      </form>
    </div>
  )
}

export default Login