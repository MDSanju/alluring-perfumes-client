import React, { useEffect, useState } from "react";
import SingleReview from "../SingleReview/SingleReview";

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
      style={{ marginTop: "95px", marginBottom: "155px", color: "#2c2c54" }}
    >
      <h2 className="text-center fw-bold mb-5">
        What Our Customers Are Saying!
      </h2>
      <h2 className="mb-3">
        {reviews.length} {reviews.length >= 2 ? "Reviews" : "Review"}:
      </h2>
      <div>
        {reviews.map((review) => (
          <SingleReview key={review._id} review={review}></SingleReview>
        ))}
      </div>
    </div>
  );
};

export default Reviews;
