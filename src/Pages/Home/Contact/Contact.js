import React, { useRef, useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";
import ContactBgImgPng from "../../../images/contact_form_bg.png";
import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import {
  ContactAddress,
  ContactAddressColumn,
  ContactBg,
  ContactFormContainer,
  ContactFormInputField,
  ContactFormRow,
  ContactFormTextareaField,
  ContactInfo,
  ContactSocialIcons,
  ContactSubmitButton,
} from "../../styles/Contact.styles";

const Contact = () => {
  const [successfullySent, setSuccessfullySent] = useState(false);
  const form = useRef();

  const { register, handleSubmit, reset } = useForm();

  const notify = () =>
    toast.success("Your message sent successfully!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

  const onSubmit = (data) => {
    emailjs
      .sendForm(
        "alluring_perfumes_serv",
        "alluring_perfumes_temp",
        form.current,
        "hXp5PhjAC0rq9Oum7"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    alert("Are you sure, you want to send this message?");
    reset();
    setSuccessfullySent(true);
    notify();
  };
  return (
    <ContactFormContainer>
      {successfullySent && (
        <ToastContainer
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      )}
      <ContactFormRow>
        <h2>Let's talk</h2>
        <span style={{ color: "#5e779d" }}>
          If you have any question about "Alluring-perfumes" or you may want to
          contact us directly, then write your words and fill out this form
          below. Then we'll read carefully and get back to you promptly.
        </span>
        <br />
        <br />
        <form ref={form} onSubmit={handleSubmit(onSubmit)}>
          <ContactFormInputField>
            <label>Your Name</label>
            <br />
            <input type="text" name="" id="" {...register("name")} required />
          </ContactFormInputField>
          <ContactFormInputField>
            <label>Your Email</label>
            <br />
            <input type="email" name="" id="" {...register("email")} required />
          </ContactFormInputField>
          <ContactFormInputField>
            <label>Subject</label>
            <br />
            <input
              type="text"
              name=""
              id=""
              {...register("subject")}
              required
            />
          </ContactFormInputField>
          <ContactFormTextareaField>
            <label>Your Message</label>
            <br />
            <textarea
              name=""
              className="contact_textarea_field"
              placeholder="Type something you want..."
              {...register("message")}
              required
            ></textarea>
          </ContactFormTextareaField>
          <ContactSubmitButton type="submit">Send Message</ContactSubmitButton>
        </form>
      </ContactFormRow>
      <ContactFormRow>
        <ContactInfo>
          <ContactBg>
            <img src={ContactBgImgPng} alt="" />
          </ContactBg>
          <br />
          <ContactAddress>
            <ContactAddressColumn>
              <FaMapMarkerAlt className="contact_icon" />
              <span>151 New Park Ave. Hartford, CT 06106 United States</span>
            </ContactAddressColumn>
            <br />
            <ContactAddressColumn>
              <BsFillTelephoneFill className="contact_icon" />
              <span>+1 (203) 302-9245</span>
            </ContactAddressColumn>
            <ContactAddressColumn>
              <MdEmail className="contact_icon" />
              <span>mdsanjucad@gmail.com</span>
            </ContactAddressColumn>
          </ContactAddress>
          <div>
            <ContactSocialIcons>
              <BsFacebook className="facebook_icon" size={48} />
              <BsTwitter className="twitter_icon" size={48} />
              <BsInstagram className="instagram_icon" size={48} />
            </ContactSocialIcons>
          </div>
        </ContactInfo>
      </ContactFormRow>
    </ContactFormContainer>
  );
};

export default Contact;
