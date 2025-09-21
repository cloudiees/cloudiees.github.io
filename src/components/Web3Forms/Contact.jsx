import { useForm } from "react-hook-form";
import HCaptcha from '@hcaptcha/react-hcaptcha';
import "./Contact.css"
import { Glow } from "@codaworks/react-glow";

export default function Contact() {
  const { handleSubmit, setValue } = useForm();
  const onHCaptchaChange = (token) => {
    setValue("h-captcha-response", token);
  };

  const onSubmit = async (data) => {
    console.log(data);

    await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: data
    }).then((res) => res.json());
  }

  return (
    <div className="box">
      <h1>Contact Me</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="input-container">
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
        <HCaptcha
          sitekey="50b2fe65-b00b-4b9e-ad62-3ba471098be2"
          reCaptchaCompat={false}
          onVerify={onHCaptchaChange}
        />
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
}