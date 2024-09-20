import React from "react";
import "../../styles/footer.css";
import logo from "../../assets/img/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
  <>
   <footer>
        <div id="footer_content">
            <div id="footer_contacts">
                <img src={logo} alt="" />
                <p>THE HUB NUTRIMENT</p>

                <div id="footer_social_media">
                    <a href="#" class="footer-link" id="instagram">
                        <i class="fa-brands fa-instagram"></i>
                    </a>

                    <a href="#" class="footer-link" id="facebook">
                        <i class="fa-brands fa-facebook-f"></i>
                    </a>

                    <a href="#" class="footer-link" id="whatsapp">
                        <i class="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
            </div>
            
            <ul class="footer-list">
                <li>
                    <Link to="/">
                    <h3>Home</h3>
                    </Link>
                </li>
                <li>
                    <a href="#" class="footer-link"><Link  to="/About">About us</Link></a>
                </li>
                <li>
                    <a href="#" class="footer-link"><Link to="/TermsandConditions">Terms and Conditions</Link> </a>
                </li>
                <li>
                    <a href="#" class="footer-link"><Link to="/Signup">Register</Link> </a>
                </li>
            </ul>

            <ul class="footer-list">
                <li>
                    <h3>Become a member</h3>
                </li>
                <li>
                    <a href="#" class="footer-link">Our program</a>
                </li>
                <li>
                    <a href="#" class="footer-link">Our plan</a>
                </li>
                {/* <li>
                    <a href="#" class="footer-link">Cloud</a>
                </li> */}
            </ul>

            <div id="footer_subscribe">
                <h3>Find Us Here</h3>

                <p>
                Lorem Ipsum, simply dummy text, printing, Chandigarh
                </p>

                <div id="input_group">
                <p>+2(784) 1223323</p>
                            <p>info@example.com</p>
                </div>
            </div>
        </div>

        <div id="footer_copyright">
            {year} all rights reserved
        </div>
    </footer>
  
</>
  );
};

export default Footer;
