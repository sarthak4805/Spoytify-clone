import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="w-full flex justify-between item-center font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className=" flex items-center   gap-4">
          <p className="bg-white text-black text-[15px] px-5 py-1 rounded-2xl hidden md:block cursor-pointer">
            Explore Premium
          </p>
          <p className="bg-black text-white rounded-2xl gap-4 px-4 py-1 text-[15px] cursor-pointer ">
            Install App
          </p>
          <p className="bg-purple-500 text-black rounded-full h-7 w-7 item-center  justify-center flex ">
            D
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 mt-4">
        <p className="bg-white text-black  px-4 py-1 rounded-2xl cursor-pointer ">
          All
        </p>

        <p className="bg-black text-white rounded-2xl px-4 py-1 cursor-pointer">
          Music
        </p>
        <p className="bg-black text-white rounded-2xl px-4 py-1 cursor-pointer">
          Podcasts
        </p>
      </div>
    </>
  );
};
export default Navbar;
