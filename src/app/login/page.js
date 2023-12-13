// components/LoginForm.js
"use client";
import React, { useState } from "react";
import axios from "axios";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAdminLogin = async (e) => {
    setLoading(true);
    e.preventDefault();
    console.log({ email, password });
    try {
      const res = await axios.post("http://localhost:8000/auth/login", {
        email,
        password,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto my-6 max-w-sm min-h-full bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Admin Login</h1>
      <form onSubmit={handleAdminLogin}>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-600"
          >
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="john@example.com"
            required
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-600"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 p-2 w-full border rounded-md"
            placeholder="********"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
            disabled={loading}
          >
            {loading ? "loading..." : "Login"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
