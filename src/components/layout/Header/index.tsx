import React from "react";
import LogoSvg from "../../../../public/Common/logo.svg";
import OrgNameSvg from "../../../../public/Common/devlinks.svg";

const Header = () => {
  return (
    <div className="bg-transparent">
      <LogoSvg className="w-[40px] h-[40px] inline-block " />
      <OrgNameSvg className="w-[135px] h-[26.25px] inline-block" />
    </div>
  );
};

export default Header;
