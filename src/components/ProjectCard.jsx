import { motion } from "framer-motion";

function ProjectCard({ title, description }) {
  return (

    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.4 }}
      className="
      group
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-6
      min-h-[500px]
      "
    >

      {/* Background Glow */}
      <div
        className="
        absolute
        inset-0
        opacity-0
        group-hover:opacity-100
        transition
        duration-700
        bg-gradient-to-br
        from-pink-500/10
        to-cyan-500/10
        "
      />

      {/* Image */}
      <div className="overflow-hidden rounded-[30px]">

        <img
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200&auto=format&fit=crop"
          alt=""
          className="
          h-[320px]
          w-full
          object-cover
          transition
          duration-700
          group-hover:scale-110
          "
        />

      </div>

      {/* Content */}
      <div className="relative z-10 mt-8">

        <p className="uppercase tracking-[6px] text-xs text-gray-400 mb-4">
          Creative Project
        </p>

        <h2 className="text-5xl leading-none mb-6">
          {title}
        </h2>

        <p className="text-gray-400 leading-relaxed">
          {description}
        </p>

      </div>

    </motion.div>
  );
}

export default ProjectCard;ss