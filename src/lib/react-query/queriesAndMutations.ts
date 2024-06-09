import { useMutation } from "@tanstack/react-query";
import { createUserAccount, getHomePageData, logoutAccount, signInAccount } from "../api";

export const useCreateUserAccount = () => {
  return useMutation({
    mutationFn: (user: { username: string; password: string }) =>
      createUserAccount(user),
  });
};
export const useSignInAccount = () => {
  return useMutation({
    mutationFn: (user: { username: string; password: string }) =>
      signInAccount(user),
  });
};
export const useHomePageData = () => {
  return useMutation({
    mutationFn: () => getHomePageData(),
  });
};

