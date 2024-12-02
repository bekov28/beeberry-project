import {
  ActiveImg,
  BackgroundImg,
  BackRightCon,
  BlogCon,
  BlogFirstCon,
  BlogHealth,
  BlogHealth2,
  BlogRightCon,
  BlogRightCon2,
  BlogRightCon3,
  ButtonsCon,
  CarouselItem,
  Con,
  DownloadCon,
  DownloadMini,
  EasyCon,
  GreenBtn,
  HealthMini,
  HoneyPro,
  MainCon,
  ModalCon,
  OurProducts,
  OurServices,
  PromotesCon,
  SliderCon,
  Testimonial,
  WhatWeCon,
  WhyUsCon,
  WhyUsImg,
  WhyUsLeft,
  WhyUsRight,
  YellowBtn,
  YourCon,
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
import easy from "../assets/order-food 1.svg";
import ellipse from "../assets/Ellipse 119.svg";
import between from "../assets/between.svg";
import card from "../assets/debit-card 1.svg";
import shipped from "../assets/shipped 1.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import man1 from "..//assets/man1.jpg";
import man2 from "..//assets/man2.jpg";
import man3 from "..//assets/man3.jpg";
import man4 from "..//assets/man4.jpg";
import man5 from "..//assets/man5.jpg";
import blog1 from "../assets/blog1.jpg";
import calendar from "../assets/calendar.svg";
import eye from "../assets/eye.svg";
import comment from "../assets/comment.svg";
import arrow from "../assets/Right Arrow.svg";
import blog2 from "../assets/blog2.jpg";
import blog3 from "../assets/blog3.jpg";
import blog4 from "../assets/blog4.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainPage = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 4,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 1500,
    vertical: false,
    arrows: true,
    centerMode: true,
    centerPadding: "15px",
    pauseOnHover: true,
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
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <MainCon>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          backgroundColor: "#201A18",
          width: "100%",
          overflow: "hidden",
          height: "700px",
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
        <BackRightCon src={honey} alt="honey" />
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
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: "100%",
            maxWidth: "1350px",
          }}
        >
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
                className="Yellow"
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    width: "17px",
                    height: "17px",
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
              <div
                className="Yellow"
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    width: "17px",
                    height: "17px",
                  }}
                />
              </div>
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
              <div
                className="Yellow"
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    width: "17px",
                    height: "17px",
                  }}
                />
              </div>
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
              <div
                className="Yellow"
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    width: "17px",
                    height: "17px",
                  }}
                />
              </div>
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
              <div
                className="Yellow"
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    width: "17px",
                    height: "17px",
                  }}
                />
              </div>
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
              <div
                className="Yellow"
                style={{
                  width: "55px",
                  height: "55px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  position: "absolute",
                  bottom: "-25px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  zIndex: 10,
                }}
              >
                <img
                  src={cart}
                  alt="cart"
                  style={{
                    width: "17px",
                    height: "17px",
                  }}
                />
              </div>
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
          <YourCon>
            <EasyCon>
              <img src={easy} alt="easy-img" style={{ zIndex: "1" }} />
              <img
                src={ellipse}
                alt="ellipse-img"
                style={{ zIndex: "0", marginLeft: "-75px" }}
              />
              <div className="EasyMiniText">
                <h2>Easy To Order</h2>
                <p>
                  Raw honey contains an array <br />
                  of plant chemicals that{" "}
                </p>
              </div>
            </EasyCon>
            <img src={between} alt="between-img" />
            <EasyCon>
              <img src={card} alt="card-img" style={{ zIndex: "1" }} />
              <img
                src={ellipse}
                alt="ellipse-img"
                style={{ zIndex: "0", marginLeft: "-75px" }}
              />
              <div className="EasyMiniText">
                <h2>Easy To Payment</h2>
                <p>
                  Raw honey contains an array <br />
                  of plant chemicals that{" "}
                </p>
              </div>
            </EasyCon>
            <img src={between} alt="between-img" />
            <EasyCon>
              <img src={shipped} alt="shipped-img" style={{ zIndex: "1" }} />
              <img
                src={ellipse}
                alt="ellipse-img"
                style={{ zIndex: "0", marginLeft: "-105px" }}
              />
              <div className="EasyMiniText">
                <h2>Fastest Delivery</h2>
                <p>
                  Raw honey contains an array <br />
                  of plant chemicals that{" "}
                </p>
              </div>
            </EasyCon>
          </YourCon>
        </WhatWeCon>
      </OurProducts>
      <Testimonial>
        <div className="testCon">
          <h4>Testimonial</h4>
          <img src={frame} alt="frame" />
          <h2>What People Say About Products </h2>
          <div
            style={{ display: "flex", marginTop: "30px", gap: "80px" }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            maxWidth: "1520px",
          }}
        >
          <Carousel
            swipeable={true}
            draggable={true}
            responsive={responsive}
            ssr={true} // means to render carousel on server-side.
            infinite={true}
            autoPlaySpeed={1000}
            keyBoardControl={true}
            customTransition="all .5"
            transitionDuration={500}
            containerClass="carousel-container"
            removeArrowOnDeviceType={["tablet", "mobile"]}
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding-40-px"
          >
            <CarouselItem>
              <div className="UpperCon">
                <div style={{ marginTop: "10px", display: "flex" }}>
                  <img src={man1} alt="man1" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "20px",
                    }}
                  >
                    <p>Savannah Hopkins</p>
                    <h4>29 Nov 2022</h4>
                  </div>
                </div>
                <h3>
                  I have taken a long time to write this review mainly because
                  we don't consume honey regularly. But, now we were sick and
                  some ayurvedic preparations needed honey as am ingredient.
                  That's when we started consuming this honey. I must say 🤗
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="UpperCon">
                <div style={{ marginTop: "10px", display: "flex" }}>
                  <img src={man2} alt="man2" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "20px",
                    }}
                  >
                    <p>Leslie Alexander</p>
                    <h4>24 Sep 2023</h4>
                  </div>
                </div>
                <h3>
                  When I received the product, I received a thank you note from
                  the company on Whatsapp and a phone call, which was intended
                  to describe how the honey had been harvested. This is very
                  irritating, I don't know why you have an online platform.😊 🤩
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="UpperCon">
                <div style={{ marginTop: "10px", display: "flex" }}>
                  <img src={man3} alt="man1" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "20px",
                    }}
                  >
                    <p>Savannah Hopkins</p>
                    <h4>29 Nov 2022</h4>
                  </div>
                </div>
                <h3>
                  I have responded to the amounts of money offered in Honey Gold
                  from places I regularly shop. I have activated the gold for
                  the product. All my purchases with Kate Spade honey gold as
                  advertised and activated are not awarded in my account. 🤗
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="UpperCon">
                <div style={{ marginTop: "10px", display: "flex" }}>
                  <img src={man4} alt="man4" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "20px",
                    }}
                  >
                    <p>Susanna Hopkins</p>
                    <h4>29 Nov 2023</h4>
                  </div>
                </div>
                <h3>
                  Finally a truly useful deal website that really provides a way
                  so that you never miss a deal. No more searching for coupon
                  codes or wasting valuable time trying to fin ones that work.
                  This website has an extention that automatically searches
                </h3>
              </div>
            </CarouselItem>
            <CarouselItem>
              <div className="UpperCon">
                <div style={{ marginTop: "10px", display: "flex" }}>
                  <img src={man5} alt="man5" />
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      marginLeft: "20px",
                    }}
                  >
                    <p>Laura Obama</p>
                    <h4>29 Jan 2024</h4>
                  </div>
                </div>
                <h3>
                  I have responded to the amounts of money offered in Honey Gold
                  from places I regularly shop. I have activated the gold for
                  the product. All my purchases with Kate Spade honey gold as
                  advertised and activated are not awarded in my account. 🤗
                </h3>
              </div>
            </CarouselItem>
          </Carousel>
        </div>
      </Testimonial>
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
    </MainCon>
  );
};

export default MainPage;
