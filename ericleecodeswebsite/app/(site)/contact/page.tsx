"use client";

import { useState, ChangeEvent, FormEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [responseMessage, setResponseMessage] = useState("");

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setResponseMessage("");

    try {
      const response = await fetch("/api/send", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setResponseMessage(
          "Thanks for the email! I'll be in touch with you soon."
        );
      } else {
        const errorData = await response.json();
        setResponseMessage(`Error: ${errorData.error}`);
      }
    } catch (error) {
      if (error instanceof Error) setResponseMessage(`Error: ${error.message}`);
    }
  };

  return (
    <div className="pb-32 mt-14 text-lg bg-darker">
      <h1 className="flex justify-center text-4xl font-bold py-10  text-lighter">
        Contact Me!
      </h1>
      <div className="flex justify-center items-center px-4 my-10">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <div className="mb-6">
            <label
              htmlFor="name"
              className="block text-lighter text-sm font-bold mb-2"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darker leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-lighter text-sm font-bold mb-2"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darker leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="block text-lighter text-sm font-bold mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-darker leading-tight focus:outline-none focus:shadow-outline h-32 resize-none"
              placeholder="Your Message"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Send Email
          </button>
          {responseMessage && (
            <p className="text-red-500 mt-4">{responseMessage}</p>
          )}
        </form>
      </div>
    </div>
  );
}
