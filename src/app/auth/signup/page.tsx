"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import z from "zod";
import { fromZodError } from "zod-validation-error";

import EmailIcon from "../../../../public/Login/ph_envelope-simple-fill.svg";
import PasswordLockIcon from "../../../../public/Login/ph_lock-key-fill.svg";
import Button from "@/components/common/Button";

const SignupSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters long"),
});

const Signup: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [error, setError] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      setPasswordsMatch(false);
      return;
    }
    //Form Validation
    const result = SignupSchema.safeParse({ email, password });
    if (!result.success) {
      const validationError = fromZodError(result.error);
      setError(validationError.message);
      return;
    }
    //Authentication
    try {
      const res = await createUserWithEmailAndPassword(email, password);
      console.log({ res });
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      router.push("/");
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="min-h-screen flex flex-col  gap-10">
      <div className="heading  flex flex-col  gap-2">
        <p className="text-2xl font-bold text-left text-linkDarkGrey">
          Create account
        </p>
        <p className="text-base text-linkGrey font-normal">
          Let&rsquo;s get you started sharing your links!
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
              className="block w-full px-10 py-3 mt-1 border border-linkBorder rounded-lg focus:ring-indigo-500 focus:border-indigo-500 placeholder: text-linkDarkGrey placeholder:opacity-50"
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
              className="block w-full px-10 py-3 mt-1 border border-linkBorder rounded-lg focus:ring-indigo-500 focus:border-indigo-500 placeholder: text-linkDarkGrey placeholder:opacity-50"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="confirm-password"
            className="block text-xs font-base text-linkDarkGrey"
          >
            Confirm password
          </label>
          <div className="input-field-conf-password relative">
            <PasswordLockIcon className="absolute top-1/2 left-3 w-4 h-4 transform -translate-y-1/2 pointer-events-none" />
            <input
              type="password"
              id="confirm-password"
              placeholder="At least 8 characters"
              value={confirmPassword}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setConfirmPassword(e.target.value)
              }
              required
              className="block w-full px-10 py-3 mt-1 border border-linkBorder rounded-lg focus:ring-indigo-500 focus:border-indigo-500 placeholder: text-linkDarkGrey placeholder:opacity-50"
            />
          </div>
          {!passwordsMatch && (
            <p className="text-sm text-red-600 mt-2">Passwords do not match</p>
          )}
        </div>

        <p className="text-linkGrey font-normal text-xs">
          Password must contain at least 8 characters
        </p>
        {error ? <p className="text-sm text-red-600">{error}</p> : ""}

        <div>
          <Button type="submit" variant="primary">
            Create new account
          </Button>
        </div>

        <div className="text-center font-normal text-base">
          <p className="text-linkGrey  ">Already have an account?</p>
          <Link href="/auth/login" className="text-linkBtnPrimaryDefault  ">
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;
