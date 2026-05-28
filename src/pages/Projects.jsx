import { motion } from "framer-motion";

function Projects() {
  return (

    <div className="min-h-screen bg-[#050505] text-white px-8 md:px-20 pt-40 overflow-hidden relative">

      {/* Glow Effects */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[120px]" />

      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-pink-500/10 blur-[120px]" />

      {/* Heading */}
      <div className="mb-32">

        <p className="uppercase tracking-[8px] text-sm text-gray-400 mb-6">
          Selected Work
        </p>

        <h1 className="text-6xl sm:text-7xl md:text-[160px] leading-none">
          PROJECTS
        </h1>

      </div>

      {/* PROJECT 1 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-20 items-center mb-40"
      >

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[6px] text-sm text-cyan-300 mb-6">
            Portfolio Experience
          </p>

          <h2 className="text-5xl md:text-7xl leading-none mb-8">
            Creative Tech Portfolio
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            A cinematic and editorial-inspired portfolio website
            designed to combine cloud technology, creative
            development, and immersive digital interaction.
          </p>

        </div>

        {/* RIGHT */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="
            rounded-[40px]
            h-[700px]
            w-full
            object-cover
            "
          />

        </div>

      </motion.div>

      {/* PROJECT 2 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-20 items-center mb-40"
      >

        {/* IMAGE */}
        <div className="order-2 md:order-1">

          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="
            rounded-[40px]
            h-[700px]
            w-full
            object-cover
            "
          />

        </div>

        {/* TEXT */}
        <div className="order-1 md:order-2">

          <p className="uppercase tracking-[6px] text-sm text-pink-300 mb-6">
            Cloud Administration
          </p>

          <h2 className="text-5xl md:text-7xl leading-none mb-8">
            Azure VM Management
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Practical cloud administration experience involving
            virtual machine creation, system management,
            troubleshooting, and Microsoft Azure environments.
          </p>

        </div>

      </motion.div>

      {/* PROJECT 3 */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="grid md:grid-cols-2 gap-20 items-center mb-40"
      >

        {/* LEFT */}
        <div>

          <p className="uppercase tracking-[6px] text-sm text-cyan-300 mb-6">
            IT Support
          </p>

          <h2 className="text-5xl md:text-7xl leading-none mb-8">
            System Troubleshooting
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10">
            Hands-on experience with hardware and software
            troubleshooting, Microsoft Office maintenance,
            technical support, and system documentation.
          </p>

        </div>

        {/* RIGHT */}
        <div>

          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop"
            alt=""
            className="
            rounded-[40px]
            h-[700px]
            w-full
            object-cover
            "
          />

        </div>

      </motion.div>

    </div>
  );
}

export default Projects;