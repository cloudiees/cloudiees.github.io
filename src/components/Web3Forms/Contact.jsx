import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

export default function Contact() {
  const [result, setResult] = useState("");
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    setResult("Sending...");

    emailjs
      .sendForm(
        "service_zfhycog",
        "template_nae0xoj",
        formRef.current,
        "u7gh_I-J04JQQYi6U"
      )
      .then(
        () => {
          setResult("Form Submitted Successfully 🎉");
          formRef.current.reset();
        },
        (error) => {
          console.error(error.text);
          setResult("An error occurred. Please try again.");
        }
      );
  };

  return (
    <div className="box">
      <h1>Contact Me</h1>
      <form ref={formRef} onSubmit={sendEmail} className="input-container">
        <div className="small-input-container">
          <div className="input-label">
            <span>Name</span>
            <input
              type="text"
              name="from_name"
              className="input-small"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="input-label">
            <span>Email</span>
            <input
              type="email"
              name="reply_to"
              className="input-small"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <textarea
          name="message"
          className="input-big"
          placeholder="Enter your message"
          required
        ></textarea>

        <button type="submit">Send</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
