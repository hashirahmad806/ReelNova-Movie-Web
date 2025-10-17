// import React, { useEffect, useState } from 'react';

// function AboutUs() {
//   const [dailyUsers, setDailyUsers] = useState(0);
//   const [totalUsers, setTotalUsers] = useState(0);

//   // Animate numbers when component mounts
//   useEffect(() => {
//     const animateCount = (target, setter, duration) => {
//       let start = 0;
//       const stepTime = Math.abs(Math.floor(duration / target));
//       const timer = setInterval(() => {
//         start += 1;
//         setter(start);
//         if (start >= target) clearInterval(timer);
//       }, stepTime);
//     };

//     const randomDaily = Math.floor(Math.random() * 450) + 50;
//     const randomTotal = Math.floor(Math.random() * 9000) + 1000;

//     animateCount(randomDaily, setDailyUsers, 1500);
//     animateCount(randomTotal, setTotalUsers, 2000);
//   }, []);

//   return (
//     <main className="min-h-screen relative bg-primary text-white">
//       <div className="pattern" />

//       <div className="wrapper flex flex-col items-center text-center space-y-14 z-10 relative">
//         {/* Header */}
//         <section>
//           <h1 className="text-4xl sm:text-5xl font-bold mb-4">About the Developer</h1>
//           <p className="max-w-2xl text-lg sm:text-xl text-gray-300">
//             Hi, I'm <strong>Your Name</strong>. I’m a front-end developer passionate about
//             building clean, user-friendly web apps. This project was made to help you
//             discover movies you'll love—without the hassle.
//           </p>
//         </section>

//         {/* Stats */}
//         <section className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full max-w-lg">
//           <div className="bg-dark-100 p-6 rounded-2xl shadow-xl transition transform hover:scale-105 backdrop-blur-md">
//             <h2 className="text-3xl font-bold text-gradient">{dailyUsers}+</h2>
//             <p className="text-gray-300">Daily Active Users</p>
//           </div>
//           <div className="bg-dark-100 p-6 rounded-2xl shadow-xl transition transform hover:scale-105 backdrop-blur-md">
//             <h2 className="text-3xl font-bold text-gradient">{totalUsers}+</h2>
//             <p className="text-gray-300">Total Users (since launch)</p>
//           </div>
//         </section>

//         {/* Developer Journey */}
//         <section className="mt-4 space-y-4 max-w-xl text-left">
//           <h2 className="text-2xl font-semibold text-white">My Journey</h2>
//           <p className="text-gray-300">
//             I started this journey combining my love for movies and web development. With
//             tools like React, Tailwind CSS, and TMDB API, this app was brought to life.
//           </p>
//           <p className="text-gray-400">
//             Want to collaborate or chat? Reach out on GitHub, LinkedIn, or drop me a
//             message anytime.
//           </p>
//         </section>

//         {/* ⭐ Client Reviews */}
//         <section className="w-full max-w-5xl mt-12">
//           <h2 className="text-3xl font-bold mb-6 text-white text-center">What Users Say</h2>
//           <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {[
//               {
//                 name: 'Aarav M.',
//                 quote: 'This app is 🔥. Found some gems I’d never have watched!',
//               },
//               {
//                 name: 'Sneha K.',
//                 quote: 'Clean UI and no ads. Best movie search app I’ve used!',
//               },
//               {
//                 name: 'Raj P.',
//                 quote: 'Love the like/favorite feature! Makes rewatching easy.',
//               },
//             ].map((review, i) => (
//               <div
//                 key={i}
//                 className="bg-dark-100 p-5 rounded-xl shadow-lg hover:shadow-xl transition transform hover:-translate-y-1"
//               >
//                 <p className="text-gray-100 italic">“{review.quote}”</p>
//                 <p className="mt-4 text-sm font-semibold text-gray-400 text-right">
//                   — {review.name}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default AboutUs;



import React, { useEffect, useState } from 'react';
// Optional: If using animations
// import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aisha Khan',
    role: 'UI/UX Designer',
    comment: 'Absolutely love the simplicity and design. Found amazing movies I wouldn’t have otherwise!',
  },
  {
    name: 'Rohan Mehta',
    role: 'Film Enthusiast',
    comment: 'It’s my go-to site now. Clean interface and great recommendations!',
  },
  {
    name: 'Jessica Lin',
    role: 'Frontend Developer',
    comment: 'App feels super fast and smooth. Great work!',
  },
];

function AboutUs() {
  const [dailyUsers, setDailyUsers] = useState(0);
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    const randomDaily = Math.floor(Math.random() * 450) + 50;
    const randomTotal = Math.floor(Math.random() * 9000) + 1000;

    setDailyUsers(randomDaily);
    setTotalUsers(randomTotal);
  }, []);

  return (
    <main className="min-h-screen bg-primary text-white relative">
      <div className="pattern" />

      <div className="wrapper flex flex-col items-center text-center space-y-12 z-10 relative">
        {/* Heading */}
        <h1 className="text-5xl font-bold mt-10 text-gradient">Meet the Developer</h1>

        {/* Introduction */}
        <p className="max-w-3xl text-lg sm:text-xl text-gray-100">
          Hi, I’m <strong className="text-white">Your Name</strong>, a passionate developer who loves building beautiful, functional web experiences. This project helps users discover movies effortlessly.
        </p>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-2xl w-full">
          <div className="bg-dark-100 p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h2 className="text-3xl font-bold">{dailyUsers}+</h2>
            <p className="text-gray-100">Daily Active Users</p>
          </div>
          <div className="bg-dark-100 p-6 rounded-xl shadow-md hover:scale-105 transition">
            <h2 className="text-3xl font-bold">{totalUsers}+</h2>
            <p className="text-gray-100">Total Users Since Launch</p>
          </div>
        </div>

        {/* Developer Journey */}
        <div className="max-w-3xl text-left space-y-4 mt-10">
          <h2 className="text-2xl font-semibold text-white">My Journey</h2>
          <p className="text-light-200">
            This project started from my love for both films and frontend design. It’s built with React, Tailwind CSS, and TMDB API — optimized for a smooth and joyful user experience.
          </p>
          <p className="text-light-200">
            I’m constantly improving the app and would love your feedback. Find me on GitHub, LinkedIn, or shoot a message anytime!
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-16 w-full max-w-5xl">
          <h2 className="text-3xl font-bold mb-8 text-center text-gradient">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((review, index) => (
              <div
                key={index}
                className="bg-dark-100 p-6 rounded-xl text-left shadow hover:shadow-lg transition duration-300"
              >
                <p className="italic text-light-100">“{review.comment}”</p>
                <div className="mt-4">
                  <p className="font-semibold text-white">{review.name}</p>
                  <p className="text-gray-400 text-sm">{review.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}

export default AboutUs;
