import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form submitted successfully!");
  };

  return (
    <div className="bg-green-100 py-12 px-6 md:px-24">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-red-600">
          Schedule Your Appointment Today!
        </h1>
        <p className="text-gray-700 mt-2">
          Ready to reclaim your health and overcome addiction? Contact Dhara
          Nasha Mukti Kendra today to book your appointment and start your
          journey toward a healthier, addiction-free life.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Contact Details */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-red-500">Contact</h2>
          <p className="text-gray-800">
            📞{" "}
            <a
              href="tel:+919279540580"
              className="text-blue-600 underline hover:text-blue-800"
            >
              +91 9279540580
            </a>
          </p>
          <p className="text-gray-800">
            💬{" "}
            <a
              href="https://wa.me/919279540580"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 underline hover:text-green-800"
            >
              WhatsApp Us
            </a>
          </p>
          <p className="text-gray-800">
            📧{" "}
            <a
              href="mailto:dharanasamutkikendra@gmail.com"
              className="text-blue-600 underline hover:text-blue-800"
            >
              dharanasamutkikendra@gmail.com
            </a>
          </p>
        </div>

        {/* Contact Form */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold mb-4 text-red-500">
            Get In Touch
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              placeholder="Enter your Name"
              className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <input
              type="text"
              placeholder="Enter your Phone No."
              className="border rounded px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
            <button
              type="submit"
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 focus:ring-2 focus:ring-red-500 w-full"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;



