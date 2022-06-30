import React from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import add_product_logo from "../../../images/add-product-icon.jpg";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import { useForm } from "react-hook-form";
import SendIcon from "@mui/icons-material/Send";
import Add_Product from "../../../images/add-product.png";
import {
  AddProductCardBoxIcon,
  AddProductCardTitle,
  AddProductFullPage,
  AddProductPageImage,
  AddProductSubmitBtn,
  CardBox,
  FormCard,
} from "../../styles/Random.styles";
import "./AddProduct.css";

// add product page
const AddProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    // const proceed = window.confirm("Please confirm to Add!");
    // if (proceed) {
    //   fetch("http://localhost:5000/perfumes", {
    //     method: "POST",
    //     headers: {
    //       "content-type": "application/json",
    //     },
    //     body: JSON.stringify(data),
    //   })
    //     .then((res) => res.json())
    //     .then((result) => {
    //       if (result.insertedId) {
    //         alert("A New Service Added Successfully. Thanks!");
    //         reset();
    //       }
    //     });
    // }
    console.log(data.files[0]);
    reset();
  };
  // react hook form used
  return (
    // <div
    //   className="d-flex justify-content-center"
    //   style={{ marginTop: "50px", marginBottom: "150px" }}
    // >
    //   <div className="form-floating mb-3 mt-5 col-10 col-sm-10 col-md-5">
    //     <h2 className="fw-bold text-center mb-5 add-new-product-title">
    //       Add A New Product!
    //     </h2>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <input
    //         type="text"
    //         className="form-control mt-3"
    //         id="floatingInput"
    //         placeholder="Product name"
    //         required
    //         {...register("name")}
    //       />

    //       <input
    //         type="text"
    //         className="form-control mt-3"
    //         id="floatingInput"
    //         placeholder="Price"
    //         required
    //         {...register("price")}
    //       />
    //       <input
    //         type="text"
    //         className="form-control mt-3"
    //         id="floatingInput"
    //         placeholder="Image url"
    //         required
    //         {...register("img")}
    //       />
    //       <textarea
    //         type="text"
    //         className="form-control mt-3"
    //         style={{ width: "100%", height: "100px" }}
    //         placeholder="Description..."
    //         required
    //         {...register("description")}
    //       />
    //       <input
    //         type="submit"
    //         className="btn btn-primary w-100 mt-3"
    //         value="Add Now"
    //       />
    //     </form>
    //   </div>
    // </div>

    <AddProductFullPage>
      <AddProductPageImage>
        <img src={Add_Product} alt="" />
      </AddProductPageImage>
      <FormCard>
        <CardBox className="box">
          <AddProductCardBoxIcon>
            <img src={add_product_logo} alt="" />
          </AddProductCardBoxIcon>
          <AddProductCardTitle>Add Product</AddProductCardTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <label htmlFor="icon-button-file">
              <Input
                accept="image/*"
                id="icon-button-file"
                type="file"
                required
                {...register("img")}
              />
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              >
                <PhotoCamera />
              </IconButton>
            </label>
            <TextField
              id="standard-basic"
              label="Product name"
              variant="standard"
              placeholder="Write perfume name"
              fullWidth
              required
              {...register("name")}
            />
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">Price</InputLabel>
              <Input
                id="standard-adornment-amount"
                placeholder="Write perfume price"
                required
                {...register("price")}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
              />
            </FormControl>
            <TextField
              id="standard-multiline-static"
              label="Description"
              fullWidth
              multiline
              rows={4}
              defaultValue="Write here..."
              variant="standard"
              placeholder="Write perfume description..."
              required
              {...register("description")}
            />
            <br />
            <br />
            <AddProductSubmitBtn>
              <Button
                type="submit"
                variant="contained"
                className="add_product-submit_btn"
                endIcon={<SendIcon />}
              >
                Upload
              </Button>
            </AddProductSubmitBtn>
          </form>
        </CardBox>
      </FormCard>
    </AddProductFullPage>
  );
};

export default AddProduct;
