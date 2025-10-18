







// // src/components/AuthForm.jsx

// import React, { useState } from 'react';
// import { useAuth } from '../context/AuthContext';
// import { client, account, ID } from '../Appwrite';


// function AuthForm() {
//   const [isRegistering, setIsRegistering] = useState(false);
//   const { login, register } = useAuth();
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: '',
//   });
//   const [error, setError] = useState('');

//   const toggleForm = () => {
//     setIsRegistering((prev) => !prev);
//     setFormData({ name: '', email: '', password: '' });
//     setError('');
//   };

//   const handleChange = (e) => {
//     setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       if (isRegistering) {
//         await register(formData.name, formData.email, formData.password);
//       } else {
//         await login(formData.email, formData.password);
//       }
//     } catch (err) {
//       console.error('Auth error:', err);
//       setError(err.message || 'Something went wrong');
//     }
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-primary px-4 py-10">
//       <div className="bg-dark-100 text-white p-8 rounded-2xl shadow-lg w-full max-w-md">
//         <h2 className="text-3xl font-bold mb-6 text-center">
//           {isRegistering ? 'Create Account' : 'Welcome Back'}
//         </h2>

//         {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

//         <form onSubmit={handleSubmit} className="space-y-4">
//           {isRegistering && (
//             <input
//               name="name"
//               type="text"
//               placeholder="Full Name"
//               value={formData.name}
//               onChange={handleChange}
//               required
//               className="w-full p-3 bg-light-100/5 rounded-lg placeholder-light-200 outline-none"
//             />
//           )}
//           <input
//             name="email"
//             type="email"
//             placeholder="Email Address"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="w-full p-3 bg-light-100/5 rounded-lg placeholder-light-200 outline-none"
//           />
//           <input
//             name="password"
//             type="password"
//             placeholder="Password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//             className="w-full p-3 bg-light-100/5 rounded-lg placeholder-light-200 outline-none"
//           />

//           <button
//             type="submit"
//             className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg hover:opacity-90 transition"
//           >
//             {isRegistering ? 'Register' : 'Login'}
//           </button>
//         </form>

//         <p className="text-center text-sm mt-4 text-gray-100">
//           {isRegistering
//             ? 'Already have an account?'
//             : 'Don’t have an account?'}{' '}
//           <button
//             onClick={toggleForm}
//             className="text-light-200 hover:underline ml-1"
//           >
//             {isRegistering ? 'Login here' : 'Register'}
//           </button>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default AuthForm;




import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { client, account, ID } from "../Appwrite";

function AuthForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const { login, register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const toggleForm = () => {
    setIsRegistering((prev) => !prev);
    setFormData({ name: "", email: "", password: "" });
    setError("");
  };

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        await register(formData.name, formData.email, formData.password);
      } else {
        await login(formData.email, formData.password);
      }
    } catch (err) {
      console.error("Auth error:", err);
      setError(err.message || "Something went wrong");
    }
  };

  return (
    <div className="h-screen w-screen flex items-center justify-center bg-primary overflow-hidden">
      <div className="bg-dark-100 text-white p-8 rounded-2xl shadow-lg w-[90%] max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center">
          {isRegistering ? "Create Account" : "Welcome Back"}
        </h2>

        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {isRegistering && (
            <input
              name="name"
              type="text"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-3 bg-light-100/10 rounded-lg placeholder-light-200 outline-none"
            />
          )}

          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 bg-light-100/10 rounded-lg placeholder-light-200 outline-none"
          />

          <input
            name="password"
            type="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            className="w-full p-3 bg-light-100/10 rounded-lg placeholder-light-200 outline-none"
          />

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg hover:opacity-90 transition"
          >
            {isRegistering ? "Register" : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-100">
          {isRegistering ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            onClick={toggleForm}
            className="text-light-200 hover:underline ml-1"
          >
            {isRegistering ? "Login here" : "Register"}
          </button>
        </p>
      </div>
    </div>
  );
}

export default AuthForm;

