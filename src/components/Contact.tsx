import { useState } from "react";
import { MdArrowOutward, MdCopyright } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [statusMessage, setStatusMessage] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("error");
      setStatusMessage("Please fill in all required fields.");
      return;
    }
    setStatus("submitting");
    setStatusMessage("");

    try {
      const response = await fetch("http://localhost:8080/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setStatusMessage("Thank you! Your message has been sent successfully.");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        const errorText = await response.text();
        setStatus("error");
        setStatusMessage(errorText || "Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      setStatus("error");
      setStatusMessage("Failed to connect to the backend server. Please verify it is running on port 8080.");
    }
  };

  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="flex flex-col lg:flex-row gap-12 mt-8">
          {/* Details Column */}
          <div className="flex-1 flex flex-col justify-between gap-8">
            <div>
              <h4 className="text-xl font-semibold opacity-60 mb-3">Connect</h4>
              <p className="mb-2">
                <a
                  href="mailto:pratikshavyawhare79@gmail.com"
                  data-cursor="disable"
                  className="hover:text-teal-400 transition-colors"
                >
                  Email: pratikshavyawhare79@gmail.com
                </a>
              </p>
              <p className="mb-6">
                <a
                  href="tel:7666095620"
                  data-cursor="disable"
                  className="hover:text-teal-400 transition-colors"
                >
                  Phone: +91 7666095620
                </a>
              </p>
              <p className="opacity-90">Pune, Maharashtra, India</p>

              <h4 className="text-xl font-semibold opacity-60 mt-8 mb-3">Education</h4>
              <div className="space-y-4">
                <p className="m-0 leading-relaxed">
                  <strong className="text-teal-300">MCA</strong> — G.H. Raisoni College of Engineering, Pune (CGPA: 9.6) | 2023–2025
                </p>
                <p className="m-0 leading-relaxed">
                  <strong className="text-teal-300">BCA</strong> — Smt. Kesharbai Lahoti College, Amravati (83.64%) | 2020–2023
                </p>
                <p className="text-sm opacity-75 m-0">
                  HSC: 79.54% | SSC: 86.80%
                </p>
              </div>
            </div>

            <div>
              <h2 className="text-lg font-normal leading-snug">
                Designed by <span className="text-teal-400">Akash Malhotra</span> <br /> 
                Developed by <span className="text-teal-400">Pratiksha Vyawhare</span>
              </h2>
              <h5 className="flex items-center gap-2 opacity-50 mt-2 text-sm font-medium">
                <MdCopyright /> 2026
              </h5>
            </div>
          </div>

          {/* Socials & Contact Form Column */}
          <div className="flex-1 flex flex-col gap-8">
            <div>
              <h4 className="text-xl font-semibold opacity-60 mb-4">Socials</h4>
              <div className="flex flex-col gap-3">
                <a
                  href="https://github.com/pratikshavyawhare79"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social py-1 hover:text-teal-400 transition-colors border-b border-gray-700 flex items-center justify-between"
                >
                  GitHub <MdArrowOutward />
                </a>
                <a
                  href="https://www.linkedin.com/in/pratiksha-vyawhare"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social py-1 hover:text-teal-400 transition-colors border-b border-gray-700 flex items-center justify-between"
                >
                  LinkedIn <MdArrowOutward />
                </a>
                <a
                  href="https://www.hackerrank.com/pratikshavyawhare79"
                  target="_blank"
                  rel="noreferrer"
                  data-cursor="disable"
                  className="contact-social py-1 hover:text-teal-400 transition-colors border-b border-gray-700 flex items-center justify-between"
                >
                  HackerRank <MdArrowOutward />
                </a>
              </div>
            </div>

            {/* Enquire Form */}
            <div className="bg-slate-900/40 backdrop-blur-md p-6 rounded-xl border border-teal-500/20 shadow-lg">
              <h4 className="text-lg font-medium text-teal-300 mb-4">Send a Message</h4>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <div className="flex flex-col gap-1">
                  <label htmlFor="name" className="text-xs text-gray-400 font-medium">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="bg-slate-950/60 border border-gray-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md p-2 text-sm text-gray-200 placeholder-gray-500 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="email" className="text-xs text-gray-400 font-medium">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email"
                    className="bg-slate-950/60 border border-gray-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md p-2 text-sm text-gray-200 placeholder-gray-500 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="subject" className="text-xs text-gray-400 font-medium">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Message subject"
                    className="bg-slate-950/60 border border-gray-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md p-2 text-sm text-gray-200 placeholder-gray-500 outline-none transition-all"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <label htmlFor="message" className="text-xs text-gray-400 font-medium">Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="Type your message here..."
                    className="bg-slate-950/60 border border-gray-700 focus:border-teal-400 focus:ring-1 focus:ring-teal-400 rounded-md p-2 text-sm text-gray-200 placeholder-gray-500 outline-none transition-all resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white font-medium text-sm py-2 px-4 rounded-md transition-all duration-300 shadow-md shadow-teal-500/10 hover:shadow-teal-400/20 active:scale-95 disabled:opacity-50 disabled:scale-100 flex justify-center items-center gap-2 mt-2"
                >
                  {status === "submitting" ? "Sending..." : "Submit Message"}
                </button>

                {statusMessage && (
                  <p
                    className={`text-xs mt-2 font-medium text-center ${
                      status === "success" ? "text-green-400" : "text-rose-400"
                    }`}
                  >
                    {statusMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
