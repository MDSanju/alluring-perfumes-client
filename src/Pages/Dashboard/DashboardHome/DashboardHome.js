import React from "react";
import useAuth from "../../../hooks/useAuth";
import "./DashboardHome.css";

// dashboard home page
const DashboardHome = () => {
  const { admin } = useAuth();
  return (
    <div className="col-10 mx-auto">
      <h1 className="text-center mt-5 admin-user-panel">
        {admin ? "Admin Panel!" : "User Panel!"}
      </h1>
      <h5 className="text-center mt-4">
        More options for you about the dashboard at the top-left side nav-icon.
        Please click on the Button!
      </h5>
    </div>
  );
};

export default DashboardHome;
