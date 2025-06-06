"use client"

import { useState, useEffect, useRef } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"
import { obrasIndustriales, obrasModulares, obrasResidenciales } from "@/data/data"

export default function ObrasDestacadas() {

  const slugs: string[] = [
    "residenciales",
    "industriales",
    "modulares"
  ]
  const proyectosDestacados = [{ ...obrasResidenciales[0], preSlug: slugs[0] }, { ...obrasIndustriales[8], preSlug: slugs[1] }, { ...obrasModulares[0], preSlug: slugs[2] }];
  const [index, setIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null)
  const length = proyectosDestacados.length

  const prev = () => {
    setIsAutoPlaying(false)
    setIndex((i) => (i - 1 + length) % length)
  }

  const next = () => {
    setIsAutoPlaying(false)
    setIndex((i) => (i + 1) % length)
  }


  useEffect(() => {
    if (isAutoPlaying) {
      autoPlayRef.current = setInterval(() => {
        setIndex((i) => (i + 1) % length)
      }, 5000)
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current)
      }
    }
  }, [isAutoPlaying, length])

  return (
    <section className="bg-black text-white py-24 px-6 overflow-hidden relative" id="ObrasDestacadas">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl uppercase font-playfair tracking-wide mb-8">Obras Destacadas</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Conocé nuestros proyectos más emblemáticos y descubrí cómo transformamos ideas en espacios excepcionales.
        </p>
      </motion.div>

      {/* Carousel viewport */}
      <div className="relative max-w-6xl mx-auto">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${index * 100}%)` }}
          >
            {proyectosDestacados.map(proyecto => (
              <div key={proyecto.titulo} className="flex-shrink-0 w-full px-4">
                <div className="relative overflow-hidden rounded-2xl group h-[400px] md:h-[500px]">
                  <Image
                    src={proyecto.imagen || "/placeholder.svg"}
                    alt={proyecto.titulo}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    height={500}
                    width={800}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                    <span className="inline-block bg-bordo rounded-lg text-white px-3 py-1 text-xs uppercase tracking-wider mb-4">
                      Proyecto destacado
                    </span>
                    <h3 className="text-3xl md:text-4xl font-playfair uppercase tracking-[0.05em] mb-4">
                      {proyecto.titulo}
                    </h3>
                    <p className="text-white/80 max-w-xl mb-6">{proyecto.descripcion[0]}</p>
                    <Link
                      href={`/obras/${proyecto.preSlug}/${proyecto.slug}`}
                      className="inline-block border border-white text-white px-6 py-3 rounded-full uppercase text-sm font-medium hover:bg-bordo hover:text-white hover:border-bordo transition-colors duration-300"
                    >
                      Ver proyecto
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black/50 hover:bg-bordo text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={next}
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black/50 hover:bg-bordo text-white p-3 rounded-full transition-colors duration-300"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="flex justify-center mt-8 space-x-2">
          {proyectosDestacados.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setIsAutoPlaying(false)
                setIndex(i)
              }}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${i === index ? "bg-bordo w-8" : "bg-white/30 hover:bg-white/50"
                }`}
              aria-label={`Ir a slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
