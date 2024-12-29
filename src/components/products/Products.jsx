import React, { useState } from "react";
import Product from "./Product";
import { motion } from "framer-motion";

import vid_1 from "../../../public/videos/vid_1.webm";
import vid_2 from "../../../public/videos/vid_2.webm";
import vid_3 from "../../../public/videos/vid_3.webm";
import vid_4 from "../../../public/videos/vid_4.webm";

const Products = () => {
  const products = [
    {
      title: "Animations",
      description:
        "Transforming concepts into dynamic animations that tell compelling stories, engaging audiences through seamless motion and creativity.",
    },
    {
      title: "Design",
      description:
        "Delivering innovative design solutions that merge aesthetics with functionality, creating impactful experiences that leave a lasting impression.",
    },
    {
      title: "Creativity",
      description:
        "Harnessing the power of imagination to develop unique ideas and transformative projects that inspire and elevate.",
    },
    {
      title: "UI/UX",
      description:
        "Building user-centered digital experiences that are both visually stunning and functionally intuitive, bridging the gap between design and technology.",
    },
  ];

  const [pos, setPos] = useState(null);
  var urls = [vid_2, vid_1, vid_3, vid_4];
  const [isVisible, setIsVisible] = useState(false);

  const mover = (val) => {
    setPos(val * 21);
  };

  return (
    <div
      className="mt-44 relative flex flex-col gap-1"
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
    >
      {products.map((item, index) => (
        <Product key={index} val={item} mover={mover} count={index} />
      ))}
      <div className="absolute top-0 w-full h-full pointer-events-none">
        <motion.div
          style={{
            opacity: isVisible ? 1 : 0,
            visibility: isVisible ? "visible" : "hidden",
            transition: "opacity 0.3s ease, visibility 0.3s ease",
          }}
          initial={{ y: pos, x: "-50%" }}
          animate={{ y: pos + `rem` }}
          transition={{ ease: [0.34, 1.56, 0.64, 1], duration: 0.6 }}
          className="window absolute w-[30rem] h-[21rem]  left-[44.9%] overflow-hidden rounded-2xl"
        >
          {urls.map((url, index) => {
            return (
              <motion.div
                key={index}
                animate={{ y: -pos + `rem` }}
                transition={{ ease: [0.76, 0, 0.24, 1], duration: 0.5 }}
                className=" w-full h-full  rounded-2xl"
              >
                <video src={url} autoPlay muted loop></video>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Products;
