
import {
  AlignCon,
  CreateBtn,
  InputCon,
  MainRegister,
  MainRegisterCon,
  RegisterDiv,
  SingInBtn,
} from "../styles/style";

import { NavLink } from "react-router-dom";

const RegisterComponent = () => {
  return (
    <MainRegister>
      <MainRegisterCon>
        <RegisterDiv>
          <p>Sign up</p>
        </RegisterDiv>
        <InputCon>
          <p>Email</p>
          <input type="text" placeholder="Your email" />
          <p>Password</p>
          <input type="password" placeholder="Your password" />
          <p>Repeat password</p>
          <input type="password" placeholder="Your password" />
        </InputCon>
        <NavLink to={"/login"}>
          <CreateBtn>SIGN UP</CreateBtn>
        </NavLink>
      </MainRegisterCon>
    </MainRegister>
  );
};

export default RegisterComponent;