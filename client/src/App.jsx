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
function App() {


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}>
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
          </Route>
          <Route path="/faculty" element={<Faculty />}>
            <Route path="managetasks" element={<ManageTasks />} />
            <Route path="markattendance" element={<MarkAttendance />} />
            <Route path="classes" element={<Classes />} />
          </Route>
          <Route path="/student" element={<Student />}>
            <Route path="events" element={<Events />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="reports" element={<Reports />} />
            <Route path="tasks" element={<Tasks />} />
            <Route path="calender" element={<Calender />} />
            <Route path="timetable" element={<Timetable />} />
            <Route path="attendance" element={<Attendance />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
