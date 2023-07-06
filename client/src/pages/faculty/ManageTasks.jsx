import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"

const ManageTasks = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ['students'],
    queryFn: () => newRequest.get('students').then((res) => res.data)
  })
  console.log(data)
  return (
    <div>ManageTasks</div>
  )
}

export default ManageTasks