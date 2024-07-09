import React from "react";
import { useNavigate } from "react-router-dom";

const SongsItem = ({ name, image, desc, id }) => {
  return (
    <div className="min-w-[180px] cursor-pointer p-2 px-3 hover:bg-[#ffffff26] rounded">
      <img className="rounded " src={image} alt="" />
      <p className="fond-bold mt-2 mb-1">{name}</p>
      <p className="  text-slate-200 text-sm">{desc}</p>
    </div>
  );
};
export default SongsItem;
