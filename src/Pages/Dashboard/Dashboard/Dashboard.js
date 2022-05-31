import React, { useState } from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import { useHistory } from "react-router";
import {
  BiMenu,
  BiListOl,
  BiDollar,
  BiCartAlt,
  BiUserCheck,
  BiCustomize,
  BiBookContent,
} from "react-icons/bi";
import {
  MdOutlineAdminPanelSettings,
  MdOutlineContentPaste,
  MdDeleteForever,
} from "react-icons/md";
import { MdOutlineAddShoppingCart } from "react-icons/md";
import { IoSettings } from "react-icons/io5";
import { RiTableLine } from "react-icons/ri";
import Pay from "../Pay/Pay";
import MakeAdmin from "../MakeAdmin/MakeAdmin";
import useAuth from "../../../hooks/useAuth";
import AdminRoute from "../../Login/AdminRoute/AdminRoute";
import DashboardHome from "../DashboardHome/DashboardHome";
import MyOrders from "../MyOrders/MyOrders";
import ManageAllOrders from "../ManageAllOrders/ManageAllOrders";
import AddProduct from "../AddProduct/AddProduct";
import ManageProducts from "../ManageProducts/ManageProducts";
import Review from "../Review/Review";
import Shipped from "../Shipped/Shipped";
import TabsManagement from "../TabsManagement/TabsManagement";
import ContentTabOne from "../ContentTabOne/ContentTabOne";
import ContentTabTwo from "../ContentTabTwo/ContentTabTwo";
import ManageTabsContents from "../ManageTabsContents/ManageTabsContents";
import Payment from "../Payment/Payment";
import "./Dashboard.css";

