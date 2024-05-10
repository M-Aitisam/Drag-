import React from "react";
import { IoDocumentTextOutline } from "react-icons/io5";
import { IoIosCloudDownload } from "react-icons/io";
import { IoMdCloseCircle } from "react-icons/io";

//npm install framer-motion
import { motion } from "framer-motion";
function Card({ data ,reference}) {
  return (
    <motion.div  drag dragConstraints= {reference} className="  relative  flex-shrink-0 w-60 h-72 rounded-[35px] text-white px-8 py-10 bg-zinc-700 overflow-hidden">
      <IoDocumentTextOutline />
      <p className="text-sm mt-5 font-semibold leading-tight ">{data.desc}</p>

      <div className="footer absolute bottom-0  w-full left-0">
        <div className="flex item-center justify-between px-8 py-3  mb-5">
          <h5>{data.filesize}</h5>

          <span className="w-6 h-6 bg-zinc-600 rounded-full flex items-center justify-center">
            {data.close ? (
              <IoMdCloseCircle />
            ) : (
              <IoIosCloudDownload size=".7em" color="#ffffff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div className={`tag w-full py-4 ${data.tag.tagColor ==="blue"?" bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
            <h3 className="text-sm font-semibold">{data.tag.tagTital}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
}
export default Card;
