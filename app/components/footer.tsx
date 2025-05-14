'use client';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t-2 backdrop-blur-sm text-white/50 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Branding */}
        <div className="md:col-span-1">
          <h3 className="text-white text-2xl font-serif uppercase tracking-wide mb-4">
            Diadema
          </h3>
          <p className="text-sm leading-relaxed">
            Arquitectura e ingeniería modular e industrial con calidad, innovación y confianza.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wide mb-4">Enlaces rápidos</h4>
          <ul className="space-y-2 text-sm">
            <li>
              <Link href="/" className="hover:text-white transition">Inicio</Link>
            </li>
            <li>
              <Link href="/obras" className="hover:text-white transition">Obras</Link>
            </li>
            <li>
              <Link href="/nosotros" className="hover:text-white transition">Nosotros</Link>
            </li>
            <li>
              <Link href="/contacto" className="hover:text-white transition">Contacto</Link>
            </li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wide mb-4">Contacto</h4>
          <ul className="space-y-2 text-sm">
            <li>📍 Lambare 1055, 1° of. 1, CABA</li>
            <li>
              ✉️{' '}
              <a href="mailto:info@diademarq.com.ar" className="hover:text-white transition">
                info@diademarq.com.ar
              </a>
            </li>
            <li>
              📞{' '}
              <a href="tel:+541138684328" className="hover:text-white transition">
                11-3868-4328
              </a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>

      </div>

      <div className="border-t border-gray-700 mt-12 pt-6">
        <p className="text-center text-xs text-white">
          © {new Date().getFullYear()} <a href='https://www.sds.com.ar' target='_blank' rel='noopener' className='text-bordo'>Skyward Digital Solutions</a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
);
}
