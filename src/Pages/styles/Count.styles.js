import styled from "styled-components";

export const CountContainer = styled.div`
  background-image: url(https://i.ibb.co/JjfFHMh/worldmap.png);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: contain;
  background-color: #fff;
  padding: 100px 0;
  background-attachment: fixed;
  text-align: center;
`;

export const CountRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  gap: 0;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 75px;
  }
`;

export const CountRowItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & h2 {
    color: #212529;
    font-size: 50px;
    font-weight: 700;
  }
`;

export const CountRowName = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 7px;
  & span {
    color: #212529;
  }
`;
