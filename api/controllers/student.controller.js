import Student from '../models/student.model.js'
export const getStudents = async(req, res, next)=>{
    try {
        const students= await Student.find({ role: "student" }).select("-password").populate("studentId");
        res.status(200).send(students)
    } catch (error) {
        next(error)
    }
}