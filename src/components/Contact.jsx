import React from "react";

const Contact = () => {
  return (
    <div className="contact" id="contact">
      <h1 className="tittle-contact">Contact us</h1>
      <form className="form-contact">
        <input type="text" placeholder="First Name"></input>
        <input type="text" placeholder="Last name"></input>
        <input type="text" placeholder="E-mail"></input>
        <input type="text" placeholder="Mobile Number"></input>
      </form>
    </div>
  );
};

export default Contact;
