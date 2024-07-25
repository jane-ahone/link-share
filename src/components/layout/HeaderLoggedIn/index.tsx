"use client";
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import Devlinks from "../../../../public/Common/logo.svg";
import LinkIcon from "../../../../public/Header/ph_link-bold.svg";
import LinkIconActive from "../../../../public/Header/ph_link-bold-active.svg";
import UserIcon from "../../../../public/Header/ph_user-circle-bold.svg";
import UserIconActive from "../../../../public/Header/ph_user-circle-bold-active.svg";
import EyeBold from "../../../../public/Header/ph_eye-bold.svg";

const HeaderLoggedIn = () => {
  const pathname = usePathname();

  // Hide the header on auth pages
  if (pathname.startsWith("/auth")) {
    return null;
  } else if (pathname.startsWith("/preview")) {
    return null;
  }
  return (
    <div className="flex flex-col self-stretch rounded-xl py-4 pl-6 pr-4 gap-2">
      <div className="flex justify-between items-center self-stretch">
        <Link href="/">
          <Devlinks className="w-8 h-8" />
        </Link>
        <Link href="/">
          <LinkIconActive /> <p className="hidden">Links</p>
        </Link>
        <Link href="/profile">
          <UserIcon /> <p className="hidden">Profile Details</p>
        </Link>
        <Link href="/preview">
          <EyeBold />
          <p className="hidden"> Preview</p>
        </Link>
      </div>
    </div>
  );
};

export default HeaderLoggedIn;
