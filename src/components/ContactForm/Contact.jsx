import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Contact() {
  const formRef = useRef();
  const captchaRef = useRef();
  const [result, setResult] = useState("");
  const [token, setToken] = useState();

  const sendEmail = async (e) => {
    e.preventDefault();
    if (!token) {
      setResult("Please complete the captcha before submitting!");
      return;
    }
    emailjs
      .sendForm('service_giwinir', 'template_pworqap', formRef.current, {
        publicKey: 'u7gh_I-J04JQQYi6U',
      })
      .then(
        () => {
          setResult("Successfully submitted!");
          console.log('SUCCESS!');
          formRef.current.reset();
        },
        (error) => {
          setResult("Something went wrong, please try again later.");
          console.log('FAILED...', error.text);
        },
      );
    captchaRef.current.resetCaptcha();
    setToken(null);
  };

  const onVerifyCaptcha = (token) => {
    console.log(token);
    setToken(token);
  };

  return (
    <div className="box">
      <h1>Contact Me</h1>
      <form ref={formRef} onSubmit={sendEmail} className="input-container">
        <div className="small-input-container">
          <div className="input-label">
            <span>Name</span>
            <input type="text" name="user_name" className="input-small" placeholder="Enter your name" required />
          </div>
          <div className="input-label">
            <span>Email</span>
            <input type="email" name="user_email" className="input-small" placeholder="Enter your email" required />
          </div>
        </div>
        <textarea name="message" className="input-big" placeholder="Enter your message" required></textarea>
        <div className="hcaptcha">
          <HCaptcha sitekey="4bd2c174-7ac4-4f10-ac54-6c96865cb79e" onVerify={onVerifyCaptcha} ref={captchaRef} />
        </div>
        <button type="submit">Send</button>
      </form>
      <span>{result}</span>
    </div>
  );
};