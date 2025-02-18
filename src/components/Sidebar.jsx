import React, { useEffect, useState } from "react";
import { FaChartPie, FaMoneyBillWave, FaUser, FaSignOutAlt } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { getRegisteredUserApi } from "../services/allApi";
import { Button } from "react-bootstrap";

function Sidebar() {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [user, setUser] = useState("");
  const [isMobile, setIsMobile] = useState(false); // State to track mobile screen
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("loginId");
    navigate("/");
  };

  const userId = localStorage.getItem("loginId");

  const getUser = async () => {
    const result = await getRegisteredUserApi();
    setUser(result.data.find((item) => item.id == userId).username);
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    // Detect screen size
    const handleResize = () => {
      if (window.innerWidth <= 800) {
        setIsMobile(true); // Set isMobile to true for max-width 800px
      } else {
        setIsMobile(false);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize(); // Initial check for screen width

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      {/* Conditional Sidebar or Bottom Navigation */}
      {isMobile ? (
        // Bottom Navigation for mobile screens (max-width: 800px)
        <div className="fixed-bottom bg-dark text-white p-3 d-flex justify-content-around">
          <Link to="/display/dashboard">
            <FaChartPie size={20} className="text-white" />
           
          </Link>
          <Link to="/display/expenses">
            <FaMoneyBillWave size={20} className="text-white"  />
           
          </Link>
          <Button className="bg-transparent border border-0" onClick={handleLogout}>
            <FaSignOutAlt size={20} className="text-white"  />
           
          </Button>
        </div>
      ) : (
        // Sidebar for larger screens
        <div
          className={`d-flex flex-column bg-dark text-white p-3 vh-100 position-fixed ${
            isCollapsed ? "collapsed" : ""
          }`}
          style={{
            width: isCollapsed ? "5%" : "15%",
            transition: "width 0.3s ease",
            zIndex: "10",
          }}
          onMouseEnter={() => setIsCollapsed(false)}
          onMouseLeave={() => setIsCollapsed(true)}
        >
          {/* Logo or Title */}
          <h4 className={`text-center ${isCollapsed ? "d-none" : ""}`}>
            Casha
          </h4>

          {/* Navigation Links */}
          <ul className="nav flex-column mt-4">
            <li className="nav-item">
              <Link
                to="/display/dashboard"
                className={`nav-link text-white p-2 d-flex align-items-center`}
              >
                <FaChartPie size={20} className="me-2" />
                {!isCollapsed && "Dashboard"}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/display/expenses"
                className={`nav-link text-white p-2 d-flex align-items-center`}
              >
                <FaMoneyBillWave size={20} className="me-2" />
                {!isCollapsed && "Expenses"}
              </Link>
            </li>
          </ul>

          {/* Profile & Logout Section */}
          <div className="mt-auto">
            <a className="nav-link text-white p-2 d-flex align-items-center">
              <FaUser size={20} className="me-2" />
              {!isCollapsed && user}
            </a>
            <button
              onClick={handleLogout}
              className="nav-link text-white p-2 d-flex align-items-center"
            >
              <FaSignOutAlt size={20} className="me-2" />
              {!isCollapsed && "Logout"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
