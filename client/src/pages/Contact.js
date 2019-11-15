import React from "react";
import ContactForm from "../components/ContactForm";

function Contact() {
  return (
    <section className="section is-small">
      <section className="hero">
        <div className="hero-body">
          <div className="columns">
            <div className="form-titles">
              <h1 className="title">Contact</h1>
              <h2 className="subtitle"> Send us a message! </h2>
            </div>
          </div>
          <div className="columns">
            <div className="column is-one-third">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </section>
  );
}

export default Contact;
