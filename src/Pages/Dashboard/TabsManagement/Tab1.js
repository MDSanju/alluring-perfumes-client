import React from "react";
import { useForm } from "react-hook-form";

const Tab1 = ({ tab1 }) => {
  console.log(tab1);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const proceed = window.confirm("Please Confirm!");
    if (proceed) {
      fetch(`http://localhost:5000/tab1/${tab1._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount) {
            alert("Tab-1 details added successfully!");
            reset();
          }
        });
    }
  };
  return (
    <div>
      <div
        className="d-flex justify-content-center"
        style={{ marginTop: "10px", marginBottom: "30px" }}
      >
        <div className="form-floating mb-3 mt-5 col-10 col-sm-10 col-md-5">
          <h2 className="text-center fw-bold mb-5 make-admin-input-title">
            Tab-1!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="form-control mt-3"
              id="floatingInput"
              placeholder="Tab-1 Name"
              required
              {...register("tabName1")}
            />

            <input
              className="btn btn-primary w-100 mt-4"
              type="submit"
              value="Update"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Tab1;
