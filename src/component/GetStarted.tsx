import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const GetStarted = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setLoading(true);
    // Simulate an async action, like an API call
    setTimeout(() => {
      setLoading(false);
      navigate("/home");
    }, 2000); // Adjust the duration as needed
  };

  return (
    <div className="custom-pattern bg-cover bg-center min-h-screen flex items-center justify-center text-white flex-col">
      <h1 className="text-2xl font-semibold mb-2">Welcome to my portfolio</h1>

      <button
        onClick={handleClick}
        disabled={loading}
        className="px-5 bg-gradient-to-r from-blue-600 to-orange-600 py-2 flex items-center justify-center rounded-md"
      >
        {loading ? (
          <svg
            className="animate-spin h-10 w-10 text-white"
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
