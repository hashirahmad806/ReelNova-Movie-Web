// // import React, { useState } from 'react';

// // function ContactForm() {
// //   const [formData, setFormData] = useState({
// //     name: '',
// //     email: '',
// //     message: ''
// //   });

// //   const [submitted, setSubmitted] = useState(false);

// //   const handleChange = (e) => {
// //     setFormData((prev) => ({
// //       ...prev,
// //       [e.target.name]: e.target.value
// //     }));
// //   };

// //   const handleSubmit = (e) => {
// //     e.preventDefault();

// //     // TODO: You can send this to an API or email service
// //     console.log('Form submitted:', formData);

// //     setSubmitted(true);
// //     setFormData({ name: '', email: '', message: '' });

// //     // Optional: reset after a few seconds
// //     setTimeout(() => setSubmitted(false), 4000);
// //   };

// //   return (
//     <section className="max-w-xl mx-auto p-6 bg-dark-100 text-white rounded-xl shadow-md mt-10">
//       <h2 className="text-2xl font-bold mb-4">Contact Us</h2>

//       {submitted && (
//         <div className="bg-green-600 text-white px-4 py-2 rounded mb-4">
//           Thank you! Your message has been sent.
//         </div>
//       )}

//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label className="block mb-1 font-medium">Name</label>
//           <input
//             name="name"
//             type="text"
//             className="w-full px-4 py-2 rounded bg-dark-100 border border-light-200 focus:outline-none focus:ring-2 focus:ring-light-100 text-white"
//             value={formData.name}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Email</label>
//           <input
//             name="email"
//             type="email"
//             className="w-full px-4 py-2 rounded bg-dark-100 border border-light-200 focus:outline-none focus:ring-2 focus:ring-light-100 text-white"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div>
//           <label className="block mb-1 font-medium">Message</label>
//           <textarea
//             name="message"
//             rows="4"
//             className="w-full px-4 py-2 rounded bg-dark-100 border border-light-200 focus:outline-none focus:ring-2 focus:ring-light-100 text-white"
//             value={formData.message}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-light-200 hover:bg-light-100 text-black font-semibold py-2 rounded transition"
//         >
//           Send Message
//         </button>
//       </form>
//     </section>
//   );
// }

// export default ContactForm;










import React, { useState } from 'react';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can replace this with actual backend/email service integration
    console.log('Form submitted:', formData);

    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Optional: Reset after a delay
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <main className="min-h-screen bg-primary text-white relative">
      <div className="pattern" />
      <div className="wrapper z-10 relative max-w-3xl mx-auto py-12 space-y-12">

        <h1 className="text-4xl font-bold text-center text-gradient">Contact Us</h1>
        <p className="text-center text-light-200">
          Have questions, suggestions, or just want to say hi? We'd love to hear from you!
        </p>

        <form onSubmit={handleSubmit} className="bg-dark-100 p-6 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block text-sm text-light-100 mb-1">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-light-100/10 text-white placeholder-light-200 outline-none focus:ring-2 focus:ring-light-200"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label className="block text-sm text-light-100 mb-1">Email</label>
            <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-light-100/10 text-white placeholder-light-200 outline-none focus:ring-2 focus:ring-light-200"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label className="block text-sm text-light-100 mb-1">Message</label>
            <textarea
              name="message"
              required
              rows="5"
              value={formData.message}
              onChange={handleChange}
              className="w-full px-4 py-2 rounded-lg bg-light-100/10 text-white placeholder-light-200 outline-none focus:ring-2 focus:ring-light-200"
              placeholder="Write your message here..."
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-lg bg-gradient-to-r from-purple-500 to-indigo-600 hover:from-purple-600 hover:to-indigo-700 transition text-white font-semibold"
          >
            Send Message
          </button>

          {submitted && (
            <p className="text-green-400 text-center pt-2">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </main>
  );
}

export default ContactUs;
