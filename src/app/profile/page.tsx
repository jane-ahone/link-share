"use client";
import { useState } from "react";
import { db } from "@/firebase/config";
import { useCollection } from "react-firebase-hooks/firestore";

const ProfileDetails = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  return (
    <div>
      <p className="">Profile Details</p>
      <p className="">
        {" "}
        Add your details to create a personal touch to your profile
      </p>

      <p className="">Profile picture</p>
      <p className="">Image must be below 1024x1024px. Use PNG or JPG format</p>

      <form action="">
        <div>
          <label
            htmlFor="firstName"
            className="block text-xs font-base text-linkDarkGrey"
          >
            First name*
          </label>
          <input
            type="firstName"
            id="firstName"
            value={firstName}
            onChange={(e) => setfirstName(e.target.value)}
            placeholder="e.g alex@gmail.com"
            required
            className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="lastName"
            className="block text-xs font-base text-linkDarkGrey"
          >
            Last name*
          </label>
          <input
            type="lastName"
            id="lastName"
            value={lastName}
            onChange={(e) => setlastName(e.target.value)}
            placeholder="e.g alex@gmail.com"
            required
            className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="email"
            className="block text-xs font-base text-linkDarkGrey"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="e.g alex@gmail.com"
            required
            className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
      </form>
    </div>
  );
};

export default ProfileDetails;
