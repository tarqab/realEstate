import React from "react";

const Content = (props) => {
  return (
    <div className="card" id="products">
      <img className="house-img" src={props.img} alt="img"></img>
      <p className="house-info">{props.info}</p>
      <p className="house-price">{props.price}</p>
    </div>
  );
};

export default Content;
