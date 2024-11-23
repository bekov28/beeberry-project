import {
  AboutCon,
  AboutUsFirst,
  AboutUsMain,
  BeeberryCon,
  BeeberryConLeft,
  BeeberryConRight,
  BeeberryHoney,
  TickText,
  Title,
  YellowBtn,
  YellowTwoBtn,
} from "../styles/style";
import aboutImg1 from "../assets/AboutUsAssets/honey-1006972_640.jpg";
import aboutImg2 from "../assets/AboutUsAssets//honey-8045459_640.jpg";
import frame from "../assets/Frame.svg";
import tick from "../assets/AboutUsAssets/tick.svg";

const AboutUs = () => {
  return (
    <AboutUsMain>
      <AboutUsFirst>
        <h2>About Us</h2>
      </AboutUsFirst>
      <BeeberryCon>
        <BeeberryConLeft>
          <img src={aboutImg2} alt="about_img2" className="AboutImg1" />
          <img src={aboutImg1} alt="about_img1" className="AboutImg2" />
        </BeeberryConLeft>
        <BeeberryConRight>
          <Title>
            <h6>About Us</h6>
            <img src={frame} alt="frame" />
          </Title>
          <BeeberryHoney>
            <h2>Beeberry Honey is One Iconic Brand.</h2>
            <h3>
              For over 27 years, our family has been keeping bees around
              Beechworth producing pure and natural Australian honey.
              Traditions, techniques, and tales are now being passed from the
              4th to the 5th generation.
            </h3>
            <TickText>
              <img src={tick} alt="tick_img" />
              <h3>Promotes burn and wound healing</h3>
            </TickText>
            <TickText>
              <img src={tick} alt="tick_img" />
              <h3>Better for blood sugar levels than regular sugar</h3>
            </TickText>
            <TickText>
              <img src={tick} alt="tick_img" />
              <h3>Better for blood sugar levels than regular sugar</h3>
            </TickText>
            <YellowTwoBtn> Read our story</YellowTwoBtn>
          </BeeberryHoney>
        </BeeberryConRight>
      </BeeberryCon>
    </AboutUsMain>
  );
};

export default AboutUs;
