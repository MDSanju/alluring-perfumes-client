import React, { useState } from "react";
import {
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import { toast, ToastContainer } from "react-toastify";
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

  const [success, setSuccess] = useState(false);

  const notifySuccess = () =>
    toast.success("New Service Added Successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onSubmit = (data) => {
    const formData = new FormData();

    formData.append("img", data.img[0]);
    formData.append("name", data.name);
    formData.append("price", data.price);
    formData.append("description", data.description);

    const proceed = window.confirm("Please confirm to Add!");
    if (proceed) {
      fetch("https://alluring-perfumes-server.onrender.com/perfumes", {
        method: "POST",
        body: formData,
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.insertedId) {
            reset();
            setSuccess(true);
            notifySuccess();
          }
        });
    }
  };
  // react hook form used
  return (
    <AddProductFullPage>
      {success && (
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
