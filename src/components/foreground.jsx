import React, { useRef } from "react";
import Card from "./Card"; // Import the Card component



function Foreground() {

  const ref =useRef(null);
  const data = [
    {
      desc: " Aorem ipsum dolor sit amet consectetur adipisicing elit. ",
      filesize: ".9MB",
      close: true,
      tag: { isOpen: true, tagTital: "Dowmload Now", tagColor: "green" },
    },
    {
      desc: " Aorem ipsum dolor sit amet consectetur adipisicing elit. ",
      filesize: ".5MB",
      close: false,
      tag: { isOpen: true, tagTital: "Dowmload Now", tagColor: "blue" },
    },
    {
      desc: " Aorem ipsum dolor sit amet consectetur adipisicing elit. ",
      filesize: ".5MB",
      close: false,
      tag: { isOpen: true, tagTital: "Dowmload Now", tagColor: "greem" },
    },
    {
      desc: " Aorem ipsum dolor sit amet consectetur adipisicing elit. ",
      filesize: ".5MB",
      close: true,
      tag: { isOpen: true, tagTital: "Dowmload Now", tagColor: "blue" },
    },
    {
      desc: " Aorem ipsum dolor sit amet consectetur adipisicing elit. ",
      filesize: ".2MB",
      close: false,
      tag: { isOpen: false, tagTital: "Upload Now", tagColor: "green" },
    },
  ];

  return (
    <div ref ={ref} className=" fixed  z-[3] top-0 left-0 w-full h-full  p-5 flex gap-10 flex-wrap">
      {data.map((item, index) => (
        <Card data={item} reference={ref} />
      ))}
    </div>
  );
}

export default Foreground;
