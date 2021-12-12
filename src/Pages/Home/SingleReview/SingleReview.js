import React from "react";
import Rating from "react-rating";
import "./SingleReview.css";

const SingleReview = (props) => {
  const { displayName, review, rating } = props.review;
  const profileName = displayName;
  const profilePic = profileName.slice(0, 1);

  return (
    <div className="review-section">
      <div>
        <button className="profile-pic">
          <h3 style={{ fontSize: "2.6rem" }}>{profilePic}</h3>
        </button>
      </div>
      <div className="col-7 col-sm-8 col-md-8 mx-4 reviews">
        <small style={{ fontSize: "20px" }} className="fw-bold">
          {profileName}
        </small>
        <br />
        <small style={{ fontSize: "14px" }}>{review}</small>
        <br />
        <div className="d-flex align-items-center mt-3">
          <small className="fw-bold me-2">Ratings:</small>
          <Rating
            initialRating={rating}
            emptySymbol="fas fa-star empty-symbol-color"
            fullSymbol="fas fa-star full-symbol-color"
            readonly
          ></Rating>
        </div>
      </div>
    </div>
  );
};

export default SingleReview;
