import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        service_nmt72or,      // ✅ Replace with your EmailJS service ID
        template_46c2z7k,     // ✅ Replace with your EmailJS template ID
        {
          from_name: form.name,
          to_name: "Rushikesh",
          from_email: form.email,
          to_email: "your@email.com",
          message: form.message,
        },
        OrVQSyQ4mYJpKQHh7       // ✅ Replace with your EmailJS public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div className="w-full min-h-screen bg-black text-white flex justify-center items-center px-4 py-12">
      <motion.div
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className="text-3xl font-bold mb-4">Get in Touch</h3>
        <p className="mb-6 text-gray-300">Let's connect! Send me a message below. 🚀</p>

        <form ref={formRef} onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 text-white border border-white/20 outline-none"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 text-white border border-white/20 outline-none"
            required
          />
          <textarea
            rows={4}
            name="message"
            placeholder="Your Message"
            value={form.message}
            onChange={handleChange}
            className="p-3 rounded bg-black/50 text-white border border-white/20 outline-none"
            required
          />
          <button
            type="submit"
            className="p-3 bg-white text-black rounded hover:bg-gray-300 transition font-bold"
          >
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default Contact;
