import styled from "styled-components";

export const ContactFormContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  gap: 45px;
  padding: 80px 85px 125px 85px;
  @media screen and (max-width: 900px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 95px;
  }
  @media screen and (max-width: 600px) {
    padding: 80px 14px 125px 14px;
  }
`;

export const ContactFormRow = styled.div`
  width: 50%;
  & h2 {
    color: #6966eb;
    font-size: 50px;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 24px;
  }
  @media screen and (max-width: 900px) {
    width: 90%;
  }
  @media screen and (max-width: 600px) {
    width: 92%;
  }
  @media screen and (max-width: 400px) {
    width: 93%;
  }
`;

export const ContactFormInputField = styled.div`
  width: 100%;
  margin: 20px 0 20px 0;
  & label {
    color: #5e779d;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 8px;
  }
  & input {
    width: 100%;
    background-color: #e4e5e9;
    color: #333;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    border: 1px solid #eee;
    outline: none;
    line-height: 1;
    padding: 14px 18px 14px 18px;
    border-radius: 100px;
  }
`;

export const ContactFormTextareaField = styled.div`
  width: 100%;
  margin: 20px 0 20px 0;
  & label {
    color: #5e779d;
    font-weight: 600;
    font-family: "Montserrat", sans-serif;
    margin-bottom: 8px;
  }
  & .contact_textarea_field {
    height: 172px;
    width: 100%;
    outline: none;
    color: #333;
    border: 1px solid #eee;
    background: #e4e5e9;
    padding: 14px 18px 14px 18px;
    font-size: 1.1rem;
    font-weight: 600;
    font-family: "Poppins", sans-serif;
    line-height: 1;
    resize: none;
    border-radius: 17px;
    &::placeholder {
      color: #aaa;
      font-weight: 500;
      font-family: "Poppins", sans-serif;
    }
  }
`;

export const ContactSubmitButton = styled.button`
  width: 60%;
  background-color: #817ffe;
  color: #fff;
  padding: 12px 0 12px 0;
  border: none;
  border-radius: 100px;
  font-weight: 600;
  box-shadow: rgb(149 157 165 / 20%) 0px 8px 24px;
  &:hover {
    background-color: #706ef8;
    transition: 0.2s ease;
  }
`;

export const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 75px;
`;

export const ContactBg = styled.div`
  display: flex;
  justify-content: center;
  & img {
    width: 100%;
  }
`;

export const ContactAddress = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

export const ContactAddressColumn = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
  & .contact_icon {
    color: #adbcd3;
  }
  & span {
    color: #5e779d;
  }
`;

export const ContactSocialIcons = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  & .facebook_icon {
    color: #4267b2;
    cursor: pointer;
    &:hover {
      color: #aaa;
      transition: 0.2s ease;
    }
  }
  & .twitter_icon {
    color: #1da1f2;
    cursor: pointer;
    &:hover {
      color: #aaa;
      transition: 0.2s ease;
    }
  }
  & .instagram_icon {
    color: #962fbf;
    cursor: pointer;
    &:hover {
      color: #aaa;
      transition: 0.2s ease;
    }
  }
`;
