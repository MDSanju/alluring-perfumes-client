import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
import NewDashboard from "./Pages/Dashboard/NewDashboard/NewDashboard";
import Explore from "./Pages/Explore/Explore/Explore";
import Home from "./Pages/Home/Home/Home";
import Login from "./Pages/Login/Login/Login";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import NoMatch from "./Pages/NoMatch/NoMatch";
import OrderSuccess from "./Pages/OrderSuccess/OrderSuccess";
import Purchase from "./Pages/Purchase/Purchase/Purchase";
import "./App.css";

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
            <Route path="/login">
              <Login></Login>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
            <PrivateRoute path="/newDashboard">
              <NewDashboard></NewDashboard>
            </PrivateRoute>
            <PrivateRoute path="/purchase/:productId">
              <Purchase></Purchase>
            </PrivateRoute>
            <PrivateRoute path="/orderSuccess">
              <OrderSuccess></OrderSuccess>
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
