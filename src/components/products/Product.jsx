import React from "react";
import Button from "../shared/Button";

const Product = ({ val, mover, count }) => {
  return (
    <div className="w-full h-[20rem] py-20 text-white">
      <div
        onMouseEnter={() => mover(count)}
        className="max-w-screen-2xl mx-auto flex items-center justify-between"
      >
        <h1 className="text-7xl font-medium">{val.title}</h1>
        <div className="dets w-1/3">
          <p className="mb-10 text-2xl leading-relaxed">{val.description}</p>
          <div className="flex items-center gap-5">
            <Button />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
