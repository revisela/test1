"use client";

import React, { ChangeEvent, useState } from "react";
import emailjs from "emailjs-com";
import Button from "@revisela/components/lib/Button";

import styles from "./index.module.css";

const Contact = () => {
  const [showRequestError, setRequestError] = useState(false);
  const [messageSent, setMessageSent] = useState(false);
  const [validationError, setValidationError] = useState(false);

  const [contactData, setContactData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const SERVICE_ID = "service_cd55fco";
  const TEMPLATE_ID = "template_cnws1fp";
  const PRIVATE_KEY = "nTcElLzxYLhsHsCw-frXF";
  const PUBLICK_KEY = "8oSVlsqA-WZd0Cak7";

  const handleChange = (e: ChangeEvent<any>) => {
    if (e.target.value === "from_name") {
      setContactData((prev) => ({ ...prev, name: e.target.value }));
      setValidationError(true);
    }
    if (e.target.name === "reply_to") {
      setContactData((prev) => ({ ...prev, email: e.target.value }));
      setValidationError(true);
    }
    if (e.target.name === "message") {
      setContactData((prev) => ({ ...prev, message: e.target.value }));
      setValidationError(true);
    }
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    if (
      contactData.email.includes("@") ||
      contactData.name.length ||
      contactData.message.length
    ) {
      try {
        await emailjs.sendForm(
          SERVICE_ID,
          TEMPLATE_ID,
          e.target,
          PUBLICK_KEY
          // PRIVATE_KEY
        );

        setMessageSent(true);
        setRequestError(false);

        e.target.reset();
      } catch (error) {
        setMessageSent(false);
        setRequestError(true);
      }
    } else {
      setValidationError(true);
    }
  };

  return (
    <div className={`${styles.container}`}>
      <div className="">
        <h2 className="text-center">
          Have a Suggestion 🧐, Feedback 🤔 or a Complaint 🤬? Reach out to us
        </h2>
      </div>

      <div
        className={`${styles.form} d-flex align-items-center justify-content-center`}
      >
        <form onSubmit={handleSubmit}>
          <div className={`${styles["form-group"]}`}>
            <label className="fw-bold" htmlFor="name">
              Enter your name
            </label>
            <br />
            <input
              onChange={handleChange}
              type="text"
              name="from_name"
              id="name"
            />
          </div>
          <div className={`${styles["form-group"]}`}>
            <label className="fw-bold" htmlFor="email">
              Enter your email
            </label>
            <br />
            <input
              onChange={handleChange}
              type="email"
              name="reply_to"
              id="email"
            />
          </div>
          <div className={`${styles["form-group"]}`}>
            <label className="fw-bold" htmlFor="message">
              Enter your message
            </label>
            <br />
            <textarea
              onChange={handleChange}
              rows={10}
              name="message"
              id="message"
            />
          </div>
          {validationError && (
            <p className="error">Please enter all the fields.</p>
          )}
          {showRequestError && messageSent === false && (
            <p className="error">something went wrong! Refersh and try again</p>
          )}

          {messageSent === true && (
            <p className="success">Your message has been received!</p>
          )}
          <div className="mt-4 mb-3 d-flex align-items-center justify-content-center">
            <Button>Submit</Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
