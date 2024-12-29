import React from "react";
import Button from "../shared/Button";

const Footer = () => {
  return (
    <div className="w-full mt-24">
      <div className="max-w-screen-2xl mx-auto py-20 flex gap-32">
        <div className="basis-1/2 flex flex-col gap-16">
          <h1 className="text-[12rem] font-semibold leading-none tracking-tight">
            redesign.
          </h1>
          <div className="flex gap-28 text-zinc-400">
            <a href="#">Privacy Policy</a>
            <a href="#">Cookies</a>
            <a href="#">Impressum</a>
          </div>
        </div>
        <div className="basis-1/2 flex gap-4">
          <div className="basis-1/3 flex flex-col gap-2">
            <h4 className="mb-10 text-zinc-500">Socials</h4>
            {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-400"
              >
                {item}
              </a>
            ))}
          </div>
          <div className="basis-1/3 flex flex-col gap-2">
            <h4 className="mb-10 text-zinc-500">Sitemaps</h4>
            {["Home", "Work", "Careers", "Contact"].map((item, index) => (
              <a
                key={index}
                href={`#${item}`}
                className="block mt-2 text-zinc-300"
              >
                {item}
              </a>
            ))}
          </div>

          <div className="basis-1/2 flex flex-col items-end gap-6">
            <p className="text-right">
              ReDesign is pioneering digital agency driven by design and
              empowered by technology.
            </p>
            <Button title="Back to Top" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