// dashboard
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  const history = useHistory();

  const [collapse, setCollapse] = useState("");
  const [darkMode, setDarkMode] = useState("");

  const handleCollapse = () => {
    if (collapse) {
      setCollapse(false);
    } else {
      setCollapse(true);
    }
  };

  const handleMode = () => {
    if (darkMode) {
      setDarkMode(false);
    } else {
      setDarkMode(true);
    }
  };

  const backToHomePage = () => {
    history.push("/home");
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <title>Dashboard || Alluring Perfumes</title>
      <nav className="navbar navbar-primary bg-primary text-white">
        <div className="container">
          <span
            className="navbar-brand d-flex align-items-center fw-bold"
            style={{ cursor: "pointer" }}
          >
            <BiMenu
              className="menu-icon me-3"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasWithBackdrop"
              aria-controls="offcanvasWithBackdrop"
            ></BiMenu>
            Dashboard
          </span>

          <div>
            <button
              onClick={backToHomePage}
              className="btn btn-outline-light me-3"
            >
              Home
            </button>
            <button onClick={handleLogout} className="btn btn-outline-light">
              Logout
            </button>
          </div>
        </div>
      </nav>

      {/* <div className={darkMode ? "body dark" : "body"}>
        <nav className={collapse ? "sidebar" : "sidebar close"}>
          <header>
            <div className="image-text">
              <span className="image">
                <img
                  src="https://cdn.dribbble.com/users/24078/screenshots/15522433/media/e92e58ec9d338a234945ae3d3ffd5be3.jpg?compress=1&resize=400x300"
                  alt=""
                />
              </span>

              <div className="text logo-text">
                <span className="name">Codinglab</span>
                <span className="profession">Web developer</span>
              </div>
            </div>

            <i className="bx bx-chevron-right toggle" onClick={handleCollapse}></i>
          </header>

          <div className="menu-bar">
            <div className="menu">
              <li className="search-box">
                <i className="bx bx-search icon"></i>
                <input type="text" placeholder="Search..." />
              </li>

              <ul className="menu-links">
                <li className="nav-link">
                  <a href="#">
                    <i className="bx bx-home-alt icon"></i>
                    <span className="text nav-text">Dashboard</span>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/manageAllOrders`}>
                      <i className="bx bx-bar-chart-alt-2 icon"></i>
                      <span className="text nav-text">Manage All Orders</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/addProduct`}>
                      <i className="bx bx-bell icon"></i>
                      <span className="text nav-text">Add A Product</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/makeAdmin`}>
                      <i className="bx bx-pie-chart-alt icon"></i>
                      <span className="text nav-text">Make Admin</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/manageProducts`}>
                      <i className="bx bx-heart icon"></i>
                      <span className="text nav-text">Manage Products</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/tabsManagement`}>
                      <i className="bx bx-wallet icon"></i>
                      <span className="text nav-text">Set Tabs Name</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/contentTabOne`}>
                      <i className="bx bx-wallet icon"></i>
                      <span className="text nav-text">Tab-1 Content</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/contentTabTwo`}>
                      <i className="bx bx-wallet icon"></i>
                      <span className="text nav-text">Tab-2 Content</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link
                      className="react-ancor"
                      to={`${url}/manageTabsContents`}
                    >
                      <i className="bx bx-wallet icon"></i>
                      <span className="text nav-text">Manage Tabs Contents</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/pay`}>
                      <i className="bx bx-bar-chart-alt-2 icon"></i>
                      <span className="text nav-text">Pay</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/myOrders`}>
                      <i className="bx bx-bell icon"></i>
                      <span className="text nav-text">My Orders</span>
                    </Link>
                  </a>
                </li>

                <li className="nav-link">
                  <a href="#">
                    <Link className="react-ancor" to={`${url}/review`}>
                      <i className="bx bx-pie-chart-alt icon"></i>
                      <span className="text nav-text">Review</span>
                    </Link>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bottom-content">
              <li className="">
                <a href="#">
                  <i className="bx bx-log-out icon"></i>
                  <span className="text nav-text">Logout</span>
                </a>
              </li>

              <li className="mode">
                <div className="sun-moon">
                  <i className="bx bx-moon icon moon"></i>
                  <i className="bx bx-sun icon sun"></i>
                </div>
                <span className="mode-text text">
                  {!darkMode ? "Dark mode" : "Light mode"}
                </span>

                <div className="toggle-switch" onClick={handleMode}>
                  <span className="switch"></span>
                </div>
              </li>
            </div>
          </div>
        </nav>
        <section className="home">
          <Switch>
            <Route exact path={path}>
              <DashboardHome></DashboardHome>
            </Route>
            <Route path={`${path}/pay`}>
              <Pay></Pay>
            </Route>
            <Route path={`${path}/paying/:paymentId`}>
              <Payment></Payment>
            </Route>
            <Route path={`${path}/myOrders`}>
              <MyOrders></MyOrders>
            </Route>
            <Route path={`${path}/review`}>
              <Review></Review>
            </Route>
            <AdminRoute path={`${path}/manageAllOrders`}>
              <ManageAllOrders></ManageAllOrders>
            </AdminRoute>
            <AdminRoute path={`${path}/tabsManagement`}>
              <TabsManagement></TabsManagement>
            </AdminRoute>
            <AdminRoute path={`${path}/addProduct`}>
              <AddProduct></AddProduct>
            </AdminRoute>
            <AdminRoute path={`${path}/makeAdmin`}>
              <MakeAdmin></MakeAdmin>
            </AdminRoute>
            <AdminRoute path={`${path}/manageProducts`}>
              <ManageProducts></ManageProducts>
            </AdminRoute>
            <AdminRoute path={`${path}/shipped`}>
              <Shipped></Shipped>
            </AdminRoute>
            <AdminRoute path={`${path}/contentTabOne`}>
              <ContentTabOne></ContentTabOne>
            </AdminRoute>
            <AdminRoute path={`${path}/contentTabTwo`}>
              <ContentTabTwo></ContentTabTwo>
            </AdminRoute>
            <AdminRoute path={`${path}/manageTabsContents`}>
              <ManageTabsContents></ManageTabsContents>
            </AdminRoute>
          </Switch>
        </section>
      </div> */}

      <div
        className="offcanvas offcanvas-start"
        tabIndex="-1"
        id="offcanvasWithBackdrop"
        aria-labelledby="offcanvasWithBackdropLabel"
        style={{ width: "320px" }}
      >
        <div className="offcanvas-header">
          <h4
            className="offcanvas-title fw-bold"
            id="offcanvasWithBothOptionsLabel"
            style={{ color: "#2c2c54", cursor: "pointer" }}
          >
            Alluring Perfumes
          </h4>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>

        {admin ? (
          <div className="offcanvas-body">
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}`}
            >
              <i className="icons mb-1 me-3">
                <MdOutlineAdminPanelSettings />
              </i>
              <span className="nav-btn">Admin Panel</span>
            </Link>
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/manageAllOrders`}
            >
              <i className="icons mb-1 me-3">
                <BiCustomize />
              </i>
              <span className="nav-btn">Manage All Orders</span>
            </Link>
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/addProduct`}
            >
              <i className="icons mb-1 me-3">
                <MdOutlineAddShoppingCart />
              </i>
              <span className="nav-btn">Add A Product</span>
            </Link>

            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/makeAdmin`}
            >
              <i className="icons mb-1 me-3">
                <BiUserCheck />
              </i>
              <span className="nav-btn">Make Admin</span>
            </Link>
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/manageProducts`}
            >
              <i className="icons mb-1 me-3">
                <IoSettings />
              </i>
              <span className="nav-btn">Manage Products</span>
            </Link>
            <hr />
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/tabsManagement`}
            >
              <i className="icons mb-1 me-3">
                <RiTableLine />
              </i>
              <span className="nav-btn">Set Tabs Name</span>
            </Link>
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/contentTabOne`}
            >
              <i className="icons mb-1 me-3">
                <BiBookContent />
              </i>
              <span className="nav-btn">Tab-1 Content</span>
            </Link>
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/contentTabTwo`}
            >
              <i className="icons mb-1 me-3">
                <MdOutlineContentPaste />
              </i>
              <span className="nav-btn">Tab-2 Content</span>
            </Link>
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/manageTabsContents`}
            >
              <i className="icons mb-1 me-3">
                <MdDeleteForever />
              </i>
              <span className="nav-btn">Manage Tabs Contents</span>
            </Link>
          </div>
        ) : (
          <div className="offcanvas-body">
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}`}
            >
              <i className="icons mb-1 me-3">
                <MdOutlineAdminPanelSettings />
              </i>
              <span className="nav-btn">User Panel</span>
            </Link>
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/pay`}
            >
              <i className="icons mb-1 me-3">
                <BiDollar />
              </i>
              <span className="nav-btn">Pay</span>
            </Link>
            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/myOrders`}
            >
              <i className="icons mb-1 me-3">
                <BiCartAlt />
              </i>
              <span className="nav-btn">My Orders</span>
            </Link>

            <Link
              className="nav-link active d-flex align-items-center"
              aria-current="page"
              to={`${url}/review`}
            >
              <i className="icons mb-1 me-3">
                <BiListOl />
              </i>
              <span className="nav-btn">Review</span>
            </Link>
          </div>
        )}
      </div>
      {/* nested route setup */}
      <Switch>
        <Route exact path={path}>
          <DashboardHome></DashboardHome>
        </Route>
        <Route path={`${path}/pay`}>
          <Pay></Pay>
        </Route>
        <Route path={`${path}/paying/:paymentId`}>
          <Payment></Payment>
        </Route>
        <Route path={`${path}/myOrders`}>
          <MyOrders></MyOrders>
        </Route>
        <Route path={`${path}/review`}>
          <Review></Review>
        </Route>
        <AdminRoute path={`${path}/manageAllOrders`}>
          <ManageAllOrders></ManageAllOrders>
        </AdminRoute>
        <AdminRoute path={`${path}/tabsManagement`}>
          <TabsManagement></TabsManagement>
        </AdminRoute>
        <AdminRoute path={`${path}/addProduct`}>
          <AddProduct></AddProduct>
        </AdminRoute>
        <AdminRoute path={`${path}/makeAdmin`}>
          <MakeAdmin></MakeAdmin>
        </AdminRoute>
        <AdminRoute path={`${path}/manageProducts`}>
          <ManageProducts></ManageProducts>
        </AdminRoute>
        <AdminRoute path={`${path}/shipped`}>
          <Shipped></Shipped>
        </AdminRoute>
        <AdminRoute path={`${path}/contentTabOne`}>
          <ContentTabOne></ContentTabOne>
        </AdminRoute>
        <AdminRoute path={`${path}/contentTabTwo`}>
          <ContentTabTwo></ContentTabTwo>
        </AdminRoute>
        <AdminRoute path={`${path}/manageTabsContents`}>
          <ManageTabsContents></ManageTabsContents>
        </AdminRoute>
      </Switch>
    </div>
  );
};

export default Dashboard;
