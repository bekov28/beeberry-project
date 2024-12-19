import {
  AlignCon,
  CreateBtn,
  ForgotCon,
  InputCon,
  MainRegister,
  MainRegisterCon,
  RegisterDiv,
  SingInBtn,
} from "../styles/style";

import { NavLink } from "react-router-dom";

const ForgotPassword = () => {
  return (
    <MainRegister>
      <ForgotCon>
        <RegisterDiv>
          <p>Forgot Password?</p>
        </RegisterDiv>
        <InputCon>
          <p>Enter your email</p>
          <input type="email" placeholder="Your email" />
        </InputCon>
        <NavLink to={""}>
          <CreateBtn style={{ textDecoration: "none" }}>
            Send verification email
          </CreateBtn>
        </NavLink>
        <NavLink to={"/login"}>
          <a href="#">Go back</a>
        </NavLink>
      </ForgotCon>
    </MainRegister>
  );
};

export default ForgotPassword;
