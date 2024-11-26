import React, { useState } from "react";

const Contact = () => {
  // State for form data
  const [formData, setFormData] = useState({ name: "", phone: "" });
  const [formStatus, setFormStatus] = useState({
    isSubmitted: false,
    isError: false,
    message: "",
  });

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.name && formData.phone) {
      // Simulate form submission
      setFormStatus({
        isSubmitted: true,
        isError: false,
        message: "Form submitted successfully!",
      });

      // Clear form after submission
      setTimeout(() => {
        setFormStatus({ isSubmitted: false, isError: false, message: "" });
        setFormData({ name: "", phone: "" });
      }, 3000);
    } else {
      setFormStatus({
        isSubmitted: true,
        isError: true,
        message: "Please fill in all fields correctly.",
      });
    }
  };

  return (
    <div className="bg-gradient-to-b from-green-100 to-green-200 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-red-600 mb-4">
            Schedule Your Appointment Today!
          </h1>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            Ready to reclaim your health and overcome addiction? Contact Dhara
            Nasha Mukti Kendra today to book your appointment and start your
            journey toward a healthier, addiction-free life.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Details */}
          <div className="bg-white p-8 rounded-2xl shadow-lg transform transition duration-500 hover:scale-105">
            <h2 className="text-2xl font-semibold mb-6 text-red-500">
              Contact Us
            </h2>
            <div className="space-y-4">
              <p className="flex items-center text-gray-800">
                <span className="text-2xl mr-3">📞</span>
                <a
                  href="tel:+919279540580"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  +91 9199271478
                </a>
              </p>
              <p className="flex items-center text-gray-800">
                <span className="text-2xl mr-3">💬</span>
                <a
                  href="https://wa.me/9199271478"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-600 hover:text-green-800 transition duration-300"
                >
                  WhatsApp Us
                </a>
              </p>
              <p className="flex items-center text-gray-800">
                <span className="text-2xl mr-3">📧</span>
                <a
                  href="mailto:mithileshfeb2001@gmail.com"
                  className="text-blue-600 hover:text-blue-800 transition duration-300"
                >
                  mithileshfeb2001@gmail.com
                </a>
              </p>
            </div>
          </div>
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold mb-6 text-red-500">
              Get In Touch
            </h2>
            {formStatus.isSubmitted && !formStatus.isError ? (
              <div className="flex items-center text-green-600 font-semibold">
                ✅ {formStatus.message}
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your Name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Phone Number
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Enter your Phone No."
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-green-500 focus:border-transparent transition duration-300"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition duration-300 transform hover:scale-105"
                >
                  {formStatus.isSubmitted && !formStatus.isError
                    ? "Submitting..."
                    : "Submit"}
                </button>
                {formStatus.isError && (
                  <div className="flex items-center text-red-600 font-semibold mt-2">
                    ⚠️ {formStatus.message}
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
