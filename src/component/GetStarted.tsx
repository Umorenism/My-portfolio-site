import { useState } from "react";

export const GetStarted = () => {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    // Simulate an async action, like an API call
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the duration as needed
  };

  return (
    <div className="bg-red-400 min-h-screen items-center flex justify-center flex-col p-4">
      <h1 className="mb-3 text-2xl text-center ">
        WELCOME TO UMOREN VICTOR PORTFOLIO
      </h1>
      <button
        onClick={handleClick}
        disabled={loading}
        className="px-5 bg-gradient-to-r from-blue-600 to-green-800 py-2 flex items-center justify-center rounded-md"
      >
        {loading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v4l-3 3 3 3V4a8 8 0 01-8 8z"
            ></path>
          </svg>
        ) : (
          "Get Started"
        )}
      </button>
    </div>
  );
};
