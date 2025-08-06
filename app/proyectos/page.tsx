"use client"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import Navbar from "@/app/components/navbar"
import Footer from "../components/footer"

export default function ObrasPage() {
  // Estado para controlar la categoría en hover
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  // Categorías de proyectos
  const categorias = [
    {
      id: "residenciales",
      titulo: "Residenciales",
      descripcion: "Viviendas unifamiliares, edificios multifamiliares y complejos residenciales.",
      imagen: "/residenciales.jpg",
      color: "from-black/20 to-black/80",
    },
    {
      id: "industriales",
      titulo: "Industriales",
      descripcion: "Plantas de producción, centros logísticos y complejos industriales.",
      imagen: "/industriales.jpg",
      color: "from-black/20 to-black/80",
    },
    {
      id: "modulares",
      titulo: "Modulares",
      descripcion: "Construcciones prefabricadas, modulares y de rápida instalación.",
      imagen: "/modulares.png",
      color: "from-black/20 to-black/80",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />

      {/* Categorías en pantalla completa */}
      <div className="flex flex-col md:flex-row md:h-screen pt-20 pb-12">
        {categorias.map((categoria, index) => (
          <div
            key={categoria.id}
            className={`relative md:w-1/3 h-[70vh] md:h-full transition-all duration-500 overflow-hidden
              ${activeCategory && activeCategory !== categoria.id ? "md:w-[25%] opacity-70" : ""}
              ${activeCategory === categoria.id ? "md:w-[50%]" : ""}
            `}
            onMouseEnter={() => setActiveCategory(categoria.id)}
            onMouseLeave={() => setActiveCategory(null)}
          >
            {/* Imagen de fondo */}
            <div className="absolute inset-0 w-full h-full">
              <Image
                src={categoria.imagen || "/placeholder.svg"}
                alt={categoria.titulo}
                fill
                className="object-cover transition-transform duration-700 hover:scale-105"
                priority={index === 0}
              />
              <div className={`absolute inset-0 bg-gradient-to-t ${categoria.color} opacity-80`} />
            </div>

            {/* Contenido */}
            <div className="relative h-full flex flex-col justify-center items-center text-center p-8 z-10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="max-w-md"
              >
                <h2 className="text-4xl md:text-5xl font-bodoni mb-4">{categoria.titulo}</h2>

                <p
                  className={`text-white/90 mb-8 transition-all duration-300 
                  ${activeCategory === categoria.id ? "opacity-100 max-h-40" : "md:opacity-0 md:max-h-0 overflow-hidden"}`}
                >
                  {categoria.descripcion}
                </p>

                <Link
                  href={`/proyectos/${categoria.id}`}
                  className="inline-block border border-white rounded-lg hover:border-bordo hover:bg-bordo px-8 py-3 text-white transition-all duration-300"
                >
                  Ver proyectos
                </Link>
              </motion.div>
            </div>

            {/* Línea divisoria vertical (excepto para el último) */}
            {index < categorias.length - 1 && (
              <div className="hidden md:block absolute right-0 top-[15%] h-[70%] w-px bg-white/20"></div>
            )}
          </div>
        ))}
      </div>

      {/* Estadísticas - Solo visible en móvil */}
      <div className="md:hidden py-16 bg-[#0f0f0f]">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 gap-8 text-center">
            {[
              { valor: "50+", texto: "Residenciales" },
              { valor: "25+", texto: "Proyectos Industriales" },
              { valor: "30+", texto: "Arquitectura Modular" },
            ].map((stat, index) => (
              <div key={index} className="py-4">
                <div className="text-5xl font-bold text-bordo mb-2">{stat.valor}</div>
                <p className="text-gray-400 uppercase tracking-wider text-sm">{stat.texto}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />

    </div>
      )
}
