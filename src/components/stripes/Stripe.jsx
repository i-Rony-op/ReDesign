import React from "react";

function Stripe({ val }) {
  return (
    <div
      className={`stripe w-[17%] px-8 py-7 flex justify-between items-center border-t-[1px] border-b-[1px] ${
        val.border ? "border-r-[1px]" : "border-r-0"
      } border-zinc-600 `}
    >
      <img className="h-7" src={val.url} />
      <span className="font-semibold">{val.number}</span>
    </div>
  );
}

export default Stripe;
