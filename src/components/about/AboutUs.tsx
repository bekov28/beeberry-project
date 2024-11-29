import {
  AboutCon,
  AboutUsFirst,
  AboutUsMain,
  AmazingTeam,
  BeeberryCon,
  BeeberryConLeft,
  BeeberryConRight,
  BeeberryHoney,
  BlogCon,
  BlogFirstCon,
  BlogHealth,
  BlogHealth2,
  BlogRightCon,
  BlogRightCon2,
  BlogRightCon3,
  CarouselDiv,
  CarouselDiv2,
  CarouselDiv3,
  GetInTouch,
  GetInTouchIn,
  GreenCon,
  HealthMini,
  TickText,
  Title,
  WorkIconCon,
  WorkingProcess,
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
import one from "../assets/AboutUsAssets/1.svg";
import two from "../assets/AboutUsAssets/4.svg";
import three from "../assets/AboutUsAssets/5.svg";
import four from "../assets/AboutUsAssets/6.svg";
import arrowIcon from "../assets/AboutUsAssets/right-up 1.svg";
import dripping from "../assets/AboutUsAssets/dripping.svg";
import blog1 from "../assets/blog1.jpg";
import calendar from "../assets/calendar.svg";
import eye from "../assets/eye.svg";
import comment from "../assets/comment.svg";
import arrow from "../assets/Right Arrow.svg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import man2 from "..//assets/man2.jpg";
import man3 from "..//assets/man3.jpg";
import man4 from "..//assets/man4.jpg";
import man5 from "..//assets/man5.jpg";

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
            swipeable={true}
            draggable={true}
            showDots={false}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={false}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
          >
            <CarouselDiv>
              <div></div>
              <GreenCon>
                <h2>Leslie Alexander</h2>
                <h4>Beekeeper</h4>
              </GreenCon>
            </CarouselDiv>
            <CarouselDiv2>
              <div></div>
              <GreenCon>
                <h2>Savannah Nguyen</h2>
                <h4>Gardener</h4>
              </GreenCon>
            </CarouselDiv2>
            <CarouselDiv3>
              <div></div>
              <GreenCon>
                <h2>Cameron Williamson</h2>
                <h4>Field Technician</h4>
              </GreenCon>
            </CarouselDiv3>
          </Carousel>
        </div>
      </AmazingTeam>
      <WorkingProcess>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div></div>
          <img src={dripping} alt="dripping" className="dripping" />
        </div>
        <div style={{ marginTop: "-120px" }}>
          <Title>
            <h6>Working Process</h6>
            <img src={frame} alt="frame" />
            <h2>How We Work For Our Customers</h2>
          </Title>
          <WorkIconCon>
            <img src={one} alt="one" />
            <img src={arrowIcon} alt="arrow-img" className="special" />
            <img src={two} alt="two" />
            <img src={arrowIcon} alt="arrow-img" className="special" />
            <img src={three} alt="three" />
            <img src={arrowIcon} alt="arrow-img" className="special" />
            <img src={four} alt="four" />
          </WorkIconCon>
        </div>
      </WorkingProcess>
      <BlogCon>
        <div style={{ marginBottom: "300px" }}>
          <div className="BlogFirst">
            <h4>Blog & News</h4>
            <img src={frame} alt="frame" />
          </div>
          <h2>Interesting Articles Updated Daily </h2>
          <BlogFirstCon>
            <div>
              <img src={blog1} alt="blog1-img" className="blog1" />
              <BlogHealth>
                <p>Health</p>
                <HealthMini>
                  <h2>
                    <img src={calendar} alt="calendar-img" />
                    October 10, 2022
                  </h2>
                </HealthMini>
                <HealthMini>
                  <h2>
                    <img src={eye} alt="eye-img" />
                    74,00
                  </h2>
                </HealthMini>
                <HealthMini>
                  <h2>
                    <img src={comment} alt="comment-img" />
                    10
                  </h2>
                </HealthMini>
              </BlogHealth>
              <p className="OurBookkeepers">
                Our Beekeepers Begin to Collect <br />
                Honey...
              </p>
              <div
                style={{
                  display: "flex",
                  marginTop: "24px",
                  justifyContent: "space-between",
                }}
              >
                <div className="ImgCon">
                  <img src={man2} alt="man-img" />
                  <p>Leslie Alexander</p>
                </div>
                <div className="ReadMore">
                  <p>Read more</p>
                  <img src={arrow} alt="right-arrow-img" />
                </div>
              </div>
            </div>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "30px" }}
            >
              <BlogRightCon>
                <div>
                  <BlogHealth2>
                    <p>About Honey</p>
                    <HealthMini>
                      <h2>
                        <img src={calendar} alt="calendar-img" />
                        November 10, 2022
                      </h2>
                    </HealthMini>
                    <HealthMini>
                      <h2>
                        <img src={eye} alt="eye-img" />
                        58,00
                      </h2>
                    </HealthMini>
                    <HealthMini>
                      <h2>
                        <img src={comment} alt="comment-img" />8
                      </h2>
                    </HealthMini>
                  </BlogHealth2>
                  <p className="OurBookkeepers">
                    Raw Honey VS Commercial <br />
                    Honey What You Need...
                  </p>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "24px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="ImgCon">
                      <img src={man3} alt="man-img" />
                      <p>Ronald Richards</p>
                    </div>
                    <div className="ReadMore">
                      <p>Read more</p>
                      <img src={arrow} alt="right-arrow-img" />
                    </div>
                  </div>
                </div>
                <img src={blog2} alt="blog2" className="BlogImg" />
              </BlogRightCon>
              <BlogRightCon2>
                <div>
                  <BlogHealth>
                    <p>Bee</p>
                    <HealthMini>
                      <h2>
                        <img src={calendar} alt="calendar-img" />
                        October 22, 2022
                      </h2>
                    </HealthMini>
                    <HealthMini>
                      <h2>
                        <img src={eye} alt="eye-img" />
                        60,00
                      </h2>
                    </HealthMini>
                    <HealthMini>
                      <h2>
                        <img src={comment} alt="comment-img" />
                        10
                      </h2>
                    </HealthMini>
                  </BlogHealth>
                  <p className="OurBookkeepers">
                    5 Ways To Attract Bees To Your <br />
                    Garden...
                  </p>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "24px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="ImgCon">
                      <img src={man5} alt="man-img" />
                      <p>Guy Hawkins</p>
                    </div>
                    <div className="ReadMore">
                      <p>Read more</p>
                      <img src={arrow} alt="right-arrow-img" />
                    </div>
                  </div>
                </div>
                <img src={blog3} alt="blog3" className="BlogImg" />
              </BlogRightCon2>
              <BlogRightCon3>
                <div>
                  <BlogHealth>
                    <p>Health</p>
                    <HealthMini>
                      <h2>
                        <img src={calendar} alt="calendar-img" />
                        November 25, 2022
                      </h2>
                    </HealthMini>
                    <HealthMini>
                      <h2>
                        <img src={eye} alt="eye-img" />
                        80,00
                      </h2>
                    </HealthMini>
                    <HealthMini>
                      <h2>
                        <img src={comment} alt="comment-img" />
                        10
                      </h2>
                    </HealthMini>
                  </BlogHealth>
                  <p className="OurBookkeepers">
                    Why Honey is Necessary for <br />
                    Glowing Skin?
                  </p>
                  <div
                    style={{
                      display: "flex",
                      marginTop: "24px",
                      justifyContent: "space-between",
                    }}
                  >
                    <div className="ImgCon">
                      <img src={man4} alt="man-img" />
                      <p>Darlene Robertson</p>
                    </div>
                    <div className="ReadMore">
                      <p>Read more</p>
                      <img src={arrow} alt="right-arrow-img" />
                    </div>
                  </div>
                </div>
                <img src={blog4} alt="blog4" className="BlogImg" />
              </BlogRightCon3>
            </div>
          </BlogFirstCon>
        </div>
      </BlogCon>
    </AboutUsMain>
  );
};

export default AboutUs;
