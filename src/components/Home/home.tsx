import {
  ActiveImg,
  BeeKeeper,
  DeliciousCon,
  GreenBtn,
  MainHome,
  SliderCon,
} from "../styles/style";
import bee1 from "../assets/HomePageAssets/bee1.svg";
import bee2 from "../assets/HomePageAssets/bee2.svg";
import beeKeeper from "../assets/HomePageAssets/beekeeper.jpg";
import arrowDown from "../assets/Arrow down.svg";
import Slider from "react-slick";
import frame from "../assets/Frame.svg";
import partner1 from "../assets/HomePageAssets/PartnersImgs/partner1.png";
import partner2 from "../assets/HomePageAssets/PartnersImgs/partner2.png";
import partner3 from "../assets/HomePageAssets/PartnersImgs/partner3.png";
import partner4 from "../assets/HomePageAssets/PartnersImgs/partner4.png";
import partner5 from "../assets/HomePageAssets/PartnersImgs/partner5.png";
import partner6 from "../assets/HomePageAssets/PartnersImgs/partner6.png";
import partner7 from "../assets/HomePageAssets/PartnersImgs/partner7.png";
import partner8 from "../assets/HomePageAssets/PartnersImgs/partner8.png";

const Home = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    vertical: false,
    arrows: false,
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
    <MainHome>
      <DeliciousCon>
        <h2>
          <img src={bee1} alt="bee1" />
          <div className="DelCon">
            Delicious & Unlimited Online <br /> Honey Delivery
            <GreenBtn className="More">Click and buy</GreenBtn>
          </div>
          <img src={bee2} alt="bee1" />
        </h2>
      </DeliciousCon>
      <BeeKeeper src={beeKeeper} alt="beekeeper-img" />
      <ActiveImg src={arrowDown} alt="arrow-img" className="ActiveImg" />
      <div
        style={{
          marginTop: "70px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginBottom: "30px",
          gap: "10px",
        }}
      >
        <h4>Our Sweet Clients and Partners</h4>
        <img src={frame} alt="frame" />
      </div>
      <SliderCon className="Slider">
        <Slider {...settings}>
          <img src={partner1} alt="partner1" className="partner" />
          <img src={partner2} alt="partner2" className="partner" />
          <img src={partner3} alt="partner3" className="partner" />
          <img src={partner4} alt="partner4" className="partner" />
          <img src={partner5} alt="partner5" className="partner" />
          <img src={partner6} alt="partner6" className="partner" />
          <img src={partner7} alt="partner7" className="partner" />
          <img src={partner8} alt="partner8" className="partner" />
        </Slider>
      </SliderCon>
    </MainHome>
  );
};

export default Home;
