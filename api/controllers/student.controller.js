import Student from '../models/student.model.js'
export const getStudents = async(req, res, next)=>{
    try {
        const students= await Student.find({ role: "student" }).select("-password").populate("studentId");
        res.status(200).send(students)
    } catch (error) {
        next(error)
    }
}

export const getStudent = async (req, res, next) => {
    try {
      const userId = req.userId; 
  
      const student = await Student.findById(userId);
  
      if (!student) {
        return res.status(404).json({ message: 'Student not found' });
      }
  
      res.status(200).send(student);
    } catch (error) {
      next(error);
    }
  };
  
  
  
  
  
  
  
  