import { useState } from "react";
import {
  FiPackage,
  FiShoppingCart,
  FiStar,
  FiUsers,
  FiMenu,
  FiX,
} from "react-icons/fi";
import SideBar from "../Dashboard/SideBar";
import Navbar from "../Dashboard/Navbar";
import StatCard from "../Dashboard/StatCard";
import Order from "../Dashboard/Order";

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div className="drawer lg:drawer-open">
      {/* Mobile drawer checkbox */}
      <input
        id="drawer-toggle"
        type="checkbox"
        className="drawer-toggle"
        checked={sidebarOpen}
        onChange={toggleSidebar}
      />

      {/* Page content */}
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
          <Navbar sidebarOpen={sidebarOpen} />

        {/* Main content */}
        <main className="p-6 bg-red-100">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={FiPackage} title="Total Products" value="245"/>
          <StatCard icon={FiShoppingCart} title="Total Orders" value="159"/>
          <StatCard icon={FiUsers} title="Total Users" value="879"/>
          <StatCard icon={FiStar} title="Average Rating" value="4.7"/>
          </div>

          <Order />
        </main>
      </div>

      {/* Sidebar */}
      <SideBar />
    </div>
  );
}

export default Dashboard;