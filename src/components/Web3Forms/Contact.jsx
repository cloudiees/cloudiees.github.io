import React, { useState } from "react";

export default function Contact() {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending...");

    const formData = new FormData(event.target);
    formData.append("access_key", "YOUR_ACCESS_KEY"); // replace with real key

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    console.log(data);

    if (data.success) {
      setResult("Form Submitted Successfully 🎉");
      event.target.reset();
    } else {
      setResult(data.message);
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input type="text" name="name" placeholder="Name" required />
      <input type="email" name="email" placeholder="Email" required />
      <textarea name="message" placeholder="Message" required />
      <button type="submit">Send</button>
      <p>{result}</p>
    </form>
  );
}