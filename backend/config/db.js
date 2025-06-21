import mongoose, { connect } from "mongoose";

const connectDB = async (req ,res)=>{
    try {
      const DB = await  mongoose.connect(process.env.MONGO_URI)
     if (DB) {
        console.log("DB connected")
     }
    } catch (error) {
        res.status(400).json({message:"sever error",error})
    }
}

export default connectDB