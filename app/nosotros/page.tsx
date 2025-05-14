"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Navbar from "@/app/components/navbar"
import Footer from "../components/footer"

export default function NosotrosPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-40 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="text-5xl md:text-7xl  mb-6">Nosotros</h1>
            <p className="text-gray-400 max-w-2xl">
              Somos un estudio de arquitectura comprometido con la excelencia en el diseño, la innovación y la
              sostenibilidad. Creamos espacios que transforman la forma en que las personas viven y trabajan.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl  mb-8">Nuestra Historia</h2>
              <div className="space-y-6 text-gray-300">
                <p>
                  Fundado en 2008 por un grupo de arquitectos visionarios, Diadema nació con la misión de redefinir los
                  espacios arquitectónicos en Argentina, combinando funcionalidad, estética y sostenibilidad.
                </p>
                <p>
                  A lo largo de los años, hemos crecido hasta convertirnos en un referente en el diseño arquitectónico,
                  manteniendo siempre nuestro compromiso con la excelencia y la innovación en cada proyecto que
                  emprendemos.
                </p>
                <p>
                  Nuestra trayectoria está marcada por proyectos emblemáticos que han transformado el paisaje urbano y
                  rural, desde residencias exclusivas hasta complejos industriales de vanguardia.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative h-[500px] overflow-hidden rounded-lg">
                <Image
                  src="/residenciales.jpg"
                  alt="Historia del estudio"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-bordo text-white p-6 max-w-xs">
                <p className="text-lg font-medium">15+ años de experiencia en arquitectura</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Filosofía */}
      <section className="py-16 md:py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Nuestra Filosofía</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Estos principios fundamentales guían nuestro enfoque en cada proyecto que emprendemos.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovación",
                description:
                  "Buscamos constantemente nuevas formas de abordar los desafíos arquitectónicos, incorporando tecnologías y métodos innovadores.",
              },
              {
                title: "Sostenibilidad",
                description:
                  "Nos comprometemos con prácticas sostenibles que minimicen el impacto ambiental y maximicen la eficiencia energética de nuestros proyectos.",
              },
              {
                title: "Funcionalidad",
                description:
                  "Creemos que la belleza y la funcionalidad deben coexistir, diseñando espacios que no solo impresionen visualmente sino que también sean prácticos.",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="border border-gray-800 p-8 h-full hover:border-bordo transition-colors duration-300"
              >
                <h3 className="text-2xl mb-4">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipo */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Nuestro Equipo</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Profesionales apasionados que aportan su experiencia y creatividad a cada proyecto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              {
                name: "Carlos Rodríguez",
                position: "Arquitecto Principal",
                bio: "Con más de 20 años de experiencia, Carlos lidera nuestro equipo con su visión innovadora y atención al detalle.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Laura Martínez",
                position: "Diseñadora de Interiores",
                bio: "Especialista en crear ambientes que combinan estética y funcionalidad, Laura aporta un toque único a cada proyecto.",
                image: "/placeholder.svg?height=400&width=400",
              },
              {
                name: "Javier López",
                position: "Arquitecto Industrial",
                bio: "Experto en proyectos industriales, Javier se especializa en diseños que optimizan procesos y espacios de trabajo.",
                image: "/placeholder.svg?height=400&width=400",
              },
            ].map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="relative overflow-hidden mb-6 aspect-square">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <h3 className="text-2xl">{member.name}</h3>
                <p className="text-bordo mb-2">{member.position}</p>
                <p className="text-gray-400">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Reconocimientos */}
      <section className="py-16 md:py-24 bg-[#0f0f0f]">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Reconocimientos</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A lo largo de nuestra trayectoria, hemos sido honrados con diversos premios que reconocen nuestro
              compromiso con la excelencia.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                year: "2023",
                award: "Premio Nacional de Arquitectura Sustentable",
                project: "Complejo Residencial Eco-Friendly",
                description: "Reconocimiento a la innovación en diseño sostenible y eficiencia energética.",
              },
              {
                year: "2022",
                award: "Medalla de Oro - Bienal de Arquitectura",
                project: "Centro Cultural Metropolitano",
                description: "Destacado por su integración urbana y aporte cultural a la comunidad.",
              },
              {
                year: "2021",
                award: "Premio a la Excelencia en Diseño Industrial",
                project: "Planta de Producción Automatizada",
                description: "Reconocimiento a la innovación en espacios industriales eficientes.",
              },
              {
                year: "2019",
                award: "Mención Especial - Arquitectura Residencial",
                project: "Casa del Lago",
                description: "Destacada por su integración con el entorno natural y diseño innovador.",
              },
            ].map((award, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-black/30 p-8 rounded-lg"
              >
                <div className="flex items-start gap-4">
                  <div className="text-3xl font-bold text-bordo">{award.year}</div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">{award.award}</h3>
                    <p className="text-bordo mb-2">Proyecto: {award.project}</p>
                    <p className="text-gray-400">{award.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Valores */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-6 md:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-4">Nuestros Valores</h2>
            <p className="text-gray-400">
              Estos principios guían nuestro trabajo diario y nos ayudan a mantener los más altos estándares de calidad
              en cada proyecto.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              {
                title: "Excelencia",
                description: "Nos esforzamos por alcanzar la excelencia en cada aspecto de nuestro trabajo.",
              },
              {
                title: "Integridad",
                description: "Actuamos con honestidad y transparencia en todas nuestras relaciones profesionales.",
              },
              {
                title: "Colaboración",
                description: "Creemos en el poder del trabajo en equipo y la colaboración con nuestros clientes.",
              },
              {
                title: "Creatividad",
                description: "Fomentamos un ambiente que estimula la creatividad y el pensamiento innovador.",
              },
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex gap-6"
              >
                <div className="w-16 h-16 flex items-center justify-center shrink-0 border border-bordo text-bordo text-2xl">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-2xl mb-3">{value.title}</h3>
                  <p className="text-gray-400">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
