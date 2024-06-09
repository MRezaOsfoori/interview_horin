import { createContext, useContext, useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import axiosInstance from "@/lib/api/axiosInstance";
import { logoutAccount } from "@/lib/api";
import { useNavigate } from "react-router-dom";

export type IUser = {
  user_id: string;
};
export type Itokens = {
  access: string;
  refresh: string;
};

export type NullableUser = IUser | null;
export type NullableTokens = Itokens | null;
export const INITIAL_USER = {
  user_id: "",
};
export const INITIAL_TOKENS = {
  access: "",
  refresh: "",
};

const INITIAL_STATE = {
  authTokens: INITIAL_TOKENS,
  user: INITIAL_USER,
  isLoading: false,
  setUser: () => {},
  setAuthTokens: () => {},
  updateToken: () => {},
  logout: () => {},
};

type IContextType = {
  authTokens: NullableTokens;
  user: NullableUser;
  isLoading: boolean;
  setUser: React.Dispatch<React.SetStateAction<NullableUser>>;
  setAuthTokens: React.Dispatch<React.SetStateAction<NullableUser>>;
  updateToken: () => void;
  logout: () => void;
};

const AuthContext = createContext<IContextType>(INITIAL_STATE);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  let [authTokens, setAuthTokens] = useState(() =>
    localStorage.getItem("authTokens")
      ? localStorage.getItem("authTokens")
      : INITIAL_TOKENS
  );
  let [user, setUser] = useState(
    () => localStorage.getItem("authTokens") ?? "Guest"
  );
  let [isLoading, setIsLoading] = useState(true);

  let updateToken = async () => {
    const token = { refresh: JSON.parse(authTokens)?.refresh };

    try {
      const response = await axiosInstance.post("/api/token/refresh/", token);

      if (!response) throw Error;
      if (response.status === 200) {
        let data = response.data;
        setAuthTokens(data);
        setUser(jwtDecode(data.access));
        localStorage.setItem("authTokens", JSON.stringify(data));
      } else {
        logoutAccount();
      }

      if (isLoading) {
        setIsLoading(false);
      }
    } catch (error: any) {
      return error;
    }
  };

  let logout = () => {
    setAuthTokens(null);
    setUser("");
    localStorage.removeItem("authTokens");
    navigate("/sign-in");
  };

  useEffect(() => {
    if (isLoading) {
      updateToken();
    }

    let fourMinutes = 1000 * 60 * 4;

    let interval = setInterval(() => {
      if (authTokens) {
        updateToken();
      }
    }, fourMinutes);
    return () => clearInterval(interval);
  }, [authTokens, isLoading]);

  const value = {
    user,
    authTokens,
    setUser,
    setAuthTokens,
    isLoading,
    updateToken,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export const useUserContext = () => useContext(AuthContext);
