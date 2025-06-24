import express from "express"
import user from "../controllers/userRegister.js"
import validation from "../middlewares/joi.validation.js"





const router = express.Router() 

router.post("/register",validation.registerValidation, user.userRegister )
router.post("/register",validation.loginValidation, user.userLogin )


export default router   