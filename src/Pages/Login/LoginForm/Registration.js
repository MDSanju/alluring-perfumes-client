import React from "react";
import { Alert } from "@mui/material";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { ScaleLoader } from "react-spinners";
import useAuth from "../../../hooks/useAuth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Registration = () => {
  const { isLoading, regError, userRegister } = useAuth();

  const notify = () =>
    toast.error("Already used user account!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const redirectUriHistory = useHistory();
  const { register, handleSubmit, reset } = useForm();
  const onRegSubmit = (data) => {
    if (data.password !== data.password2) {
      alert("password didn't match!");
      reset();
      return;
    } else {
      alert("Confirm Registration!");
      reset();
    }

    userRegister(
      data.email,
      data.password,
      data.displayName,
      redirectUriHistory
    );
  };
  return (
    <form onSubmit={handleSubmit(onRegSubmit)} className="sign-up-form">
      <h2 className="signUp_title">Sign up</h2>
      <div className="input-field">
        <i className="fas fa-user"></i>
        <input
          type="text"
          placeholder="Username"
          required
          {...register("displayName")}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-envelope"></i>
        <input
          type="email"
          placeholder="Email"
          required
          {...register("email")}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="New password"
          required
          {...register("password")}
        />
      </div>
      <div className="input-field">
        <i className="fas fa-lock"></i>
        <input
          type="password"
          placeholder="Re-type new password"
          required
          {...register("password2")}
        />
      </div>
      {/* {regError && <Alert severity="error">Already used user account!</Alert>} */}
      {regError && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
      {isLoading ? (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "38px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      ) : (
        <input
          type="submit"
          onClick={notify}
          className="common_btn"
          value="Sign up"
        />
      )}
      <p className="social-text">Or Sign up with social platforms</p>
      <div className="social-media">
        <a href="#" className="social-icon">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-google"></i>
        </a>
        <a href="#" className="social-icon">
          <i className="fab fa-linkedin-in"></i>
        </a>
      </div>
    </form>
  );
};

export default Registration;
