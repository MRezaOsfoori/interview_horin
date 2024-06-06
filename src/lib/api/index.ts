import { z } from "zod";
import { SignupValidation } from "../validation";
import axiosInstance from "./axiosInstance";

export async function createUserAccount(
  user: z.infer<typeof SignupValidation>
) {
  const data = JSON.stringify({
    username: user.username,
    password: user.password,
  });

  console.log(data, "data");

  try {
    const response = await axiosInstance.post("/api/register", data);

    console.log(response, "res");
    return response;
  } catch (error) {
    console.log(error, "createUserAccount");
    return error;
  }
}
