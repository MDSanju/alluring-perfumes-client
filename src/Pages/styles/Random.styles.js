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

export const SuccessOrderFullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 80px;
  margin-bottom: 105px;
`;

export const SuccessOrderCard = styled.div`
  background-color: #fff;
  border-left: 5px solid #3cd872;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
`;

export const SuccessCardInfo = styled.div`
  padding: 40px 36px 90px 36px;
`;

export const SuccessOrderImage = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  & img {
    width: 100%;
  }
  @media screen and (max-width: 487px) {
    width: 300px;
    height: 300px;
  }
`;

export const SuccessOrderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    color: #3cd872;
  }
  & p {
    font-size: 1.125rem;
  }
  @media screen and (max-width: 436px) {
    & p {
      font-size: 0.9rem;
    }
  }
`;

export const SuccessOrderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 36px;
  & button {
    width: 120px;
    background-color: #009688;
    color: white;
    padding: 8px 0px 8px 0px;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #e5f3f2;
      color: #4e4d4f;
      transition: 0.3s ease;
    }
  }
`;

export const PaidOrderFullPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 64px;
  margin-bottom: 90px;
`;

export const PaidOrderCard = styled.div`
  background-color: #fff;
  border-left: 5px solid #f8885a;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
`;

export const PaidCardInfo = styled.div`
  padding: 40px 36px 90px 36px;
`;

export const PaidOrderImage = styled.div`
  width: 400px;
  height: 400px;
  margin: 0 auto;
  & img {
    width: 100%;
  }
  @media screen and (max-width: 487px) {
    width: 300px;
    height: 300px;
  }
`;

export const PaidOrderText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & h2 {
    color: #f85043;
  }
  & p {
    font-size: 1.125rem;
  }
  @media screen and (max-width: 436px) {
    & p {
      font-size: 0.9rem;
    }
  }
`;

export const PaidOrderButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 36px;
  & button {
    width: 120px;
    background-color: #255482;
    color: white;
    padding: 8px 0px 8px 0px;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #b5dce1;
      color: #f23a30;
      transition: 0.3s ease;
    }
  }
`;

export const ShippedButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 18px;
  margin-top: 36px;
  & button {
    width: 120px;
    background-color: #2e86de;
    color: white;
    padding: 8px 0px 8px 0px;
    border: none;
    border-radius: 5px;
    &:hover {
      background-color: #255482;
      transition: 0.3s ease;
    }
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
  justify-content: space-around;
  & h1 {
    text-align: center;
    color: black;
    font-size: 2rem !important;
    font-weight: bold;
    @media screen and (max-width: 467px) {
      font-size: 1.4rem !important;
    }
    @media screen and (max-width: 350px) {
      font-size: 1.3rem !important;
    }
  }
  @media screen and (max-width: 610px) {
    height: 900px;
  }
  @media screen and (max-width: 467px) {
    height: 800px;
  }
`;

export const FirstCheckoutRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 25px;
  @media screen and (max-width: 667px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export const RowOwner = styled.div`
  width: 100%;
`;

export const CheckoutInput = styled.div`
  border: 1px solid #999;
  & input {
    width: 100%;
    font-size: 1.05rem;
    font-weight: 400;
    color: #424770;
    border: none;
    outline: none;
    padding: 10px 10px 10px 10px;
    &::placeholder {
      color: #aab7c4 !important;
    }
  }
`;

export const CheckoutDateSelectionInput = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media screen and (max-width: 610px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 45px;
  }
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
    font-family: "Poppins", sans-serif;
    border: none;
    transition: 0.5s;
    &:hover {
      background-color: dodgerblue;
    }
  }
`;

export const CardImages = styled.div`
  & img {
    width: 100px;
    @media screen and (max-width: 440px) {
      width: 75px;
      margin: 5px;
    }
  }
