import React, { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react.js";
import ScaleLoader from "react-spinners/ScaleLoader";
import Rating from "react-rating";
import {
  BodyRole,
  ReviewsContainer,
  Section,
  SectionSeparator,
  SectionTitle,
  SwiperContainer,
  TestiAvatar,
  TestimonialsAvatar,
  UserReviewText,
} from "../../styles/Reviews.styles";
import "./Reviews.css";

// Import Swiper styles
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "swiper/modules/navigation/navigation";
import "swiper/modules/pagination/pagination";
import "swiper/modules/scrollbar/scrollbar";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("https://mysterious-brook-12035.herokuapp.com/reviews")
      .then((res) => res.json())
      .then((data) => setReviews(data));
  }, []);
  return (
    <ReviewsContainer>
      <br />
      <br />
      <BodyRole>
        {reviews.length ? (
          <Section>
            <div class="container">
              <SectionTitle>
                <h2>What Our Customers Are Saying!</h2>
                <SectionSeparator></SectionSeparator>
              </SectionTitle>
            </div>
            <div class="testimonials-carousel-wrap">
              <div class="listing-carousel-button listing-carousel-button-next">
                <i class="fa fa-caret-right" style={{ color: "#fff" }}></i>
              </div>
              <div class="listing-carousel-button listing-carousel-button-prev">
                <i class="fa fa-caret-left" style={{ color: "#fff" }}></i>
              </div>
              <div class="testimonials-carousel">
                <SwiperContainer>
                  <div class="swiper-wrapper">
                    <Swiper
                      modules={[Navigation, Pagination, Scrollbar, A11y]}
                      preloadImages={false}
                      spaceBetween={20}
                      slidesPerView={1}
                      loop={true}
                      grabCursor
                      mousewheel={false}
                      centeredSlides={true}
                      breakpoints={{ 1024: { slidesPerView: 3 } }}
                      pagination={{
                        el: "tc-pagination",
                        clickable: true,
                        dynamicBullets: true,
                      }}
                      navigation={{
                        nextEl: ".listing-carousel-button-next",
                        prevEl: ".listing-carousel-button-prev",
                      }}
                      onSlideChange={() => console.log("slide change")}
                      onSwiper={(swiper) => console.log(swiper)}
                    >
                      {reviews.map((review) => (
                        <SwiperSlide key={review._id}>
                          <div class="swiper-slide">
                            <div class="testi-item">
                              <TestiAvatar>
                                <img
                                  src="https://i.ibb.co/BrpsgFp/users.png"
                                  alt=""
                                />
                              </TestiAvatar>
                              <div class="testimonials-text-before">
                                <i class="fa fa-quote-right"></i>
                              </div>
                              <div class="testimonials-text">
                                <br />
                                <Rating
                                  initialRating={review.rating}
                                  emptySymbol="fas fa-star empty-symbol-color"
                                  fullSymbol="fas fa-star full-symbol-color"
                                  readonly
                                ></Rating>
                                <br />
                                <br />
                                <UserReviewText>{review.review}</UserReviewText>
                                <a href="#" class="text-link"></a>
                                <TestimonialsAvatar>
                                  <h3>{review.displayName}</h3>
                                  <h4>Customer</h4>
                                </TestimonialsAvatar>
                              </div>
                              <div class="testimonials-text-after">
                                <i class="fa fa-quote-left"></i>
                              </div>
                            </div>
                          </div>
                        </SwiperSlide>
                      ))}
                    </Swiper>
                  </div>
                </SwiperContainer>
              </div>

              <div class="tc-pagination"></div>
            </div>
          </Section>
        ) : (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "25px",
            }}
          >
            <ScaleLoader color={"#003665"} size={85} />
          </div>
        )}
      </BodyRole>
    </ReviewsContainer>
  );
};

export default Reviews;
