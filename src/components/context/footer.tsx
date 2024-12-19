import {
  Beeberry,
  BottomFooter,
  ButtonsCon,
  ContactUs,
  FooterYellow,
  GreenBtn,
  InstagramCon,
  InstaMini,
  MainFooter,
  NewsLetterLeft,
  NewsLetterRight,
  UsefulLinks,
} from "../styles/style";
import frame2 from "../assets/Frame2.svg";
import logo from "../assets/light.svg";
import facebook from "../assets/facebook-f.svg";
import pinterest from "../assets/pinterest-p.svg";
import instagram from "../assets/instagram.svg";
import twitter from "../assets/twitter.svg";
import phone from "../assets/phone-call.svg";
import email from "../assets/email.svg";
import { NavLink } from "react-router-dom";
import honey1 from "../assets/footerInstaassets/honey1.png";
import honey2 from "../assets/footerInstaassets/honey2.jpg";
import honey3 from "../assets/footerInstaassets/honey3.jpg";
import honey4 from "../assets/footerInstaassets/honey4.jpg";
import honey5 from "../assets/footerInstaassets/honey5.jpg";
import honey6 from "../assets/footerInstaassets/honey6.jpg";
import instafooter from "../assets/footerInstaassets/insta_footer.svg";

const Footer = () => {
  return (
    <div>
      <MainFooter>
        <FooterYellow>
          <NewsLetterLeft>
            <p>Newsletter</p>
            <img src={frame2} alt="frame-img" />
            <h3>
              Get Now Free 20% Discount For <br />
              All Products On Your First Order!
            </h3>
          </NewsLetterLeft>
          <NewsLetterRight>
            <form>
              <input type="email" placeholder="Enter your e-mail" />
            </form>
            <GreenBtn style={{ zIndex: "5" }} className="More">
              Subscribe
            </GreenBtn>
          </NewsLetterRight>
        </FooterYellow>
        <BottomFooter>
          <Beeberry>
            <div
              style={{
                display: "flex",
                gap: "10px",
              }}
            >
              <NavLink to={"/"}>
                <div
                  style={{ display: "flex", gap: "10px", cursor: "pointer" }}
                >
                  <img src={logo} alt="logo" />
                  <p>Beeberry</p>
                </div>
              </NavLink>
            </div>
            <div style={{ width: "241px" }}>
              <h3>
                Beeberrry is a leading brand. We are 8 years old and have
                largest network. Raw honey contains an array of plant chemicals
                that act as antioxidants.
              </h3>
            </div>
            <div className="FollowUs">
              <h4>Follow Us:</h4>
              <img src={facebook} alt="facebook-img" />
              <img src={twitter} alt="twitter-img" />
              <img src={pinterest} alt="pinterest-img" />
              <img src={instagram} alt="instagram-img" />
            </div>
          </Beeberry>
          <UsefulLinks>
            <p style={{ cursor: "pointer" }}>Useful Links</p>
            <div>
              <ul>
                <li>Terms & Conditions</li>
                <li>Payment Methods</li>
                <li>Privacy Policy</li>
                <li>Product Complaint</li>
                <li>Careers</li>
              </ul>
            </div>
          </UsefulLinks>
          <NavLink to={"/contact"}>
            <ContactUs>
              <h2>Contact Us</h2>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  cursor: "pointer",
                }}
              >
                <p>
                  07505, Bucheon city, Gyonggi-do, <br /> South Korea{" "}
                </p>
                <div>
                  <h3>
                    <img src={phone} alt="phone-img" />
                    +82 10 0000 0000
                  </h3>
                </div>
                <div>
                  <h3>
                    <img src={email} alt="email-img" />
                    berdiyor@example.com
                  </h3>
                </div>
                <div>
                  <h3>
                    <img src={email} alt="email-img" />
                    berdiyor@example.com
                  </h3>
                </div>
              </div>
            </ContactUs>
          </NavLink>
          <InstagramCon>
            <h2>Instagram</h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "8px",
              }}
            >
              <InstaMini>
                <img src={honey1} alt="honey1" style={{ opacity: "0.3" }} />
                <img src={instafooter} alt="insta" className="instaLogo" />
              </InstaMini>
              <img src={honey2} alt="honey2" />
              <img src={honey3} alt="honey3" />
              <img src={honey4} alt="honey4" />
              <img src={honey5} alt="honey5" />
              <img src={honey6} alt="honey6" />
            </div>
          </InstagramCon>
        </BottomFooter>
      </MainFooter>
    </div>
  );
};

export default Footer;
