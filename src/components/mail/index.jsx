import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { YellowBtn, YellowTwoBtn } from "../styles/style";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_mrbbnj9", "template_z7pvei9", form.current, {
        publicKey: "NaLzH2NMYiLPH7I-X",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Your Name </label>
      <input type="text" name="user_name" placeholder="Your name" required />
      <label>Your Email</label>
      <input
        type="email"
        name="user_email"
        placeholder="alma.lawson@example.com"
        required
      />
      <label>Your Phone</label>
      <input
        type="number"
        name="user_phone"
        placeholder="+(82) 10-0000-0000"
        required
      />
       <label>Message</label>
      <textarea name="your_message" placeholder="Your message" required />
      <YellowTwoBtn>Send message</YellowTwoBtn>
    </form>
  );
};
