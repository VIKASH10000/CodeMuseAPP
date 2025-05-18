// src/components/WelcomeModal.jsx
import React from "react";

const WelcomeModal = ({ onLogin, onSignup, onContinue }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm z-50 flex items-center justify-center px-4">
      <div className="bg-white dark:bg-gray-900 rounded-xl shadow-xl max-w-md w-full p-8 text-center transition-colors duration-300">
        <h2 className="text-4xl font-extrabold mb-4 text-gray-900 dark:text-white">
          Welcome to <span className="text-blue-600 dark:text-blue-400">CodeMuse</span>
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg">
          Your AI Developer Companion. Please choose how you'd like to proceed:
        </p>

        <div className="flex flex-col space-y-4">
          <button
            onClick={onLogin}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-lg shadow-md transition"
            aria-label="Login to CodeMuse"
          >
            Login
          </button>

          <button
            onClick={onSignup}
            className="bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 text-gray-900 dark:text-gray-100 font-semibold py-3 rounded-lg shadow-md transition"
            aria-label="Sign up for CodeMuse"
          >
            Sign Up
          </button>

          <button
            onClick={onContinue}
            className="text-sm text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 underline mt-4"
            aria-label="Continue without login"
          >
            Continue without login
          </button>
        </div>
      </div>
    </div>
  );
};

export default WelcomeModal;
