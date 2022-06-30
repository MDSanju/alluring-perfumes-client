import React from "react";
import { useForm } from "react-hook-form";
import icon_make_admin from "../../../images/make-admin-icon.png";
import bg_make_admin from "../../../images/make-admin-bg.png";
import SendIcon from "@mui/icons-material/Send";
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
  const onSubmit = (data) => {
    const proceed = window.confirm("Please confirm to Make user to Admin!");
    if (proceed) {
      const user = data;
      fetch("http://localhost:5000/users", {
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
            alert("Made admin successfully!");
          } else {
            reset();
            alert("Wrong Person!");
          }
        });
    }
  };
  return (
    // <div
    //   className="d-flex justify-content-center"
    //   style={{ marginTop: "50px", marginBottom: "150px" }}
    // >
    //   <div className="form-floating mb-3 mt-5 col-10 col-sm-10 col-md-5">
    //     <h2 className="text-center fw-bold mb-5 make-admin-input-title">
    //       Make a new Admin!
    //     </h2>
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //       <input
    //         type="email"
    //         className="form-control mt-3"
    //         id="floatingInput"
    //         placeholder="Write email"
    //         required
    //         {...register("email")}
    //       />

    //       <input
    //         className="btn btn-primary w-100 mt-4"
    //         type="submit"
    //         value="Make Admin"
    //       />
    //     </form>
    //   </div>
    // </div>

    <MakeAdminFullPage>
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
