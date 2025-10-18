



import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

function Contact() {
  const form = useRef();
  const [isSending, setIsSending] = useState(false);
  const [sent, setSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);

    emailjs
      .sendForm(
        "service_01",     // from EmailJS dashboard
        "template_492kgrt",    // from EmailJS dashboard
        form.current,
        "9v86N2LdK4ZKWmc-6"      // from EmailJS “Account” -> “API keys”
      )
      .then(
        () => {
          setSent(true);
          setIsSending(false);
          e.target.reset();
        },
        (error) => {
          console.error("Email Error:", error.text);
          setIsSending(false);
        }
      );
  };

  return (
    <div className="contact-page">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <label>Name</label>
        <input type="text" name="user_name" placeholder="Your Name" required />

        <label>Email</label>
        <input type="email" name="user_email" placeholder="Your Email" required />

        <label>Message</label>
        <textarea name="message" placeholder="Your Message" required />

        <button type="submit" disabled={isSending}>
          {isSending ? "Sending..." : "Send Message"}
        </button>

        {sent && <p className="success">✅ Message Sent Successfully!</p>}
      </form>
    </div>
  );
}

export default Contact;
