'use client';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ObrasHome() {
  const [active, setActive] = useState<'residenciales' | 'industriales' | 'modulares' | null>(null);

  return (
    <section className="pt-12 bg-black relative" id="Proyectos">
      {/* Título principal con tracking reducido */}
      <h2 className="text-white text-4xl md:text-5xl uppercase text-center pb-12 font-serif tracking-wide ">
        Proyectos
      </h2>

      {/* Contenedor responsive */}
      <div className="flex flex-col md:flex-row h-auto md:h-[600px]">
          {/* Panel Domiciliaria */}
        <div
          className={`group relative flex-1 overflow-hidden transition-all duration-700 aspect-[4/3] md:h-full ${
            active === 'residenciales'
              ? 'md:flex-[2]'
              : active === 'industriales' ||
                active === 'modulares'
              ? 'md:flex-[0.5]' 
              : 'md:flex-1'
          }`}
          onMouseEnter={() => setActive('residenciales')}
          onMouseLeave={() => setActive(null)}
        >
          <Image
            src="/residenciales.jpg"
            alt="Domiciliarias"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            height={600} 
            width={800}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 opacity-80 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif uppercase text-white mb-4">
               Residenciales
              </h3>
              <Link
                href="/proyectos/residenciales"
                className="border border-white text-white px-6 py-2 rounded-full uppercase tracking-wide font-medium hover:bg-bordo hover:text-white hover:border-bordo transition-colors duration-300"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
          {/* Label fijo */}
          <div className="absolute bottom-4 left-4 md:left-6">
            <span className="text-white text-2xl font-semibold uppercase hidden lg:block">Residenciales</span>
          </div>
        </div>
        
        {/* Panel Industrial */}
        <div
          className={`group relative flex-1 overflow-hidden transition-all duration-700 aspect-[4/3] md:h-full ${
            active === 'industriales'
              ? 'md:flex-[2]'
              : active === 'residenciales'|| 
                active === 'modulares'
              ? 'md:flex-[0.5]'
              : 'md:flex-1'
          }`}
          onMouseEnter={() => setActive('industriales')}
          onMouseLeave={() => setActive(null)}
        >
          <Image
            src="/industriales.jpg"
            alt="Industriales"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            height={600}
            width={800}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 opacity-80 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif uppercase text-white mb-4">
               Industriales
              </h3>
              <Link
                href="/proyectos/industriales"
                className="text-white border border-white px-6 py-2 rounded-full uppercase tracking-wide font-medium hover:bg-bordo hover:text-white hover:border-bordo transition-colors duration-300"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
          {/* Label fijo */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
            <span className="text-white text-2xl font-semibold uppercase hidden lg:block">Industriales</span>
          </div>
        </div>

        {/* Panel Modulares */}
        <div
          className={`group relative flex-1 overflow-hidden transition-all duration-700 aspect-[4/3] md:h-full ${
            active === 'modulares'
              ? 'md:flex-[2]'
              : active === 'residenciales' ||
                active === 'industriales'
              ? 'md:flex-[0.5]'
              : 'md:flex-1'
          }`}
          onMouseEnter={() => setActive('modulares')}
          onMouseLeave={() => setActive(null)}
        >
          <Image
            src="/modulares.png"
            alt="Modulares"
            className="w-full h-full object-cover scale-100 group-hover:scale-105 transition-transform duration-700"
            height={600}
            width={800}
          />
          {/* Overlay */}
          <div
            className="absolute inset-0 bg-black/60 transition-opacity duration-500 md:opacity-0 md:group-hover:opacity-100 opacity-80 flex items-center justify-center px-6"
          >
            <div className="text-center">
              <h3 className="text-2xl md:text-3xl font-serif uppercase text-white mb-4">
               Modulares
              </h3>
              <Link
                href="/proyectos/modulares"
                className="border border-white text-white px-6 py-2 rounded-full uppercase tracking-wide font-medium hover:bg-bordo hover:text-white hover:border-bordo transition-colors duration-300"
              >
                Ver proyectos
              </Link>
            </div>
          </div>
          {/* Label fijo */}
          <div className="absolute bottom-4 right-4 md:right-6">
            <span className="text-white text-2xl font-semibold uppercase hidden lg:block">Modulares</span>
          </div>
        </div>
      </div>
    </section>
  );
}
