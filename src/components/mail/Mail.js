import React from "react";
import ContactUs from "./contactForm";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./Mail.css";

const Mail = () => {
  return (
    <>
      <Link to="/" className="link">
        <FontAwesomeIcon icon={faEnvelope} />
      </Link>
      <ContactUs />
    </>
  );
};

export default Mail;
