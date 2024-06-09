import { z } from "zod";
export const SignupValidation = z.object({
  username: z.string().min(2),
  password: z.string().min(8),
});
export const SigninValidation = z.object({
  username: z.string().min(2),
  password: z.string().min(8),

});
