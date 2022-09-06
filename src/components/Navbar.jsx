import React from "react";
import { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCloseCircle } from "react-icons/ai";


export default function Navbar() {
  const [click, setClick] = useState(false);
  const toggleClick = () => setClick(!click);

  return (
    <div className="navbar">
      <div className="container">
        <div className="logoImage">
          <img
            className="logo"
            src={require("../assest/property.png")}
            alt="img"
          ></img>
          <h3 className="tittle">
            Real<span className="secondTittle">Estate</span>
          </h3>
        </div>
        <button className="btn">Sign in</button>
        <ul className={click ? "navMenulist" : "navMenu"}>
          <li className="li">
            <a href="#home" onClick={toggleClick}>Home</a>
          </li>
          <li className="li">
            <a href="#products">Products</a>
          </li>
          <li className="li">
            <a href="#about">About</a>
          </li>
          <li className="li">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger" onClick={toggleClick}>
          {click ? <AiFillCloseCircle /> : <AiOutlineMenu />}
        </div>
      </div>
    </div>
  );
}
