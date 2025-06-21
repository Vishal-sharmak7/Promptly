import express from "express"
import userRegister from "../controllers/userRegister.js"
import registerValidation from "../middlewares/joi.validation.js"
import { greetOnMail } from "../middlewares/nodemailer.js"




const router = express.Router() 

router.post("/register",registerValidation,greetOnMail, userRegister )


export default router   