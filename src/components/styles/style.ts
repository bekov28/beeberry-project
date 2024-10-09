import styled from "styled-components";

export const MainCon = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
`;

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
export const BackRightCon = styled.div`
  width: 800px;
  height: 600px;
  overflow: hidden;
  flex-shrink: 0;
  margin-left: -80px;
  display: flex;
  margin-top: -120px;
  z-index: 0;

  img {
    width: 100%;
    height: auto;
    object-fit: cover;
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
  &:hover {
    background-color: greenyellow;
  }
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
  &:hover {
    background-color: greenyellow;
  }
  &:active {
    transform: scale(0.98);
  }
`;
export const OurServices = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 70px;
  background-color: #f9f6f2;
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
export const HoneyPro = styled.div`
  width: 300px;
  height: 243px;
  flex-shrink: 0;
  border-radius: 0px 20px 20px 0px;
  background: #fff;
  box-shadow: 0px 7px 31px 0px #f8f2ea;
  padding: 60px 40px;
  margin-top: 50px;

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
`;
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
