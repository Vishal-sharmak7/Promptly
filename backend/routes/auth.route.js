import express from "express"
import userRegister from "../controllers/userRegister.js"
import registerValidation from "../middlewares/joi.validation.js"





const router = express.Router() 

router.post("/register",registerValidation, userRegister )


export default router   