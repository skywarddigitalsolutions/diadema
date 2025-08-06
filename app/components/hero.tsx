'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const heroImages = [
    "/Proyectos/modular/modulos2/modulos211.webp",
    "/Proyectos/residencial/piedras/piedras2.webp",
    "/Proyectos/residencial/juanbjusto/juanbjusto2.webp",
    "/Proyectos/residencial/medrano/medrano1.webp",
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Preload images
  useEffect(() => {
    heroImages.forEach(src => {
      const img = new window.Image();
      img.src = src;
    });
  }, [heroImages]);

  // Fast image cycle
  useEffect(() => {
    const iv = setInterval(() => {
      setCurrentImageIndex(idx => (idx + 1) % heroImages.length);
    }, 2000); // cada 2 segundos

    return () => clearInterval(iv);
  }, [heroImages.length]);

  return (
    <section
      id="Inicio"
      className="relative min-h-screen bg-black text-white flex items-center justify-center overflow-hidden"
    >
      {/* Fondo animado sin parallax */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.4 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={heroImages[currentImageIndex]}
              alt={`Fondo del hero ${currentImageIndex + 1}`}
              fill
              priority={currentImageIndex === 0}
              className="object-cover"
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Degradado */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-0" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-2xl md:text-4xl lg:text-6xl uppercase tracking-[0.15em] font-serif"
        >
          Pensamos espacios.
          <br />
          Construimos arquitectura.
        </motion.h1>
        <motion.a
          href="proyectos"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 1 }}
          className="mt-10 inline-block border border-white text-white px-8 py-3 rounded-full tracking-wide uppercase transition-colors duration-300 hover:bg-white hover:text-black"
        >
          Ver proyectos
        </motion.a>
      </div>
    </section>
  );
}
