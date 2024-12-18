import styled from "styled-components";
import leslie from "../assets/AboutUsAssets/beekeeper1.jpg";
import savannah from "../assets/AboutUsAssets/beekeeper2.jpg";
import cameroon from "../assets/AboutUsAssets/beekeeper3.jpg";

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
  width: 100%;

  @media only screen and (max-width: 1100px) {
    .icon {
      display: none;
    }
  }
  @media only screen and (max-width: 750px) {
    .pages {
      display: none;
    }
    .about {
      margin-right: 15px;
    }
  }
  @media only screen and (max-width: 670px) {
    .gallery {
      display: none;
    }
    .light {
      display: none;
    }
    .whiteP {
      margin-right: -15px;
    }
  }
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
  .whiteP:hover {
    color: #fcc41a;
    transform: scale (1.03);
  }
`;

export const MenuCon = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  width: 100%;
  padding: 0 40px;

  p {
    color: #201a18;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.19px;
    text-transform: uppercase;
    width: 90px;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    &:active {
      background-color: #fcc41a;
      border-radius: 7px;
    }
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
  gap: 10px;
  justify-content: center;
  align-items: center;

  img {
    cursor: pointer;
    &:active {
      transform: scale(0.98);
    }
  }
  p {
    color: #fff;
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.19px;
    text-transform: uppercase;
    cursor: pointer;
    &:active {
      background-color: #fcc41a;
      border-radius: 7px;
    }
  }
`;

// Auth Section

export const MainMainCon = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainConAuth = styled.div`
  width: 500px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  height: 520px;
  margin: 100px 0px;
  padding: 20px 30px;

  p {
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
`;
export const InputCon = styled.div`
  margin-top: 10px;
  p {
    color: rgba(55, 55, 55, 0.8);
    font-family: "Open Sans";
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }
  input {
    width: 434px;
    height: 50px;
    flex-shrink: 0;
    margin-top: 10px;
    border-radius: 10px;
    background: rgba(55, 55, 55, 0.1);
    padding: 0 15px;
    border: none;
    margin-bottom: 10px;
  }
`;
export const KeepMeCon = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    color: #373737;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;
export const AlignCon = styled.div`
  display: flex;
  gap: 5px;
  input {
    width: 23px;
    height: 22px;
    flex-shrink: 0;
    border-radius: 5px;
    background: rgba(55, 55, 55, 0.15);
  }
  p {
    color: #373737;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export const SingInBtn = styled.button`
  width: 434px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--blue, #006dab);
  margin-top: 20px;
  background: #fff;
  color: var(--blue, #006dab);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  &:active {
    background: #006dab;
    color: #fff;
    transform: scale(0.95);
  }
`;
export const OrCon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  margin-top: 10px;

  p {
    width: 119.017px;
    height: 1px;
    background: rgba(55, 55, 55, 0.15);
  }
  h4 {
    color: #6d6d6d;
    font-family: "Open Sans";
    font-size: 14px;
    font-style: normal;
    font-weight: 550;
    line-height: normal;
  }
`;

export const IconCon2 = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 15px;
  cursor: pointer;
