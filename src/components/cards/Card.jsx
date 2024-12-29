import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, start, para, hover, header, title }) => {
  return (
    <motion.div
      whileHover={{
        paddingLeft: "35px",
        paddingRight: "35px",
        backgroundColor: hover ? "#7443FF" : "#3E3E46",
      }}
      className={`bg-zinc-800 p-5 rounded-xl ${width} min-h-[32rem] flex flex-col justify-between  `}
    >
      <div className="w-full">
        <div className="w-full flex justify-between items-center">
          <h3>{header}</h3>
          <IoIosArrowRoundForward />
        </div>
        <h1 className="text-3xl font-medium mt-5">{title}</h1>
      </div>
      <div className="down w-full flex flex-col gap-10">
        {start && (
          <>
            <h1 className="text-9xl font-semibold tracking-tight leading-none">
              Create a Design
            </h1>
            <button className="rounded-full w-[140px] py-2 px-5 border-[1px] border-zinc-400 outline-none text-lg font-semibold ">
              Contact Us
            </button>
          </>
        )}
        {para && (
          <p className="text-sm text-zinc-400 font-regular">
            Explore what drives us.
          </p>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
