import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { FaChartBar, FaStopwatch } from "react-icons/fa";
import { HiMenuAlt4 } from "react-icons/hi";
import { IoIosPeople } from "react-icons/io";
import { RiDashboardFill } from "react-icons/ri";
import { Link, Location, useLocation } from "react-router-dom";

const AdminSidebar = () => {
  const location = useLocation();

  // State to manage modal visibility and mobile view
  const [showModal, setShowModal] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  // Event handler to handle window resize and adjust mobile view
  const resizeHandler = () => {
    setPhoneActive(window.innerWidth < 1100);
  };

  // Effect to add and remove resize event listener
  useEffect(() => {
    window.addEventListener("resize", resizeHandler);

    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowModal(true)}>
          <HiMenuAlt4 />
        </button>
      )}

      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showModal ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {}
        }
      >
        <h2>Logo.</h2>
        <DivOne location={location} />

        {phoneActive && (
          <button id="close-sidebar" onClick={() => setShowModal(false)}>
            Close
          </button>
        )}
      </aside>
    </>
  );
};

const DivOne = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <Li
        url="/admin/dashboard"
        text="Dashboard"
        Icon={RiDashboardFill}
        location={location}
      />
      <Li
        url="/admin/ResponseTime"
        text="Response Time"
        Icon={FaStopwatch}
        location={location}
      />
      <Li
        url="/admin/UserSatisfaction"
        text="User Satisfaction"
        Icon={IoIosPeople}
        location={location}
      />
      <Li
        url="/admin/UsageStatistics"
        text="Usage Statistics"
        Icon={FaChartBar}
        location={location}
      />
    </ul>
  </div>
);

// Li component representing a single navigation item
interface LiProps {
  url: string;
  text: string;
  location: Location;
  Icon: IconType;
}
const Li = ({ url, text, location, Icon }: LiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url) ? "white" : "black",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "black" : "white",
        fontWeight: "bold",
      }}
    >
      <Icon />
      {text}
    </Link>
  </li>
);

export default AdminSidebar;
