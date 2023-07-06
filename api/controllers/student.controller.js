import User from '../models/user.model.js'
export const getStudents = async(req, res, next)=>{
    try {
        const students= await User.find({ role: "student" }).select("-password")
        res.status(200).send(students)
    } catch (error) {
        next(error)
    }
}