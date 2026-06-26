import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Menu = () => {
  const [selectedMenu, setSelectedMenu] = useState(0);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [initials, setInitials] = useState("ZU");

  // ✅ Fetch logged in user
  useEffect(() => {
   axios.get(`${process.env.REACT_APP_BACKEND_URL}/getUser`, { withCredentials: true })
      .then((res) => {
        if (res.data.success) {
          const name = res.data.user.name;
          setUsername(name);
          // ✅ Get initials from name e.g. "John Doe" → "JD"
          const parts = name.trim().split(" ");
          if (parts.length >= 2) {
            setInitials(
              `${parts[0][0]}${parts[1][0]}`.toUpperCase()
            );
          } else {
            setInitials(name.substring(0, 2).toUpperCase());
          }
        }
      })
      .catch((err) => {
        console.error("Failed to fetch user:", err);
      });
  }, []);

  // ✅ Logout handler
  const handleLogout = async () => {
  try {
    await axios.get("https://zerodha-backend-xvmy.onrender.com/logout", {
      withCredentials: true,
    });
    window.location.href = "https://zerodha-frontend-7emh.onrender.com/login";
  } catch (err) {
    console.error("Logout failed:", err);
  }
};

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/"
              onClick={() => handleMenuClick(0)}
            >
              <p className={selectedMenu === 0 ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/orders"
              onClick={() => handleMenuClick(1)}
            >
              <p className={selectedMenu === 1 ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/holdings"
              onClick={() => handleMenuClick(2)}
            >
              <p className={selectedMenu === 2 ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/positions"
              onClick={() => handleMenuClick(3)}
            >
              <p className={selectedMenu === 3 ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="funds"
              onClick={() => handleMenuClick(4)}
            >
              <p className={selectedMenu === 4 ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link
              style={{ textDecoration: "none" }}
              to="/apps"
              onClick={() => handleMenuClick(6)}
            >
              <p className={selectedMenu === 6 ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>

        <hr />

        {/* ✅ Profile section with dropdown */}
        <div
          className="profile"
          onClick={() => setIsProfileDropdownOpen(!isProfileDropdownOpen)}
          style={{ position: "relative", cursor: "pointer" }}
        >
          {/* ✅ Avatar with initials */}
          <div className="avatar">{initials}</div>
          <p className="username">{username || "User"}</p>

          {/* ✅ Dropdown menu */}
          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "40px",
                right: "0",
                backgroundColor: "#fff",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                boxShadow: "0px 4px 12px rgba(0,0,0,0.1)",
                zIndex: 999,
                minWidth: "150px",
              }}
            >
              <p
                style={{
                  padding: "10px 16px",
                  margin: 0,
                  fontSize: "0.85rem",
                  color: "#333",
                  borderBottom: "1px solid #f0f0f0",
                }}
              >
                👤 {username}
              </p>
              <p
                onClick={handleLogout}
                style={{
                  padding: "10px 16px",
                  margin: 0,
                  fontSize: "0.85rem",
                  color: "rgb(223, 73, 73)",
                  cursor: "pointer",
                }}
                onMouseEnter={(e) =>
                  (e.target.style.backgroundColor = "#fff5f5")
                }
                onMouseLeave={(e) =>
                  (e.target.style.backgroundColor = "transparent")
                }
              >
                🚪 Logout
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;