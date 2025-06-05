'use client';
import Link from 'next/link';
import { Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative bg-black border-t-2 backdrop-blur-sm text-white/60 pt-20 pb-12 px-8">
      <div className=" mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 ">
        {/* Branding */}
        <div>
          <h3 className="text-white text-2xl font-serif uppercase tracking-wide mb-6">
            Diadema
          </h3>
          <p className="text-sm leading-relaxed max-w-sm">
            Arquitectura e ingeniería modular e industrial con calidad, innovación y confianza.
          </p>
        </div>

        {/* Navegación */}
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wide mb-6">Enlaces rápidos</h4>
          <ul className="space-y-3 text-sm">
            <li><Link href="/" className="hover:text-white transition">Inicio</Link></li>
            <li><Link href="/obras" className="hover:text-white transition">Obras</Link></li>
            <li><Link href="/nosotros" className="hover:text-white transition">Nosotros</Link></li>
            <li><Link href="/contacto" className="hover:text-white transition">Contacto</Link></li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h4 className="text-white font-semibold uppercase tracking-wide mb-6">Contacto</h4>
          <ul className="space-y-3 text-sm">
            <li>📍CABA</li>
            <li>
              ✉️ <a href="mailto:info@diademarq.com.ar" className="hover:text-white transition">info@diademarq.com.ar</a>
            </li>
            <li>
              📞 <a href="tel:+541138684328" className="hover:text-white transition">11-3868-4328</a>
            </li>
          </ul>
          <div className="flex space-x-4 mt-6">
            <a href="https://www.instagram.com/diadema_arquitectura/" target='_blank' aria-label="Instagram" className="text-gray-400 hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="#" aria-label="LinkedIn" className="text-gray-400 hover:text-white transition">
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 mt-16 pt-6">
        <p className="text-center text-xs text-white/50">
          © {new Date().getFullYear()} <a href='https://www.sds.com.ar' target='_blank' rel='noopener' className='text-bordo hover:underline'>Skyward Digital Solutions</a>. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}
