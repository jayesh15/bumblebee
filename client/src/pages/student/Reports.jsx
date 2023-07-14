import { useQuery } from "@tanstack/react-query"
import newRequest from "../../utils/newRequest"
const Reports = () => {
  const { isLoading: isloadingReports, isError: isErrorReports, data: reports, refetch } = useQuery({
    queryKey: ['reports'],
    queryFn: () => newRequest.get('reports').then((res) => res.data)
  })
  console.log(reports);

  return (
    <div className="  flex flex-col p-4 gap-4 w-full items-center">

      {
        isloadingReports ? "Loading reports..." : isErrorReports ? "Something went Wrong" : (
          reports.length === 0 ? "No Reports Found" : (
            reports.map((report) => (

              <div key={report._id} className="flex flex-col items-center gap-2 w-full px-2 md:px-4 py-4 border-[1px] border-gray-300 rounded-lg">
                <div className="flex gap-2 flex-wrap w-full justify-between items-baseline">
                  <p className=" font-bold text-xl ">{report.title}</p>
                  <p className=" font-semibold">Dated: <span className=" font-semibold text-sm text-gray-600">{new Date(report.createdAt).toLocaleDateString('en-GB')}</span></p>
                </div>
                <div className="flex w-full">
                  <p className=" font-semibold">Grade: <span className=" font-semibold text-sm text-gray-600">{report.grade}</span></p>
                </div>
                <div>
                  <p className=" font-bold ">Description</p>
                  <p className=" text-justify">{report.description} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam veritatis optio praesentium temporibus laboriosam facere? Omnis accusamus fugiat inventore corporis.</p>
                </div>
                
                
              </div>

            ))
          )
        )
      }
      </div>
  )
}

export default Reports