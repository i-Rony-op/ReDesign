import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="w-[170px] px-4 py-2 bg-zinc-300 text-black rounded-full flex items-center justify-between cursor-pointer">
      <span className="text-base font-medium">{title}</span>
      <IoIosReturnRight size={"1.4em"}/>
    </div>
  );
};

export default Button;
