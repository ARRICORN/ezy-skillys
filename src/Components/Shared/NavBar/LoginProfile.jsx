import { FaRegCircleUser } from "react-icons/fa6";
import NavButton from "./NavButton";
import NavButtonBorder from "./NavButtonBorder";

const LoginProfile = ({ login }) => {
  let profile;

  if (login) {
    profile = (
      <div className=" flex gap-4 scale-90 xl:scale-100">
        <FaRegCircleUser size={30}/>
      </div>
    );
  } else {
    profile = (
      <div className=" flex gap-4 scale-90 xl:scale-100">
        <NavButtonBorder href={"/login"}>Log In</NavButtonBorder>
        <NavButton href={"/create"}>Create Account</NavButton>
      </div>
    );
  }

  return profile;
};

export default LoginProfile;
