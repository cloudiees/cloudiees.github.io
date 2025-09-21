import "./Contact.css"
import React from "react";

export default function Contact() {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "58740c9f-19f9-41a7-88a6-fcaac66ebf6c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="box">
      <h1>Contact Me</h1>
      <form onSubmit={onSubmit} className="input-container">
        <div className="small-input-container">
          <div className="input-label">
            <span>Name</span>
            <input type="text" name="name" className="input-small" placeholder="Enter your name" required />
          </div>
          <div className="input-label">
            <span>Email</span>
            <input type="email" name="email" className="input-small" placeholder="Enter your email" required />
          </div>
        </div>
        <textarea name="message" className="input-big" placeholder="Enter your message" required></textarea>
        <button type="submit">Submit Form</button>
      </form>
      <span>{result}</span>
    </div>
  );
}