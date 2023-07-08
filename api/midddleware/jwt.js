import createError from "../utils/createError.js";
import jwt from 'jsonwebtoken'
export const verifyToken = (req, res, next) => {
  const token = req.cookies.accessToken;
  if (!token) return next(createError(401, "Not Authenticated"));

  jwt.verify(token, process.env.JWT_KEY, async(err, payload)=>{
    if (err) return next(createError(403,"Token is not Valid"))
    req.userId = payload.id
    req.role = payload.role
    next()
})
};