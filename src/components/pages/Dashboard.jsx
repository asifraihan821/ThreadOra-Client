import { FiPackage, FiShoppingCart, FiStar, FiUsers } from "react-icons/fi";
import StatCard from "../Dashboard/StatCard";
import Order from "../Dashboard/Order";

const Dashboard = () => {
  return (
    <div>
      {/* Main content */}
      <main className="p-6 bg-bas-100">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          <StatCard icon={FiPackage} title="Total Products" value="245" />
          <StatCard icon={FiShoppingCart} title="Total Orders" value="159" />
          <StatCard icon={FiUsers} title="Total Users" value="879" />
          <StatCard icon={FiStar} title="Average Rating" value="4.7" />
        </div>

        <Order />
      </main>
    </div>
  );
};

export default Dashboard;
