import { useState } from "react";

function RegistrationPage({ onRegister }) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({ fullName, email });
  };

  return (
    <div className="bg-white shadow-lg p-8 rounded-2xl max-w-sm w-full">
      <h2 className="text-2xl font-bold text-orange-600 mb-6">
        Enter you Details
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-left font-semibold text-gray-700">
            Please Enter your Full Name
          </label>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <div>
          <label className="block text-left font-semibold text-gray-700">
            Enter Your Email
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full border p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        <button
          type="submit"
          className="bg-orange-500 text-white w-full py-2 rounded-md hover:bg-orange-600 transition"
        >
          Continue
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
