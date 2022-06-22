import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Blank from "../pages/Blank";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import AdminRoute from "../../../Login/AdminRoute/AdminRoute";
import Review from "../../Review/Review";
import MyOrders from "../../MyOrders/MyOrders";
import "./main-layout.scss";

const MainLayout = () => {
  return (
    <>
      <Sidebar />
      <div className="main">
        <div className="main__content">
          <TopNav />

          {/* nested router */}
          <Switch>
            <Route exact path="/newDashboard">
              <Dashboard />
            </Route>
            <Route path="/newDashboard/myOrders">
              <MyOrders />
            </Route>
            <Route path="/newDashboard/pay">
              <Blank />
            </Route>
            <Route path="/newDashboard/review">
              <Review />
            </Route>
            <AdminRoute path="/newDashboard/manageAllOrders">
              <Blank />
            </AdminRoute>
            <AdminRoute path="/newDashboard/addProduct">
              <Blank />
            </AdminRoute>
            <AdminRoute path="/newDashboard/makeAdmin">
              <Blank />
            </AdminRoute>
            <AdminRoute path="/newDashboard/manageProducts">
              <Blank />
            </AdminRoute>
            <AdminRoute path="/newDashboard/manageTabs">
              <Blank />
            </AdminRoute>
          </Switch>
        </div>
      </div>
    </>
  );
};

export default MainLayout;