`;
export const CreateBtn = styled.button`
  width: 434px;
  height: 50px;
  flex-shrink: 0;
  border-radius: 10px;
  border: 2px solid var(--blue, #006dab);
  margin-top: 10px;
  background: #fff;
  color: var(--blue, #006dab);
  font-family: "Open Sans";
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
  &:active {
    background: #006dab !important;
    color: #fff !important;
    transform: scale(0.95);
  }
`;

export const MainRegister = styled.div`
  display: flex;
  justify-content: center;
`;

export const MainRegisterCon = styled.div`
  width: 500px;
  flex-shrink: 0;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 0px 5px 0px rgba(0, 0, 0, 0.1);
  height: 520px;
  margin: 100px 0px;
  padding: 20px 30px;
`;

export const RegisterDiv = styled.div`
  display: flex;
  justify-content: space-between;
  p {
    color: var(--text, #373737);
    font-family: "Open Sans";
    font-size: 27px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }
  img {
    cursor: pointer;
  }
`;

export const MainFirst = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #201a18;
  width: 100%;
  overflow: hidden;
  max-height: 700px;

  @media only screen and (max-width: 1300px) {
    .RightCon {
      display: none;
    }
  }
`;

export const BackgroundImg = styled.div`
  max-height: 600px;
  z-index: 0;
  position: relative;
  display: grid;
  grid-template-areas: "a";
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 115px;
  background-color: #201a18;
  flex-shrink: 0;
  margin-left: 100px;

  h1 {
    color: #fff;
    font-family: "Arima", sans-serif;
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;
    width: 100%;
  }
  h3 {
    color: #aca5a3;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    width: 100%;
    margin-top: 20px;
  }

  @media only screen and (max-width: 1300px) {
    .styleDiv {
      grid-template-areas: "a a";
    }
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
  max-width: 1000px;
  width: 100%;
  max-height: 1000px;
  flex-shrink: 0;
  display: flex;
  margin-top: -300px;
  z-index: 0;
  border-radius: 50%;
  clip-path: inset(240px 200px 0 0);
  margin-right: -240px;
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
  @media only screen and (max-width: 1300px) {
    display: none;
  }
`;

export const NaturalMain = styled.div`
  @media only screen and (max-width: 1300px) {
    display: flex;
    width: 100%;
  }
  @media only screen and (max-width: 1080px) {
    flex-direction: column;
  }
  @media only screen and (max-width: 540px) {
    padding: 0 40px;
    .buttonCon,
    .arrowImg {
      margin-left: 50px;
    }
  }
`;

export const NaturalLeft = styled.div`
  max-width: 575px;
  width: 100%;
  @media only screen and (max-width: 540px) {
    h1 {
      margin-left: 30px;
    }
  }
`;

export const NaturalRight = styled.div``;

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
  &:hover {
    background-color: darkgreen;
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
  &:hover {
    background-color: orange;
  }
`;

// Our Services

export const OurServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f9f6f2;
  width: 100%;

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
export const MainHoneyPro = styled.div`
  display: grid;
  grid-template-areas: "a a a a";
  gap: 30px;
  @media only screen and (max-width: 1340px) {
    grid-template-areas: "a a a";
  }
  @media only screen and (max-width: 1020px) {
    grid-template-areas: "a a";
  }
  @media only screen and (max-width: 650px) {
    grid-template-areas: "a";
  }
`;

export const HoneyPro = styled.div`
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

  &:hover {
    transform: scale(1.03);
    background-color: #f8f8ff;
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
    width: 100vw;
  }
`;
export const WhyUsMain = styled.div`
  display: grid;
  grid-template-areas: "a a a";
  margin-top: 30px;
  gap: 80px;

  @media only screen and (max-width: 1330px) {
    grid-template-areas: "a a";
  }
  @media only screen and (max-width: 900px) {
    grid-template-areas: "a";
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
  width: 90vw;
  max-width: 1290px;
  height: 481px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--yellow, #fcc41a);
  display: flex;
  justify-content: left;
  align-items: center;
  margin-top: 100px;
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
  @media only screen and (max-width: 1180px) {
    flex-direction: column;
    padding: 30px 0px;
    height: 100%;
    justify-content: center;
  }
  @media only screen and (max-width: 720px) {
    h2 {
      font-size: 30px;
      line-height: 40px;
    }
  }
`;

export const DownloadConFirst = styled.div`
  @media only screen and (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
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
  @media only screen and (max-width: 720px) {
    &.Google {
      margin-left: 0px;
    }
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
  @media only screen and (max-width: 1180px) {
    height: 500px;
    width: 400px;
    img {
      height: 500px;
      width: 400px;
    }
  }
`;

// Our Products Section Styles

export const OurProducts = styled.div`
  width: 100%;
  height: auto;
  background: var(--Niotrol, #f9f6f2);
  margin-top: -230px;
  padding-left: 140px;
  padding-right: 140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

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
export const OurProductsFirst = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
`;

export const SliderCon = styled.div`
  max-width: 1420px;
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
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background: var(--Black, #2b221f);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 50px;

  .testCon {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 50px;

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
  width: auto;
  height: 314px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Black-separate, #201a18);
  box-shadow: 0px 4px 4px 0px rgba(43, 32, 18, 0.03);
  padding: 30px;
  margin-top: 30px;
  border: 1px solid white;
  cursor: pointer;
  margin-right: 20px;
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
  width: 100%;

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
  height: 100%;
  flex-shrink: 0;
  background: var(--Black, #2b221f);
  padding: 50px;
`;

export const FooterYellow = styled.div`
  display: grid;
  grid-template-areas: "a a";
  max-width: 1290px;
  width: 90vw;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--yellow, #fcc41a);
  margin-top: -140px;
  padding: 50px;
  gap: 30px;
  justify-content: space-evenly;
  align-items: center;

  @media only screen and (max-width: 1190px) {
    grid-template-areas: "a";
  }
`;

export const NewsLetterLeft = styled.div`
  width: 100%;
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
  @media only screen and (max-width: 1190px) {
    width: 100%;
  }
  @media only screen and (max-width: 580px) {
    h3 {
      font-size: 20px;
    }
  }
`;
export const NewsLetterRight = styled.div`
  display: flex;
  gap: 15px;
  form {
    width: 100%;
  }
  input {
    width: 368px;
    height: 100%;
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

    &:focus {
      background-color: #f0f8ff;
      box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
    }
  }
  @media only screen and (max-width: 700px) {
    input {
      width: 30vw;
      font-size: 14px;
    }
  }
`;

export const BottomFooter = styled.div`
  margin-top: 100px;
  display: grid;
  grid-template-areas: "a a a a";
  justify-content: space-evenly;
  align-items: center;
  gap: 120px;

  @media only screen and (max-width: 1350px) {
    grid-template-areas: "a a a";
    justify-content: center;
    gap: 80px;
  }
  @media only screen and (max-width: 930px) {
    grid-template-areas: "a a";
    justify-content: center;
    gap: 80px;
  }
  @media only screen and (max-width: 670px) {
    grid-template-areas: "a";
    justify-content: center;
    gap: 80px;
  }
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
  width: 200px;
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
  width: 1520px;
  height: 760px;
  flex-shrink: 0;
  border-radius: 50%;
  background-color: #fcc41a;
  background-clip: padding-box;
  margin-top: -350px;

  h2 {
    z-index: 1;
    width: 100%;
    display: flex;
    justify-content: space-evenly;
    padding: 0 100px;
    margin-top: 350px;
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

    .More {
      margin-top: 20px;
    }
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
  display: flex;
  flex-direction: column;
`;

export const OurServicesMain = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 100px;
  margin-top: 30px;
`;

export const OurServicesLeft = styled.div`
  h2 {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 30px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
  }
  h4 {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 35px;
    cursor: pointer;
    &:hover {
      font-weight: 700;
      text-decoration: underline;
    }
  }
  .More {
    margin-top: 50px;
  }
`;

export const OurServicesRight = styled.div`
  img {
    width: 400px;
    height: 380px;
    flex-shrink: 0;
    border-radius: 20px;
    z-index: 1;
    cursor: pointer;
    &:hover {
      transform: scale(1.01);
    }
  }
  .EmptyCon {
    width: 400px;
    height: 380px;
    flex-shrink: 0;
    border-radius: 20px;
    background: var(--yellow, #fcc41a);
    z-index: 0;
    margin-top: -370px;
    margin-left: 20px;
  }
`;

export const AboutCon = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
  width: 1100px;
  h6 {
    color: var(--pragrap, #50413c);
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
  }
`;

export const AboutConLeft = styled.div`
  h2 {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 30px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
  }
`;

export const TwentySeven = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: 20px;
  p {
    width: 52px;
    height: 2px;
    flex-shrink: 0;
    background: var(--Black, #2b221f);
  }
  h3 {
    width: 98px;
    height: 48px;
    flex-shrink: 0;
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 60px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
  }
  h6 {
    color: var(--pragrap, #50413c);
    font-family: Roboto;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
  }
`;
export const AboutConRight = styled.div`
  p {
    display: flex;
    width: 511px;
    height: 72px;
    flex-direction: column;
    justify-content: center;
    flex-shrink: 0;
    color: var(--pragrap, #50413c);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    &::selection {
      background: yellow;
      color: black;
    }
  }
  .LearnMore {
    margin-top: 20px;
  }
`;
export const AboutConModal = styled.div`
  margin-bottom: 40px;
`;

export const MillBeehive = styled.div`
  display: flex;
  margin-bottom: 50px;
  justify-content: space-around;

  h2 {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
  }
  h4 {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }
  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  img {
    width: 100px;
    height: 100px;
    flex-shrink: 0;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0 4px 8px rgba(0, 123, 255, 0.2);
      border-radius: 20px;
    }
  }
`;
export const GalleryCon = styled.div`
  margin-top: 50px;
  margin-bottom: 200px;
`;
export const GalleryTextCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    margin-top: 10px;
    color: var(--Black, #2b221f);
    text-align: center;
    font-family: "Arima";
    font-size: 30px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
  }
  h4 {
    color: var(--pragrap, #50413c);
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
  }
`;
export const ImageGallery = styled.div`
  margin-top: 30px;
  cursor: pointer;
  img:hover {
    transform: scale(1.02);
    z-index: 2;
  }

  .honey2,
  .honey4 {
    width: 540px;
    height: 439px;
    flex-shrink: 0;
    border-radius: 20px;
  }
  .honey1,
  .honey3 {
    width: 320px;
    height: 439px;
    flex-shrink: 0;
    border-radius: 20px;
  }
`;
export const Honeybe = styled.div`
  z-index: 3;
  margin-top: -80px;
  position: relative;
  padding-left: 20px;
  img {
    width: 120px;
    height: 20px;
  }
  h3 {
    color: #fff;
    font-family: "Arima";
    font-size: 24px;
    font-style: normal;
    font-weight: 800;
    line-height: 40px;
  }
`;

// AboutUs

export const AboutUsMain = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const AboutUsFirst = styled.div`
  height: 150px;
  flex-shrink: 0;
  background: var(--Black-separate, #201a18);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    color: #fff;
    text-align: center;
    font-family: "Arima";
    font-size: 60px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;
  }
`;
export const BeeberryCon = styled.div`
  height: 500px;
  background: #fff;
  display: flex;
  margin-top: 70px;
  margin-bottom: 50px;
  display: grid;
  grid-template-areas: "a a";
  gap: 50px;
`;
export const BeeberryConLeft = styled.div`
  display: flex;
  flex-direction: column;
  img {
    width: 340px;
    height: 300px;
    flex-shrink: 0;
    border-radius: 20px;
    &:hover {
      transform: scale(1.02);
    }
  }
  .AboutImg1 {
    z-index: 0;
    margin-left: -150px;
  }
  .AboutImg2 {
    z-index: 1;
    margin-top: -200px;
  }
`;
export const BeeberryConRight = styled.div``;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
  h6 {
    color: var(--pragrap, #50413c);
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
  }
`;
export const BeeberryHoney = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;

  h2 {
    width: 549px;
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
  }
  h3 {
    width: 572px;
    color: var(--pragrap, #50413c);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    margin-top: 5px;
  }
`;
export const TickText = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 10px;
  height: 30px;

  h3 {
    color: var(--pragrap, #50413c);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 26px;
  }
  img {
    margin-top: 10px;
  }
`;
export const YellowTwoBtn = styled.button`
  width: 202px;
  height: 60px;
  flex-shrink: 0;
  margin-top: 20px;
  background-color: #fcc41a;
  border: none;
  border-radius: 5px;
  box-shadow: 7px 7px 5px 0px rgba(0, 0, 0, 0.75);
  cursor: pointer;
  &:active {
    transform: scale(0.98);
  }
  &:hover {
    background-color: #ffd700;
  }
  color: #491403;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 30px;
  letter-spacing: 0.63px;
  text-transform: uppercase;
`;
export const GetInTouch = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

export const GetInTouchIn = styled.div`
  width: 450px;
  height: 285px;
  flex-shrink: 0;
  opacity: 0.9;
  background: var(--Black, #2b221f);
  z-index: 1;
  margin-top: -290px;
  padding: 50px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  margin-left: -390px;

  h2 {
    color: #fff;
    font-family: "Arima";
    font-size: 30px;
    font-style: normal;
    font-weight: 900;
    line-height: 35px;
    margin-top: 10px;
  }
  h6 {
    color: #fff;
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
  }
  img {
    margin-top: 10px;
  }
  p {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    margin-top: 10px;
  }
`;
export const AmazingTeam = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1100px;
  height: 800px;
  background-color: #f9f6f2;
  padding: 60px;

  h2 {
    color: var(--Black, #2b221f);
    text-align: center;
    font-family: "Arima";
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 80px;
  }
`;
export const CarouselComponent = styled.div``;

export const CarouselDiv = styled.div`
  width: 300px;
  height: 475px;
  flex-shrink: 0;
  margin-top: 30px;
  cursor: pointer;
  background-image: url(${leslie});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }
`;

export const GreenCon = styled.div`
  width: 100%;
  height: 80px;
  flex-shrink: 0;
  background: var(--Green, #639533);
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 20px;
  z-index: 1;

  h2 {
    color: #fff;
    font-family: Roboto;
    font-size: 20px;
    font-style: normal;
    font-weight: 500;
    line-height: 35px;
  }
  h4 {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 29px;
  }
`;
export const CarouselDiv2 = styled.div`
  width: 300px;
  height: 475px;
  flex-shrink: 0;
  margin-top: 30px;
  cursor: pointer;
  background-image: url(${savannah});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }
`;
export const CarouselDiv3 = styled.div`
  width: 300px;
  height: 475px;
  flex-shrink: 0;
  margin-top: 30px;
  cursor: pointer;
  background-image: url(${cameroon});
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 15px;
  overflow: hidden;
  &:hover {
    transform: scale(1.01);
    opacity: 0.8;
  }
`;
export const WorkingProcess = styled.div`
  width: 1100px;
  height: 480px;
  flex-shrink: 0;
  background: #2b221f;
  padding: 0px;
  img.dripping {
    width: 152px;
    height: 219px;
    flex-shrink: 0;
    margin-right: -28px;
  }
  h6 {
    color: #fff;
    text-align: center;
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 22px;
  }
  h2 {
    color: #fff;
    text-align: center;
    font-family: "Arima";
    font-size: 50px;
    font-style: normal;
    font-weight: 900;
    line-height: 60px;
    margin-top: 30px;
  }
`;
export const WorkIconCon = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-top: 30px;
  padding: 0px 50px;

  img {
    width: 150px;
    height: 150px;
    flex-shrink: 0;
    cursor: pointer;
    &:hover {
      transform: scale(1.03);
    }
  }
  img.special {
    width: 58px;
    height: 18px;
    flex-shrink: 0;
  }
`;

// Contact Section

export const MainContact = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ContactCon = styled.div`
  height: 150px;
  flex-shrink: 0;
  background: var(--Black-separate, #201a18);
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    color: #fff;
    text-align: center;
    font-family: "Arima";
    font-size: 60px;
    font-style: normal;
    font-weight: 900;
    line-height: 72px;
  }
`;
export const SendMessage = styled.div`
  display: grid;
  grid-template-areas: "a a";
  justify-content: center;
  gap: 20px;
  width: 100vw;
  height: 100%;
  background: var(--Niotrol, #f9f6f2);
  padding: 30px;
  h2 {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 40px;
    font-style: normal;
    font-weight: 900;
    line-height: 40px;
    margin-top: 15px;
  }
  h5 {
    color: var(--pragrap, #50413c);
    font-family: Roboto;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
    margin-top: 15px;
  }
  @media only screen and (max-width: 850px) {
    grid-template-areas: "a";
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
export const SendMessageLeft = styled.div`
  padding: 20px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 10px;
  margin-top: 15px;
  div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    flex-shrink: 0;
    border-radius: 50%;
    border: 2px solid rgba(43, 34, 31, 0.1);
    cursor: pointer;
    &:hover {
      background-color: #fcc41a;
      transform: scale(1.1);
    }
  }
`;

export const ContanctCon = styled.div`
  display: flex;
  width: 400px;
  height: 100%;
  flex-shrink: 0;
  background-color: #fff;
  stroke-width: 1px;
  stroke: rgba(43, 34, 31, 0.1);
  padding: 20px;
  margin-bottom: 50px;

  label,
  input,
  textarea {
    width: 100%;
  }
  label {
    color: var(--Black, #2b221f);
    font-family: "Arima";
    font-size: 16px;
    font-style: normal;
    font-weight: 900;
    line-height: 30px;
    letter-spacing: 0.4px;
  }
  input {
    border-radius: 5px;
    border: 1px solid rgba(43, 34, 31, 0.1);
    height: 40px;
    flex-shrink: 0;
    padding: 10px;
    margin-bottom: 10px;
  }
  textarea {
    border-radius: 5px;
    border: 1px solid rgba(43, 34, 31, 0.1);
    background: #fff;
    height: 70px;
    flex-shrink: 0;
    padding: 10px;
  }
  @media only screen and (max-width: 850px) {
    padding: 50px;
    width: 80vw;
  }
`;
export const ContactUsCon = styled.div`
  width: 100%;
  height: 100%;
  flex-shrink: 0;
  background: #2b221f;
  padding: 50px;
  .title {
    h6 {
      color: #fff;
      text-align: center;
      font-family: "Arima";
      font-size: 16px;
      font-style: normal;
      font-weight: 900;
      line-height: 22px;
    }
    h2 {
      color: #fff;
      text-align: center;
      font-family: "Arima";
      font-size: 50px;
      font-style: normal;
      font-weight: 900;
      line-height: 60px;
      margin-top: 20px;
    }
  }
`;

export const ContactMini = styled.div`
  display: grid;
  grid-template-areas: "a a";
  justify-content: center;
  align-items: center;
  margin-top: 50px;
  gap: 30px;
  padding: 0 20px;
  @media only screen and (max-width: 950px) {
    grid-template-areas: "a";
  }
`;
export const ContactMiniLeft = styled.div`
  width: 420px;
  height: 286px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Black-separate, #201a18);
  padding: 40px;
  p {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 29px;
  }
`;
export const ContactMiniRight = styled.div`
  width: 420px;
  height: 286px;
  flex-shrink: 0;
  border-radius: 20px;
  background: var(--Black-separate, #201a18);
  padding: 40px;
  p {
    color: #fff;
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: 29px;
  }
  h3 {
    color: #fff;
    text-align: center;
    font-family: "Arima";
    font-size: 24px;
    font-style: normal;
    font-weight: 600;
    line-height: 35px;
  }
  h4 {
    color: var(--yellow, #fcc41a);
    font-family: Roboto;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 29px;
  }
`;
export const MapCon = styled.div`
  iframe {
    height: 600px;
    width: 100vw;
    border: 0;
  }
`;
