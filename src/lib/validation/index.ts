import { z } from "zod";
export const SignupValidation = z.object({
  username: z.string().min(2),
  email: z.string().email(),
  phonenumber: z.string(),
  password: z.string().min(8),
  confirmPassword: z.string().min(8),
});
export const SigninValidation = z.object({
  email: z.string().email(), 
  password: z.string().min(8),

});
