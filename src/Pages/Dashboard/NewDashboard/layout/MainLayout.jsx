import React from "react";
import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Blank from "../pages/Blank";
import Sidebar from "../components/sidebar/Sidebar";
import TopNav from "../components/topnav/TopNav";
import AdminRoute from "../../../Login/AdminRoute/AdminRoute";
import Review from "../../Review/Review";
import MyOrders from "../../MyOrders/MyOrders";
import Pay from "../../Pay/Pay";
import Payment from "../../Payment/Payment";
import PaidSuccessfully from "../../PaidSuccessfully/PaidSuccessfully";
import ManageProducts from "../../ManageProducts/ManageProducts";
import "./main-layout.scss";
import ManageAllOrders from "../../ManageAllOrders/ManageAllOrders";

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
              <Pay />
            </Route>
            <Route path="/newDashboard/review">
              <Review />
            </Route>
            <Route path="/newDashboard/paying/:paymentId">
              <Payment />
            </Route>
            <Route path="/newDashboard/paidSuccessfully">
              <PaidSuccessfully />
            </Route>
            <AdminRoute path="/newDashboard/manageAllOrders">
              <ManageAllOrders />
            </AdminRoute>
            <AdminRoute path="/newDashboard/addProduct">
              <Blank />
            </AdminRoute>
            <AdminRoute path="/newDashboard/makeAdmin">
              <Blank />
            </AdminRoute>
            <AdminRoute path="/newDashboard/manageProducts">
              <ManageProducts />
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
