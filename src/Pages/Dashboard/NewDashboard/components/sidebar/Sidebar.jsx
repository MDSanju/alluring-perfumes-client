import React, { useEffect, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import "./sidebar.scss";
import { images } from "../../constants";
import { sidebarNav, adminNavbar } from "../../configs/sidebarNav";
import useAuth from "../../../../../hooks/useAuth";

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeAdminIndex, setActiveAdminIndex] = useState(0);
  const location = useLocation();
  const { admin, logout } = useAuth();
  const history = useHistory();

  const handleBackToHome = () => {
    history.push("/home");
  };

  useEffect(() => {
    if (admin) {
      let adminCurPath;
      if (window.location.pathname.split("/").length === 2) {
        adminCurPath = window.location.pathname.split("/")[1];
      } else {
        adminCurPath = window.location.pathname.split("/")[2];
      }

      const adminItem = adminNavbar.findIndex(
        (item) => item.section === adminCurPath
      );

      setActiveAdminIndex(adminCurPath.length === 0 ? 0 : adminItem);
    } else {
      let curPath;

      if (window.location.pathname.split("/").length === 2) {
        curPath = window.location.pathname.split("/")[1];
      } else {
        curPath = window.location.pathname.split("/")[2];
      }

      console.log(curPath);

      for (const e of sidebarNav) {
        if (e.section === curPath) {
          const activeItem = sidebarNav.findIndex(
            (item) => item.section === curPath
          );
          setActiveIndex(curPath.length === 0 ? 0 : activeItem);
        }
      }
    }
  }, [admin, location]);

  const closeSidebar = () => {
    document.querySelector(".main__content").style.transform =
      "scale(1) translateX(0)";
    setTimeout(() => {
      document.body.classList.remove("sidebar-open");
      document.querySelector(".main__content").style = "";
    }, 500);
  };

  return (
    <div className="sidebar">
      <div className="sidebar__logo">
        <img src={images.logo} alt="" />
        <div className="sidebar-close" onClick={closeSidebar}>
          <i className="bx bx-x"></i>
        </div>
      </div>
      {!admin ? (
        <div className="sidebar__menu">
          <div
            onClick={handleBackToHome}
            className="sidebar__menu__item"
            style={{ cursor: "pointer" }}
          >
            <div className="sidebar__menu__item__icon">
              <i className="bx bx-home-alt"></i>
            </div>
            <div className="sidebar__menu__item__txt">Home</div>
          </div>
          {sidebarNav.map((nav, index) => (
            <Link
              to={nav.link}
              key={`nav-${index}`}
              className={`sidebar__menu__item ${
                activeIndex === index && "active"
              }`}
              onClick={closeSidebar}
            >
              <div className="sidebar__menu__item__icon">{nav.icon}</div>
              <div className="sidebar__menu__item__txt">{nav.text}</div>
            </Link>
          ))}
          <div onClick={logout} className="sidebar__menu__item logout_button">
            <div className="sidebar__menu__item__icon">
              <i className="bx bx-log-out"></i>
            </div>
            <div className="sidebar__menu__item__txt">Logout</div>
          </div>
        </div>
      ) : (
        <div className="sidebar__menu">
          <div
            onClick={handleBackToHome}
            className="sidebar__menu__item"
            style={{ cursor: "pointer" }}
          >
            <div className="sidebar__menu__item__icon">
              <i className="bx bx-home-alt"></i>
            </div>
            <div className="sidebar__menu__item__txt">Home</div>
          </div>
          {adminNavbar.map((nav, index) => (
            <Link
              to={nav.link}
              key={`nav-${index}`}
              className={`sidebar__menu__item ${
                activeAdminIndex === index && "active"
              }`}
              onClick={closeSidebar}
            >
              <div className="sidebar__menu__item__icon">{nav.icon}</div>
              <div className="sidebar__menu__item__txt">{nav.text}</div>
            </Link>
          ))}
          <div onClick={logout} className="sidebar__menu__item logout_button">
            <div className="sidebar__menu__item__icon">
              <i className="bx bx-log-out"></i>
            </div>
            <div className="sidebar__menu__item__txt">Logout</div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Sidebar;
