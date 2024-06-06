import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {Form,FormControl,FormField,FormItem,FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { SigninValidation } from "../../lib/validation";
import { Link, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { z } from "zod";

const SigninForm = () => {
  const form = useForm({
    resolver: zodResolver(SigninValidation),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const handleSignin = async (user:z.infer<typeof SigninValidation>) => {
    console.log({ user });
  };
  return (
    <div className="xs:mx-auto w-full h-full p-4  xs:w-[360px] px-4 xs:px-0   ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(handleSignin)}
          className="flex flex-col gap-4 justify-between h-full">
          <div className="flex flex-col gap-4">
            <h1 className="h1-bold mb-4 ">
              Welcome back! Glad to see you, Again!
            </h1>
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
              name="password"
              render={({ field }) => (
                <div >
                  <FormItem>
                    <FormControl>
                      <Input
                        ref={field.ref}
                        value={field.value}
                        className="auth-input"
                        placeholder="Enter your password"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                </div>
              )}
            />
            <div className="w-full flex flex-col">
              <Link to={"/"} className="ml-auto small-semibold">
                Forgot Password?
              </Link>

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                  Remeber me
                </label>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <Link to={"/"} className="small-primary p-4 flex-center">
              Choose different method
            </Link>
            <Button type="submit" className="sign-in-button">
              Sign in
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
              Don’t have an account?{" "}
              <p className="small-primary">Register Now</p>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
};

export default SigninForm;

