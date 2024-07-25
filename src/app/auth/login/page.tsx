"use client";

import Button from "@/components/common/Button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { z } from "zod";
import { fromZodError } from "zod-validation-error";

import EmailIcon from "../../../../public/Login/ph_envelope-simple-fill.svg";
import PasswordLockIcon from "../../../../public/Login/ph_lock-key-fill.svg";

const LoginSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

const Login: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [signInWithEmailAndPassword] = useSignInWithEmailAndPassword(auth);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //Form Validation
    const result = LoginSchema.safeParse({ email, password });
    if (!result.success) {
      const validationError = fromZodError(result.error);
      setError(validationError.message);
      return;
    }
    //Authentication
    try {
      const res = await signInWithEmailAndPassword(email, password).then(() => {
        setEmail("");
        setPassword("");
        router.push("/");
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col gap-10">
      <div className="heading flex flex-col gap-2">
        <p className="text-2xl font-bold text-left text-linkDarkGrey">Login</p>
        <p className="text-base text-linkGrey font-normal">
          Add your details below to get back into the app{" "}
        </p>
      </div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
        <div className="">
          <label
            htmlFor="email"
            className="block text-xs font-base text-linkDarkGrey"
          >
            Email address
          </label>
          <div className="input-field-email relative">
            <EmailIcon className="absolute top-1/2 left-3 w-4 h-4 transform -translate-y-1/2 pointer-events-none" />
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
              placeholder="e.g alex@gmail.com"
              required
              className="block w-full px-10 py-3 mt-1 border border-linkBorder rounded-lg focus:outline-none focus:ring-1 focus:ring-linkBtnPrimaryDefault focus:border-transparent focus:shadow-[0 0 32px 0]0 placeholder: text-linkDarkGrey placeholder:opacity-50"
            />
          </div>
        </div>
        <div className="relative">
          <label
            htmlFor="password"
            className="block text-xs font-base text-linkDarkGrey"
          >
            Password
          </label>
          <div className="input-field-password relative">
            <PasswordLockIcon className="absolute top-1/2 left-3 w-4 h-4 transform -translate-y-1/2 pointer-events-none" />
            <input
              type="password"
              id="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setPassword(e.target.value)
              }
              required
              className="block w-full px-10 py-3 mt-1 border border-linkBorder rounded-lg focus:outline-none focus:ring-1 focus:ring-linkBtnPrimaryDefault focus:border-transparent focus:shadow-[0 0 32px 0] placeholder: text-linkDarkGrey placeholder:opacity-50"
            />
          </div>
        </div>
        {error && <p className="text-sm text-red-600">{error}</p>}
        <div>
          <Button type="submit" variant="primary">
            Login
          </Button>
        </div>
        <div className="text-center font-normal text-base">
          <p className="text-linkGrey ">Don&rsquo;t have an account?</p>
          <Link href="/auth/signup" className="text-linkBtnPrimaryDefault ">
            Create account
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
