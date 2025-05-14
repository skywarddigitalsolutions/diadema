'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function ObrasHome() {
  const [active, setActive] = useState<'industrial' | 'domiciliaria' | null>(null);

  return (
    <section className="pt-12 bg-black relative">
      {/* Título principal con tracking reducido */}
      <h2 className="text-white text-4xl md:text-5xl uppercase text-center pb-12 font-serif tracking-wide ">
        Obras
      </h2>

      {/* Contenedor responsive */}
      <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
        {/* Panel Industrial */}
        <div
          className={`group relative flex-1 overflow-hidden transition-all duration-700 h-64 md:h-full ${
            active === 'industrial'
              ? 'md:flex-[2]'
              : active === 'domiciliaria'
              ? 'md:flex-[0.5]'
              : 'md:flex-1'
          }`}
          onMouseEnter={() => setActive('industrial')}
          onMouseLeave={() => setActive(null)}
        >
          <img
            src="/industriales.jpg"
            alt="Obras Industriales"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 opacity-60 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif uppercase text-white mb-4">
                Obras Industriales
              </h3>
              <Link
                href="/obras-industriales"
                className="text-white border border-bordo text-bordo px-6 py-2 rounded-full uppercase tracking-wide font-medium hover:bg-bordo hover:text-white transition-colors duration-300"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
          {/* Label fijo */}
          <div className="absolute bottom-4 left-4 md:left-6">
            <span className="text-white text-2xl font-semibold uppercase">Industrial</span>
          </div>
        </div>

        {/* Panel Domiciliaria */}
        <div
          className={`group relative flex-1 overflow-hidden transition-all duration-700 h-64 md:h-full ${
            active === 'domiciliaria'
              ? 'md:flex-[2]'
              : active === 'industrial'
              ? 'md:flex-[0.5]'
              : 'md:flex-1'
          }`}
          onMouseEnter={() => setActive('domiciliaria')}
          onMouseLeave={() => setActive(null)}
        >
          <img
            src="/residenciales.jpg"
            alt="Obras Domiciliarias"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 opacity-60 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif uppercase text-white mb-4">
                Obras Domiciliarias
              </h3>
              <Link
                href="/obras-domiciliarias"
                className="border text-white border-bordo text-bordo px-6 py-2 rounded-full uppercase tracking-wide font-medium hover:bg-bordo hover:text-white transition-colors duration-300"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
          {/* Label fijo */}
          <div className="absolute bottom-4 right-4 md:right-6">
            <span className="text-white text-2xl font-semibold uppercase">Domiciliaria</span>
          </div>
        </div>
      </div>
    </section>
  );
}
