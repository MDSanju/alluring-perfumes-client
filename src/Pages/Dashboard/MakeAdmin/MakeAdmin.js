import React from "react";
import { useForm } from "react-hook-form";
import "./MakeAdmin.css";

// make admin page for admin
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Make user to Admin!");
    if (proceed) {
      const user = data;
      fetch("https://mysterious-brook-12035.herokuapp.com/users", {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(user),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.modifiedCount) {
            reset();
            alert("Admin has been made successfully!");
          } else {
            reset();
            alert("Wrong Person!");
          }
        });
    }
  };
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "50px", marginBottom: "150px" }}
    >
      <div className="form-floating mb-3 mt-5 col-10 col-sm-10 col-md-5">
        <h2 className="text-center fw-bold mb-5 make-admin-input-title">
          Make a new Admin!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="email"
            className="form-control mt-3"
            id="floatingInput"
            placeholder="Write email"
            required
            {...register("email")}
          />

          <input
            className="btn btn-primary w-100 mt-4"
            type="submit"
            value="Make Admin"
          />
        </form>
      </div>
    </div>
  );
};

export default MakeAdmin;
