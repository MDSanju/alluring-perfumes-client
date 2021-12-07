import React from "react";
import { useForm } from "react-hook-form";
// add product page
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Add!");
    if (proceed) {
      fetch("https://mysterious-brook-12035.herokuapp.com/perfumes", {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            alert("A New Service Added Successfully. Thanks!");
            reset();
          }
        });
    }
  };
  // react hook form used
  return (
    <div
      className="d-flex justify-content-center"
      style={{ marginTop: "50px", marginBottom: "150px" }}
    >
      <div className="form-floating mb-3 mt-5 col-10 col-sm-10 col-md-5">
        <h2 className="fw-bold text-center mb-5">Add A New Product!</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            className="form-control mt-3"
            id="floatingInput"
            placeholder="Product name"
            required
            {...register("name")}
          />

          <input
            type="text"
            className="form-control mt-3"
            id="floatingInput"
            placeholder="Price"
            required
            {...register("price")}
          />
          <input
            type="text"
            className="form-control mt-3"
            id="floatingInput"
            placeholder="Image url"
            required
            {...register("img")}
          />
          <textarea
            type="text"
            className="form-control mt-3"
            style={{ width: "100%", height: "100px" }}
            placeholder="Description..."
            required
            {...register("description")}
          />
          <input
            type="submit"
            className="btn btn-primary w-100 mt-3"
            value="Add Now"
          />
        </form>
      </div>
    </div>
  );
};

export default AddProduct;
