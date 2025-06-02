import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import AnimatedBtn from "../AnimatedBtn";
import { Link, Navigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
    const {logIn, user, setUser} = useContext(AuthContext);
    const [error, setError] = useState('')
    if(user){
        return <Navigate to={'/category/01'}/>
    }


    const handleSubmit = (e)=> {
        e.preventDefault()
        setError('')
        const form = new FormData(e.target);
        const email = form.get('email')
        const pass = form.get('password')
        logIn(email, pass)
        .then(res => {
        const user = res.user
        setUser(user)
        console.log(user, email, pass);

        
    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    console.log("ERROR", errorCode, errorMessage);
  });
    }
    return (
            <div className="w-1/3 min-h-screen mx-auto flex justify-center items-center">
                  <form onSubmit={handleSubmit} className="p-8 mb-4 flex items-center flex-col gap-5 justify-center bg-white">
                    <h2 className="text-3xl mb-3">Please Login</h2>

              {/* email input with icon */}
            <div className="w-full relative">
                <MdOutlineMail
                    className=" absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]"/>
                <input
                required
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Email address"
                    className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                />
            </div>

            {/* password input with icon */}
            <div className="w-full relative">
                <RiLockPasswordLine
                    className=" absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]"/>
                <input
                required
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Password"
                    className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                />
            </div>
             {
                    error && <p className="text-sm text-red-500">{error}</p>
                }
               

         
            <AnimatedBtn label={"Login"}/>
            <p className="text-md font-semibold">Dont have any account ? <Link className="text-red-500" to={"/auth/Register"}>Register</Link></p>

        </form>
            </div>
    );
};

export default Login;