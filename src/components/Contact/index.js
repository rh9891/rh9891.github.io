import React, { Fragment } from "react";
import ContactHeader from "../ContactHeader";
import "./style.css";

function Contact() {
  return (
    <Fragment>
      <ContactHeader />
      <div className="contactContainer">
        <section className="contactForm">
          <div className="phoneIconsText" id="phoneIconsText">
            <img
              className="phoneIconInfo"
              src="assets/phoneIcon.png"
              alt="Telephone Call Icon"
            />
            <h3 className="infoText">267-398-7219</h3>
          </div>
          <div className="emailIconsText" id="emailIconsText">
            <img
              className="emailIconInfo"
              src="assets/emailIcon.png"
              alt="Email Icon"
            />
            <h3 className="infoText">romie.hecdivert@gmail.com</h3>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

export default Contact;
