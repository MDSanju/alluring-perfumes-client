import React from "react";
import { Redirect, Route } from "react-router";
import useAuth from "../../../hooks/useAuth";
import ScaleLoader from "react-spinners/ScaleLoader";

const AdminRoute = ({ children, ...rest }) => {
  const { user, admin, reload, isLoading } = useAuth();
  if (isLoading && reload) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "38vh",
        }}
      >
        <ScaleLoader color={"#003665"} size={85} />
      </div>
    );
  }
  return (
    <Route
      {...rest}
      render={({ location }) =>
        user.email && admin ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;
