import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router";

const Navbar = ({ sidebarOpen, logOutUser }) => {
  return (
    <div>
      <div className="navbar bg-base-100 border-b">
        <div className="flex-none lg:hidden">
          <label htmlFor="drawer-toggle" className="btn btn-square btn-ghost">
            {sidebarOpen ? (
              <FiX className="h-5 w-5" />
            ) : (
              <FiMenu className="h-5 w-5" />
            )}
          </label>
        </div>
        <div className="flex-1">
          <Link to="/">
            <h2 className="text-lg font-semibold">Dashboard</h2>
          </Link>
        </div>
        <div className="flex-none">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img
                  alt="User avatar"
                  src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="dashboard/profile" className="justify-between">
                  Profile
                  <span className="badge">New</span>
                </Link>
              </li>
              <li>
                <a className="text-gray-400">Settings</a>
              </li>
              <li>
                <Link onClick={logOutUser}>Logout</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
