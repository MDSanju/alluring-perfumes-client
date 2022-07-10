import styled from "styled-components";

export const ReviewsContainer = styled.div`
  overflow-x: hidden;
  height: 100%;
`;

export const BodyRole = styled.div`
  margin: 0;
  padding: 0;
  height: 100%;
  font-size: 13px;
  text-align: center;
  font-family: "Roboto";
  background: #fcfcfd;
`;

export const Section = styled.div`
  float: left;
  position: relative;
  padding: 30px 0;
  background: #fcfcfd;
  z-index: 1;
  width: 100%;
`;

export const SectionTitle = styled.div`
  float: left;
  position: relative;
  width: 100%;
  padding-bottom: 40px;
  & p {
    color: #7d93b2;
    font-size: 13px;
    line-height: 20px;
    max-width: 550px;
    margin: 0 auto;
  }
  & h2 {
    text-transform: uppercase;
    font-family: "Carter One", cursive;
    float: left;
    width: 100%;
    text-align: center;
    color: #4d525e;
    font-size: 34px;
    font-weight: 800;
    position: relative;
    letter-spacing: 2px;
    @media screen and (max-width: 450px) {
      font-size: 24px;
    }
  }
`;

export const SectionSeparator = styled.span`
  float: left;
  width: 100%;
  position: relative;
  margin: 10px 0;
  &::before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    height: 3px;
    width: 250px;
    border-radius: 3px;
    z-index: 2;
    background-color: #001c31;
    margin-left: -125px;
  }
`;

export const SwiperContainer = styled.div`
  width: 100%;
  height: 100%;
`;

export const ListingRating = styled.i`
  float: none;
  display: inline-block;
  margin-bottom: 12px;
  & i {
    color: #007aff;
  }
`;

export const TestimonialsAvatar = styled.div`
  & h3 {
    font-weight: 600;
    color: #7d93b2;
    font-size: 18px;
    margin: 0;
  }
  & h4 {
    font-weight: 400;
    font-size: 12px;
    padding-top: 6px;
    color: #007aff;
  }
`;

export const TestiAvatar = styled.div`
  position: absolute;
  left: 50%;
  top: -30px;
  width: 90px;
  height: 90px;
  margin-left: -45px;
  z-index: 20;
  & img {
    width: 90px;
    height: 90px;
    float: left;
    border-radius: 100%;
    border: 6px solid #fff;
    box-shadow: 0 9px 26px rgba(58, 87, 135, 0.1);
  }
`;

export const UserReviewText = styled.p`
  color: #878c9f;
  font-size: 14px;
  font-family: Georgia, "Times New Roman", Times, serif;
  font-style: italic;
  line-height: 24px;
  padding-bottom: 10px;
  font-weight: 500;
  margin: 0;
`;
