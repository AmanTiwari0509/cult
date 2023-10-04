import React from "react";
import CultLogo from "../assets/Images/CultLogo.png";
import appstore from "../assets/Images/appstore.png";
import googleplay from "../assets/Images/googleplay.png";
import youtube from "../assets/Images/youtube.png";
import Facebook from "../assets/Images/Facebook.png";
import twitter from "../assets/Images/twitter.png";
import linkedin from "../assets/Images/linkedin.png";
import insta from "../assets/Images/insta.png";

const Footer = () => {
  
  return (
    <>
      <div className="w-full bg-black md:py-28 py-8   ">
        <div className="grid md:grid-cols-3 grid-row text-white">
          <div className="">
            <div className="flex flex-col gap-8 md:px-12 px-4">
              <div className="">
                <img src={CultLogo} alt="" className="h-10 w-40 " />
              </div>
              <div>
                <p className="text-[#cfcbc2]">
                  At cult.fit, we make group workouts fun, daily food healthy &
                  tasty, mental fitness easy with yoga & meditation, Medical &
                  lifestyle care hassle-free.#BeBetterEveryDay cult fit for
                  bussiness
                </p>
              </div>
            </div>
          </div>
          <div className="mt-4 md:mt-0">
            <div className="grid md:grid-cols-3 grid-row md:gap-12 gap-4 md:justify-center justify-start md:p-0 px-4 text-[#cfcbc2]  items-center">
              <div className="text-left">cult.fit for business</div>
              <div className="text-left">cult.fit franchise</div>
              <div className="text-left">blogs</div>
              <div className="text-left">Security</div>
              <div className="text-left">partner.fit</div>
              <div className="text-left">blogs</div>
              <div className="text-left">cult pass network</div>
              <div className="text-left">partnerships</div>
              <div className="text-left">cult bmi calculator</div>
              <div className="text-left">t&c for business</div>
              <div className="text-left">careers</div>
              <div className="text-left">terms & conditions</div>
            </div>
          </div>
          <div className="flex flex-col md:items-center gap-8 md:mt-0 mt-4 md:px-0 px-4">
            <div className="">
              <img src={appstore} alt="" className="w-[178px] h-[55px] " />
            </div>
            <div>
              <img src={googleplay} alt="" className="w-[178px] h-[55px]" />
            </div>
            <div className="flex gap-8 ">
              <div>
                <img src={youtube} alt="" className=" w-[37px] h-[37px]" />
              </div>
              <div>
                <img src={Facebook} alt="" className=" w-[37px] h-[37px]" />
              </div>
              <div>
                <img src={twitter} alt="" className=" w-[37px] h-[37px]" />
              </div>
              <div>
                <img src={insta} alt="" className=" w-[37px] h-[37px]" />
              </div>
              <div>
                <img src={linkedin} alt="" className=" w-[37px] h-[37px]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
