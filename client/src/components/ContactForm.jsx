import React from "react";

const ContactForm = () => {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border px-4 py-2 rounded-md w-full"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border px-4 py-2 rounded-md w-full"
        />
      </div>
      <input
        type="text"
        placeholder="Subject"
        className="border px-4 py-2 rounded-md w-full"
      />
      <textarea
        placeholder="Your Message"
        rows="6"
        className="border px-4 py-2 rounded-md w-full"
      ></textarea>
      <button
        type="submit"
        className="bg-primary text-white px-6 py-2 rounded-md"
      >
        Send Message
      </button>
    </form>
  );
};

export default ContactForm;
