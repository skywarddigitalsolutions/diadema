'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Hero() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <section className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden" id='Inicio'>
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: "url('/fondo.png')" }}
      ></div>

      {/* Capa de degradado para contraste */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />

      {/* Contenido principal */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl lg:text-6xl uppercase tracking-[0.15em] font-serif"
        >
            Pensamos espacios. <br/>Construimos arquitectura.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="mt-6 max-w-2xl mx-auto text-lg md:text-xl text-bordo font-light"
        >
          Viviendas modulares hechas a medida. Diseño, eficiencia y detalle, desde fábrica hasta tu lugar.
        </motion.p>

        <motion.a
          href="#obras"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-10 inline-block border border-white text-white px-8 py-3 rounded-full tracking-wide uppercase  transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Ver obras
        </motion.a>
      </div>
    </section>
  );
}
