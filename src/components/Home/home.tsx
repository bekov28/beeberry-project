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
          <img about="" />
          <img about="" />
          <img about="" />
          <img about="" />
          <img about="" />
          <img about="" />
          <img about="" />
          <img about="" />
        </Slider>
      </SliderCon>
    </MainHome>
  );
};

export default Home;