`;


// Add A New Order Styles
export const AddProductFullPage = styled.div`
   display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 4%;
    margin-top: 40px;
    margin-bottom: 86px;
    @media screen and (max-width: 1080px) {
      flex-direction: column;
      gap: 50px;
    }
`;

export const AddProductPageImage = styled.div`
  width: 50%;
  & img{
    width: 100%;
  }
  @media screen and (max-width: 1080px) {
      width: 75%;
    }
  @media screen and (max-width: 768px) {
      width: 85%;
    }
    @media screen and (max-width: 650px) {
      width: 90%;
    }
    @media screen and (max-width: 550px) {
      width: 100%;
    }
`;

export const FormCard = styled.div`
  width: 40%;
  @media screen and (max-width: 1080px) {
      width: 60%;
    }
  @media screen and (max-width: 768px) {
      width: 70%;
    }
  @media screen and (max-width: 650px) {
      width: 80%;
    }
  @media screen and (max-width: 550px) {
      width: 90%;
    }
  @media screen and (max-width: 500px) {
      width: 96%;
    }
  @media screen and (max-width: 400px) {
      width: 96%;
    }
`;

export const CardBox = styled.div`
  padding: 38px 36px 64px 36px !important;
`;

export const AddProductCardBoxIcon = styled.div`
  width: 178px;
  height: 100%;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
      width: 156px;
    }
  @media screen and (max-width: 440px) {
      width: 132px;
    }
  @media screen and (max-width: 368px) {
      width: 124px;
    }
  @media screen and (max-width: 340px) {
      width: 116px;
    }
`;

export const AddProductCardTitle = styled.h3`
  font-size: 2.4rem;
    font-weight: 900;
    margin-bottom: 60px;
    text-align: center;
    color: #d6d6d6;
    @media screen and (max-width: 500px) {
      font-size: 2.2rem;
    }
  @media screen and (max-width: 440px) {
      font-size: 2.1rem;
    }
  @media screen and (max-width: 368px) {
      font-size: 2rem;
    }
  @media screen and (max-width: 340px) {
      font-size: 1.8rem;
    }
`;

export const AddProductSubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  & .add_product-submit_btn {
    width: 218px !important;
    border-radius: 100px !important;
    @media screen and (max-width: 480px) {
      width: 175px !important;
    }
    @media screen and (max-width: 382px) {
      width: 155px !important;
    }
    @media screen and (max-width: 352px) {
      width: 142px !important;
    }
  }
`;



// Make Admin Styles
export const MakeAdminFullPage = styled.div`
   display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0px;
    margin-top: 40px;
    margin-bottom: 86px;
    @media screen and (max-width: 1080px) {
      flex-direction: column;
      gap: 36px;
    }
`;

export const MakeAdminPageImage = styled.div`
  width: 58%;
  & img{
    width: 100%;
  }
  @media screen and (max-width: 1080px) {
      width: 100%;
    }
`;

export const MakeAdminCardBoxIcon = styled.div`
  width: 136px;
  height: 100%;
  margin: 0 auto;
  & img {
    width: 100%;
    height: 100%;
  }
  @media screen and (max-width: 500px) {
      width: 124px;
    }
  @media screen and (max-width: 440px) {
      width: 110px;
    }
  @media screen and (max-width: 340px) {
      width: 100px;
    }
`;

export const MakeAdminCardTitle = styled.h3`
  font-size: 2.4rem;
  font-weight: 900;
  margin-top: 28px;
  margin-bottom: 60px;
  text-align: center;
  color: #444444;
  @media screen and (max-width: 440px) {
      font-size: 2rem;
    }
`;

export const MakeAdminSubmitBtn = styled.div`
  display: flex;
  justify-content: center;
  & .make_admin-submit_btn {
    width: 232px !important;
    border-radius: 100px !important;
    @media screen and (max-width: 480px) {
      width: 175px !important;
    }
    @media screen and (max-width: 382px) {
      width: 155px !important;
    }
    @media screen and (max-width: 352px) {
      width: 142px !important;
    }
  }
`;