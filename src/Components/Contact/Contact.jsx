import React from "react";
import "./Contact.scss";
import "../Container/Container.scss";
import "../../../node_modules/font-awesome/css/font-awesome.css";

const Contact = () => {
  return (
    <section className="contact-wrapper">
      <div className="container">
        <h2 className="contact__headline">Kontakt</h2>
        <div className="contact__box">
          <div className="contact__info">
            <input type="text" placeholder="&#xf007;  Imię" />
            <input type="text" placeholder="&#xf0e0;  E-mail" />
          </div>
          <div className="contact__message">
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Treść wiadomości"
            ></textarea>
          </div>
          <button type="submit">Wyślij</button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
