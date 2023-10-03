import React from "react";
import CultLogo from "../assets/Images/CultLogo.png";

const Footer = () => {
  return (
    <div className="w-full bg-black py-28   ">
      <div className="grid grid-cols-3 text-white">
        <div className="">
          <div className="flex flex-col gap-8 px-12">
            <div className="">
              <img src={CultLogo} alt="" className="h-10 w-40 " />
            </div>
            <div>
              <p>
                At cult.fit, we make group workouts fun, daily food healthy &
                tasty, mental fitness easy with yoga & meditation, Medical &
                lifestyle care hassle-free.#BeBetterEveryDay
              </p>
            </div>
          </div>
        </div>
        <div className="">
          <div className="grid grid-cols-3 gap-12 justify-center items-center">
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
            <div className="text-left">cult.fit for business</div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-8 px-12 ">
          <div>Hello</div>
          <div>Hello</div>
          <div>Hello</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
