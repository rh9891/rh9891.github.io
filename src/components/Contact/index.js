import React from "react";
import ContactHeader from "../ContactHeader";

function Contact() {
    return (
        <>
        <ContactHeader />
        <div className="container">
        <section className="contactForm">
        <form action="mailto:romie.hecdivert@gmail.com" method="post" enctype="text/plain">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input type="text" placeholder="Grace Hopper" className="form-control" id="name"/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" placeholder="ghopper@email.com" className="form-control" id="email"/>
            </div>
            
            <div className="form-group">
                <label htmlFor="exampleFormControlTextarea1">Message</label>
                <textarea className="form-control" id="message" rows="12"></textarea>
              </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </section>
        </div>
        </>
    );
}

export default Contact;