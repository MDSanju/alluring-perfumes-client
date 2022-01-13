import React from "react";
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from "react-router";
import useAuth from "../../../hooks/useAuth";
import ScaleLoader from "react-spinners/ScaleLoader";

const LoginForm = () => {
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
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "50px", marginBottom: "150px" }}
    >
      <div className="form-floating mb-3 mt-5 col-10 col-sm-10 col-md-5">
        <h2 className="fw-bold text-center mb-5" style={{ color: "#333f47" }}>
          Please Login!
        </h2>
        {!isLoading && (
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="email"
              className="form-control mt-3"
              id="floatingInput"
              placeholder="Your Email"
              required
              {...register("email")}
            />
            <input
              type="password"
              className="form-control mt-3"
              id="floatingInput"
              placeholder="Password"
              required
              {...register("password")}
            />

            <div className="d-flex justify-content-center">
              <div className="form-check form-switch mt-3">
                <input
                  onChange={toggleCheckedButton}
                  className="form-check-input"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckChecked"
                  checked
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckChecked"
                >
                  New user?
                </label>
              </div>
            </div>
            <input
              type="submit"
              className="btn btn-primary w-100 mt-3"
              value="Login"
            />
            <div className="mt-5">
              {authError && (
                <div className="alert alert-danger" role="alert">
                  {authError}
                </div>
              )}
            </div>
          </form>
        )}
        {isLoading && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "38px",
            }}
          >
            <ScaleLoader color={"#003665"} size={85} />
          </div>
        )}
      </div>
    </div>
  );
};

export default LoginForm;
