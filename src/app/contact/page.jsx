"use client";

import { useState, useEffect } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setResponseMessage("");

    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setResponseMessage("Please enter a valid 10-digit phone number.");
      setIsSubmitting(false);
      setTimeout(() => setResponseMessage(""), 5000);
      return;
    }

    const formDataEncoded = new FormData();
    Object.entries(formData).forEach(([key, value]) => {
      formDataEncoded.append(key, value);
    });

    try {
      const res = await fetch("https://formspree.io/f/mqaelnkb", {
        method: "POST",
        body: formDataEncoded,
        headers: {
          Accept: "application/json",
        },
      });

      if (res.ok) {
        setResponseMessage("Your message has been sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        setResponseMessage("Something went wrong. Please try again.");
      }
    } catch (error) {
      setResponseMessage("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);

      // Remove the message after 5 seconds
      setTimeout(() => {
        setResponseMessage("");
      }, 5000);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 px-4 py-10">
      <div className="flex flex-col md:flex-row bg-white max-w-5xl w-full rounded-lg shadow-lg">
        {/* Left Side: Contact Information */}
        <div className="md:w-1/2 p-8 bg-[#f7f3e9] rounded-l-lg flex flex-col justify-center">
          <h2 className="text-2xl font-semibold text-[#713f12] mb-4">
            Contact Us
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            We'd love to hear from you! Reach out with your questions or
            feedback.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            <strong>Email:</strong> chocoza.chocolates@gmail.com
          </p>
          <p className="text-lg text-gray-700">
            <strong>Phone:</strong> +91 94096 64446
          </p>
        </div>

        {/* Right Side: Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-2xl font-semibold text-[#713f12] mb-6">
            Send a Message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Field */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-md text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a16207]"
                placeholder="Enter your full name"
                required
              />
            </div>

            {/* Email Field */}
            <div className="flex flex-col">
              <label htmlFor="email" className="text-md text-gray-700 mb-1">
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a16207]"
                placeholder="Enter your email"
                required
              />
            </div>

            {/* Phone Field */}
            <div className="flex flex-col">
              <label htmlFor="phone" className="text-md text-gray-700 mb-1">
                Your Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a16207]"
                placeholder="Enter your phone number"
                required
              />
            </div>

            {/* Message Field */}
            <div className="flex flex-col">
              <label htmlFor="message" className="text-md text-gray-700 mb-1">
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#a16207]"
                placeholder="Write your message here"
                rows="4"
                required
              />
            </div>

            {/* Submit Button */}
            <div className="flex justify-end">
              <button
                type="submit"
                className="px-6 py-2 bg-[#a16207] text-white font-semibold rounded-lg hover:bg-[#713f12] transition duration-200"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </div>
          </form>

          {/* Response Message */}
          {responseMessage && (
            <div
              className={`mt-4 p-4 text-center rounded-lg ${
                responseMessage.includes("success")
                  ? "bg-green-100 text-green-700"
                  : "bg-red-100 text-red-700"
              }`}
            >
              {responseMessage}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
