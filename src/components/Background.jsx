import React from "react";

function Background() {
  return (
    <>
    <div className="w-full p-5 bg-yellow-500 bg-opacity-3 font-xl text-[1rem] color ="white">Home</div>
      <div className=" fixed z-[2] w-full h-screen">
        <div className=" absolute top-[5%] w-full py-10 flex justify-center text-zinc-600 font-semibold text-xl ">
          Documents
        </div>

        <h1 className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[13vw] leading-none tracking-tight font-semibold text-zinc-900">
          DOCS.
        </h1>
      </div>
    </>
  );
}

export default Background;
