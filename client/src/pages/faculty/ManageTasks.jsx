import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"

const ManageTasks = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['students'],
    queryFn: () => newRequest.get('students').then((res) => res.data)
  })
  console.log(data)
  return (
    <div className="p-4 flex flex-col border-2 items-center justify-start w-full h-full">
      <div className="flex flex-col gap-4 items-center w-full h-auto">
        <h1 className=" font-semibold text-lg">Assign Tasks to Students</h1>
        <div className="flex flex-col gap-2 items-center w-full">
          {
            isLoading ? "Loading Students" :
              isError ? "Something Went Wrong" :
                (
                  data.map((student) => (
                    
                      <div key={student._id} className="flex w-full justify-between items-center p-4 border-[1px] border-gray-300">
                        <div className="flex gap-4 items-center">
                          <img className="w-14 h-14 object-cover object-center" src={student?.img || "/assets/noProfile.png"} alt="Student" />
                          <div className="flex flex-col overflow-x-auto">
                            <h1 className=" font-semibold">{student.username}</h1>
                            <p className=" text-sm">{student.email}</p>
                          </div>
                        </div>
                      </div>
                    
                  ))
                )
          }
        </div>
      </div>
    </div>
  )
}

export default ManageTasks