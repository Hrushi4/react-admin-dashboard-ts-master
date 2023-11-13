import { FaRegBell } from "react-icons/fa";
import AdminSidebar from "../components/AdminSidebar";
import { BsSearch } from "react-icons/bs";
import userImg from "../assets/userpic.png";
import { PieChart } from "../components/RatingsChart";

const UserSatisfaction = () => {
  return (
    <div className="admin-container">
      <AdminSidebar />

      <main className="dashboard">
        <div className="bar">
          <BsSearch />
          <input type="text" placeholder="Search for data, users, docs" />
          <FaRegBell />
          <img src={userImg} alt="User" />
        </div>

        <h2
          style={{
            marginRight: "0.5rem",
            marginBottom: "1rem",
          }}
        >
          <label>Usage Statistics</label>
        </h2>
        <PieChart />
      </main>
    </div>
  );
};

export default UserSatisfaction;
