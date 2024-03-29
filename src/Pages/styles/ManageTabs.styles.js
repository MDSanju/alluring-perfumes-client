import styled from "styled-components";

export const TabsContainer = styled.div`
  & .admin_tabs_menu_row {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 0;
    text-align: center;
    width: 100%;
    @media screen and (max-width: 776px) {
      flex-direction: column;
      gap: 25px;
    }
  }
  & .tabs_tab_btn {
    background: #4d5f71;
    max-width: 220px;
    width: 100%;
    cursor: pointer;
    box-sizing: border-box;
    color: #f2f6fe;
    margin: 0 2%;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    position: relative;
    border: 2px solid #f2f6fe;
    border-radius: 10px;
    &:hover {
      background-color: #8a84d8;
      transition: 0.2s ease;
    }
  }
  & .active_tabs_tab_btn {
    background: #8a84d8;
    color: #f2f6fe;
    max-width: 220px;
    width: 100%;
    border: 2px solid #f2f6fe;
    border-radius: 10px;
  }
  & .single_tab_content {
    display: none;
  }
  & .active_single_tab_content {
    display: block;
  }
`;

export const TabsTitle = styled.h3`
  font-style: normal;
  font-weight: 700;
  font-size: 3.5rem;
  font-family: "Carter One", cursive;
  line-height: 120%;
  text-align: center;
  margin: 0;
  & span {
    background: linear-gradient(to right, #a29bfe, #a29bfe);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media screen and (max-width: 550px) {
    font-size: 36px;
  }
  @media screen and (max-width: 396px) {
    font-size: 26px;
  }
`;

export const TabsParagraph = styled.p`
  color: #788da0;
  text-align: center;
  font-weight: 600;
  font-size: 24px;
  @media screen and (max-width: 610px) {
    font-size: 17px;
  }
  @media screen and (max-width: 410px) {
    font-size: 15px;
  }
  @media screen and (max-width: 392px) {
    font-size: 13px;
  }
  @media screen and (max-width: 340px) {
    font-size: 12px;
  }
`;
