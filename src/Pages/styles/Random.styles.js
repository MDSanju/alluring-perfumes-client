import styled from "styled-components";

export const MyOrderPageTitle = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding-bottom: 1rem;
`;

export const NoOrderFoundImage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.3rem;
  margin-bottom: 36px;
  & img {
    width: 42%;
    @media screen and (max-width: 1080px) {
      width: 50%;
    }
    @media screen and (max-width: 887px) {
      width: 58%;
    }
    @media screen and (max-width: 700px) {
      width: 68%;
    }
    @media screen and (max-width: 568px) {
      width: 75%;
    }
    @media screen and (max-width: 450px) {
      width: 100%;
    }
  }
`;

export const NoOrderFoundText = styled.div`
  color: #f16623;
  font-size: 1.7rem;
  text-transform: uppercase;
  line-height: 1.33333;
  letter-spacing: 0.1rem;
  font-weight: 500;
  text-align: center;
`;

export const OrderSearchFeild = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 1.2rem;
`;

export const OrderSearchBarIcon = styled.div`
  width: 52px;
  height: 52px;
  cursor: pointer;
  @media screen and (max-width: 600px) {
    width: 60px;
    height: 54px;
  }
  @media screen and (max-width: 480px) {
    width: 64px;
    height: 53px;
  }
  @media screen and (max-width: 400px) {
    display: none;
  }
  & img {
    width: 100%;
  }
`;


// checkout form
export const CardBody = styled.div`
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 50px;
    margin-bottom: 75px;
`;

export const CheckoutContainer = styled.div`
    width: 750px;
    height: 600px;
    border: 1px solid;
    background-color: white;
    display: flex;
    flex-direction: column;
    padding: 40px;
    justify-content:space-around;
    & h1 {
        text-align: center;
        color: black;
        font-weight: bold;
    }
`;

export const FirstCheckoutRow = styled.div`
    display: flex;
    align-items: center;
`;

export const RowOwner = styled.div`
    width: 100%;
    margin-right: 40px;
`;

export const CheckoutInput = styled.div`
    border: 1px solid #999;
    & input {
        width: 100%;
        font-size: 1.05rem;
        font-weight: 400;
        color: #424770;
        border:none;
        outline: none;
        padding: 10px 10px 10px 10px;
        &::placeholder{
          color: #aab7c4 !important;
    }
    }
    
`;

export const CheckoutDateSelectionInput = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const CheckoutButton = styled.div`
    & button {
        background-color: blueviolet;
        width: 100%;
        color: white;
        text-align: center;
        text-transform: uppercase;
        text-decoration: none;
        padding: 10px;
        font-size: 18px;
        font-family: 'Poppins', sans-serif;
        border: none;
        transition: 0.5s;
        &:hover{
            background-color: dodgerblue;
        }
    }
`;

export const CardImages =styled.div`
    & img {
        width: 100px;
    }
`;