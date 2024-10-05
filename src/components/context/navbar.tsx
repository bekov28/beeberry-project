import {
  IconCon,
  MenuCon,
  NavbarCon,
  NavFirstCon,
  NavFirstMainCon,
} from "../styles/style";
import logo from "../assets/logo.svg";
import heart from "../assets/heart.svg";
import basket from "../assets/basket.svg";
import search from "../assets/search.svg";

const Navbar = () => {
  return (
    <NavbarCon>
      <NavFirstMainCon>
        <NavFirstCon>
          <img src={logo} alt="logo" />
          <p>Beeberry</p>
        </NavFirstCon>
      </NavFirstMainCon>
      <MenuCon>
        <p>Home </p>
        <p>Pages </p>
        <p>About us</p>
        <p>Gallery</p>
        <p>Contact</p>
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
  );
};

export default Navbar;
