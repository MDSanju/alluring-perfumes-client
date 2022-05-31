import React from "react";
import footerLogoPNG from "../../../images/logo-magtimus.png";
import {
  BoxCopyRight,
  BoxFooter,
  BoxFooterTerms,
  ContainerFooter,
  FOOTER,
} from "../../styles/Footer.styles";
import "./Footer.css";

const Footer = () => {
  return (
    <FOOTER>
      <ContainerFooter>
        <BoxFooter>
          <div>
            <img src={footerLogoPNG} alt="" />
          </div>
          <BoxFooterTerms>
            <p>
              Address: Gianyar, Bali, Indonesia – 802
              <br />
              <br />
              Phone: +62 361 234 4567 <br />
              Email: admin@admin.com
            </p>
          </BoxFooterTerms>
        </BoxFooter>
        <BoxFooter>
          <h2>Supports</h2>
          <a href="https://www.google.com">Contact Us</a>
          <a href="#">Site Map</a>
          <a href="#">Gift Vouchers</a>
          <a href="#">Best Sellers</a>
        </BoxFooter>

        <BoxFooter>
          <h2>Quick Links</h2>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms Service</a>
          <a href="#">Credit</a>
          <a href="#">FAQ</a>
        </BoxFooter>

        <BoxFooter>
          <h2>Social Links</h2>
          <a href="#">
            <i class="fab fa-facebook-square"></i> Facebook
          </a>
          <a href="#">
            <i class="fab fa-twitter-square"></i> Twitter
          </a>
          <a href="#">
            <i class="fab fa-linkedin"></i> Linkedin
          </a>
          <a href="#">
            <i class="fab fa-instagram-square"></i> Instagram
          </a>
        </BoxFooter>
      </ContainerFooter>

      <BoxCopyRight>
        <hr />
        <p>
          Copyright © 2000–2021. All rights reserved!{" "}
          <b>Alluring-perfumes.com™</b>
        </p>
      </BoxCopyRight>
    </FOOTER>
  );
};

export default Footer;
