"use client";
import { useState, useEffect } from "react";
import { addProfile } from "@/utils/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "@/firebase/config";
import { useRouter } from "next/navigation";
import Button from "@/components/common/Button";
import AddImageCard from "../../../public/Profile/add_imag_card.svg";

const ProfileDetails = () => {
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [user] = useAuthState(auth);
  const router = useRouter();

  useEffect(() => {
    if (!user) {
      router.push("/auth/login");
    }
  });

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //   const file = e.target.files?.[0];
    //   if (file) {
    //     setImage(file);
    //     setImagePreview(URL.createObjectURL(file));
    //   }
  };

  const addProfileClick = async () => {
    if (user) {
      // const imageUrl = await uploadImage(image);
      addProfile(user.uid, firstName, lastName, email);
    }
  };

  return (
    <main className="profile-main flex flex-col gap-6 p-4 flex-[1_0_0] min-h-screen ">
      <div className="flex flex-col p-6 gap-10">
        <div className="heading flex flex-col gap-2 flex-[1_0_0]">
          <p className="text-2xl font-bold text-linkDarkGrey">
            Profile Details
          </p>
          <p className="text-base text-linkGrey font-normal">
            {" "}
            Add your details to create a personal touch to your profile
          </p>
        </div>
        <div className="profile-details flex flex-col gap-6">
          <div className="profile-picture flex flex-col p-5 gap-3">
            <p className="text-linkGrey font-normal text-base">
              Profile picture
            </p>
            <div className="image-card flex flex-col gap-6">
              <label htmlFor="imageInput" className="cursor-pointer">
                {imagePreview ? (
                  <img
                    src={imagePreview}
                    alt="Profile"
                    className="w-40 h-40 rounded-md"
                  />
                ) : (
                  <AddImageCard className="w-40 h-40" />
                )}
              </label>
              <input
                type="file"
                accept="image/*"
                id="imageInput"
                onChange={handleImageChange}
                className="hidden"
              />
              <p className="text-linkGrey font-normal text-xs">
                Image must be below 1024x1024px. Use PNG or JPG format
              </p>
            </div>
          </div>
          <form action="" className="p-5 gap-3 flex flex-col">
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
                placeholder="e.g Ben"
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
                placeholder="e.g Wright"
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
                className="block w-full px-3 py-2 mt-1 text-gray-900 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
          </form>
        </div>
      </div>
      <div className="btn-div">
        <Button type="submit" variant="primary" onClick={addProfileClick}>
          Save
        </Button>
      </div>
    </main>
  );
};

export default ProfileDetails;
