import { Link } from "react-router-dom";
import AnimatedBtn from "../AnimatedBtn";
import { MdOutlineMail } from "react-icons/md";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import PhotoInput from "./PhotoInput";
import Password from "./Password";

const Register = () => {
    return (
        <div className="w-1/3 min-h-screen mx-auto flex justify-center items-center">
                         <div className="p-8 mb-4 flex items-center flex-col gap-5 justify-center bg-white">
                           <h2 className="text-3xl mb-3">Please Register</h2>
       
                   {/* Name input with icon */}
                   <div className="w-full relative">
                       <RiAccountCircleLine
                           className=" absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]"/>
                       <input
                           type="text"
                           name="text"
                           id="text"
                           placeholder="Name"
                           className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                       />
                   </div>
                   {/* Photo input with icon */}
                   <div className="w-full relative">
                      <PhotoInput/>
                   </div>
       
                   {/* password input with icon */}
                   <div className="w-full relative">
                     <Password/>
                   </div>
                   <div className="w-full relative">
                <RiLockPasswordLine
                    className=" absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]"/>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Retype Password"
                    className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                />
            </div>
       
                   {/* email input with icon */}
                   <div className="w-full relative">
                       <MdOutlineMail
                           className=" absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]"/>
                       <input
                           type="email"
                           name="email"
                           id="email"
                           placeholder="Email address"
                           className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                       />
                   </div>
                   <AnimatedBtn label={"Register"}/>
                   <p className="text-md font-semibold">Already have any account ? <Link className="text-red-500" to={"/auth/Login"}>Login</Link></p>
               </div>
                   </div>
    );
};

export default Register;