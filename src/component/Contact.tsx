import { useState } from "react";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", e.target, "YOUR_USER_ID")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="px-4 justify-center py-16 flex items-center mt-10">
      <div className="w-full py-16 flex gap-2 p-4 flex-col md:flex-row px-8 max-w-[1300px]">
        {/* Email Form Section */}
        <div className="md:w-1/2  w-full flex justify-center items-center">
          <form
            className="w-full max-w-lg p-8 bg-white shadow-2xl rounded"
            onSubmit={sendEmail}
          >
            <h2 className="text-2xl mb-4">Contact Me</h2>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                type="text"
                name="name"
                className="w-full px-3 py-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                type="email"
                name="email"
                className="w-full px-3 py-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                name="message"
                className="w-full px-3 py-2 border rounded"
                onChange={handleChange}
                required
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded"
              >
                Send
              </button>
            </div>
          </form>
        </div>

        {/* Google Map Section */}
        <div className="md:w-1/2 bg-purple-300 max-h-[500px] w-full">
          <iframe
            width="100%"
            height="100%"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://maps.google.com/maps?q=Port%20Harcourt&t=&z=13&ie=UTF8&iwloc=&output=embed"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
