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
  ModalCon,
  OurProducts,
  OurServices,
  PromotesCon,
  SliderCon,
  WhatWeCon,
  WhyUsCon,
  WhyUsImg,
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
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import img1 from "../main/carouselAssets/1.jpg";
import img2 from "../main/carouselAssets/2.jpg";
import img3 from "../main/carouselAssets/3.jpg";
import img4 from "../main/carouselAssets/4.jpg";
import img5 from "../main/carouselAssets/5.jpg";
import img6 from "../main/carouselAssets/6.jpg";
import cart from "../main/carouselAssets/shopping-bag 1.svg";

const MainPage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    vertical: false,
    arrows: true,
    centerMode: true,
    centerPadding: "15px",
    responsive: [
      {
        breakpoint: 1250,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerMode: true,
          centerPadding: "0px",
        },
      },
    ],
  };
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
      <ModalCon>
        <AppModal />
      </ModalCon>
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
          <WhyUsImg
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
          <div>
            <img src={frame} alt="frame" />
          </div>
        </div>
        <div className="OurCon">
          <h2>Our 100% Fresh Honey</h2>
          <GreenBtn style={{ zIndex: "5" }} className="More">
            All products
          </GreenBtn>
        </div>
        <SliderCon>
          <Slider {...settings}>
            <div className="MiniCarousel">
              <img src={img1} alt="img1" />
              <div className="AlignCon">
                <p>Dark Honey</p>
                <h3>$11.50</h3>
                <div style={{ display: "flex" }}>
                  <h6>Weight: </h6>
                  <strong>1KG</strong>
                </div>
              </div>
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    width: "17px",
                    height: "17px",
                    position: "absolute",
                    bottom: "-25px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 10,
                  }}
                />
              </div>
            </div>
            <div className="MiniCarousel">
              <img src={img2} alt="img2" />
              <div className="AlignCon">
                <p>Premium Honey</p>
                <h3>$10.50</h3>
                <div style={{ display: "flex" }}>
                  <h6>Weight: </h6>
                  <strong>1KG</strong>
                </div>
              </div>
              <img
                src={cart}
                alt="cart"
                style={{
                  width: "55px",
                  height: "55px",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              />
            </div>
            <div className="MiniCarousel">
              <img src={img3} alt="img3" />
              <div className="AlignCon">
                <p>Organic Honey</p>
                <h3>$12.50</h3>
                <div style={{ display: "flex" }}>
                  <h6>Weight: </h6>
                  <strong>1KG</strong>
                </div>
              </div>
              <img
                src={cart}
                alt="cart"
                style={{
                  width: "55px",
                  height: "55px",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              />
            </div>
            <div className="MiniCarousel">
              <img src={img4} alt="img4" />
              <div className="AlignCon">
                <p>Jarrah Honey</p>
                <h3>$13.50</h3>
                <div style={{ display: "flex" }}>
                  <h6>Weight: </h6>
                  <strong>1KG</strong>
                </div>
              </div>
              <img
                src={cart}
                alt="cart"
                style={{
                  width: "55px",
                  height: "55px",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              />
            </div>
            <div className="MiniCarousel">
              <img src={img5} alt="img1" />
              <div className="AlignCon">
                <p>New Honey</p>
                <h3>$12.75</h3>
                <div style={{ display: "flex" }}>
                  <h6>Weight: </h6>
                  <strong>1KG</strong>
                </div>
              </div>
              <img
                src={cart}
                alt="cart"
                style={{
                  width: "55px",
                  height: "55px",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              />
            </div>
            <div className="MiniCarousel">
              <img src={img6} alt="img1" />
              <div className="AlignCon">
                <p>Sweet Honey</p>
                <h3>$11.50</h3>
                <div style={{ display: "flex" }}>
                  <h6>Weight: </h6>
                  <strong>1KG</strong>
                </div>
              </div>
              <img
                src={cart}
                alt="cart"
                style={{
                  width: "55px",
                  height: "55px",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              />
            </div>
          </Slider>
        </SliderCon>
        <WhatWeCon>
          <h4>What We Serve</h4>
          <img src={frame} alt="frame" />
          <h2>Your Favorite Honey Delivery </h2>
          <div
            style={{ display: "flex", marginTop: "30px", gap: "80px" }}
          ></div>
        </WhatWeCon>
      </OurProducts>
    </MainCon>
  );
};

export default MainPage;
