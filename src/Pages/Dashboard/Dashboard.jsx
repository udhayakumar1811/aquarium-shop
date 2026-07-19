import "./Dashboard.css";

import Sidebar from "../../components/Sidebar/Sidebar";
import DashboardStats from "../../components/DashboardStats/DashboardStats";
import SalesChart from "../../components/SalesChart/SalesChart";
import RecentOrders from "../../components/RecentOrders/RecentOrders";

function Dashboard() {
  return (
    <div className="dashboard">
      <Sidebar />

      <div className="dashboard-content">
        <h1>Dashboard</h1>

        <DashboardStats />

        <SalesChart />

        <RecentOrders />
      </div>
    </div>
  );
}

export default Dashboard;