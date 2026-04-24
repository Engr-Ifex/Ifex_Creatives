import React, { useState } from "react";
import FadeInSection from "../ui/FadeInSection";
import { FiMail, FiGithub, FiLinkedin, FiTwitter } from "react-icons/fi";
import emailjs from "@emailjs/browser";

const Contact = () => {
    const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_up8m0nt",
        "template_pq073da",
        form,
        "HSRLDM7LR5fpKRPac"
      )
      .then(() => {
        setLoading(false);
        setSuccess(true);

        setForm({ name: "", email: "", message: "" });

        setTimeout(() => setSuccess(false), 3000);
      })
      .catch(() => {
        setLoading(false);
        alert("Something went wrong. Try again.");
      });
  };

  return (
    <section id="contact" className="relative px-6 py-24 lg:px-12">

      {/* Top glow */}
      <div className="absolute top-0 left-1/2 h-64 w-[500px] -translate-x-1/2 rounded-full bg-[#5CBF0D]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl grid gap-12 lg:grid-cols-2 items-stretch">

        {/* LEFT - FORM */}
        <FadeInSection>
          <div className="h-full rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 sm:p-8 shadow-[0_0_40px_rgba(0,0,0,0.4)] flex flex-col">

            <h3 className="text-xl font-semibold text-white">
              Send a Message
            </h3>
            <p className="my-2 text-sm text-white/60">
              Have a project in mind or just want to say hi?
            </p>

           <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Name */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-white/70">Name</label>
                    <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur-md outline-none transition focus:border-[#5CBF0D]/40 focus:ring-1 focus:ring-[#5CBF0D]/30"
                    />
                </div>

                {/* Email */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-white/70">Email</label>
                    <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                    className="w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur-md outline-none transition focus:border-[#5CBF0D]/40 focus:ring-1 focus:ring-[#5CBF0D]/30"
                    />
                </div>

                {/* Message */}
                <div className="flex flex-col gap-2">
                    <label className="text-sm text-white/70">Message</label>
                    <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    placeholder="How can I help you?"
                    rows={5}
                    required
                    className="w-full resize-none rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-white placeholder:text-white/40 backdrop-blur-md outline-none transition focus:border-[#5CBF0D]/40 focus:ring-1 focus:ring-[#5CBF0D]/30"
                    />
                </div>

                {/* Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="relative mt-2 flex items-center justify-center rounded-xl bg-[#5CBF0D] px-6 py-3 text-sm font-medium text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_25px_rgba(92,191,13,0.5)] disabled:opacity-70"
                >
                    {loading ? (
                    <span className="h-5 w-5 animate-spin rounded-full border-2 border-black border-t-transparent" />
                    ) : success ? (
                    <span className="flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-black animate-ping" />
                        Sent successfully
                    </span>
                    ) : (
                    "Send Message"
                    )}
                </button>

                {/* ✅ SUCCESS MESSAGE (Animated) */}
                {success && (
                    <p className="text-sm text-[#5CBF0D] mt-2 animate-fadeIn">
                    Message sent successfully!
                    </p>
                )}

            </form>
          </div>
        </FadeInSection>

        {/* RIGHT */}
        <FadeInSection delay={0.1}>
          <div className="h-full flex flex-col justify-between">

            {/* Text */}
            <div>
              <h2 className="text-3xl font-semibold sm:text-4xl leading-tight">
                Let’s Build Something
                <br />
                <span className="text-[#5CBF0D]">Amazing Together</span>
              </h2>

              <p className="mt-4 max-w-md text-sm text-white/60">
                I’m currently open to freelance projects and full-time roles. 
                If you have an idea that needs a creative touch or just want to 
                talk about tech feel free to reach out. My inbox is always open.
              </p>
            </div>

            {/* Contact Card */}
            <div className="relative mt-8 rounded-3xl border border-white/10 bg-[#0a0a0a] p-6 backdrop-blur-xl">

              {/* glow */}
              <div className="absolute -top-10 right-10 h-32 w-32 rounded-full bg-[#5CBF0D]/10 blur-3xl" />

              <h4 className="mb-4 text-lg font-medium text-white">
                Connect with me
              </h4>

              <div className="flex flex-col gap-4">

                {/* Email */}
                <a
                  href="mailto:adesojiifeoluwapo@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#5CBF0D]/10 transition">
                    <FiMail />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">EMAIL</p>
                    <p className="text-sm text-white group-hover:text-[#5CBF0D]">
                      adesojiifeoluwapo@gmail.com
                    </p>
                  </div>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/ifeoluwapo-elijah-261674257/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#5CBF0D]/10 transition">
                    <FiLinkedin />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">LINKEDIN</p>
                    <p className="text-sm text-white group-hover:text-[#5CBF0D]">
                      Connect on LinkedIn
                    </p>
                  </div>
                </a>

                {/* GitHub */}
                <a
                  href="https://github.com/Engr-Ifex"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#5CBF0D]/10 transition">
                    <FiGithub />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">GITHUB</p>
                    <p className="text-sm text-white group-hover:text-[#5CBF0D]">
                      View my repositories
                    </p>
                  </div>
                </a>

                {/* Twitter */}
                <a
                  href="https://x.com/Ifeoluwapo24165"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 group"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/5 group-hover:bg-[#5CBF0D]/10 transition">
                    <FiTwitter />
                  </div>
                  <div>
                    <p className="text-xs text-white/50">TWITTER (X)</p>
                    <p className="text-sm text-white group-hover:text-[#5CBF0D]">
                      Follow on Twitter
                    </p>
                  </div>
                </a>

              </div>
            </div>

          </div>
        </FadeInSection>

      </div>
    </section>
  );
};

export default Contact;