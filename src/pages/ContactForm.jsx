








// import React, { useState } from 'react';

// function ContactUs() {
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     message: '',
//   });
//   const [submitted, setSubmitted] = useState(false);

//   const handleChange = (e) => {
//     setFormData((prev) => ({
//       ...prev,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // You can replace this with actual backend/email service integration
//     console.log('Form submitted:', formData);

//     setSubmitted(true);
//     setFormData({ name: '', email: '', message: '' });

//     // Optional: Reset after a delay
//     setTimeout(() => setSubmitted(false), 3000);
//   };

//   return (
//     <main className="min-h-screen bg-primary text-white relative">
//       <div className="pattern" />
//       <div className="wrapper z-10 relative max-w-3xl mx-auto py-12 space-y-12">

//         <h1 className="text-4xl font-bold text-center text-gradient">Contact Us</h1>
//         <p className="text-center text-light-200">
//           Have questions, suggestions, or just want to say hi? We'd love to hear from you!
//         </p>

//         <form onSubmit={handleSubmit} className="bg-dark-100 p-6 rounded-xl shadow-lg space-y-6">
//           <div>
//             <label className="block text-sm text-light-100 mb-1">Your Name</label>
//             <input
//               type="text"
//               name="name"
//               required
//               value={formData.name}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-lg bg-light-100/10 text-white placeholder-light-200 outline-none focus:ring-2 focus:ring-light-200"
//               placeholder="Enter your name"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-light-100 mb-1">Email</label>
//             <input
//               type="email"
//               name="email"
//               required
//               value={formData.email}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-lg bg-light-100/10 text-white placeholder-light-200 outline-none focus:ring-2 focus:ring-light-200"
//               placeholder="you@example.com"
//             />
//           </div>

//           <div>
//             <label className="block text-sm text-light-100 mb-1">Message</label>
//             <textarea
//               name="message"
//               required
//               rows="5"
//               value={formData.message}
//               onChange={handleChange}
//               className="w-full px-4 py-2 rounded-lg bg-light-100/10 text-white placeholder-light-200 outline-none focus:ring-2 focus:ring-light-200"
//               placeholder="Write your message here..."
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition text-white font-semibold"
//           >
//             Send Message
//           </button>

//           {submitted && (
//             <p className="text-green-400 text-center pt-2">
//               ✅ Message sent successfully!
//             </p>
//           )}
//         </form>
//       </div>
//     </main>
//   );
// }

// export default ContactUs;









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
