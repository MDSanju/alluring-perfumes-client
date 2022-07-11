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
import ManageTabs from "../ManageTabs/ManageTabs";
import Payment from "../Payment/Payment";
import "./Dashboard.css";

// dashboard
const Dashboard = () => {
  let { path, url } = useRouteMatch();
  const { admin, logout } = useAuth();
  const history = useHistory();

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
              to={`${url}/manageTabs`}
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
        <AdminRoute path={`${path}/manageTabs`}>
          <ManageTabs></ManageTabs>
        </AdminRoute>
      </Switch>
    </div>
  );
};

export default Dashboard;
