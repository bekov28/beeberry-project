import {
  AboutCon,
  AboutConLeft,
  AboutConModal,
  AboutConRight,
  ActiveImg,
  BeeKeeper,
  DeliciousCon,
  GalleryCon,
  GalleryTextCon,
  GreenBtn,
  HomeOurServices,
  Honeybe,
  ImageGallery,
  MainHome,
  MillBeehive,
  OurServices,
  OurServicesLeft,
  OurServicesMain,
  OurServicesRight,
  SliderCon,
  TwentySeven,
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
import honeyService from "../assets/HomePageAssets/honeyService.jpg";
import HomeModal from "./modal";
import mill1 from "../assets/HomePageAssets/mill1.svg";
import mill2 from "../assets/HomePageAssets/mill2.svg";
import mill3 from "../assets/HomePageAssets/mill3.svg";
import mill4 from "../assets/HomePageAssets/mill4.svg";
import honey1 from "../assets/HomePageAssets/honey1.jpg";
import honey2 from "../assets/HomePageAssets/honey2.jpg";
import honey3 from "../assets/HomePageAssets/honey3.jpg";
import honey4 from "../assets/HomePageAssets/honey4.jpg";
import honeybee from "../assets/HomePageAssets/honeybe.svg";
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
      </div>
      <HomeOurServices>
        <div className="our-services">
          <h6 style={{ marginLeft: "10px" }}>Our Services</h6>
          <img src={frame} alt="frame" />
        </div>
        <OurServicesMain>
          <OurServicesLeft>
            <h2>
              Check Our Range of <br></br>Services
            </h2>
            <div
              style={{
                marginTop: "30px",
                display: "flex",
                flexDirection: "column",
                gap: "10px",
              }}
            >
              <h4>Honey Production</h4>
              <h4>Beekeeping Classes</h4>
              <h4>Swarm Removal</h4>
              <h4>Honey Shop</h4>
            </div>
            <GreenBtn className="More">More services</GreenBtn>
          </OurServicesLeft>
          <OurServicesRight>
            <img src={honeyService} alt="honey_service" />
            <div className="EmptyCon"></div>
          </OurServicesRight>
        </OurServicesMain>
      </HomeOurServices>
      <AboutCon>
        <div
          style={{
            padding: "0px 90px",
          }}
        >
          <h6>About Beeberry</h6>
          <img src={frame} alt="frame" />
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            gap: "70px",
            marginTop: "20px",
          }}
        >
          <AboutConLeft>
            <h2>
              Unique and Health <br />
              Benefits of Honey
            </h2>
            <TwentySeven>
              <h3>27+</h3>
              <p></p>
              <h6>Years of Experience</h6>
            </TwentySeven>
          </AboutConLeft>
          <AboutConRight>
            <p>
              For over 27 years, our family has been keeping bees around
              Beechworth <br /> producing pure and natural Australian honey.
              Traditions, techniques, and <br /> tales are now being passed from
              the 4th to the 5th generation.
            </p>
            <GreenBtn className="LearnMore">Learn more </GreenBtn>
          </AboutConRight>
        </div>
        <AboutConModal>
          <HomeModal />
        </AboutConModal>
        <MillBeehive>
          <div>
            <img src={mill1} alt="mill1-img" />
            <h2>46</h2>
            <h4>Mil Beehive The Farm </h4>
          </div>
          <div>
            <img src={mill2} alt="mill2-img" />
            <h2>1200</h2>
            <h4>Liters of Honey Sold </h4>
          </div>
          <div>
            <img src={mill3} alt="mill3-img" />
            <h2>46</h2>
            <h4>Bees Families </h4>
          </div>
          <div>
            <img src={mill4} alt="mill4-img" />
            <h2>70</h2>
            <h4>Hectares of Fields </h4>
          </div>
        </MillBeehive>
      </AboutCon>
      <GalleryCon>
        <GalleryTextCon>
          <h4>Gallery</h4>
          <img src={frame} alt="frame" />
          <h2>Our Awesome Gallery</h2>
        </GalleryTextCon>
        <ImageGallery>
          <div style={{ display: "flex", gap: "30px" }}>
            <div>
              <img
                src={honey2}
                alt="honey2"
                className="honey2"
                style={{ zIndex: "0" }}
              />
              <Honeybe>
                <img src={honeybee} alt="honeybee" />
                <h3>Popular Honey Recipes </h3>
              </Honeybe>
            </div>
            <img src={honey1} alt="honey1" className="honey1" />
          </div>
          <div style={{ display: "flex", gap: "30px", marginTop: "30px" }}>
            <img src={honey3} alt="honey3" className="honey3" />
            <img src={honey4} alt="honey4" className="honey4" />
          </div>
        </ImageGallery>
      </GalleryCon>
    </MainHome>
  );
};

export default Home;
