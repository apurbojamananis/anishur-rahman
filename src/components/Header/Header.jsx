import Hamburger from "hamburger-react";
import { useState } from "react";

import {
  FaSun,
  // eslint-disable-next-line no-unused-vars
  FaMoon,
  FaHome,
  FaMale,
  FaTools,
  FaNewspaper,
  FaBook,
  FaComments,
  FaPhone,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";
import Home from "../Home/Home";
import About from "../About/About";

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  return (
    <div>
      <div className="bg-dark-SecondaryBg lg:hidden fixed top-0 right-0 left-0 z-0 ">
        <div className="flex justify-between items-center min-h-[100px] px-3 ">
          <div>
            <img src="./WhiteLogo.png" alt="" />
          </div>
          <div className="flex justify-center items-center">
            <span className="bg-white p-3 rounded-[50%] mr-5">
              <FaSun className="text-black text-3xl inline" />
            </span>

            <div>
              <div className="bg-white rounded-[50%] p-1">
                <Hamburger
                  toggled={isOpen}
                  toggle={setOpen}
                  color="#010101"
                  className="inline relative"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex z-50">
        <div
          className={` lg:flex flex-col w-80 h-screen bg-dark-SecondaryBg fixed   ${
            isOpen ? "" : "hidden"
          }`}
        >
          <div className="min-h-[100px] lg:min-h-[150px]  px-3 flex items-center justify-between lg:pl-10 lg:pr-3 ">
            <img src="./WhiteLogo.png" alt="" className="inline " />
            <span className={`bg-white p-3 rounded-[50%] mr-5 hidden lg:flex`}>
              <FaSun className="text-black text-3xl inline" />
            </span>
          </div>
          <hr />

          <div className="text-dark-MenuText lg:px-10 px-3 xl:mt-8 2xl:mt-16  ">
            <ul>
              <li className="hover:bg-dark-PrimaryBg  rounded text-xl transition duration-1000">
                <NavLink
                  to="/"
                  className={`flex items-center gap-5 p-3 ${({ isActive }) => {
                    isActive && "bg-dark-PrimaryBg";
                  }}`}
                >
                  <FaHome className=""></FaHome>
                  <span>Home</span>
                </NavLink>
              </li>
              <li className="hover:bg-dark-PrimaryBg rounded text-xl  transition duration-1000 mt-3">
                <NavLink
                  to="/about"
                  className={`flex items-center gap-5 p-3  ${({ isActive }) => {
                    isActive && "bg-dark-PrimaryBg";
                  }}`}
                >
                  <FaMale className=""></FaMale>
                  <span>About</span>
                </NavLink>
              </li>
              <li className="hover:bg-dark-PrimaryBg rounded text-xl  transition duration-1000 mt-3">
                <NavLink
                  to="/"
                  className={`flex items-center gap-5 p-3  ${({ isActive }) => {
                    isActive && "bg-dark-PrimaryBg";
                  }}`}
                >
                  <FaTools className=""></FaTools>
                  <span>Service</span>
                </NavLink>
              </li>
              <li className="hover:bg-dark-PrimaryBg rounded text-xl  transition duration-1000 mt-3">
                <NavLink
                  to="/"
                  className={`flex items-center gap-5 p-3  ${({ isActive }) => {
                    isActive && "bg-dark-PrimaryBg";
                  }}`}
                >
                  <FaNewspaper className=""></FaNewspaper>
                  <span>Portfolio</span>
                </NavLink>
              </li>
              <li className="hover:bg-dark-PrimaryBg rounded text-xl transition duration-1000 mt-3">
                <NavLink
                  to="/"
                  className={`flex items-center gap-5 p-3  ${({ isActive }) => {
                    isActive && "bg-dark-PrimaryBg";
                  }}`}
                >
                  <FaBook className=""></FaBook>
                  <span>Resume</span>
                </NavLink>
              </li>
              <li className="hover:bg-dark-PrimaryBg rounded text-xl transition duration-1000 mt-3">
                <NavLink
                  to="/"
                  className={`flex items-center gap-5 p-3  ${({ isActive }) => {
                    isActive && "bg-dark-PrimaryBg";
                  }}`}
                >
                  <FaComments className=""></FaComments>
                  <span>Testimonial</span>
                </NavLink>
              </li>
              <li className="hover:bg-dark-PrimaryBg rounded text-xl transition duration-1000 mt-3">
                <NavLink
                  to="/"
                  className={`flex items-center gap-5 p-3  ${({ isActive }) => {
                    isActive && "bg-dark-PrimaryBg";
                  }}`}
                >
                  <FaPhone className=""></FaPhone>
                  <span>Contact</span>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="w-full p-2 flex lg:pl-80 pt-[100px] lg:pt-[0px] z-1">
          {/* <Outlet></Outlet> */}
          <div>
            <Home></Home>
            <About></About>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
