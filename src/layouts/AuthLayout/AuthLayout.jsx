import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";

const AuthLayout = () => {
    return (
        <div className="font-poppins bg-gray-100 mx-auto">
            <div className="w-11/12 mx-auto">
            <header className="pt-3">
                <Navbar/>
            </header>
            <Outlet/>
            </div>
        </div>
    );
};

export default AuthLayout;