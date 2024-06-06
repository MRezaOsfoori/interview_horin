import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { PasswordInput } from "@/components/ui/passwordInput";
import { SignupValidation } from "../../lib/validation";
import { Link } from "react-router-dom";
import { Switch } from "@/components/ui/switch";
import { createUserAccount } from "@/lib/api";
import { z } from "zod";

const SignupForm = () => {
 
  const form = useForm({
    resolver: zodResolver(SignupValidation),
    defaultValues: {
      username: "",
      email: "",
      phonenumber: "",
      password: "",
      confirmPassword: "",
    },
  });

  const handleSignin = async (user:z.infer<typeof SignupValidation>) => {
    console.log(user, "user");
    createUserAccount(user);
  };
  return (
    <div className="xs:mx-auto w-full h-full p-4  xs:w-[360px] px-4 xs:px-0  ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-4 justify-between  ">
          <div className="flex flex-col gap-4">
            <h1 className="h1-bold mb-4 ">
              Hello! <br /> Register to get started
            </h1>
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="text"
                      {...field}
                      className="auth-input"
                      placeholder="Enter your username"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="email"
                      {...field}
                      className="auth-input"
                      placeholder="Enter your email"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phonenumber"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      type="number"
                      {...field}
                      className="auth-input"
                      placeholder="Enter your phonenumber"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <div className=" relative ">
                  <FormItem>
                    <FormControl>
                      <PasswordInput
                       ref={field.ref}
                       value={field.value}
                       onChange={field.onChange}
                        className="auth-input"
                        placeholder="Enter your password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <FormField
              control={form.control}
              name="confirmPassword"
              render={({ field }) => (
                <div className=" relative ">
                  <FormItem>
                    <FormControl>
                      <PasswordInput
                        ref={field.ref}
                        value={field.value}
                        onChange={field.onChange}
                        className="auth-input"
                        placeholder="confirm your password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
          
            <div className="flex flex-row-reverse items-center justify-between space-x-2">
              <Switch id="airplane-mode" />
              <p className="small-primary">Agree to Terms and Conditions</p>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Button type="submit" className="sign-in-button">
              Sign up
            </Button>

            <div className="flex items-center  ">
              <hr className="text-black flex-1"></hr>
              <p className="px-4">Or Sign in with</p>
              <hr className="text-black flex-1"></hr>
            </div>
            <div className="flex justify-between gap-2">
              <div className="auth-icon-card">
                <img
                  src="/assets/icons/google.png"
                  width={24}
                  height={24}
                  alt="google"
                />
              </div>
              <div className="auth-icon-card">
                <img
                  src="/assets/icons/apple.png"
                  width={24}
                  height={24}
                  alt="apple"
                />
              </div>
              <div className="auth-icon-card">
                <img
                  src="/assets/icons/facebook.png"
                  width={20}
                  height={20}
                  alt="facebook"
                />
              </div>
            </div>

            <Link to={"/"} className="flex items-center gap-1">
              Already have an account?
              <p className="small-primary">Sign in Now</p>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SignupForm;

// export default function SignupForm() {
//   // const navigate = useNavigate();
//   // const { toast } = useToast();
//   // const { checkAuthUser, isLoading: isUserLoading } = useUserContext();

//   // const { mutateAsync: signInAccount } = useSignInAccount();
//   const form = useForm<z.infer<typeof SignupValidation>>({
//     resolver: zodResolver(SignupValidation),
//     defaultValues: {
//       email: "",
//       password: "",
//     },
//   });

//   // const handleSignin = async (user: z.infer<typeof SignupValidation>) => {
//   //   try {
//   //     const session = await signInAccount({
//   //       email: user.email,
//   //       password: user.password,
//   //     });
//   //     console.log(session, "session");

//   //     if (!session) {
//   //       toast({ title: "Something went wrong. Please login your new account" });

//   //       navigate("/sign-in");

//   //       return;
//   //     }

//   //     const isLoggedIn = await checkAuthUser();

//   //     if (isLoggedIn) {
//   //       form.reset();

//   //       navigate("/");
//   //     } else {
//   //       toast({ title: "Login failed. Please try again." });

//   //       return;
//   //     }
//   //   } catch (error) {
//   //     console.log({ error });
//   //   }
//   // };

//   return (
//   <div className="w-full">
//       <Form {...form} >
//           <form
//             onSubmit={form.handleSubmit(handleSignin)}
//             className="">
//             <FormField
//               control={form.control}
//               name="email"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>ایمیل</FormLabel>
//                   <FormControl>
//                     <Input type="email" {...field} className="shad-input" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <FormField
//               control={form.control}
//               name="password"
//               render={({ field }) => (
//                 <FormItem>
//                   <FormLabel>رمز عبور</FormLabel>
//                   <FormControl>
//                     <Input type="password" {...field} className="shad-input" />
//                   </FormControl>
//                   <FormMessage />
//                 </FormItem>
//               )}
//             />
//             <Button type="submit" className="shad-button_primary">
//               {isUserLoading ? (
//                 <div className="flex-center gap-2">
//                   <Loader />
//                   در حال بارگذاری ...
//                 </div>
//               ) : (
//                 "ورود"
//               )}
//             </Button>
//             <p className="text-small-regular text-light-2 text-center mt-2">
//               تاکنون ثبت نام داشته اید؟
//               <Link
//                 to="/sign-up"
//                 className="text-primary-500 text-small-semibold mr-1">
//                 ثبت نام
//               </Link>
//             </p>{" "}
//           </form>
//       </Form>
//   </div>
//   );
// }
