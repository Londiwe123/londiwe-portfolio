import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_01muru3",
        "template_qhv6j9k",
        form.current,
        "QOIJPK20DsWCkVBAN"
      )
      .then(
        () => {
          alert("Message sent successfully 😭🔥");
          form.current.reset();
        },
        () => {
          alert("Something went wrong.");
        }
      );
  };

  return (

    <div className="min-h-screen bg-[#050505] text-white px-8 md:px-20 pt-40 overflow-hidden relative">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />

      {/* Heading */}
      <div className="mb-24">

        <p className="uppercase tracking-[8px] text-sm text-gray-400 mb-6">
          Contact
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-[160px] leading-none">
          LET’S TALK
        </h1>

      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-20 items-start">

        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <p className="text-gray-300 text-xl leading-relaxed mb-12">

            Interested in building something modern, immersive,
            and technology-driven? Let’s connect and create
            impactful digital experiences together.

          </p>

          {/* Contact Cards */}
          <div className="space-y-6">

            {/* Email */}
            <a
              href="mailto:anelemvubu90@gmail.com"
              className="
              block
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[30px]
              p-8
              hover:bg-white/10
              transition
              duration-500
              "
            >

              <p className="uppercase tracking-[6px] text-xs text-gray-400 mb-4">
                Email
              </p>

              <h2 className="text-2xl break-all">
                anelemvubu90@gmail.com
              </h2>

            </a>

            {/* GitHub */}
            <a
              href="https://github.com/Londiwe123"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[30px]
              p-8
              hover:bg-white/10
              transition
              duration-500
              "
            >

              <p className="uppercase tracking-[6px] text-xs text-gray-400 mb-4">
                GitHub
              </p>

              <h2 className="text-2xl break-all">
                github.com/Londiwe123
              </h2>

            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com/is_it_or_is_it"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[30px]
              p-8
              hover:bg-white/10
              transition
              duration-500
              "
            >

              <p className="uppercase tracking-[6px] text-xs text-gray-400 mb-4">
                Instagram
              </p>

              <h2 className="text-2xl break-all">
                @is_it_or_is_it
              </h2>

            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/londiwe-mvubu"
              target="_blank"
              rel="noopener noreferrer"
              className="
              block
              bg-white/5
              border
              border-white/10
              backdrop-blur-xl
              rounded-[30px]
              p-8
              hover:bg-white/10
              transition
              duration-500
              "
            >

              <p className="uppercase tracking-[6px] text-xs text-gray-400 mb-4">
                LinkedIn
              </p>

              <h2 className="text-2xl break-all">
                londiwe-mvubu
              </h2>

            </a>

          </div>

        </motion.div>

        {/* RIGHT SIDE */}
        <motion.form
          ref={form}
          onSubmit={sendEmail}
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="
          bg-white/5
          border
          border-white/10
          backdrop-blur-xl
          rounded-[40px]
          p-10
          space-y-8
          "
        >

          <div>

            <label className="block text-sm uppercase tracking-[4px] text-gray-400 mb-4">
              Your Name
            </label>

            <input
              type="text"
              name="user_name"
              placeholder="John Doe"
              required
              className="
              w-full
              bg-black/20
              border
              border-white/10
              rounded-2xl
              px-6
              py-5
              outline-none
              text-white
              "
            />

          </div>

          <div>

            <label className="block text-sm uppercase tracking-[4px] text-gray-400 mb-4">
              Your Email
            </label>

            <input
              type="email"
              name="user_email"
              placeholder="john@example.com"
              required
              className="
              w-full
              bg-black/20
              border
              border-white/10
              rounded-2xl
              px-6
              py-5
              outline-none
              text-white
              "
            />

          </div>

          <div>

            <label className="block text-sm uppercase tracking-[4px] text-gray-400 mb-4">
              Message
            </label>

            <textarea
              rows="6"
              name="message"
              placeholder="Tell me about your project..."
              required
              className="
              w-full
              bg-black/20
              border
              border-white/10
              rounded-2xl
              px-6
              py-5
              outline-none
              text-white
              resize-none
              "
            />

          </div>

          <button
            type="submit"
            className="
            w-full
            py-5
            rounded-full
            bg-white
            text-black
            text-lg
            hover:scale-[1.02]
            transition
            duration-500
            "
          >
            Send Message
          </button>

        </motion.form>

      </div>

    </div>
  );
}

export default Contact;