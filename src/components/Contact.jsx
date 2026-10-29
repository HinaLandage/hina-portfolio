import { useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { Mail, MapPin, Send, Copy, Check } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const EMAIL = "hinalandage2177@gmail.com";

const contactDetails = [
  {
    icon: Mail,
    label: "Email Me",
    value: EMAIL,
    href: `mailto:${EMAIL}`,
    color: "text-violet-500",
    bg: "bg-violet-500/10",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Pune, Maharashtra, India",
    color: "text-blue-500",
    bg: "bg-blue-500/10",
  },
];

const socialLinks = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/HinaLandage?tab=repositories",
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hina-landage-127698259/",
  },
];

const initialFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

export default function Contact({ isDark = true }) {
  const [formData, setFormData] = useState(initialFormData);
  const [isSending, setIsSending] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setEmailCopied(true);

      setTimeout(() => {
        setEmailCopied(false);
      }, 2000);
    } catch (error) {
      console.error("Unable to copy email:", error);
      setStatus({
        type: "error",
        message:
          "Unable to copy automatically. Please select and copy the email address.",
      });
    }
  };

  const updateField = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setStatus({ type: "", message: "" });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (isSending) return;

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: "error",
        message:
          "Email service is not configured. Please contact me directly by email.",
      });
      return;
    }

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject.trim(),
          message: formData.message.trim(),
          reply_to: formData.email.trim(),
        },
        { publicKey },
      );

      setFormData(initialFormData);

      setStatus({
        type: "success",
        message:
          "Your message has been sent successfully! I'll get back to you soon.",
      });
    } catch (error) {
      console.error("EmailJS sending error:", error);

      setStatus({
        type: "error",
        message:
          "Sorry, your message could not be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  const inputClass = `w-full rounded-xl border px-4 py-3 text-sm outline-none transition-all duration-300 focus:border-violet-500 focus:ring-2 focus:ring-violet-500/20 ${
    isDark
      ? "border-white/10 bg-white/[0.04] text-white placeholder:text-gray-500"
      : "border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400"
  }`;

  const mutedText = isDark ? "text-gray-400" : "text-gray-600";

  return (
    <section
      id="contact"
      className={`relative overflow-hidden px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ${
        isDark ? "bg-[#0B0B14] text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Background glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-violet-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 45 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{
            duration: 1.3,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="mx-auto mb-14 max-w-2xl text-center"
        >
          <p className="mb-4 text-sm font-bold uppercase tracking-[0.3em] text-violet-500">
            Get In Touch
          </p>

          <h2 className="text-3xl font-extrabold tracking-tight sm:text-5xl">
            Let's{" "}
            <span className="bg-gradient-to-r from-violet-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
              Connect
            </span>
          </h2>

          <div className="mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-violet-500 to-blue-500" />

          <p className={`mt-6 text-sm leading-7 sm:text-base ${mutedText}`}>
            Looking for a frontend developer or want to discuss a project? I'd
            love to hear from you. Let's build something meaningful together.
          </p>
        </motion.div>

        {/* Contact content */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:gap-10">
          {/* Contact information */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-2"
          >
            <div
              className={`h-full rounded-2xl border p-6 sm:p-8 ${
                isDark
                  ? "border-violet-500/20 bg-[#10101d]/90"
                  : "border-violet-200 bg-violet-50/40"
              }`}
            >
              <h3 className="text-2xl font-bold">
                Let's talk about your{" "}
                <span className="text-violet-500">next project.</span>
              </h3>

              <p className={`mt-4 text-sm leading-7 ${mutedText}`}>
                I'm open to entry-level frontend developer opportunities,
                internships, and collaborations involving React.js and modern
                web technologies.
              </p>

              {/* Contact details */}
              <div className="mt-8 space-y-5">
                {contactDetails.map((item) => {
                  const Icon = item.icon;
                  const isEmail = item.label === "Email Me";

                  return (
                    <div
                      key={item.label}
                      className="flex min-w-0 items-center gap-4"
                    >
                      <div
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl ${item.bg}`}
                      >
                        <Icon className={`h-5 w-5 ${item.color}`} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-xs text-gray-500">{item.label}</p>

                        {isEmail ? (
                          <div className="mt-1 flex min-w-0 items-center gap-2">
                            <a
                              href={item.href}
                              className="min-w-0 break-all text-sm font-medium transition-colors hover:text-violet-500"
                            >
                              {item.value}
                            </a>

                            <button
                              type="button"
                              onClick={copyEmail}
                              title={
                                emailCopied ? "Email copied!" : "Copy email"
                              }
                              aria-label={
                                emailCopied
                                  ? "Email copied"
                                  : "Copy email address"
                              }
                              className={`inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg transition-all duration-200 hover:scale-105 ${
                                isDark
                                  ? "text-gray-400 hover:bg-violet-500/10 hover:text-violet-400"
                                  : "text-gray-500 hover:bg-violet-100 hover:text-violet-600"
                              }`}
                            >
                              {emailCopied ? (
                                <Check size={17} className="text-emerald-500" />
                              ) : (
                                <Copy size={17} />
                              )}
                            </button>

                            {emailCopied && (
                              <span
                                role="status"
                                className="shrink-0 text-xs font-medium text-emerald-500"
                              >
                                Copied!
                              </span>
                            )}
                          </div>
                        ) : (
                          <p className="mt-1 text-sm font-medium">
                            {item.value}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div
                className={`my-8 border-t ${
                  isDark ? "border-white/10" : "border-gray-200"
                }`}
              />

              <p className="text-sm font-semibold">Find me online</p>

              <div className="mt-4 flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-500 ${
                        isDark
                          ? "border-white/10 bg-white/[0.04] text-gray-300"
                          : "border-gray-200 bg-white text-gray-600"
                      }`}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>

              {/* Availability status */}
              <div
                className={`mt-8 flex items-center gap-3 rounded-xl border p-4 ${
                  isDark
                    ? "border-emerald-500/20 bg-emerald-500/[0.06]"
                    : "border-emerald-200 bg-emerald-50"
                }`}
              >
                <span className="relative flex h-3 w-3 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-3 w-3 rounded-full bg-emerald-500" />
                </span>

                <p className={`text-xs font-medium sm:text-sm ${mutedText}`}>
                  Open to frontend developer opportunities
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 1.3,
              delay: 0.1,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="lg:col-span-3"
          >
            <form
              onSubmit={handleSubmit}
              className={`rounded-2xl border p-6 sm:p-8 ${
                isDark
                  ? "border-white/10 bg-[#10101d]/90"
                  : "border-gray-200 bg-white"
              }`}
            >
              <h3 className="text-xl font-bold">Send me a message</h3>

              <p className={`mt-2 text-sm ${mutedText}`}>
                Fill out the form and let's start a conversation.
              </p>

              <div className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2">
                {/* Name */}
                <div>
                  <label
                    htmlFor="contact-name"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Name
                  </label>

                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    autoComplete="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={updateField}
                    className={inputClass}
                    required
                    minLength={2}
                    maxLength={80}
                    title="Please enter your name (at least 2 characters)."
                  />
                </div>

                {/* Email */}
                <div>
                  <label
                    htmlFor="contact-email"
                    className="mb-2 block text-sm font-medium"
                  >
                    Your Email
                  </label>

                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={updateField}
                    className={inputClass}
                    required
                    maxLength={254}
                    title="Please enter a valid email address."
                  />
                </div>

                {/* Subject */}
                <div className="sm:col-span-2">
                  <label
                    htmlFor="contact-subject"
                    className="mb-2 block text-sm font-medium"
                  >
                    Subject
                  </label>

                  <input
                    id="contact-subject"
                    name="subject"
                    type="text"
                    placeholder="Job opportunity / Project inquiry"
                    value={formData.subject}
                    onChange={updateField}
                    className={inputClass}
                    required
                    minLength={3}
                    maxLength={120}
                    title="Please enter a subject (at least 3 characters)."
                  />
                </div>

                {/* Message */}
                <div className="sm:col-span-2">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <label
                      htmlFor="contact-message"
                      className="block text-sm font-medium"
                    >
                      Your Message
                    </label>

                    <span className={`text-xs ${mutedText}`}>
                      {formData.message.length}/3000
                    </span>
                  </div>

                  <textarea
                    id="contact-message"
                    name="message"
                    rows={5}
                    placeholder="Tell me about your opportunity or project..."
                    value={formData.message}
                    onChange={updateField}
                    className={`${inputClass} resize-y`}
                    required
                    minLength={10}
                    maxLength={3000}
                    title="Please enter a message (at least 10 characters)."
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSending}
                className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-violet-500/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-violet-500/30 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {isSending ? "Sending..." : "Send Message"}

                <Send
                  className={`h-4 w-4 ${isSending ? "animate-pulse" : ""}`}
                />
              </button>

              {status.message && (
                <p
                  role="status"
                  aria-live="polite"
                  className={`mt-4 text-sm leading-6 ${
                    status.type === "success"
                      ? "text-emerald-500"
                      : "text-red-500"
                  }`}
                >
                  {status.message}
                </p>
              )}
            </form>
          </motion.div>
        </div>

        {/* Professional footer */}
        <footer
          className={`mt-16 border-t pt-8 ${
            isDark ? "border-white/10" : "border-gray-200"
          }`}
        >
          <div className="flex flex-col items-center justify-between gap-5 text-center sm:flex-row sm:text-left">
            <div>
              <p
                className={`text-sm font-medium ${
                  isDark ? "text-gray-400" : "text-gray-600"
                }`}
              >
                © {new Date().getFullYear()}{" "}
                <span className="bg-gradient-to-r from-violet-500 to-blue-500 bg-clip-text font-bold text-transparent">
                  Hina Landage
                </span>
                . All rights reserved.
              </p>

              <p
                className={`mt-2 text-xs ${
                  isDark ? "text-gray-500" : "text-gray-500"
                }`}
              >
                Designed & built with{" "}
                <span className="font-semibold text-violet-500">React</span> and{" "}
                <span className="font-semibold text-blue-500">
                  Tailwind CSS
                </span>
                .
              </p>
            </div>

            <a
              href="#home"
              onClick={(event) => {
                const home = document.getElementById("home");

                if (home) {
                  event.preventDefault();
                  home.scrollIntoView({ behavior: "smooth" });
                  window.history.replaceState(null, "", "#home");
                }
              }}
              className={`group inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-all duration-300 hover:-translate-y-1 hover:border-violet-500 hover:text-violet-500 ${
                isDark
                  ? "border-white/10 text-gray-300 hover:bg-violet-500/10"
                  : "border-gray-200 text-gray-700 hover:bg-violet-50"
              }`}
            >
              Back to top
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                ↑
              </span>
            </a>
          </div>

          <div
            className={`mt-7 border-t py-5 text-center text-xs ${
              isDark
                ? "border-white/5 text-gray-500"
                : "border-gray-100 text-gray-500"
            }`}
          >
            Crafted with care by{" "}
            <span className="font-semibold text-violet-500">Hina</span> — always
            learning, always building.
          </div>
        </footer>
      </div>
    </section>
  );
}
