import React from "react";
import { AiOutlineSearch } from "react-icons/ai";

const Hero = () => {
  return (
    <div className="hero" id="home">
      <img
        className="img-hero"
        src={require("../assest/background.jpg")}
        alt="bg"
      />
      <div class="bg-opacity-editing">
        <h3 class="tittle-hero">Find the awesome place</h3>
        <p class="search-text">
          Search for luxury beautiful and with good price
        </p>
      </div>

      <form className="search">
        <div>
          <input
            className="search-bar"
            type="text"
            placeholder="Enter keyword ..."
          ></input>
        </div>
        <div className="radio">
          <input type="radio" checked={false}></input>
          <label className="label-hero">Buy</label>
          <input type="radio" checked={false}></input>
          <label className="label-hero">Rent</label>
          <button type="submit">
            <AiOutlineSearch className="icon" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Hero;
