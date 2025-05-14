'use client';
import Link from 'next/link';

export default function ContactCTASection() {
  return (
    <section className="relative bg-black py-24 px-6">
      {/* blur overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-md"></div>
      <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
        <h2 className="text-white text-4xl md:text-5xl uppercase text-center pb-12 font-serif tracking-wide "> ¿Listo para tu Proyecto? </h2>      
        <p className="text-gray-400 mb-8">
          Escríbenos y trabajemos juntos en una solución a medida.  
          Arquitectura e ingeniería con la máxima precisión.
        </p>
        <Link
          href="/contacto"
          className="inline-block border border-bordo text-bordo px-8 py-3 rounded-full uppercase font-medium hover:bg-bordo hover:text-white transition-colors duration-300"
        >
          Contactar ahora
        </Link>
      </div>
    </section>
  );
}
