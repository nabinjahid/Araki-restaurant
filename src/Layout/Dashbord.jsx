import { FaAd, FaHome } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { IoMenuOutline } from "react-icons/io5";
import { RiContactsBook2Fill } from "react-icons/ri";
import { SiShopee } from "react-icons/si";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../Hooks/useCart";

const Dashbord = () => {
  const {cart}=useCart();
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-orange-500 to-orange-600 text-white ">
        <div className="p-8 text-center border-b border-orange-400">
          <h2 className="text-3xl font-bold">Dashboard</h2>
        </div>

        <ul className="p-6 space-y-4">
          <li>
            <NavLink
              to="/dashbord/userHome"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <FaHome></FaHome>
              <span className="text-lg">User Home</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashbord/card"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <FiShoppingCart className="text-xl" />
              <span className="text-lg">Cart ( {cart.length} )</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashbord/reservation"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <FaCalendar></FaCalendar>
              <span className="text-lg">Reservation</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashbord/review"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <FaAd></FaAd>
              <span className="text-lg">Review</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/dashbord/booking"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <FaList></FaList>
              <span className="text-lg">Booking</span>
            </NavLink>
          </li>

          <div className="divider"></div>

          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <FaHome></FaHome>
              <span className="text-lg">Home</span>
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/order"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <IoMenuOutline />
              <span className="text-lg">Menu</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <SiShopee />
              <span className="text-lg">Shope</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                  isActive ? "bg-orange-700" : "hover:bg-orange-400"
                }`
              }
            >
              <RiContactsBook2Fill />
              <span className="text-lg">Contact</span>
            </NavLink>
          </li>


          
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1">
        
          <Outlet />
        
      </div>
    </div>
  );
};

export default Dashbord;
