"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function ClientesSection() {
  // Datos de clientes
  const clientes = [
    { nombre: "Pampa Energía", logo: "/images/pampaenergia.png" },
    { nombre: "Fundación SI", logo: "/images/fundacionsi.png" },
    { nombre: "Estellantis", logo: "/images/estellantis.png" },
    { nombre: "Pampa Energía", logo: "/images/pampaenergia.png" },
    { nombre: "Fundación SI", logo: "/images/fundacionsi.png" },
    { nombre: "Estellantis", logo: "/images/estellantis.png" },
  ]

  const carouselRef = useRef<HTMLDivElement>(null)

  // Efecto para el carrusel automático
  useEffect(() => {
    if (!carouselRef.current) return

    const scrollWidth = carouselRef.current.scrollWidth
    const clientWidth = carouselRef.current.clientWidth

    if (scrollWidth <= clientWidth) return // No hay suficiente contenido para desplazar

    let scrollPosition = 0
    const maxScroll = scrollWidth - clientWidth
    const scrollSpeed = 0.5 // píxeles por frame

    const animate = () => {
      if (!carouselRef.current) return

      scrollPosition = (scrollPosition + scrollSpeed) % maxScroll
      carouselRef.current.scrollLeft = scrollPosition

      // Si llegamos al final, reiniciamos
      if (scrollPosition >= maxScroll) {
        scrollPosition = 0
      }

      requestAnimationFrame(animate)
    }

    const animationId = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section className="bg-black text-white py-24 px-6" id="Clientes">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl md:text-5xl uppercase text-center font-playfair tracking-wide mb-16">
          Clientes Destacados
        </h2>

        {/* Carrusel automático de logos */}
        <div className="overflow-hidden mb-20">
          <div
            ref={carouselRef}
            className="flex space-x-12 py-4 overflow-x-auto scrollbar-hide"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {/* Duplicamos los logos para crear un efecto infinito */}
            {[...clientes, ...clientes].map((client, index) => (
              <div
                key={`${client.nombre}-${index}`}
                className="flex-shrink-0 flex items-center justify-center w-32 h-20 transition-all duration-300 filter grayscale hover:grayscale-0"
              >
                <Image
                  src={client.logo || "/placeholder.svg"}
                  alt={client.nombre}
                  width={120}
                  height={60}
                  className="max-w-full max-h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}


