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