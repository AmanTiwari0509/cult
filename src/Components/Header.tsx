import { Link } from "react-router-dom";
import CultLogo from "../assets/Images/CultLogo.png";
import location from "../assets/Images/location.png";
import Cart from "../assets/Images/Cart.png";

const Header = () => {
  return (
    <>
      <div className="w-full flex h-[60px] bg-[#15171C] p-4">
        <div className="flex justify-start items-center">
          <Link to="/">
            <img src={CultLogo} alt="" className="w-[120px] h-[35px] ml-2" />
          </Link>
        </div>
        <div className="flex flex-row ml-[250px] justify-center items-center gap-14">
          <Link to="/cult">
            <div className="text-[#cfcbc2] hover:text-[#ffffff] font-bold font-roboto text-[20px] ">
              CULT
            </div>
          </Link>
          <Link to="/home">
            <div className="text-[#cfcbc2] hover:text-[#ffffff] font-bold font-roboto text-[20px]">
              HOME
            </div>
          </Link>
          <Link to="/care">
            <div className="text-[#cfcbc2] hover:text-[#ffffff] font-bold font-roboto text-[20px]">
              CARE
            </div>
          </Link>
          <Link to="/mind">
            <div className="text-[#cfcbc2] hover:text-[#ffffff] font-bold font-roboto text-[20px]">
              MIND
            </div>
          </Link>
          <Link to="/store">
            <div className="text-[#cfcbc2] hover:text-[#ffffff] font-bold font-roboto text-[20px]">
              STORE
            </div>
          </Link>
          <Link to="/sports">
            <div className="text-[#cfcbc2] hover:text-[#ffffff] font-bold font-roboto text-[20px]">
              SPORTS
            </div>
          </Link>
        </div>
        <div className="flex ml-[150px] flex-row gap-4  items-center">
          <div className="text-[#cfcbc2] hover:bg-[#383837] rounded-md p-2 font-thin font-roboto flex gap-1 ">
            <p>Bangalore</p>
            <img src={location} alt="" />
          </div>
          <div className="text-[#ffffff] font-bold  font-roboto ">
            <button className="border hover:border-[#cfcbc2] border-white p-[10px] rounded-md">
              Get App
            </button>
          </div>
          <div className="text-[#ffffff] font-roboto ">
            <p className="w-10 h-10 bg-purple-600 rounded-full">
              <p className="flex items-center justify-center p-2 text-jg">{"A"}</p>
            </p>
          </div>
          <div className="hover:bg-gray-800 p-2 rounded-full">
            <img src={Cart} alt="" className="h-7 w-7" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
