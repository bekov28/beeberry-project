import {
  ContactCon,
  ContactMini,
  ContactMiniLeft,
  ContactMiniRight,
  ContactUsCon,
  ContanctCon,
  MainContact,
  MapCon,
  SendMessage,
  SendMessageLeft,
  SocialIcons,
  Title,
} from "../styles/style";
import frame from "../assets/Frame.svg";
import facebook from "../assets/contactAssets/facebook-f.svg";
import twitter from "../assets/contactAssets/twitter.svg";
import linkedin from "../assets/contactAssets/linkedin-in.svg";
import instagram from "../assets/contactAssets/instagram.svg";
import skype from "../assets/contactAssets/skype.svg";
import { ContactUs } from "../mail";
import headset from "../assets/contactAssets/headset.svg";
import map from "../assets/contactAssets/map-marker-alt.svg";
import envelope from "../assets/contactAssets/envelope.svg";

const Contact = () => {
  return (
    <MainContact>
      <ContactCon>
        <h2>Contact</h2>
      </ContactCon>
      <SendMessage>
        <SendMessageLeft>
          <Title
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
            <h6>Send Message</h6>
            <img src={frame} alt="frame" />
            <h2>
              Just Have a Quick Any <br /> Questions?
            </h2>
            <h5>
              Honey bees stockpile honey in the hive. Within the hive is a
              structure made <br /> from wax called honeycomb. The honeycomb is
              made up of hundreds or <br /> thousands of hexagonal cells, into
              which the bees regurgitate honey for <br /> storage. Other
              honey-producing species.
            </h5>
            <SocialIcons>
              <div>
                <img src={facebook} alt="facebook" />
              </div>
              <div>
                <img src={twitter} alt="twitter" />
              </div>
              <div>
                <img src={linkedin} alt="linkedin" />
              </div>
              <div>
                <img src={instagram} alt="instagram" />
              </div>
              <div>
                <img src={skype} alt="skype" />
              </div>
            </SocialIcons>
          </Title>
        </SendMessageLeft>
        <ContanctCon>
          <ContactUs />
        </ContanctCon>
      </SendMessage>
      <ContactUsCon>
        <Title className="title">
          <h6>Contact Us</h6>
          <img src={frame} alt="frame" />
          <h2> Get In Touch</h2>
        </Title>
        <ContactMini>
          <ContactMiniLeft>
            <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
              <img src={headset} alt="headset" />
              <p>+(82) 10-0000-0000</p>
            </div>
            <div
              style={{
                display: "flex",
                gap: "20px",
                padding: "20px",
                borderTop: "1px dotted #50413C",
                borderBottom: "1px dotted #50413C",
              }}
            >
              <img src={map} alt="map" />
              <p>+(82) Bucheon city, South Korea</p>
            </div>
            <div style={{ display: "flex", gap: "20px", padding: "20px" }}>
              <img src={envelope} alt="letter" />
              <p>berdiyororzu@gmail.com</p>
            </div>
          </ContactMiniLeft>
          <ContactMiniRight>
            <div>
              <h3>Opening Hours</h3>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <p>Sat - Mon</p>
              <p>10 AM - 8 PM</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
                borderTop: "1px dotted #50413C",
                borderBottom: "1px dotted #50413C",
              }}
            >
              <p>Tus - Thu</p>
              <p>11 AM - 7 PM</p>
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "10px",
              }}
            >
              <p>Friday</p>
              <h4>Off - Day</h4>
            </div>
          </ContactMiniRight>
        </ContactMini>
      </ContactUsCon>
      <MapCon>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d6151.851800458629!2d126.78550062888118!3d37.48297212425105!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2skr!4v1734085859988!5m2!1sen!2skr"
          loading="lazy"
        ></iframe>
      </MapCon>
    </MainContact>
  );
};

export default Contact;
