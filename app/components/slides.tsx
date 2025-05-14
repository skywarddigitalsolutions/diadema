"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"

export default function AntesYDespues() {
  // Datos de transformaciones
  const transformaciones = [
    {
      id: 1,
      titulo: "Renovación Oficinas Corporativas",
      descripcion:
        "Transformación completa de oficinas antiguas en un espacio moderno, colaborativo y eficiente energéticamente.",
      imagenAntes: "residenciales.jpg",
      imagenDespues: "modulares.png",
    },
    {
      id: 2,
      titulo: "Ampliación Planta Industrial",
      descripcion:
        "Expansión y modernización de instalaciones industriales para aumentar la capacidad productiva en un 40%.",
      imagenAntes: "/images/antes-industrial.jpg",
      imagenDespues: "/images/despues-industrial.jpg",
    },
    {
      id: 3,
      titulo: "Remodelación Casa Familiar",
      descripcion: "Rediseño completo de vivienda tradicional para adaptarla a las necesidades de una familia moderna.",
      imagenAntes: "/images/antes-casa.jpg",
      imagenDespues: "/images/despues-casa.jpg",
    },
  ]

  const [activeIndex, setActiveIndex] = useState(0)
  const [sliderPosition, setSliderPosition] = useState(50)
  const containerRef = useRef<HTMLDivElement>(null)
  const isDragging = useRef(false)

  // Manejar el movimiento del slider
  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  // Prevenir selección de texto durante el arrastre
  useEffect(() => {
    const preventSelection = (e: Event) => {
      if (isDragging.current) {
        e.preventDefault()
      }
    }

    document.addEventListener("selectstart", preventSelection)
    return () => {
      document.removeEventListener("selectstart", preventSelection)
    }
  }, [])

  // Manejar el movimiento del mouse para el slider
  const handleMouseDown = (e: React.MouseEvent) => {
    e.preventDefault() // Prevenir comportamiento por defecto
    isDragging.current = true
    updateSliderPosition(e.clientX)
  }

  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true
    updateSliderPosition(e.touches[0].clientX)
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return
    e.preventDefault() // Prevenir selección de texto
    updateSliderPosition(e.clientX)
  }

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return
    e.preventDefault() // Prevenir comportamiento por defecto
    updateSliderPosition(e.touches[0].clientX)
  }

  const updateSliderPosition = (clientX: number) => {
    if (!containerRef.current) return

    const rect = containerRef.current.getBoundingClientRect()
    const x = Math.max(0, Math.min(clientX - rect.left, rect.width))
    const percentage = (x / rect.width) * 100
    setSliderPosition(percentage)
  }

  const handleMouseUp = () => {
    isDragging.current = false
  }

  const handleTouchEnd = () => {
    isDragging.current = false
  }

  // Limpiar eventos al desmontar
  useEffect(() => {
    const handleMouseUpGlobal = () => {
      isDragging.current = false
    }

    window.addEventListener("mouseup", handleMouseUpGlobal)
    window.addEventListener("touchend", handleMouseUpGlobal)

    return () => {
      window.removeEventListener("mouseup", handleMouseUpGlobal)
      window.removeEventListener("touchend", handleMouseUpGlobal)
    }
  }, [])

  const activeProject = transformaciones[activeIndex]

  return (
    <section id="antes-despues" className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl uppercase font-playfair tracking-wide mb-8">Antes y Después</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mb-12">
            Descubrí el impacto de nuestras transformaciones arquitectónicas a través de estos proyectos destacados.
          </p>
        </motion.div>

        {/* Selector de proyectos */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {transformaciones.map((project, index) => (
            <button
              key={project.id}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-2 rounded-full uppercase text-sm tracking-wider transition-all duration-300 ${
                activeIndex === index
                  ? "bg-bordo text-white"
                  : "bg-transparent text-white/70 hover:text-white border border-white/30 hover:border-white"
              }`}
            >
              {project.titulo}
            </button>
          ))}
        </div>

        {/* Comparador de antes y después */}
        <div className="max-w-4xl mx-auto">
          <div
            ref={containerRef}
            className="relative h-[400px] md:h-[500px] overflow-hidden cursor-col-resize rounded-lg select-none"
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Imagen "Después" (capa inferior) */}
            <div className="absolute inset-0">
              <img
                src={activeProject.imagenDespues || "/placeholder.svg"}
                alt={`${activeProject.titulo} - Después`}
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 text-sm rounded">Después</div>
            </div>

            {/* Imagen "Antes" (capa superior con clip-path) */}
            <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}>
              <img
                src={activeProject.imagenAntes || "/placeholder.svg"}
                alt={`${activeProject.titulo} - Antes`}
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div
                className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-1 text-sm rounded"
                style={{ maxWidth: `calc(${sliderPosition}% - 2rem)` }}
              >
                Antes
              </div>
            </div>

            {/* Slider */}
            <div
              className="absolute top-0 bottom-0 w-1 bg-white"
              style={{ left: `${sliderPosition}%`, cursor: "col-resize" }}
            >
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <div className="flex items-center justify-center">
                  <span className="transform -rotate-90 text-black text-xs font-bold">
                    <ArrowLeft size={16} />
                  </span>
                  <span className="transform rotate-90 text-black text-xs font-bold">
                    <ArrowLeft size={16} />
                  </span>
                </div>
              </div>
            </div>

            {/* Control deslizante oculto para accesibilidad */}
            <input
              type="range"
              min="0"
              max="100"
              value={sliderPosition}
              onChange={handleSliderChange}
              className="sr-only"
              aria-label="Controlar vista antes y después"
            />
          </div>

          {/* Descripción del proyecto */}
          <div className="mt-6 text-center">
            <h3 className="text-2xl font-playfair mb-2">{activeProject.titulo}</h3>
            <p className="text-gray-400">{activeProject.descripcion}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

// Componente de flecha para el slider
function ArrowLeft({ size = 24 }: { size?: number }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m12 19-7-7 7-7" />
      <path d="M19 12H5" />
    </svg>
  )
}
