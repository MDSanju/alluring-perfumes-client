import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import ScaleLoader from "react-spinners/ScaleLoader";
import registrationImg from "../../../images/img/register.svg";
import loginImg from "../../../images/img/log.svg";
import Registration from "./Registration";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./LoginForm.css";

const LoginForm = () => {
  const [signUpMode, setSignUpMode] = useState("");

  const notify = () =>
    toast.error("This is wrong user account — Please try again!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const goBackHome = useHistory();

  const handleGoBackHome = () => {
    goBackHome.push("/home");
  };

  const handleSignInUpPopUp = () => {
    if (signUpMode) {
      setSignUpMode(false);
    } else {
      setSignUpMode(true);
    }
  };

  const { isLoading, authError, userLogin } = useAuth();

  const location = useLocation();
  const redirectUriHistory = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    userLogin(data.email, data.password, location, redirectUriHistory);
    reset();
  };

  return (
    <div className="login_reg_body">
      <div
        className={
          !signUpMode ? "main_container" : "sign-up-mode main_container"
        }
      >
        <div className="forms-container">
          <div className="signin-signup">
            <form onSubmit={handleSubmit(onSubmit)} className="sign-in-form">
              <h2 className="signin_title">Sign in</h2>
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
                  placeholder="Password"
                  required
                  {...register("password")}
                />
              </div>
              {authError && (
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
                  value="Login"
                  className="common_btn solid"
                />
              )}
              <p className="social-text">Or Sign in with social platforms</p>
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
            <Registration />
          </div>
        </div>

        <div className="panels-container">
          <div className="panel left-panel">
            <div className="form_content">
              <h3 style={{ margin: "0" }}>New here ?</h3>
              <p style={{ margin: "0" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                className="common_btn transparent mx-1"
                onClick={handleSignInUpPopUp}
                id="sign-up-btn"
              >
                Sign up
              </button>
              <button
                className="common_btn transparent mx-1"
                onClick={handleGoBackHome}
                id="sign-up-btn"
              >
                Home
              </button>
            </div>
            <img src={loginImg} className="image" alt="" />
          </div>
          <div className="panel right-panel">
            <div className="form_content">
              <h3 style={{ margin: "0" }}>One of us ?</h3>
              <p style={{ margin: "0" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                className="common_btn transparent mx-1"
                onClick={handleSignInUpPopUp}
                id="sign-in-btn"
              >
                Sign in
              </button>
              <button
                className="common_btn transparent mx-1"
                onClick={handleGoBackHome}
                id="sign-up-btn"
              >
                Home
              </button>
            </div>
            <img src={registrationImg} className="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
