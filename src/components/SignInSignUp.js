"use client";

import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export default function SignInSignUp() {
  const [isSignUp, setIsSignUp] = useState(true);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors">
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg max-w-md w-full transition-colors">
        {isSignUp ? (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              Create an Account
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400">
              Enter your details below
            </p>

            {/* Social Login Buttons */}
            <button className="w-full flex items-center justify-center gap-2 border dark:border-gray-700 rounded-lg p-2 mt-4 dark:bg-gray-700 dark:text-white">
              <FcGoogle size={24} /> Sign Up with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border dark:border-gray-700 rounded-lg p-2 mt-2 dark:bg-gray-700 dark:text-white">
              <FaGithub size={24} className="text-black dark:text-white" /> Sign Up with Github
            </button>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
              <span className="px-2 text-gray-400 dark:text-gray-500">Or</span>
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            </div>

            {/* Input Fields */}
            <input
              type="text"
              placeholder="Full Name"
              className="w-full border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg mt-2 dark:text-white"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg mt-2 dark:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg mt-2 dark:text-white"
            />
            <input
              type="password"
              placeholder="Re-type Password"
              className="w-full border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg mt-2 dark:text-white"
            />

            {/* Sign Up Button */}
            <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition">
              Create Account
            </button>

            {/* Toggle to Sign In */}
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
              Already have an account?{" "}
              <span onClick={() => setIsSignUp(false)} className="text-blue-600 cursor-pointer hover:underline">
                Sign in Now!
              </span>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-2xl font-bold text-center text-gray-900 dark:text-white">
              Sign In to Your Account
            </h2>
            <p className="text-center text-gray-500 dark:text-gray-400">Enter your details below</p>

            {/* Input Fields */}
            <input
              type="email"
              placeholder="Email"
              className="w-full border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg mt-2 dark:text-white"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-2 rounded-lg mt-2 dark:text-white"
            />

            {/* Sign In Button */}
            <button className="w-full bg-blue-600 text-white p-2 rounded-lg mt-4 hover:bg-blue-700 transition">
              Sign in
            </button>

            {/* Forgot Password */}
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">Forgot your password?</p>

            {/* Divider */}
            <div className="flex items-center my-4">
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
              <span className="px-2 text-gray-400 dark:text-gray-500">Or</span>
              <hr className="flex-grow border-gray-300 dark:border-gray-600" />
            </div>

            {/* Social Login Buttons */}
            <button className="w-full flex items-center justify-center gap-2 border dark:border-gray-700 rounded-lg p-2 mt-2 dark:bg-gray-700 dark:text-white">
              <FcGoogle size={24} /> Sign In with Google
            </button>
            <button className="w-full flex items-center justify-center gap-2 border dark:border-gray-700 rounded-lg p-2 mt-2 dark:bg-gray-700 dark:text-white">
              <FaGithub size={24} className="text-black dark:text-white" /> Sign In with Github
            </button>

            {/* Toggle to Sign Up */}
            <p className="text-center text-gray-500 dark:text-gray-400 mt-4">
              Don’t have an account?{" "}
              <span onClick={() => setIsSignUp(true)} className="text-blue-600 cursor-pointer hover:underline">
                Sign Up Now!
              </span>
            </p>
          </>
        )}
      </div>
    </div>
  );
}





