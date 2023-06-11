import React from "react";
import { AiOutlineMenuUnfold, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Header = () => {
  const [nav, setNav] = useState(false);

  const HandleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex items-center fixed p-4 bg-black justify-between mx-auto  px-4  w-full top-0  z-20">
      <h1 className=" bg-[#00df9a] text-4xl font-bold rounded-full px-[15px]  text-black">
        SH
      </h1>

      <ul className="text-white   hidden md:flex ">
        <a href="#home" className="p-4 text-[#eb5939] border-b-[#00df9a] relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300 ">
          Home
        </a>
        <a href="#about" className="p-4 text-[#eb5939]  border-b-[#00df9a] relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
          About
        </a>
        <a href="#skills" className="p-4 text-[#eb5939] border-b-[#00df9a] relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
          Skills
        </a>
        <a href="#intrest" className="p-4  text-[#eb5939] border-b-[#00df9a] relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
          Intrests
        </a>
        <a href="#works" className="p-4 text-[#eb5939] border-b-[#00df9a] relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
                works
                </a>
        <a href="#education" className="p-4 text-[#eb5939] border-b-[#00df9a] relative before:content-[''] before:absolute before:block before:w-full before:h-[2px] 
              before:bottom-0 before:left-0 before:bg-[#00fd9a]
              before:hover:scale-x-100 before:scale-x-0 before:origin-top-left
              before:transition before:ease-in-out before:duration-300">
          Academics
        </a>
      </ul>
      <div onClick={HandleNav} className=" flex justify-center mr-[30px] md:hidden">
        {!nav ? <AiOutlineMenuUnfold color="white" size={20} /> : ""}``
      </div>
      <div
        className={
          nav
            ? "fixed left-0 text-white md:hidden top-0 border-r border-b border-b-gray-900 border-r-gray-900 w-[100%] text-left  ml-0 p-2 h-max-content bg-[#000300] ease-in-out duration-500"
            : " fixed left-[-100%]"
        }
      >
        <div className="flex items-center justify-between">
        <h1 className=" bg-[#00df9a] w-max-[400px] px-[15px] rounded-full text-4xl font-bold  text-black">
        SH
      </h1>
          <div onClick={HandleNav} className="block md:hidden">
            {!nav ? (
              <AiOutlineMenuUnfold color="white" size={30} />
            ) : (
              <AiOutlineClose color="white" className="mr-[30px]" size={30} />
            )}
          </div>
        </div>

        <div className="uppercase font-bold flex flex-col   ">
          <a href="#home" className="p-4 text-[#eb5939] border-b border-b-gray-700 ">
            Home
          </a>
          <a href="#about" className="p-4 text-[#eb5939] border-b border-b-gray-700 ">
            About
          </a>
          <a href="#skills" className="p-4 text-[#eb5939] border-b border-b-gray-700">
            Skills
          </a>
          <a href="#intrest" className="p-4 text-[#eb5939] border-b  border-b-gray-700">
            Intrests
          </a>
          <a href="#intrest" className="p-4 text-[#eb5939] border-b  border-b-gray-700">
            Works
          </a>
          <a href="#education" className="p-4 text-[#eb5939] border-b-gray-700">
            Academics
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;
