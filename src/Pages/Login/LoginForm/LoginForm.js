import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import ScaleLoader from "react-spinners/ScaleLoader";
import registrationImg from "../../../images/img/register.svg";
import loginImg from "../../../images/img/log.svg";
import { Alert } from "@mui/material";
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
    goBackHome.push("/");
  };

  const handleSignInUpPopUp = () => {
    if (signUpMode) {
      setSignUpMode(false);
    } else {
      setSignUpMode(true);
    }
  };

  const { isLoading, authError, userLogin } = useAuth();
  const history = useHistory();

  const location = useLocation();
  const redirectUriHistory = useHistory();

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    userLogin(data.email, data.password, location, redirectUriHistory);
    reset();
  };

  const toggleCheckedButton = (e) => {
    if (!e.target.checked) {
      history.push("/register");
    }
  };
  return (
    <div className="login_reg_body">
      <div
        class={!signUpMode ? "main_container" : "sign-up-mode main_container"}
      >
        <div class="forms-container">
          <div class="signin-signup">
            <form onSubmit={handleSubmit(onSubmit)} class="sign-in-form">
              <h2 class="signin_title">Sign in</h2>
              <div class="input-field">
                <i class="fas fa-envelope"></i>
                <input
                  type="email"
                  placeholder="Email"
                  required
                  {...register("email")}
                />
              </div>
              <div class="input-field">
                <i class="fas fa-lock"></i>
                <input
                  type="password"
                  placeholder="Password"
                  required
                  {...register("password")}
                />
              </div>
              {/* {authError && (
                <Alert severity="error">
                  This is wrong user account — Please try again!
                </Alert>
              )} */}
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
                  class="common_btn solid"
                />
              )}
              <p class="social-text">Or Sign in with social platforms</p>
              <div class="social-media">
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-google"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </form>
            <Registration />
          </div>
        </div>

        <div class="panels-container">
          <div class="panel left-panel">
            <div class="form_content">
              <h3 style={{ margin: "0" }}>New here ?</h3>
              <p style={{ margin: "0" }}>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis, ex ratione. Aliquid!
              </p>
              <button
                class="common_btn transparent mx-1"
                onClick={handleSignInUpPopUp}
                id="sign-up-btn"
              >
                Sign up
              </button>
              <button
                class="common_btn transparent mx-1"
                onClick={handleGoBackHome}
                id="sign-up-btn"
              >
                Home
              </button>
            </div>
            <img src={loginImg} class="image" alt="" />
          </div>
          <div class="panel right-panel">
            <div class="form_content">
              <h3 style={{ margin: "0" }}>One of us ?</h3>
              <p style={{ margin: "0" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                laboriosam ad deleniti.
              </p>
              <button
                class="common_btn transparent mx-1"
                onClick={handleSignInUpPopUp}
                id="sign-in-btn"
              >
                Sign in
              </button>
              <button
                class="common_btn transparent mx-1"
                onClick={handleGoBackHome}
                id="sign-up-btn"
              >
                Home
              </button>
            </div>
            <img src={registrationImg} class="image" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
