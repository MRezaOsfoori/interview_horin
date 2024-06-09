import { z } from "zod";
import { SigninValidation, SignupValidation } from "../validation";
import axiosInstance from "./axiosInstance";
import { useUserContext } from "@/context/AuthContext";
import { useNavigate } from "react-router-dom";


export async function createUserAccount(
  user: z.infer<typeof SignupValidation>
) {
  try {
    const newUser = await axiosInstance.post("/api/register/", {
      username: user.username,
      password: user.password,
    });

    if (!newUser) throw Error;
    return newUser;
  } catch (error: any) {
    return error;
  }
}
export async function signInAccount(user: z.infer<typeof SigninValidation>) {
  try {
    const session = await axiosInstance.post("/api/token/", {
      username: user.username,
      password: user.password,
    });

    if (!session) throw Error;
    return session;
  } catch (error: any) {
    return error;
  }
}

export async function logoutAccount() {
  const { setUser, setAuthTokens } = useUserContext();
  const navigate = useNavigate();

  setAuthTokens(null);
  setUser(null);
  localStorage.removeItem("authTokens");
  navigate("/sign-in");
}

export async function getHomePageData() {
  const authTokens = localStorage.getItem("authTokens");
  if (!authTokens) {
    console.error("No auth tokens found");
    return;
  }

  const parsedTokens = JSON.parse(authTokens);
  const accessToken = parsedTokens?.access;

  if (!accessToken) {
    console.error("No access token found");
    return;
  }

  console.log(accessToken, "accessToken");

  const config = {
    headers: {
      'Authorization': 'Bearer ' + accessToken
    }
  };

  try {
    const response = await axiosInstance.get("/api", config);
    if (!response) {
      throw new Error("No response from server");
    }
    return response;
  } catch (error: any) {
    console.error("Error fetching home page data:", error);
  }
}


