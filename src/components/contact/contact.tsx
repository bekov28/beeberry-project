import {
  ContactCon,
  ContactUsCon,
  ContanctCon,
  MainContact,
  SendMessage,
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

const Contact = () => {
  return (
    <MainContact>
      <ContactCon>
        <h2>Contact</h2>
      </ContactCon>
      <SendMessage>
        <div>
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
        </div>
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
        <div>
          <div></div>
          <div></div>
        </div>
      </ContactUsCon>
    </MainContact>
  );
};

export default Contact;
