import cookieParser from 'cookie-parser'
import express from 'express'
import authRoute from "./routes/auth.route.js";
const app = express()

app.use(express.json())
app.use(cookieParser())


app.use('/api/auth',authRoute)

app.use((err,req,res,next)=>{
    const errStatus = err.status || 500
    const errMessage = err.message || "Something went Wrong"
    return res.status(errStatus).send(errMessage)
})

app.listen(8800,()=>{
    console.log("Backend is Running")
})