import {
  ActiveImg,
  BackgroundImg,
  BackRightCon,
  ButtonsCon,
  Con,
  DownloadCon,
  DownloadMini,
  GreenBtn,
  HoneyPro,
  MainCon,
  OurProducts,
  OurServices,
  PromotesCon,
  WhyUsCon,
  WhyUsLeft,
  WhyUsRight,
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
import natural from "../assets/natural.svg";
import flower from "../assets/flower.svg";
import honeyComb from "../assets/honey-comb.svg";
import beesSeal from "../assets/bees-seal.svg";
import hundred from "../assets/100.svg";
import increase from "../assets/increase.svg";
import frame2 from "../assets/Frame2.svg";
import apple from "../assets/apple.png";
import google from "../assets/google.png";
import ai from "../assets/ai.png";

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
            <ActiveImg src={arrowDown} alt="arrow-img" />
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
        <div style={{ display: "flex", marginTop: "30px", gap: "80px" }}>
          <WhyUsLeft>
            <img src={natural} alt="natural-img" />
            <img src={flower} alt="flower-img" />
            <img src={honeyComb} alt="honey-comb" />
          </WhyUsLeft>
          <img
            src={bee}
            alt="bee-img"
            style={{ width: "411px", height: "434px" }}
          />
          <WhyUsRight>
            <img src={beesSeal} alt="beesSeal-img" />
            <img src={hundred} alt="hundred-img" />
            <img src={increase} alt="increase-img" />
          </WhyUsRight>
        </div>
      </WhyUsCon>
      <DownloadCon>
        <div>
          <div className="beeberry">
            {" "}
            <p>Beeberry</p>
            <img src={frame2} alt="frame2-img" />
          </div>
          <h2>
            Download Our App Today. <br />
            And Try From Your Phone
          </h2>
          <DownloadMini src={apple} alt="appleStore-img" />
          <DownloadMini src={google} alt="googlePlay-img" className="Google" />
        </div>
        <Con>
          <img src={ai} alt="ai-img" />
        </Con>
      </DownloadCon>
      <OurProducts>
        <div className="OurProduct">
          <p>Our Products</p>
          <img src={frame} alt="frame" />
          <h2>Our 100% Fresh Honey</h2>
        </div>
        <GreenBtn style={{ zIndex: "5" }}>All products</GreenBtn>
      </OurProducts>
    </MainCon>
  );
};

export default MainPage;
