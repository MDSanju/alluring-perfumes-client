import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import Explore from "./Pages/Explore/Explore/Explore";
import CouponCode from "./Pages/Home/CouponCode/CouponCode";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import Register from "./Pages/Login/Register/Register";
import NoMatch from "./Pages/NoMatch/NoMatch";
import Purchase from "./Pages/Purchase/Purchase/Purchase";

function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/explore">
              <Explore></Explore>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/couponCode">
              <CouponCode></CouponCode>
            </PrivateRoute>
            <Route path="*">
              <NoMatch></NoMatch>
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
