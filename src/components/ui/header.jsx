import React from "react";
import { Input } from "./input.jsx";
import AuthHeader from "./auth-header.jsx";

const Header = async () => {
  return (
    <div className="grid grid-cols-3 h-14 items-center">
      <div className="font-bold text-xl flex justify-start">Discuss</div>
      <div className="flex justify-center">
        <Input type="text" placholder="Search Post..." />
      </div>
      <div className="gap-2 flex justify-end">
        <AuthHeader />
      </div>
    </div>
  );
};

export default Header;
