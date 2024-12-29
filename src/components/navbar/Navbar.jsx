import React from "react";
import Button from "../shared/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Navbar = () => {
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.from(".links a", {
      x: -300,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.inOut",
    });
    gsap.from("h2", {
      x: -300,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.inOut",
    });
    gsap.from("button", {
      x: -300,
      opacity: 0,
      stagger: 0.1,
      duration: 1,
      ease: "power3.inOut",
    });
  });
  return (
    <div className="max-w-screen-2xl mx-auto py-7  flex items-center justify-between border-b-[1px] border-zinc-700">
      <div className="nleft flex items-center">
        <h2 className="text-xl font-semibold ml-4 mr-10">ReDesign</h2>
        <div className="links flex gap-16 ml-20">
          {["Home", "Design", "Culture", "", "News"].map((elem, index) => (
            <a
              key={index}
              href="#"
              className="font-regular text-base flex items-center gap-2 cursor-pointer "
            >
              {index === 1 && (
                <span
                  style={{
                    boxShadow: "0 0 0.25em #00FF19",
                  }}
                  className="inline-block w-1.5 h-1.5 rounded-full bg-green-400"
                ></span>
              )}
              {elem.length === 0 ? (
                <span className="w-[1px] h-4 bg-zinc-600"></span>
              ) : (
                elem
              )}
            </a>
          ))}
        </div>
      </div>
      <Button />
    </div>
  );
};

export default Navbar;
