import styled from "styled-components";

export const NavbarFixed = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

export const NavBg = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 5.8%;
  box-shadow: 0 1px 16px rgba(0, 0, 0, 0.1);
  @media screen and (max-width: 830px) {
    justify-content: center;
  }
`;

export const NavbarLogo = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  @media screen and (max-width: 830px) {
    display: none;
  }
`;

export const NavbarNavIcons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 48px;
  @media screen and (max-width: 830px) {
    gap: 86px;
  }
  @media screen and (max-width: 650px) {
    gap: 64px;
  }
  @media screen and (max-width: 500px) {
    gap: 50px;
  }
  @media screen and (max-width: 420px) {
    gap: 40px;
  }
  @media screen and (max-width: 376px) {
    gap: 36px;
  }
  @media screen and (max-width: 352px) {
    gap: 30px;
  }
  @media screen and (max-width: 328px) {
    gap: 26px;
  }
`;

export const NavbarNavIcon = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  position: relative;
  & p {
    margin: 0;
    font-size: 12px;
    font-weight: 400;
  }
  &:hover {
    color: #ff136f;
  }
`;

export const NavbarBeforeLoginAndOut = styled.div`
  font-weight: 100;
  height: 56px;
  color: #ffffff;
  border-right: 1px solid #cbcaca;
`;
