import {
  AlignCon,
  CreateBtn,
  InputCon,
  KeepMeCon,
  MainConAuth,
  MainMainCon,
  OrCon,
  SingInBtn,
} from "../styles/style";

import { NavLink } from "react-router-dom";
import { IconCon2 } from "../styles/style";

const LoginComponent = () => {
  return (
    <MainMainCon>
      <MainConAuth>
        <h2>Login to Beeberry</h2>
        <InputCon>
          <p>Email</p>
          <input type="text" placeholder="Your email" />
          <p>Password</p>
          <input type="text" placeholder="Your password" />
        </InputCon>
        <KeepMeCon>
          <AlignCon>
            <input type="checkbox" />
            <p>Keep me logged in</p>
          </AlignCon>
          <NavLink to={"/forgot"}>
            <a
              href="#"
              style={{
                textDecoration: "underline",
              }}
            >
              Forgot your password ?
            </a>
          </NavLink>
        </KeepMeCon>
        <NavLink to={"/"}>
          <SingInBtn>SIGN IN</SingInBtn>
        </NavLink>
        <OrCon>
          <p></p>
          <h4>OR</h4>
          <p></p>
        </OrCon>
        <IconCon2></IconCon2>
        <NavLink to={"/signup"}>
          <CreateBtn>CREATE ACCOUNT</CreateBtn>
        </NavLink>
      </MainConAuth>
    </MainMainCon>
  );
};

export default LoginComponent;
