import {
  IconCon,
  MenuCon,
  NavbarCon,
  NavFirstCon,
  NavFirstMainCon,
} from "../styles/style";
import { NavLink } from "react-router-dom";
import arrow from "../assets/arrow.svg";
import light from "../assets/light.svg";
import searchHome from "../assets/bsearch.svg";
import heartHome from "../assets/heartHome.svg";
import shopHome from "../assets/shopHome.svg";

const Navbar = () => {
  return (
    <NavbarCon>
      <NavFirstMainCon>
        <NavLink to={"/"}>
          <NavFirstCon>
            <img src={light} alt="light" />
            <p className="whiteP">Beeberry</p>
          </NavFirstCon>
        </NavLink>
      </NavFirstMainCon>
      <MenuCon>
        <NavLink to={"/home"}>
          <div className="Align">
            <p className="whiteP">
              Home <img src={arrow} alt="arrow" />
            </p>
          </div>
        </NavLink>

        <div className="Align">
          <p className="whiteP">
            Pages <img src={arrow} alt="arrow" />{" "}
          </p>
        </div>
        <div className="Align">
          <p className="whiteP">About us</p>
        </div>
        <div className="Align">
          <p className="whiteP">
            Gallery <img src={arrow} alt="arrow" />
          </p>
        </div>
        <div className="Align">
          <p className="whiteP">Contact</p>
        </div>
      </MenuCon>
      <IconCon>
        <img src={searchHome} alt="searchHome-img" />
        <img src={heartHome} alt="heartHome-img" />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <p className="whiteP">$458.50</p>
          <img src={shopHome} alt="shopHome-img" />
        </div>
      </IconCon>
    </NavbarCon>
  );
};

export default Navbar;
