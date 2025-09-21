import "./Contact.css";
import React, { useEffect, useRef, useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");
  const captchaRef = useRef(null);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const token = captchaRef.current?.getResponse();
    if (!token) {
      setResult("Please complete the captcha");
      return;
    }
    const formData = new FormData(event.target);
    formData.append("access_key", "58740c9f-19f9-41a7-88a6-fcaac66ebf6c");
    formData.append("h-captcha-response", token);
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
        captchaRef.current.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (err) {
      console.error(err);
      setResult("An error occurred while submitting");
    }
  };
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://hcaptcha.com/1/api.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className="box">
      <h1>Contact Me</h1>
      <form onSubmit={onSubmit} className="input-container">
        <div className="small-input-container">
          <div className="input-label">
            <span>Name</span>
            <input type="text" name="name" className="input-small" placeholder="Enter your name" required/></div>
          <div className="input-label">
            <span>Email</span>
            <input type="email" name="email" className="input-small" placeholder="Enter your email" required/></div>
        </div>
        <textarea name="message" className="input-big" placeholder="Enter your message" required></textarea>
        <div className="h-captcha" data-sitekey="887c1780-5b50-4f78-8306-f1828c8c12d0" ref={captchaRef}></div>
        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}
