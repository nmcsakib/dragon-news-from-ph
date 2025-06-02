import { Link } from "react-router-dom";
import AnimatedBtn from "../AnimatedBtn";
import { MdOutlineMail } from "react-icons/md";
import { RiAccountCircleLine, RiLockPasswordLine } from "react-icons/ri";
import PhotoInput from "./PhotoInput";
import Password from "./Password";
import { useContext, useState } from "react";
import uploadToImgbb from "../../imgBBurl";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Register = () => {
    const [password, setPassword] = useState('')
    const [profileImg, setProfileImg] = useState(null)
    const [error, setError] = useState('')
    const {createNewUser, setUser} = useContext(AuthContext)

    const handleSubmit = async (e) => {
  e.preventDefault();
  const form = new FormData(e.target);
  const name = form.get("name");
  const email = form.get("email");
  const rePass = form.get("rePassword");
  let pass = ''
  if(error === ''){
    pass = password;
  } else{
    return
  }

  if(profileImg){
    try {
    const profile = await uploadToImgbb(profileImg);

      console.log(name, email, profile, pass, rePass);
      
  } catch (error) {
    console.error("Error uploading image:", error);
  }
  }else{
   createNewUser(email, pass)
    .then(res => {
        const user = res.user
        setUser(user)
        console.log(user, name, email, pass, rePass);
        
    })
     .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setError(errorMessage)
    console.log(errorCode, errorMessage);
  });

  }
};

    return (
        <div className="w-1/3 min-h-screen mx-auto flex justify-center items-center">
            <form onSubmit={handleSubmit} className="p-8 mb-4 flex items-center flex-col gap-5 justify-center bg-white">
                <h2 className="text-3xl mb-3">Please Register</h2>

                {/* Name input with icon */}
                <div className="w-full relative">
                    <label
                        htmlFor="name"
                        className="text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]"
                    >
                        Full Name
                    </label>
                    <RiAccountCircleLine
                        className=" absolute bottom-3 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]" />
                    <input
                    required
                        type="text"
                        name="name"
                        id="text"
                        placeholder="Name"
                        className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                </div>

                {/* email input with icon */}
                <div className="w-full relative">
                    <label
                        htmlFor="email"
                        className="text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]"
                    >
                        Email
                    </label>
                    <MdOutlineMail
                        className=" absolute bottom-3 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]" />
                    <input
                    required
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email address"
                        className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                </div>

                {/* Photo input with icon */}
                <div className="w-full relative">
                    <PhotoInput setProfile={setProfileImg} />
                </div>

                {/* password input with icon */}
                <div className="w-full relative">
                    <Password setPassword={setPassword} />
                </div>
                <div className="w-full relative">
                    <label
                        htmlFor="rePassword"
                        className="text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]"
                    >
                        Retype password
                    </label>
                    <RiLockPasswordLine
                        className=" absolute bottom-3 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]" />
                    <input
                    required
                        type="password"
                        name="rePassword"
                        id="password"
                        onChange={(e) => password === e.target.value ? setError('') : setError("Pass not matched")}
                        placeholder="Retype Password"
                        className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                    />
                </div>
                <AnimatedBtn label={"Register"} />
                {
                    error && <p className="text-sm text-red-500">{error}</p>
                }
               
                <p className="text-md font-semibold">Already have any account ? <Link className="text-red-500" to={"/auth/Login"}>Login</Link></p>
            </form>
        </div>
    );
};

export default Register;