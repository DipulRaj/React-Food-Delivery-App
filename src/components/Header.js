import { LOGO_URL } from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStaus from "../utils/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");

  const onlineStatus = useOnlineStaus()

  return (
    <div className="flex justify-between p-3 items-center border-b-2 border-gray-300">
      <div className="logo-container">
        <img className="w-45" src={LOGO_URL} />
      </div>

      <div className="nav-items">
        <ul className="flex">
          <li className="px-4">Online Status: {onlineStatus ? "🟢": "🔴"}</li>
          <li className="px-4"><Link to="/" >Home</Link></li>
          <li className="px-4"><Link to="/about" >About Us</Link></li>
          <li className="px-4"><Link to="/contact" >Contact Us</Link></li>
          <li className="px-4">Cart</li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
