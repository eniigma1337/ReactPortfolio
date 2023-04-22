import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => setToggle(!toggle);

  return (
    <header className="flex px-5 py-2 bg-secondary text-white fixed w-full">

      {/* full screen nav */}
      <nav className="hidden md:block">
        <ul className="flex">
          <li>
            <a href="/#about">About</a>
          </li>
          <li>
            <a href="/#projects">Projects</a>
          </li>
          <li>
            <a href="/exp">Experience</a>
          </li>
          <li>
            <a href="/#contact">Contact</a>
          </li>
          <li>
          </li>
        </ul>
      </nav>


{/* 
      mobile nav with burger menu */}

      <nav
        className={!toggle ? "mobile-nav left-[-100%]" : "mobile-nav left-0"}
      >
        <ul className="flex flex-col">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
          <a href="/exp">Experience</a>
          </li>
        </ul>
      </nav>

      {/* Toggle button for mobile nav menu */}
      <button onClick={handleToggle} className="block md:hidden">
        {!toggle ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
      </button>

    </header>
  );
};

export default Header;
