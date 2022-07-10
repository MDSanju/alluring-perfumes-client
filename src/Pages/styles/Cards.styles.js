import styled from "styled-components";

export const CARDS = styled.div`
  /* padding: 40px 20px; */
  & ul {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding-left: 0;
    & li {
      list-style: none;
      height: 520px;
      transition: 0.5s all;
      background: whitesmoke;
      /*overflow: hidden;*/
      border-radius: 20px;
      padding: 10px;
      margin: 215px 10px 0 10px;
      position: relative;
      & h4 {
        position: absolute;
        right: 10px;
        top: 50%;
        font-size: 30px;
        color: #555;
        text-shadow: 1px 1px 2px black;
      }
      @media screen and (max-width: 400px) {
        padding: 0;
      }
    }
  }
`;

export const PICTURE = styled.picture`
  background: #eee;
  padding: 32px;
  position: absolute;
  right: 0;
  bottom: 43%;
  width: 72%;
  height: 77%;
  border-radius: 50px 20px 0 20px;
  transform: skewY(40deg);
  overflow: hidden;
  box-shadow: 0px 1px 0px #00000020, -1px 0px 0px #ccc;
  & img {
    width: 100%;
    z-index: 1;
    transform: skewY(-40deg);
    padding: 80px 0 0 0;
  }
`;

export const CardDetail = styled.div`
  width: 100%;
  height: 100%;
  & p {
    width: 30%;
    height: 55%;
    padding: 20px 5px;
    & span {
      background: #00000030;
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      padding: 0;
      border-radius: 50%;
      margin: 0 0 20px 5px;
      font-size: 20px;
      color: white;
      &:hover {
        background: linear-gradient(45deg, #333f47, royalblue);
        cursor: pointer;
      }
    }
  }
  & strong {
    display: inherit;
    margin-top: 20px;
    margin-right: 20px;
    margin-left: 20px;
    margin-bottom: 10px;
    font-size: 28px;
    letter-spacing: 2px;
    color: #555;
  }
  & span {
    display: inherit;
    padding: 0 20px;
    width: 80%;
  }
  & small {
    display: inline-block;
    padding: 8px 20px;
    margin-top: 20px;
    margin-left: 16px;
    font-weight: bold;
    border-radius: 6px;
    border: 1px solid #999;
    cursor: pointer;
    &:hover {
      background: linear-gradient(45deg, #333f47, royalblue);
      color: white;
      border-color: #333f47;
    }
  }
`;
