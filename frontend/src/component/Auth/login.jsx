import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { PiSmileyXEyesBold } from 'react-icons/pi';
import { BiHappyHeartEyes } from 'react-icons/bi';
import toast from 'react-hot-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [loginUser, setloginUser] = useState({
    email:"",
    password:""
  })
  const Navigate = useNavigate()

  const handleLogin = (e)=>{
    const{name, value}= e.target;
    setloginUser({...loginUser, [name]:value})
  }

  const userLogin = async (e)=>{
    e.preventDefault()
    const {email, password}= loginUser
    if (!email || !password) {
      toast.error(400).json({message:"email or password is incorrect"})
    }
    try {
      const url = `${import.meta.env.VITE_REACT_URL}login`

      const response = await fetch(url,{
        method:"post",
        headers:{
          "content-type":"application/json"
        },
        body:JSON.stringify(loginUser)
      })
      const result = await response.json()
      
      const {success ,message, error , name , token ,}=result
      if (success) {
        toast.success(message);
        localStorage.setItem("token" , token),
        localStorage.setItem("name", name)

        setTimeout(()=>{
          Navigate("/")
        })
      }
      else if(error){
             const details = error?.details[0].message;
             toast.error(details )
        }
        else if(!success){
          toast.error(message)
        }


    } catch (error) {
      toast.error(400).json({message:"sever Error"}, error)
    }
  }

  const togglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
   <>
   <div className="bg-gradient-to-br  from-zinc-950 to-zinc-900 text-white text-center font-[outfit] min-h-screen">
        <h1 className="text-[7rem] uppercase font-bold">LOGIN</h1>

        <form action="" onSubmit={userLogin} >
          <div className="flex flex-col gap-5 items-center justify-center p-10">
            

            <input
              type="email"
              name="email"
              value={loginUser.email}
              onChange={handleLogin}
              placeholder="Enter your Email"
              className="border border-white rounded-[10px] p-3 w-[25vw] italic focus:text-white"
            />

            <div className="relative w-fit">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                value={loginUser.password}
                onChange={handleLogin}
                placeholder="Enter your Password"
                className="border border-white rounded-[10px] p-3 italic pr-10 w-[25vw] focus:text-white"
              />
              <button
                type="button"
                onClick={togglePassword}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-white"
              >
                {showPassword ? (
                  <PiSmileyXEyesBold className="cursor-pointer text-2xl" />
                ) : (
                  <BiHappyHeartEyes className="cursor-pointer text-2xl" />
                )}
              </button>
            </div>

            <button className="bg-white text-black text-sm sm:text-base rounded-full px-6 py-2 mt-6 font-[outfit] font-medium hover:bg-black border-2 border-white hover:text-white transition ease-in">
              Register
            </button>

            <i>Don't have an account? <Link to="/register" className="text-blue-600 underline text-[20px] hover:text-white transition ease-in">
               register
            </Link></i>
          </div>
        </form>
      </div>
      
   </>
  )
}

export default Login