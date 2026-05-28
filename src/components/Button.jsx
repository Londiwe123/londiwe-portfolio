function Button({ text }) {
  return (
    <button
      className="
      group
      relative
      overflow-hidden
      px-10
      py-4
      rounded-full
      border
      border-white/20
      bg-white/10
      backdrop-blur-xl
      text-white
      text-lg
      tracking-wide
      transition-all
      duration-500
      hover:scale-105
      hover:border-pink-400
      hover:shadow-[0_0_40px_rgba(255,105,180,0.4)]
      "
    >

      <span className="relative z-10">
        {text}
      </span>

      <div
        className="
        absolute
        inset-0
        bg-gradient-to-r
        from-pink-500/0
        via-pink-500/20
        to-cyan-500/0
        opacity-0
        group-hover:opacity-100
        transition
        duration-500
        "
      />

    </button>
  );
}

export default Button;