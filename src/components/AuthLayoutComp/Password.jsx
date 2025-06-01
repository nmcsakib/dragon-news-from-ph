
import {useState} from "react";

// react icons
import {IoEyeOffOutline, IoEyeOutline} from "react-icons/io5";
import {MdDone} from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import {RxCross1} from "react-icons/rx";

const Password = () => {
    const [isEyeOpen, setIsEyeOpen] = useState(false);
    const [signal, setSignal] = useState({
        lowercase: false,
        uppercase: false,
        number: false,
        symbol: false,
        length: false,
        strong: false,
    });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const handlePasswordChange = (e) => {
        const password = e.target.value;

        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasNumber = /[0-9]/.test(password);
        const hasSymbol = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        setSignal({
            lowercase: hasLowerCase,
            uppercase: hasUpperCase,
            number: hasNumber,
            symbol: hasSymbol,
            length: password.length >= 8,
            strong:
                hasUpperCase &&
                hasLowerCase &&
                hasNumber &&
                hasSymbol &&
                password.length >= 8,
        });
    };

    const hintList = [
        {
            text: "Minimum number of characters is 8.",
            type: "length"
        },
        {
            text: "Should contain uppercase.",
            type: "uppercase"
        },
        {
            text: "Should contain lowercase.",
            type: "lowercase"
        },
        {
            text: "Should contain numbers.",
            type: "number"
        },
        {
            text: "Should contain special characters.",
            type: "symbol"
        },
    ]

    return (
        <div className="w-full 1024px:w-[80%]">
            <label
                htmlFor="password"
                className="text-[15px] dark:text-[#abc2d3] text-[#424242] font-[400]"
            >
                Password
            </label>
            <div className="w-full relative">
                 <RiLockPasswordLine
                    className=" absolute top-3.5 left-3 text-[1.5rem] dark:text-slate-400 text-[#777777]"/>
                <input
                    type={isEyeOpen ? "text" : "password"}
                    name="password"
                    id="password"
                    onChange={handlePasswordChange}
                    onFocus={() => setIsDropdownOpen(true)}
                    onBlur={() => {
                        setIsDropdownOpen(false);
                    }}
                    placeholder="Password"
                    className="peer border-border  dark:placeholder:text-slate-500 dark:text-[#abc2d3] dark:border-slate-600 border rounded-md outline-none pl-10 pr-4 py-3 w-full focus:border-primary transition-colors duration-300"
                />

                <div
                    className={`${
                        isDropdownOpen
                            ? "opacity-100 translate-y-0 z-30"
                            : "opacity-0 translate-y-[-10px] z-[-1]"
                    } bg-white boxShadow dark:bg-slate-800 rounded-md py-3 px-4 absolute top-[60px] left-0 w-full transition-all duration-300`}
                >
                    <h3 className="text-gray-900 dark:text-[#abc2d3] font-[500] text-[1rem]">
                        Your password must contain:
                    </h3>

                    <div className="w-full mt-2 flex-col flex gap-[6px]">
                        {
                            hintList?.map((hint, index) => (
                                <div
                                    key={index}
                                    className={`${
                                        signal[hint.type] ? "text-green-500" : "dark:text-slate-400 text-gray-500"
                                    } text-[0.8rem] flex items-center gap-[8px]`}
                                >
                                    {signal[hint.type] ? (
                                        <MdDone className={`text-[1rem]`}/>
                                    ) : (
                                        <RxCross1/>
                                    )}
                                    {hint.text}
                                </div>
                            ))
                        }
                    </div>
                </div>

                {isEyeOpen ? (
                    <IoEyeOutline
                        className=" absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"
                        onClick={() => setIsEyeOpen(false)}
                    />
                ) : (
                    <IoEyeOffOutline
                        className=" absolute top-4 right-4 dark:text-slate-500 text-[1.5rem] text-[#777777] cursor-pointer"
                        onClick={() => setIsEyeOpen(true)}
                    />
                )}
            </div>
        </div>
    );
};

export default Password;
                    