import { FaAd, FaHome } from "react-icons/fa";
import { FaCalendar, FaList } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi";
import { NavLink, Outlet } from "react-router-dom";

const Dashbord = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-72 bg-gradient-to-b from-orange-500 to-orange-600 text-white shadow-lg">
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
              <span className="text-lg">Cart</span>
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
          
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-10">
        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashbord;
