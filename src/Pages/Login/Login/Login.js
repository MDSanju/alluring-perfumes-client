import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import LoginForm from "../LoginForm/LoginForm";

const Login = () => {
  return (
    <div>
      <Navbar></Navbar>
      <LoginForm></LoginForm>
      <Footer></Footer>
    </div>
  );
};

export default Login;
