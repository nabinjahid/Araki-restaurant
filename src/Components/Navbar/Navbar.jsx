import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { FaCartShopping } from "react-icons/fa6";
import useCart from "../../Hooks/useCart";

const Navbar = () => {
  const { LogOutUser } = useAuth();
  const { cart } = useCart();
  console.log(cart);

  const handleLogOut = () => {
    LogOutUser()
      .then(() => {
        toast("Log Out Success!");
      })
      .catch((error) => {});
  };

  const navOptions = (
    <div className="flex justify-center items-center">
      <li>
        <Link to={"/"}>Home</Link>
      </li>
      <li>
        <Link to={"/menu"}>Menu</Link>
      </li>
      <li>
        <Link to={"/order/salad"}>Order</Link>
      </li>
      <li>
        <Link to={"/login"}>Login</Link>
      </li>
      <li>
        <Link to={"/register"}>Register</Link>
      </li>
      <li>
        <button onClick={handleLogOut}>LogOut</button>
      </li>
      <li>
        <Link to={"/dashbord/card"} className="relative">
          <FaCartShopping className="text-3xl text-white" />
          <span className="absolute  rounded-full p-1 bg-blue-400 top-0 right-0">
            +{cart.length}
          </span>
        </Link>
      </li>
    </div>
  );

  return (
    <div className="navbar fixed max-w-7xl mx-auto z-20 text-white bg-opacity-30 bg-black">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navOptions}
          </ul>
          {/* <button onClick={handleLogOut}>LogOut</button> */}
        </div>
        <a className="btn btn-ghost text-xl uppercase">Araki Resturant</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navOptions}</ul>
        {/* <button onClick={handleLogOut}>LogOut</button> */}
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

export default Navbar;
