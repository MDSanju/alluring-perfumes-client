import React from "react";
import Footer from "../../Shared/Footer/Footer";
import Navbar from "../../Shared/Navbar/Navbar";
import RegisterForm from "../RegisterForm/RegisterForm";

const Register = () => {
  return (
    <div>
      <title>Register || Alluring Perfumes</title>
      <Navbar></Navbar>
      <RegisterForm></RegisterForm>
      <Footer></Footer>
    </div>
  );
};

export default Register;
