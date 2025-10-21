









import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ for redirect
import { useAuth } from "../context/AuthContext";

function AuthForm() {
  const [isRegistering, setIsRegistering] = useState(false);
  const { login, register } = useAuth();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // ✅

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
    setError(""); // clear previous errors
    setLoading(true); // ✅ start loading
    try {
      if (isRegistering) {
        await register(formData.name, formData.email, formData.password);
        console.log("✅ Registered successfully");
      } else {
        await login(formData.email, formData.password);
        console.log("✅ Logged in successfully");
      }
      navigate("/"); // ✅ redirect on success
    } catch (err) {
      // Log full error details to console
      console.error("❌ Auth error:", {
        message: err.message,
        code: err.code,
        response: err.response,
      });

      // Show user-friendly error message
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false); // ✅ stop loading
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
            placeholder="Password (min 8 chars)"
            value={formData.password}
            onChange={handleChange}
            required
            minLength={8} // ✅ Appwrite enforces secure passwords
            className="w-full p-3 bg-light-100/10 rounded-lg placeholder-light-200 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 rounded-lg transition ${
              loading ? "opacity-50 cursor-not-allowed" : "hover:opacity-90"
            }`}
          >
            {loading
              ? isRegistering
                ? "Creating account..."
                : "Logging in..."
              : isRegistering
              ? "Register"
              : "Login"}
          </button>
        </form>

        <p className="text-center text-sm mt-4 text-gray-100">
          {isRegistering
            ? "Already have an account?"
            : "Don’t have an account?"}{" "}
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
