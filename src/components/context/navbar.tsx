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
import SearchInput from "./search";

const Navbar = () => {
  return (
    <NavbarCon>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "1250px",
        }}
      >
        <NavFirstMainCon>
          <NavLink to={"/"}>
            <NavFirstCon>
              <img src={light} alt="light" className="light" />
              <p className="whiteP">Beeberry</p>
            </NavFirstCon>
          </NavLink>
        </NavFirstMainCon>
        <MenuCon className="menu">
          <NavLink to={"/home"}>
            <div className="Align">
              <p className="whiteP">
                Home <img src={arrow} alt="arrow" />
              </p>
            </div>
          </NavLink>
          <NavLink to={"/pages"} className="pages">
            <div className="Align">
              <p className="whiteP">
                Pages <img src={arrow} alt="arrow" />
              </p>
            </div>
          </NavLink>
          <NavLink to={"/about"} className="about">
            <div className="Align">
              <p className="whiteP" style={{ padding: "3px 0px" }}>
                About us
              </p>
            </div>
          </NavLink>
          <NavLink to={"gallery"} className="gallery">
            <div className="Align">
              <p className="whiteP">
                Gallery <img src={arrow} alt="arrow" />
              </p>
            </div>
          </NavLink>
          <NavLink to={"contact"}>
            <div className="Align">
              <p className="whiteP" style={{ padding: "3px 0px" }}>
                Contact
              </p>
            </div>
          </NavLink>
        </MenuCon>
        <IconCon className="icon">
          <SearchInput />
          <NavLink to={"login"}>
            <p className="whiteP">Login </p>
          </NavLink>
          <p>/</p>
          <NavLink to="signup">
            <p className="whiteP">Signup</p>
          </NavLink>
        </IconCon>
      </div>
    </NavbarCon>
  );
};

export default Navbar;
