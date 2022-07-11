import styled from "styled-components";

export const TabOneContainer = styled.div`
  & .carousel {
    margin: 5px;
    width: 100%;
    overflow: scroll;
    position: relative;
    box-shadow: border-box;
  }

  & .carousel__container {
    white-space: nowrap;
    margin: 40px 0px;
    padding-bottom: 10px;
  }
  & .carousel-item {
    background-color: #fff;
    width: 190px;
    height: auto;
    border-radius: 20px;
    overflow: hidden;
    margin-right: 10px;
    display: inline-block;
    cursor: pointer;
    transition: 450ms all;
    transform-origin: center left;
    position: relative;
    box-shadow: 0 5px 5px 0 rgba(0, 0, 0, 0.26);
  }
  & .carousel-item .panel1 {
    position: absolute;
    top: 0;
    right: -50%;
    width: 45px;
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-flow: column;
    opacity: 1;
  }
  & .carousel-item:hover .panel1 {
    right: 0;
    opacity: 1;
    transition: 0.4s;
  }
  & .carousel-item .panel1 a {
    font-size: 20px;
    color: #b31b1b;
    margin: 15px 0;
  }
  & .carousel-item .panel1 a:hover {
    color: rgba(255, 0, 0, 0.9);
  }

  & .carousel-item .panel2 {
    position: absolute;
    bottom: 30%;
    right: 0px;
    width: 45px;
    display: flex;
    align-items: center;
    flex-flow: column;
    border-radius: 30px;
    background: transparent;
    box-shadow: 0 10px 10px 0 #ee82ee;
    border-radius: 200px 0px 200px 200px;
    -moz-border-radius: 200px 0px 200px 200px;
    -webkit-border-radius: 200px 0px 200px 200px;
    border: 0px solid #000000;
  }
  & .carousel-item .panel2 a {
    font-size: 18px;
    color: #f08080;
    margin: 15px 0;
  }
  & .carousel-item .info {
    text-align: center;
    line-height: 20px;
    margin-top: -10px;
    font-family: "Amita", cursive;
    margin-bottom: 10px;
  }
  & .carousel-item .info h3 {
    color: #333;
    padding-top: 5px;
    cursor: pointer;
    font-family: "Roboto Slab", serif;
    letter-spacing: 1px;
    font-size: 14px;
  }

  & .carousel-item .info .stars {
    margin-top: -20px;
  }

  & .carousel-item .info .stars i {
    color: gold;
    padding: 10px 0;
  }
  & .carousel-item .info .price {
    font-size: 13px;
    color: #fd5c63;
    letter-spacing: 0.5px;
  }

  & .carousel-item ~ .carousel-item {
    transform: translate3d(20px, 0, 0);
  }

  & .carousel__container:hover .carousel-item:hover {
    transform: scale(1.09);
    opacity: 1;
  }

  & .carousel-item__img {
    width: 100%;
    height: 210px;
    object-fit: cover;
    border-radius: 10px;
    box-shadow: 0 0.5px 0.5px 0 rgba(0, 0, 0, 0.26);
  }
  & .carousel::-webkit-scrollbar {
    height: 5px;
  }
  & .carousel::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.26);
    border-radius: 10px;
  }
  & .carousel::-webkit-scrollbar-track-piece {
    max-width: 100px;
  }
  & .carousel::-webkit-scrollbar-thumb {
    border-radius: 20px;
    background-color: #fff;
    background-image: -webkit-gradient(
      linear,
      40% 0%,
      75% 84%,
      from(#ff6da2),
      to(#7983f8),
      color-stop(0.6, #7983f8)
    );
  }
`;
