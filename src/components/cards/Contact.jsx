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
          <h5>+36 30 755 1071</h5>
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
              d="M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z"
              clipRule="evenodd"
            />
          </svg>
          <h5>daniel-pal.kovacs@kdplegal.eu</h5>
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
          <h5>1051 Budapest, Bajcsy-Zsilinszky út 16. II/20</h5>
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
          <h5>1374 Budapest, Pf.:560.</h5>
        </div>
      </div>

      <div className="map">
        <iframe
          title="adress"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2695.4798717544386!2d19.052397915641386!3d47.50004510332591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4741dc6aec4e8985%3A0x907ff5a0c2b68e01!2sBudapest%2C%20Bajcsy-Zsilinszky%20%C3%BAt%2016%2C%201051!5e0!3m2!1shu!2shu!4v1647624102386!5m2!1shu!2shu"
          style={{ border: 0 }}
          // allowfullscreen=""
          loading="lazy"
        ></iframe>
      </div>
      <div className="exit contact" onClick={props.onClick}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Contact;
