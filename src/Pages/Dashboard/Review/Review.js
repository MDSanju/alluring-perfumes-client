import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { FaStar } from "react-icons/fa";
import reviewLogo from "../../../images/review_logo.png";
import reviewBg from "../../../images/review-bg.png";
import { toast, ToastContainer } from "react-toastify";
import "./Review.css";

// review page for user
const Review = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);
  const [successfullyAdded, setSuccessfullyAdded] = useState(false);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const userFeedback = {
      displayName: user.displayName,
      email: user.email,
      review: data.review,
      rating: data.rating,
    };

    const notify = () =>
      toast.success("Your review successfully added!", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

    fetch("http://localhost:5000/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userFeedback),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          reset();
          setSuccessfullyAdded(true);
          notify();
        }
      });
  };

  return (
    <div className="review_page">
      {successfullyAdded && (
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
      <div className="review_img">
        <img style={{ width: "100%" }} src={reviewBg} alt="" />
      </div>
      <div className="form_card">
        <div className="box form_box">
          <div style={{ width: "100px", height: "100%", margin: "0 auto" }}>
            <img
              style={{
                width: "100%",
                height: "100%",
                paddingBottom: "18px",
              }}
              src={reviewLogo}
              alt=""
            />
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="d-flex justify-content-center align-items-center mb-4">
              {[...Array(5)].map((star, i) => {
                const ratingValue = i + 1;
                return (
                  <label>
                    <input
                      {...register("rating")}
                      type="radio"
                      name="rating"
                      value={ratingValue}
                      onClick={() => setRating(ratingValue)}
                      id="field-star"
                    />
                    <FaStar
                      className="star"
                      color={
                        ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"
                      }
                      onMouseEnter={() => setHover(ratingValue)}
                      onMouseLeave={() => setHover(null)}
                    />
                  </label>
                );
              })}
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                color: "#eaeaea",
                letterSpacing: "1.5px",
              }}
            >
              <h2 className="leave_review">Leave Your Review</h2>
            </div>
            <div className="review_textarea mt-3 mb-3">
              <textarea
                type="text"
                className="textarea_field"
                placeholder="Write your review..."
                required
                {...register("review")}
              />
            </div>

            <div className="review_btn">
              <button type="submit" className="button_post_user_review">
                post
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Review;
