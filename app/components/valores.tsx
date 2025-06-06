'use client';
import { motion } from 'framer-motion';

const valores = [
  {
    title: 'Calidad',
    desc: `Satisfacer las necesidades de nuestros clientes es el principal motor de todos nuestros esfuerzos. Implementamos un sistema de mejora continua con estrictos controles en cada etapa.`,
  },
  {
    title: 'Innovación',
    desc: `Adoptamos las últimas tecnologías y métodos constructivos para estar siempre un paso adelante, facilitando el cumplimiento de los objetivos propuestos.`,
  },
  {
    title: 'Capacitación',
    desc: `Creemos en la formación constante de nuestro equipo, fomentando el crecimiento profesional, la participación y el trabajo en equipo.`,
  },
  {
    title: 'Confianza',
    desc: `Construimos relaciones sólidas basadas en la transparencia y el compromiso mutuo, involucrando a todos los actores en cada proyecto.`,
  },
];

export default function Valores() {
  return (
    <section className="bg-black text-white py-5 px-6" id="Valores">
      <div className="max-w-4xl mx-auto text-center py-12">
        <h2 className="text-3xl md:text-4xl font-serif uppercase tracking-wide">
          Nuestros valores
        </h2>
      </div>

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {valores.map((v, i) => (
          <motion.div
            key={v.title}
            className="relative p-8  hover:border-bordo transition-colors duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div className="border-l-4 border-bordo pl-6">
              <h3 className="text-2xl font-semibold uppercase mb-4 tracking-wide">
                {v.title}
              </h3>
              <p className="text-gray-400 text-base leading-relaxed">
                {v.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
