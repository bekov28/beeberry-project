import styled from "styled-components";

export const MainCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

// Navbar

export const NavbarCon = styled.div`
  height: 120px;
  flex-shrink: 0;
  display: flex;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
  gap: 200px;
  background: var(--Black-separate, #201a18);
  z-index: 5;
`;

export const NavFirstMainCon = styled.div``;

export const NavFirstCon = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  p {
    color: #201a18;
    font-family: "Arima";
    font-size: 35px;
    font-style: normal;
    font-weight: 900;
    line-height: 55px;
  }
  .whiteP {
    color: white;
  }
`;

export const MenuCon = styled.div`
  display: flex;
  gap: 40px;
  cursor: pointer;
  justify-content: center;
  align-items: center;

  p {
    color: #201a18;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.19px;
    text-transform: uppercase;
    width: 80px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .Align {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    &:active {
      transform: scale(0.98);
    }
  }
  .About {
    max-width: 100%;
    display: inline-block;
  }
  .whiteP {
    color: white;
  }
`;
export const IconCon = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  p {
    color: #201a18;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.19px;
    text-transform: uppercase;
  }
  .whiteP {
    color: white;
  }
  img {
    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const BackgroundImg = styled.div`
  flex-shrink: 0;
  background-color: #201a18;
  width: 819px;
  height: 600px;
  z-index: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 115px;
  margin-right: -100px;
  h1 {
    color: #fff;
    font-family: "Arima", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;
    width: 575px;
  }
  h3 {
    color: #aca5a3;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    width: 486px;
    margin-top: 20px;
  }
`;
export const ActiveImg = styled.img`
  position: "relative";
  margin-bottom: -120px;

  &:active {
    transform: scale(0.98);
  }
`;

export const BackRightCon = styled.img`
  width: 1100px;
  height: 900px;
  flex-shrink: 0;
  margin-left: -100px;
  display: flex;
  margin-top: -300px;
  z-index: 0;
  border-radius: 50%;
  clip-path: inset(240px 200px 0 0);
`;

export const ModalCon = styled.div`
  margin-top: -400px;
  z-index: 0;
  display: "flex";
  justify-content: "center";
  align-items: "center";
  width: "fit-content";
  margin-left: "auto";
  margin-right: "auto";

  &:active {
    transform: scale(0.98);
  }
`;

export const PromotesCon = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin-top: 20px;

  p {
    color: #fff;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  }
`;

export const Video_ConTainer = styled.div`
  .VideoCon {
    padding-top: 0px;
    text-align: center;
    border-radius: 8px;
    justify-content: center;
  }
`;

export const ButtonsCon = styled.div`
  margin-top: 30px;
  display: flex;
  gap: 20px;
  z-index: 5;
`;

export const GreenBtn = styled.button`
  width: 170px;
  height: 60px;
  flex-shrink: 0;
  background-color: green;
  color: white;
  text-transform: uppercase;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.63px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
  &.More {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 30px;
    letter-spacing: 0.63px;
    text-transform: uppercase;
    box-shadow: 4px 4px 10px rgba(0, 0, 0, 0.5);
  }
`;

export const YellowBtn = styled.button`
  width: 170px;
  height: 60px;
  flex-shrink: 0;
  background-color: var(--yellow, #fcc41a);
  text-transform: uppercase;
  color: var(--Black, #2b221f);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.63px;
  border-radius: 8px;
  border: none;
  cursor: pointer;

  &:active {
    transform: scale(0.98);
  }
`;

// Our Services

export const OurServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f6f2;
  width: 1520px;

  h4 {
    color: var(--pragrap, #50413c);
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
    margin-bottom: 10px;
    margin-top: 70px;
  }
  h2 {
    color: var(--Black, #2b221f);
    text-align: center;
    font-family: "Arima";
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
    margin-top: 30px;
  }
`;
export const HoneyPro = styled.div`
  width: 300px;
  height: 243px;
  flex-shrink: 0;
  border-radius: 0px 20px 20px 0px;
  background: #fff;
  box-shadow: 0px 7px 31px 0px #f8f2ea;
  padding: 60px 40px;
  margin-top: 50px;
  cursor: pointer;

  &:first-child {
    border-left: 3px solid var(--yellow, #fcc41a);
  }

  p {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: 35px;
    margin-top: 50px;
  }

  &:active {
    transform: scale(0.98);
  }
`;

// WhyUse Styles

export const WhyUsCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  background: #fff;

  h4 {
    color: var(--pragrap, #50413c);
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
    margin-bottom: 10px;
  }
  h2 {
    color: var(--Black, #2b221f);
    text-align: center;
    font-family: "Arima";
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
    margin-top: 30px;
  }
`;

export const WhyUsLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;

export const WhyUsRight = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
`;
export const WhyUsImg = styled.img`
  &:active {
    transform: scale(0.98);
  }
`;

// Download Section Styles

export const DownloadCon = styled.div`
  width: 1290px;
  height: 481px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--yellow, #fcc41a);
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 150px;
  padding: 0 100px;
  z-index: 1;

  p {
    color: var(--pragrap, #50413c);
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
    width: 89px;
  }

  h2 {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
    margin-top: 32px;
  }
`;
export const DownloadMini = styled.img`
  width: 180px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 5px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }

  &.Google {
    width: 200px;
    height: 75px;
    margin-left: 20px;
    margin-bottom: -12px;
  }
`;
export const Con = styled.div`
  width: 455px;
  height: 625px;
  z-index: 1;
  img {
    max-width: 555px;
    max-height: 590px;
    &:active {
      transform: scale(0.98);
    }
  }
`;

// Our Products Section Styles

export const OurProducts = styled.div`
  width: 1520px;
  height: auto;
  background: var(--Niotrol, #f9f6f2);
  margin-top: -230px;
  padding-left: 140px;
  padding-right: 140px;

  .OurProduct {
    margin-top: 350px;
    display: flex;
    flex-direction: column;
    justify-content: left;
    z-index: 5;
    width: 97px;

    p {
      color: var(--pragrap, #50413c);
      text-align: center;
      font-family: "Arima";
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: 22px;
    }
  }

  .OurCon {
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 5;
    margin-top: 20px;

    h2 {
      color: var(--Black, #2b221f);
      font-family: "Arima";
      font-size: 50px;
      font-style: normal;
      font-weight: 900;
      line-height: 60px;
    }
  }
`;

export const SliderCon = styled.div`
  width: 100%;
  z-index: 0;

  .MiniCarousel {
    width: 300px;
    height: 468px;
    flex-shrink: 0;
    border-radius: 0px 0px 207px 207px;
    border: 1px solid rgba(43, 34, 31, 0.1);
    background: #f9f6f2;
    padding: 50px;
    margin-top: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: visible;
    position: relative;
    background: #f9f6f2;
    margin-bottom: 30px;
    cursor: pointer;

    &:hover {
      background: #fff;
      .Yellow {
        background-color: #fcc41a !important;
      }
    }

    &:active {
      transform: scale(0.98);
    }
  }
  .slick-slide {
    padding: 0 30px;
  }

  img {
    width: 134px;
    height: 200px;
    flex-shrink: 0;
    border-radius: 10px;
  }
  .AlignCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

    p {
      color: var(--Black, #2b221f);
      text-align: center;
      font-family: "Arima";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 35px;
      width: 175px;
    }

    h3 {
      color: var(--pragrap, #50413c);
      font-family: Roboto;
      font-size: 20px;
      font-style: normal;
      font-weight: 700;
      line-height: 35px;
    }
    h6 {
      color: #50413c;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 35px;
    }
    strong {
      color: #50413c;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 35px;
    }
  }

  .slick-prev,
  .slick-next {
    width: 55px;
    height: 55px; /* Adjust height */
    background-color: white; /* Change background color */
    border-radius: 50%; /* Make the arrow circular */
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    stroke-width: 1px;
    border: 2px solid transparent;
    stroke: rgba(43, 34, 31, 0.1);
  }

  .slick-prev:before,
  .slick-next:before {
    color: black; /* Set the arrow icon color to black */
    font-size: 20px; /* Adjust font size as needed */
  }

  .slick-prev {
    left: 10px;
  }

  .slick-next {
    right: 10px;
  }
  .slick-prev:hover,
  .slick-next:hover {
    background-color: darkgray;
  }
`;

// What We Service Section Styles
export const WhatWeCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f6f2;
  margin-top: 100px;
  margin-bottom: 130px;

  h4 {
    color: var(--pragrap, #50413c);
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
    margin-bottom: 10px;
  }
  h2 {
    color: var(--Black, #2b221f);
    text-align: center;
    font-family: "Arima";
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
    margin-top: 30px;
  }
`;

export const YourCon = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 30px;
`;

export const EasyCon = styled.div`
  width: 380px;
  height: 317px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: -8px 10px 30px 0px rgba(0, 0, 0, 0.06);
  padding: 60px;
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background-color: #f8f8ff;
  }

  .EasyMiniText {
    display: flex;
    flex-direction: column;
    justify-content: left;

    h2 {
      color: var(--Black, #2b221f);
      font-family: "Arima";
      font-size: 24px;
      font-style: normal;
      font-weight: 700;
      line-height: 35px;
      display: flex;
      justify-content: left;
    }
    p {
      color: var(--pragrap, #50413c);
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 29px;
      margin-top: 15px;
    }
  }
`;
export const Testimonial = styled.div`
  width: 1520px;
  height: 760px;
  flex-shrink: 0;
  background: var(--Black, #2b221f);

  .testCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 100px;

    h4 {
      color: white;
      text-align: center;
      font-family: "Arima";
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: 22px;
      margin-bottom: 10px;
    }
    h2 {
      color: white;
      text-align: center;
      font-family: "Arima";
      font-size: 50px;
      font-style: normal;
      font-weight: 900;
      line-height: 60px;
      margin-top: 30px;
    }
  }
`;
export const CarouselItem = styled.div`
  width: 480px;
  height: 314px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Black-separate, #201a18);
  box-shadow: 0px 4px 4px 0px rgba(43, 32, 18, 0.03);
  padding: 50px;
  margin-top: 30px;
  border: 1px solid white;
  cursor: pointer;
  &:active {
    transform: scale(0.99);
  }
  &:hover {
    background: #191970;
  }

  .UpperCon {
    display: flex;
    flex-direction: column;

    img {
      width: 80px;
      height: 80px;
      flex-shrink: 0;
      border-radius: 50%;
    }
    p {
      color: #fff;
      font-family: Roboto;
      font-size: 18px;
      font-style: normal;
      font-weight: 400;
      line-height: 26px;
    }
    h4 {
      color: #fff;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 29px;
      margin-top: 10px;
    }
  }
  h3 {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 29px;
    margin-top: 10px;
    width: 400px;
  }
`;

// Blog Section

export const BlogCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f9f6f2;
  width: 1520px;

  h4 {
    color: var(--pragrap, #50413c);
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
    margin-bottom: 10px;
    margin-top: 120px;
  }
  h2 {
    color: var(--Black, #2b221f);
    text-align: center;
    font-family: "Arima";
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
    margin-top: 30px;
  }
  .BlogFirst {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const BlogFirstCon = styled.div`
  margin-top: 60px;
  display: flex;
  gap: 70px;
  cursor: pointer;

  .blog1 {
    width: 520px;
    height: 510px;
    flex-shrink: 0;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      transform: scale(0.99);
    }
  }
  .OurBookkeepers {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 35px;
    font-style: normal;
    font-weight: 800;
    line-height: 45px;
    margin-top: 30px;
  }
  .ImgCon {
    display: flex;
    gap: 10px;
    justify-content: center;
    align-items: center;
    img {
      width: 30px;
      height: 30px;
      flex-shrink: 0;
      border-radius: 50%;
    }
    p {
      color: var(--pragrap, #50413c);
      font-family: "Arima";
      font-size: 14px;
      font-style: normal;
      font-weight: 600;
      line-height: 29px;
    }
  }
  .ReadMore {
    display: flex;
    gap: 10px;
    p {
      color: var(--pragrap, #50413c);
      font-family: Roboto;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px;
      letter-spacing: 0.63px;
      text-transform: uppercase;
    }
  }
`;

export const BlogHealth = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 40px;
  p {
    color: var(--pragrap, #50413c);
    font-family: "Arima";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 29px;
    border-radius: 3px;
    border: 1px solid rgba(43, 34, 31, 0.1);
    padding: 3px 13px;
    display: flex;
    flex-shrink: 0;
    height: auto;
    padding: 0 10px;
  }

  h2 {
    color: var(--pragrap, #50413c);
    font-family: "Arima";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
  }
`;

export const BlogHealth2 = styled.div`
  display: flex;
  gap: 30px;
  p {
    color: var(--pragrap, #50413c);
    font-family: "Arima";
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 29px;
    border-radius: 3px;
    border: 1px solid rgba(43, 34, 31, 0.1);
    padding: 3px 13px;
    display: flex;
    flex-shrink: 0;
    height: auto;
    padding: 0 10px;
  }

  h2 {
    color: var(--pragrap, #50413c);
    font-family: "Arima";
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 29px;
  }
`;

export const HealthMini = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 0;

  h2 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }
`;

export const BlogRightCon = styled.div`
  display: flex;
  gap: 90px;
  justify-content: center;
  align-items: center;

  .BlogImg {
    width: 250px;
    height: 176px;
    flex-shrink: 0;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const BlogRightCon2 = styled.div`
  display: flex;
  border-top: 1px solid rgba(43, 34, 31, 0.1);
  gap: 70px;
  justify-content: center;
  align-items: center;

  .BlogImg {
    width: 250px;
    height: 176px;
    flex-shrink: 0;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

export const BlogRightCon3 = styled.div`
  display: flex;
  border-top: 1px solid rgba(43, 34, 31, 0.1);
  gap: 100px;
  justify-content: center;
  align-items: center;

  .BlogImg {
    width: 250px;
    height: 176px;
    flex-shrink: 0;
    border-radius: 20px;
    cursor: pointer;
    &:hover {
      opacity: 0.7;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;

// Footer Section Styles

export const MainFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 668px;
  flex-shrink: 0;
  background: var(--Black, #2b221f);
`;

export const FooterYellow = styled.div`
  display: flex;
  width: 1290px;
  height: 305px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--yellow, #fcc41a);
  margin-top: -340px;
  padding: 90px;
  gap: 100px;
  justify-content: space-evenly;
  align-items: center;
`;

export const NewsLetterLeft = styled.div`
  p {
    color: var(--pragrap, #50413c);
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
    display: flex;
  }

  h3 {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
    margin-top: 10px;
  }
`;
export const NewsLetterRight = styled.div`
  display: flex;
  gap: 15px;
  input {
    width: 368px;
    height: 60px;
    flex-shrink: 0;
    padding: 20px;
    color: var(--pragrap, #50413c);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    border-radius: 5px;
    border: none;
  }
`;
export const BottomFooter = styled.div`
  margin-top: 100px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  gap: 120px;
`;
export const Beeberry = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  p {
    color: #fff;
    font-family: "Arima";
    font-size: 35px;
    font-style: normal;
    font-weight: 900;
    line-height: 55px;
  }
  h3 {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 29px;
  }
  .FollowUs {
    display: flex;
    gap: 20px;
    h4 {
      color: #fff;
      font-family: Roboto;
      font-size: 16px;
      font-style: normal;
      font-weight: 300;
      line-height: 29px;
    }
    img {
      cursor: pointer;

      &:active {
        transform: scale(0.9);
      }
    }
  }
`;
export const UsefulLinks = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  p {
    color: #fff;
    font-family: "Arima";
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
  }
  li {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }
  }
  ul {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 6px;
    list-style-type: none;
  }
  ul li::before {
    content: "•";
    color: #fcc41a;
    font-size: 20px;
    margin-right: 10px;
  }
`;
export const ContactUs = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    color: #fff;
    font-family: "Arima";
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
  }

  p {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
  }
  h3 {
    color: #fff;
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    display: flex;
    gap: 10px;
    align-items: center;
    &:hover {
      background-color: none !important;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;
export const InstagramCon = styled.div`
  z-index: 0;
  display: flex;
  flex-direction: column;
  gap: 20px;
  h2 {
    color: #fff;
    font-family: "Arima";
    font-size: 28px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
  }
  img {
    width: 85.625px;
    height: 85.625px;
    flex-shrink: 0;
    border-radius: 5px;
    cursor: pointer;
    &:hover {
      opacity: 0.8;
    }
    &:active {
      transform: scale(0.98);
    }
  }
`;
export const InstaMini = styled.div`
  margin-right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;

  .instaLogo {
    width: 35px;
    height: 40px;
    z-index: 1;
    margin-left: -60px;
  }
`;

// HomePage Styles

export const MainHome = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 2000px;
  overflow: hidden;

  .ActiveImg {
    margin-top: -70px;
    z-index: 3;
  }

  .Slider img {
    width: 63px;
    height: 75px;
    flex-shrink: 0;
  }
  .Slider {
    width: 100%;
    max-width: 1100px;
    cursor: pointer;
  }
  .partner {
    &:active {
      transform: scale(0.95);
    }
  }
`;

export const DeliciousCon = styled.div`
  width: 1622px;
  height: 1432px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #fcc41a;
  clip-path: inset(60% 0 0 0);
  margin-top: -1770px;

  h2 {
    z-index: 1;
    margin-top: 1020px;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0 100px;
  }
  .DelCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: var(--Black, #2b221f);
    text-align: center;
    font-family: "Arima";
    font-size: 55px;
    font-style: normal;
    font-weight: 900;
    line-height: 75px;
    margin-top: 40px;
  }
`;

export const BeeKeeper = styled.img`
  width: 650px;
  height: 250px;
  flex-shrink: 0;
  border-radius: 236px;
  margin-top: -100px;
  z-index: 1;
`;

export const HomeOurServices = styled.div`
  width: 1100px;
  flex-shrink: 0;
  background: #f9f6f2;
  margin-top: 70px;
  padding: 70px 120px;
`;
