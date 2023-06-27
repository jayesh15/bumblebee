import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import Faculty from "./pages/faculty/Faculty"
import Student from "./pages/student/Student"
import Tasks from "./pages/student/Tasks"
import Reports from "./pages/student/Reports"
import Events from "./pages/student/Events"
import Calender from "./pages/student/Calender"
import Timetable from "./pages/student/Timetable"
import Attendance from "./pages/student/Attendance"
import ManageTasks from "./pages/faculty/ManageTasks"
import MarkAttendance from "./pages/faculty/MarkAttendance"
import Classes from "./pages/faculty/Classes"
import NotFound from "./pages/notFound/NotFound"
import FacultyDashboard from "./pages/faculty/FacultyDashboard"
import StudentSettings from "./pages/student/StudentSettings"
import StudentDashboard from "./pages/student/StudentDashboard"
import FacultySettings from "./pages/faculty/FacultySettings"
import Content from "./pages/home/Content"
function App() {


  return (
    <>
      <Router>
        <div className=" flex w-full h-screen">
          <Routes>
            <Route exact path="/" element={<Home />}>
            <Route path="" element={<Content />} />
              <Route path="login" element={<Login />} />
              <Route path="register" element={<Register />} />
            </Route>
            <Route exact path="/faculty" element={<Faculty />}>
              <Route path="" element={<FacultyDashboard />} />
              <Route path="managetasks" element={<ManageTasks />} />
              <Route path="markattendance" element={<MarkAttendance />} />
              <Route path="classes" element={<Classes />} />
              <Route path="settings" element={<FacultySettings />} />
            </Route>
            <Route exact path="/student" element={<Student />}>
              <Route path="" element={<StudentDashboard />} />
              <Route path="events" element={<Events />} />
              <Route path="tasks" element={<Tasks />} />
              <Route path="reports" element={<Reports />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="calender" element={<Calender />} />
              <Route path="timetable" element={<Timetable />} />
              <Route path="settings" element={<StudentSettings />} />

            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>

      </Router>
    </>
  )
}

export default App
