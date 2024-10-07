import {
  BackgroundImg,
  BackRightCon,
  ButtonsCon,
  GreenBtn,
  IconCon,
  MainCon,
  MenuCon,
  NavbarCon,
  NavFirstCon,
  NavFirstMainCon,
  PromotesCon,
  YellowBtn,
} from "../styles/style";
import logo from "../assets/logo.svg";
import heart from "../assets/heart.svg";
import basket from "../assets/basket.svg";
import search from "../assets/search.svg";
import arrow from "../assets/arrow.svg";
import { NavLink } from "react-router-dom";
import honey from "../assets/honey.jpg";
import mark from "../assets/mark.svg";
import AppModal from "./modal";
import play from "../assets/play.svg";

const MainPage = () => {
  return (
    <MainCon>
      <NavbarCon>
        <NavFirstMainCon>
          <NavLink to={"/"}>
            <NavFirstCon>
              <img src={logo} alt="logo" />
              <p>Beeberry</p>
            </NavFirstCon>
          </NavLink>
        </NavFirstMainCon>
        <MenuCon>
          <NavLink to={"/home"}>
            <div className="Align">
              <p>
                Home <img src={arrow} alt="arrow" />
              </p>
            </div>
          </NavLink>

          <div className="Align">
            <p>
              Pages <img src={arrow} alt="arrow" />
            </p>
          </div>
          <div className="Align, About">
            <p>About us</p>
          </div>
          <div className="Align">
            <p>
              Gallery <img src={arrow} alt="arrow" />
            </p>
          </div>
          <div className="Align">
            <p>Contact</p>
          </div>
        </MenuCon>
        <IconCon>
          <img src={search} alt="search" />
          <img src={heart} alt="heart" />
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <p>$458.50</p>
            <img src={basket} alt="basket" />
          </div>
        </IconCon>
      </NavbarCon>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
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
          </div>
        </BackgroundImg>
        <BackRightCon>
          <img src={honey} alt="honey" />
        </BackRightCon>
      </div>
      <div style={{ marginTop: "-400px", zIndex: "3" }}>
        <AppModal />
      </div>
    </MainCon>
  );
};

export default MainPage;
