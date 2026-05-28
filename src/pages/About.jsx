import { motion } from "framer-motion";

import profileImage from "../assets/profile.png";

function About() {
  return (

      <div className="min-h-screen bg-[#050505] text-white px-8 md:px-20 pt-40 overflow-hidden relative">

        {/* Glow Effects */}
        <div className="absolute top-20 left-0 w-[300px] h-[300px] bg-cyan-500/10 blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px]" />

        {/* Heading */}
        <div className="mb-24">

          <p className="uppercase tracking-[8px] text-sm text-gray-400 mb-6">
            About Me
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-[160px] leading-none">
            CLOUD TECH
          </h1>

        </div>

        {/* Main Layout */}
        <div className="grid md:grid-cols-2 gap-20 items-center">

          {/* LEFT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >

            <img
              src={profileImage}
              alt=""
              className="
              rounded-[40px]
              h-[700px]
              w-full
              object-cover
              "
            />

          </motion.div>

          {/* RIGHT SIDE */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >

            <p className="text-gray-300 text-xl leading-relaxed mb-10">

              I am an aspiring Cloud Administrator passionate about
              cloud technologies, cybersecurity awareness, IT support,
              and modern digital systems. I enjoy building immersive
              and visually engaging technology experiences that combine
              creativity with technical problem solving.

            </p>

            <p className="text-gray-500 leading-relaxed mb-16">

              Currently developing skills in Microsoft Azure,
              virtualization, cloud infrastructure, troubleshooting,
              and system support while continuously exploring creative
              technology and futuristic digital interaction.

            </p>

            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-6">

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">
                <h2 className="text-4xl mb-4">Azure</h2>
                <p className="text-gray-400">
                  Cloud operations and virtual machine management.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">
                <h2 className="text-4xl mb-4">Cybersecurity</h2>
                <p className="text-gray-400">
                  Security awareness and access control fundamentals.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">
                <h2 className="text-4xl mb-4">IT Support</h2>
                <p className="text-gray-400">
                  Hardware, software, and troubleshooting solutions.
                </p>
              </div>

              <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-[30px] p-8">
                <h2 className="text-4xl mb-4">Creative Tech</h2>
                <p className="text-gray-400">
                  Combining technology with immersive design systems.
                </p>
              </div>

            </div>

          </motion.div>

        </div>

      </div>
  );
}

export default About;