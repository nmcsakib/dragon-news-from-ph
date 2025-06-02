import { Link } from "react-router-dom";
import userIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
const Navbar = () => {

  const {user, logOut} = useContext(AuthContext)
  console.log(user);
  return (
    <div className="flex justify-between items-center">
      <div className="">{user?.email}</div>
      <div className="nav space-x-5">
        <Link to="/">Home</Link>
        <Link to="/career">Career</Link>
        <Link to="/about">About</Link>
      </div>
      <div className="login flex gap-2 items-center">
        <div className=" ">
          <img src={user?.photoURL ? user?.photoURL : userIcon} alt="" />
        </div>
        {
          user ?  <a onClick={() => logOut()} className="btn btn-neutral rounded-none">Log Out</a> : <Link to={'/auth/login'} className="btn btn-neutral rounded-none">Login</Link>
        }
        
      </div>
    </div>
  );
};

export default Navbar;
