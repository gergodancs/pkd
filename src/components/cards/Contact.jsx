import React from "react";
import "./cards.css";

const Contact = (props) => {
  return (
    <div className="expl">
      <div className="icons">
        <div>
          <h3>Kapcsolat</h3>
        </div>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
          </svg>
          <h5>+3620-241-5990</h5>
        </div>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
          </svg>
          <h5>kovacsdani@kovacsdani.gmail.com</h5>
        </div>
        <div className="icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <h5>1136. Buddapest, Hegedus Gyula utca 15</h5>
        </div>
      </div>

      <div className="map">
        <iframe
          title="adress"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2694.77933503673!2d19.05149831544009!3d47.51368847917863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc0eabf3821b%3A0x5df76d29053043aa!2sBudapest%2C%20Heged%C5%B1s%20Gyula%20u.%2015%2C%201136!5e0!3m2!1shu!2shu!4v1645425058044!5m2!1shu!2shu"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="exit" onClick={props.onClick}>
        <p className="close">bezár</p>
      </div>
    </div>
  );
};

export default Contact;
