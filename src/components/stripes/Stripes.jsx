import React from "react";
import Stripe from "./Stripe";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Stripes = () => {
  const data = [
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 24,
      border: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 32,
      border: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 10,
      border: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd7cf6b3689fb_css-design-awards-logos-id1L9L8Yvp%201.svg",
      number: 24,
      border: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63d6e83420934a94d642103b_NCC2021_LogoLockup%201.svg",
      number: 32,
      border: true,
    },
    {
      url: "https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63c9ce90a51cd75d563689fd_Awwards-logotype-2018%201.svg",
      number: 10,
      border: false,
    },
  ];

  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(".stripe", {
      x: -300,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power4.inOut",
    });
  });
  return (
    <div className=" flex items-center mt-44 w-full">
      {data.map((elem, index) => (
        <Stripe key={index} val={elem} />
      ))}
    </div>
  );
};

export default Stripes;
