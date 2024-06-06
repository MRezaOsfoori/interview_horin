import { Button } from "../components/ui/button";
import React from "react";
import { useNavigate } from "react-router-dom";

const AuthPage = () => {
  const navigate=useNavigate()
  return (
  <div className="auth-card ">
     <img
          src="assets/images/logo-purple.png"
          width={366}
          height={63.73}
          alt="logo"
          className="hidden xs:block"
        />
     <img
          src="assets/images/logo.png"
          width={366}
          height={63.73}
          alt="logo"
          className="block xs:hidden"
        />
        <div className=" flex flex-col gap-4">
          <Button className="sign-in-button" onClick={()=>navigate("/sign-in")}>Sign in</Button>
          <Button className="sign-up-button" onClick={()=>navigate("/sign-up")}>
            Sign up
          </Button>
        </div>
  </div>
  );
};

export default AuthPage;
