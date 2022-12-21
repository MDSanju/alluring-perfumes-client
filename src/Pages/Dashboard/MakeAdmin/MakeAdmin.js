import React, { useState } from "react";
import { useForm } from "react-hook-form";
import icon_make_admin from "../../../images/make-admin-icon.png";
import bg_make_admin from "../../../images/make-admin-bg.png";
import SendIcon from "@mui/icons-material/Send";
import { toast, ToastContainer } from "react-toastify";
import {
  Button,
  FormControl,
  Input,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { FaUserCheck } from "react-icons/fa";
import {
  CardBox,
  FormCard,
  MakeAdminCardBoxIcon,
  MakeAdminCardTitle,
  MakeAdminFullPage,
  MakeAdminPageImage,
  MakeAdminSubmitBtn,
} from "../../styles/Random.styles";
import "./MakeAdmin.css";

// make admin page for admin
const MakeAdmin = () => {
  const { register, handleSubmit, reset } = useForm();

  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const notifySuccess = () =>
    toast.success("Made admin successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const notifyError = () =>
    toast.error("Wrong Person!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Make user to Admin!");
    if (proceed) {
      const user = data;
      fetch("https://alluring-perfumes-server.onrender.com/users", {
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
            setSuccess(true);
            notifySuccess();
          } else {
            reset();
            setError(true);
            notifyError();
          }
        });
    }
  };
  return (
    <MakeAdminFullPage>
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
      {error && (
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
      <MakeAdminPageImage>
        <img src={bg_make_admin} alt="" />
      </MakeAdminPageImage>
      <FormCard>
        <CardBox className="box">
          <MakeAdminCardBoxIcon>
            <img src={icon_make_admin} alt="" />
          </MakeAdminCardBoxIcon>
          <MakeAdminCardTitle>Make Admin</MakeAdminCardTitle>
          <form onSubmit={handleSubmit(onSubmit)}>
            <FormControl fullWidth sx={{ m: 1 }} variant="standard">
              <InputLabel htmlFor="standard-adornment-amount">
                Write user email
              </InputLabel>
              <Input
                id="standard-adornment-amount"
                type="email"
                placeholder="johnsmith@gmail.com"
                required
                {...register("email")}
                startAdornment={
                  <InputAdornment position="start">
                    <FaUserCheck size={24} />
                  </InputAdornment>
                }
              />
            </FormControl>
            <br />
            <br />
            <MakeAdminSubmitBtn>
              <Button
                type="submit"
                variant="contained"
                className="make_admin-submit_btn"
                endIcon={<SendIcon />}
              >
                submit
              </Button>
            </MakeAdminSubmitBtn>
          </form>
        </CardBox>
      </FormCard>
    </MakeAdminFullPage>
  );
};

export default MakeAdmin;
