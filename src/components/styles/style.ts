import styled from "styled-components";

export const NavbarCon = styled.div`
  height: 120px;
  flex-shrink: 0;
  display: flex;
  padding: 20px 50px;
  justify-content: center;
  align-items: center;
  gap: 200px;
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
`;

export const MenuCon = styled.div`
  display: flex;
  gap: 30px;
  cursor: pointer;
  justify-content: center;
  p {
    color: #201a18;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 1.19px;
    text-transform: uppercase;
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
`;
