import React, { useState } from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hooks/useAuth";
import { FaStar } from "react-icons/fa";
import "./Review.css";
// review page for user
const Review = () => {
  const { user } = useAuth();
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const userFeedback = {
      displayName: user.displayName,
      email: user.email,
      review: data.review,
      rating: data.rating,
    };

    fetch("https://mysterious-brook-12035.herokuapp.com/reviews", {
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
        }
      });
  };

  return (
    <div
      className="d-flex justify-content-center mt-5"
      style={{ height: "100vh" }}
    >
      <div className="form-floating mb-3 mt-5 col-10 col-sm-10 col-md-5">
        <h2 className="fw-bold text-center mb-4 add-a-review-title">
          Add A Review!
        </h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <textarea
            type="text"
            className="form-control mt-3 mb-3"
            style={{ height: "100px" }}
            placeholder="Write your review..."
            required
            {...register("review")}
          />
          <div className="d-flex align-items-center">
            <span className="fs-4 me-3">Ratings:</span>
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
                    size={25}
                    onMouseEnter={() => setHover(ratingValue)}
                    onMouseLeave={() => setHover(null)}
                  />
                </label>
              );
            })}
          </div>

          <input
            type="submit"
            className="btn btn-primary w-100 mt-3"
            value="Add Your Review"
          />
        </form>
      </div>
    </div>
  );
};

export default Review;
