import {
  BackgroundImg,
  BackRightCon,
  ButtonsCon,
  GreenBtn,
  HoneyPro,
  MainCon,
  OurServices,
  PromotesCon,
  WhyUsCon,
  YellowBtn,
} from "../styles/style";
import honey from "../assets/honey.jpg";
import mark from "../assets/mark.svg";
import AppModal from "./modal";
import frame from "../assets/Frame.svg";
import honeycomb from "../assets/honeycomb 6.svg";
import beehive from "../assets/008-beehive.svg";
import shopping from "../assets/shopping-bag 2.svg";
import honey007 from "../assets/007-honey.svg";
import arrowDown from "../assets/Arrow down.svg";
import bee from "../assets/bee.png";

const MainPage = () => {
  return (
    <MainCon>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#F9F6F2",
        }}
      >
        <BackgroundImg>
          <div>
            <h1>Natural Organic Homemade Honey</h1>
            <h3>
              We collect the best varieties of honey to bring health to your
              home!Honey is a sweet and viscous substance made by several bees
            </h3>
            <PromotesCon>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={mark} alt="mark" />
                <p>Promotes burn and wound healing</p>
              </div>
              <div style={{ display: "flex", gap: "15px" }}>
                <img src={mark} alt="mark" />
                <p>May help suppress coughing in children</p>
              </div>
            </PromotesCon>
            <ButtonsCon>
              <GreenBtn>Contact us</GreenBtn>
              <YellowBtn>Shop Now</YellowBtn>
            </ButtonsCon>
            <img
              src={arrowDown}
              alt="arrow-img"
              style={{
                width: "120px",
                height: "120px",
                position: "relative",
                marginBottom: "-60px",
                marginTop: "20px",
              }}
            />
          </div>
        </BackgroundImg>
        <BackRightCon>
          <img src={honey} alt="honey" />
        </BackRightCon>
      </div>
      <div
        style={{
          marginTop: "-400px",
          zIndex: "1",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "fit-content",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <AppModal />
      </div>
      <OurServices>
        <h4>Our Services</h4>
        <img src={frame} alt="frame" />
        <h2>We Provide The Best Quality</h2>
        <div style={{ display: "flex", gap: "30px" }}>
          <HoneyPro className="HoneyCon">
            <img src={honeycomb} alt="honeycomb-img" />
            <p>Honey Production</p>
          </HoneyPro>
          <HoneyPro>
            <img src={beehive} alt="beehive-img" />
            <p>Beekeeping Classes</p>
          </HoneyPro>
          <HoneyPro>
            <img src={shopping} alt="shopping-img" />
            <p>Honey Shop</p>
          </HoneyPro>
          <HoneyPro>
            <img src={honey007} alt="honey007-img" />
            <p>Swarm Removal</p>
          </HoneyPro>
        </div>
        <div
          style={{ marginTop: "50px", width: "194px", marginBottom: "100px" }}
        >
          <GreenBtn className="More">More services</GreenBtn>
        </div>
      </OurServices>
      <WhyUsCon>
        <h4>Why Us</h4>
        <img src={frame} alt="frame" />
        <h2>Why Choose Our Products</h2>
        <div>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <img
          src={bee}
          alt="bee-img"
          style={{ width: "411px", height: "434px" }}
        />
        <div></div>
      </WhyUsCon>
    </MainCon>
  );
};

export default MainPage;
