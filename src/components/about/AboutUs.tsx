import {
  AboutCon,
  AboutUsFirst,
  AboutUsMain,
  AmazingTeam,
  BeeberryCon,
  BeeberryConLeft,
  BeeberryConRight,
  BeeberryHoney,
  CarouselDiv,
  GetInTouch,
  GetInTouchIn,
  TickText,
  Title,
  YellowBtn,
  YellowTwoBtn,
} from "../styles/style";
import aboutImg1 from "../assets/AboutUsAssets/honey-1006972_640.jpg";
import aboutImg2 from "../assets/AboutUsAssets//honey-8045459_640.jpg";
import frame from "../assets/Frame.svg";
import tick from "../assets/AboutUsAssets/tick.svg";
import AboutModal from "./modal";
import star from "../assets/AboutUsAssets/star.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import leslie from "../assets/AboutUsAssets/beekeeper1.jpg";

const AboutUs = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };
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
      <GetInTouch>
        <AboutModal />
        <GetInTouchIn>
          <div>
            <h6>Get In Touch</h6>
            <img src={frame} alt="frame" />
          </div>
          <div>
            <h2>
              Find Us Here. Make <br /> Real Results Happen.
            </h2>
            <img src={star} alt="star-img" />
            <p>Trust Score 4.6 (Based on 1,500 Reviews)</p>
          </div>
        </GetInTouchIn>
      </GetInTouch>
      <AmazingTeam>
        <Title>
          <h6>Amazing Team</h6>
          <img src={frame} alt="frame" />
          <h2> Our Team of Experts</h2>
        </Title>
        <div>
          <Carousel
            swipeable={false}
            draggable={false}
            showDots={false}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <CarouselDiv>
              <img src={leslie} alt="leslie-img" />
              <div>
                <h2>Leslie Alexander</h2>
                <h4>Beekeeper</h4>
              </div>
            </CarouselDiv>
          </Carousel>
        </div>
      </AmazingTeam>
    </AboutUsMain>
  );
};

export default AboutUs;
