import { useEffect, useState } from "react";
import Lenis from "lenis";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {

  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleMouseMove = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };

  }, []);

  return (
    <BrowserRouter>

      <div className="bg-[#050505] text-white min-h-screen overflow-hidden relative">

        {/* Mouse Glow */}
        <div
          className="pointer-events-none fixed inset-0 z-0"
        >

          <div
            className="absolute w-[500px] h-[500px] rounded-full bg-pink-500/10 blur-[120px] transition-all duration-300"
            style={{
              left: mousePosition.x - 250,
              top: mousePosition.y - 250,
            }}
          />

        </div>

        {/* Grain Texture */}
<div
  className="
  fixed
  inset-0
  opacity-[0.05]
  pointer-events-none
  z-0
  "
  style={{
    backgroundImage:
      "url('https://grainy-gradients.vercel.app/noise.svg')",
  }}
/>

        {/* Main Content */}
        <div className="relative z-10">

          <Navbar />

          <Routes>

            <Route path="/" element={<Home />} />

            <Route path="/about" element={<About />} />

            <Route path="/projects" element={<Projects />} />

            <Route path="/contact" element={<Contact />} />

          </Routes>

        </div>

      </div>

    </BrowserRouter>
  );
}

export default App;