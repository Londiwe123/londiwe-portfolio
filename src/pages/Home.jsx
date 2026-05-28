import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import Button from "../components/Button";

function Home() {
  return (

    <div className="min-h-screen bg-[#050505] text-white px-8 md:px-20 pt-40 overflow-hidden relative">

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-cyan-500/20 blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px]" />

      {/* Hero Section */}
      <div className="grid md:grid-cols-2 gap-20 items-center min-h-[80vh]">

        {/* LEFT SIDE */}
        <div>

          <p className="uppercase tracking-[8px] text-sm text-cyan-300 mb-6">
            Cloud Administrator • Creative Technologist
          </p>

          <h1 className="text-6xl sm:text-7xl md:text-[180px] leading-none">
            LONDIWE
          </h1>

          <p className="max-w-xl text-gray-400 text-lg mt-8 leading-relaxed">
            Building immersive cloud and digital experiences through
            modern technology, cybersecurity awareness, creative
            interaction, and futuristic system design.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-6 mt-10">

            <Link to="/projects">
              <Button text="View Projects" />
            </Link>

            <Link to="/contact">
              <Button text="Contact Me" />
            </Link>

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="relative h-[600px] hidden md:block">

          {/* Main Card */}
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="
            absolute
            top-0
            left-10
            w-[320px]
            rotate-[-6deg]
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-[30px]
            p-4
            shadow-2xl
            "
          >

            <img
              src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="
              rounded-[20px]
              h-[420px]
              w-full
              object-cover
              "
            />

          </motion.div>

          {/* Floating Tech Card */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="
            absolute
            top-20
            right-0
            w-[240px]
            rotate-[8deg]
            bg-cyan-200
            text-black
            rounded-[30px]
            p-8
            shadow-2xl
            "
          >

            <p className="uppercase tracking-[6px] text-xs mb-4">
              Cloud & Security
            </p>

            <h2 className="text-4xl leading-none">
              Azure Systems & IT Support
            </h2>

          </motion.div>

          {/* Bottom Card */}
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 7,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="
            absolute
            bottom-0
            right-10
            w-[260px]
            rotate-[5deg]
            bg-white/10
            backdrop-blur-xl
            border
            border-white/10
            rounded-[30px]
            p-4
            shadow-2xl
            "
          >

            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
              alt=""
              className="
              rounded-[20px]
              h-[320px]
              w-full
              object-cover
              "
            />

          </motion.div>

        </div>

      </div>

    </div>
  );
}

export default Home;