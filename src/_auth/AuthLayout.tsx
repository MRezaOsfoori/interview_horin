import { Outlet, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

const AuthLayout = () => {
  let isAuthenticated = false;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="./" />
      ) : (
        <>
          <section className="auth-page ">
            <img
              src="assets/images/logo.png"
              className="hidden xs:block fixed top-4 left-[22%]"
              width={168}
              height={28.43}
              alt="logo"
            />
            <div className="h-full w-full xs:w-[552px] xs:h-[816px]  xs:rounded-[32px] bg-white   flex overflow-scroll custom-scrollbar">
              <Outlet />
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default AuthLayout;
