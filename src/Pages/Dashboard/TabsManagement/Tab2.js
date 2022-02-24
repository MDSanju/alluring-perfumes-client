import React from "react";
import { useForm } from "react-hook-form";

const Tab2 = ({ tab2 }) => {
  console.log(tab2);
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    const proceed = window.confirm("Please Confirm!");
    if (proceed) {
      fetch(`https://mysterious-brook-12035.herokuapp.com/tab2/${tab2._id}`, {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.modifiedCount) {
            alert("Tab-2 details added successfully!");
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
            Tab-2!
          </h2>
          <form onSubmit={handleSubmit(onSubmit)}>
            <input
              type="text"
              className="form-control mt-3"
              id="floatingInput"
              placeholder="Tab-2 Name"
              required
              {...register("tabName2")}
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

export default Tab2;
