import React from "react";
import CultLogo from "../assets/Images/CultLogo.png";

const Footer = () => {
  return (
    // <div className="w-full bg-black h-[400px] py-28">
    //   <div className="grid grid-cols-3 justify-center items-center">
    //     <div className="text-white ">
    //       <div className="flex flex-col gap-8 pl-20">
    //         <div className="">
    //           <img src={CultLogo} alt="" className="h-10 w-40" />
    //         </div>
    //         <div className="pr-4">
    //           At cult.fit, we make group workouts fun, daily food healthy &
    //           tasty, mental fitness easy with yoga & meditation, Medical &
    //           lifestyle care hassle-free.#BeBetterEveryDay
    //         </div>
    //       </div>
    //     </div>
    //     <div className="text-white text-center items-center ml-6">
    //       <div className="grid grid-cols-3 gap-8 ">
    //         <p className="text-left">cult.fit for business</p>
    //         <p className="text-left">contact us</p>
    //         <p className="text-left">partner.fit</p>

    //         <p className="text-left">cult.fit franchise</p>
    //         <p className="text-left">privacy policy</p>
    //         <p className="text-left">blogs</p>

    //         <p className="text-left">cult pass network</p>
    //         <p className="text-left">cult bmi calculator</p>
    //         <p className="text-left">security</p>

    //         <p className="text-left">t&c for business</p>
    //         <p className="text-left">terms & conditions</p>
    //         <p className="text-left">careers</p>
    //       </div>
    //     </div>
    //     <div className="text-white ">
    //       <div className="flex flex-col gap-4 justify-center items-center">
    //         <div>hello</div>
    //         <div>hello</div>
    //         <div>hello</div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

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
