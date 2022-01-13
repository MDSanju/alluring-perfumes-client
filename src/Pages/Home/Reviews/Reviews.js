import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";
import ScaleLoader from "react-spinners/ScaleLoader";
import styles from "./Reviews.module.css";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-brook-12035.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <div
      className="container"
      style={{ marginTop: "135px", marginBottom: "155px", color: "#333f47" }}
    >
      <h2 className={`text-center mb-5 ${styles.review_title}`}>
        What Our Customers Are Saying!
      </h2>
      <h2 className="mb-3">
        {reviews.length} {reviews.length >= 2 ? "Reviews" : "Review"}:
      </h2>
      {reviews.length ? (
        <div>
          {reviews.map((review) => (
            <SingleReview key={review._id} review={review}></SingleReview>
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "38px",
          }}
        >
          <ScaleLoader color={"#003665"} size={85} />
        </div>
      )}
    </div>
  );
};

export default Reviews;
