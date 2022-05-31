import styled from "styled-components";
import footerBgSVG from "../../images/background-footer.svg";

export const FOOTER = styled.footer`
  width: 100%;
  padding: 30px 0px;
  background-image: url(${footerBgSVG});
  background-size: cover;
`;

export const ContainerFooter = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: auto;
  margin-top: 100px;
`;

export const BoxFooter = styled.div`
  display: flex;
  flex-direction: column;
  padding: 35px;
  & div {
    & img {
      width: 180px;
    }
  }
  & h2 {
    margin-bottom: 30px;
    color: #343434;
    font-weight: 500;
    font-size: 1.6rem;
  }
  & a {
    margin-top: 10px;
    color: #7a7a7a;
    font-weight: 400;
    text-decoration: none;
    &:hover {
      opacity: 0.8;
    }
    & i {
      font-size: 20px;
    }
  }
`;

export const BoxFooterTerms = styled.div`
  max-width: 350px;
  margin-top: 20px;
  font-weight: 400;
  color: #7a7a7a;
  font-size: 18px;
`;

export const BoxCopyRight = styled.div`
  max-width: 1200px;
  margin: auto;
  text-align: center;
  padding: 0px 40px;
  & p {
    margin-top: 20px;
    color: #7a7a7a;
    font-weight: 400;
  }
  & hr {
    border: none;
    height: 1.4px;
    background-color: #000;
  }
`;
