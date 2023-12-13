// components/LoginForm.js
import React from "react";

const LoginForm = () => {
  return (
    <div className="container mx-auto my-6 max-w-sm bg-white p-6 rounded-md shadow-md">
      <h1 className="text-2xl font-semibold text-center mb-6">Login</h1>
      <form>
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
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
