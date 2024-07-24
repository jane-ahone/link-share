import React from "react";
import Devlinks from "../../../../public/Common/logo.svg";
import LinkIcon from "../../../../public/Header/ph_link-bold.svg";
import LinkIconActive from "../../../../public/Header/ph_link-bold-active.svg";
import UserIcon from "../../../../public/Header/ph_user-circle-bold.svg";
import UserIconActive from "../../../../public/Header/ph_user-circle-bold-active.svg";
import EyeBold from "../../../../public/Header/ph_eye-bold.svg";

const HeaderLoggedIn = () => {
  return (
    <div className="flex flex-col self-stretch rounded-xl py-4 pl-6 pr-4 gap-2">
      <div className="flex justify-between items-center self-stretch">
        <Devlinks className="w-8 h-8" />
        <LinkIconActive /> <p>Links</p>
        <UserIcon /> <p>Profile Details</p>
        <EyeBold />
        <p> Preview</p>
      </div>
    </div>
  );
};

export default HeaderLoggedIn;
