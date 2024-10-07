import { editableInputTypes } from "@testing-library/user-event/dist/utils";
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
  background: #f9f6f2;
  z-index: 5;
`;

export const NavFirstMainCon = styled.div``;

export const NavFirstCon = styled.div`
  display: flex;
  gap: 10px;
  cursor: pointer;
  p {
    color: #201a18;
    font-family: "Arima Madurai";
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

// Home Styles

export const HomeNavbar = styled.div`
  height: 120px;
  flex-shrink: 0;
  display: flex;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
  gap: 200px;
  background: var(--Black-separate, #201a18);
`;

export const BackgroundImg = styled.div`
  flex-shrink: 0;
  background-color: #201a18;
  width: 719px;
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
    font-family: "Arima Madurai", sans-serif;
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
  width: 900px;
  height: 800px;
  overflow: hidden;
  flex-shrink: 0;
  border-radius: 50%;
  z-index: 1;
  margin-top: -340px;
  overflow: hidden;
  margin-left: -100px;

  img {
    width: 1000px;
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
`;
export const GreenBtn = styled.button`
  width: 170px;
  height: 60px;
  flex-shrink: 0;
  background-color: #639533;
  color: white;
  text-transform: uppercase;
  color: #fff;
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.63px;
  border-radius: 8px;
  :hover {
    background-color: blue;
  }
`;
export const YellowBtn = styled.button`
  width: 170px;
  height: 60px;
  flex-shrink: 0;
  background-color: var(--yellow, #fcc41a);
  color: black;
  text-transform: uppercase;
  color: var(--Black, #2b221f);
  font-family: Roboto;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 30px;
  letter-spacing: 0.63px;
  border-radius: 8px;
`;
