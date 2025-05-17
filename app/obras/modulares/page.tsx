"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"

// Datos de ejemplo para proyectos modulares
const proyectosModulares = [
  {
    id: 1,
    titulo: "Casa Modular Eco",
    ubicacion: "Buenos Aires",
    anio: "2023",
    imagen: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 2,
    titulo: "Oficinas Prefabricadas",
    ubicacion: "Córdoba",
    anio: "2022",
    imagen: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 3,
    titulo: "Módulos Habitacionales",
    ubicacion: "Mendoza",
    anio: "2023",
    imagen: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 4,
    titulo: "Showroom Modular",
    ubicacion: "Buenos Aires",
    anio: "2022",
    imagen: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 5,
    titulo: "Vivienda Transportable",
    ubicacion: "Bariloche",
    anio: "2021",
    imagen: "/placeholder.svg?height=600&width=800",
  },
  {
    id: 6,
    titulo: "Centro Educativo Modular",
    ubicacion: "Santa Fe",
    anio: "2023",
    imagen: "/placeholder.svg?height=600&width=800",
  },
]

export default function ObrasModularesPage() {
  const [filtro, setFiltro] = useState("todos")

  return (
    <div className="bg-black text-white">
       <Navbar />
    
    {/* Título para móviles (solo visible en móviles) */}
      {/* Back Button */}
      <div className="fixed top-32 left-6 md:left-12 z-40">
        <Link
          href="/obras"
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ChevronLeft className="h-5 w-5" />
          <span>Volver a categorías</span>
        </Link>
      </div>

      {/* Page Header */}
      <section className="pt-40 pb-16">
        <div className="container mx-auto px-6 md:px-12">
          <div>
            <h1 className="text-5xl md:text-7xl font-bodoni mb-6">Obras Modulares</h1>
            <p className="text-gray-400 max-w-2xl">
              Explorá nuestra selección de proyectos modulares, desde viviendas prefabricadas hasta espacios
              comerciales, diseñados para ofrecer flexibilidad, rapidez de construcción y sostenibilidad.
            </p>
          </div>
        </div>
      </section>

      {/* Filtros */}
      <section className="py-8">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex space-x-8 mb-16">
            {["todos", "viviendas", "comerciales", "educativos"].map((categoria) => (
              <button
                key={categoria}
                onClick={() => setFiltro(categoria)}
                className={`text-lg relative hover-line ${
                  filtro === categoria ? "text-bordo" : "text-gray-400 hover:text-white"
                } transition-colors duration-300`}
              >
                {categoria.charAt(0).toUpperCase() + categoria.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {proyectosModulares.map((proyecto) => (
              <div key={proyecto.id}>
                <Link href={`/obras/modulares/${proyecto.id}`} className="block group">
                  <div className="relative overflow-hidden rounded-lg mb-4">
                    <Image
                      src={proyecto.imagen || "/placeholder.svg"}
                      alt={proyecto.titulo}
                      width={800}
                      height={600}
                      className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <span className="inline-block bg-bordo text-white px-3 py-1 text-xs uppercase tracking-wider mb-2">
                          Ver detalles
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-bordo text-sm font-medium">Modular</span>
                      <span className="text-gray-400 text-sm">{proyecto.anio}</span>
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-bordo transition-colors duration-300">
                      {proyecto.titulo}
                    </h3>
                    <p className="text-gray-400">{proyecto.ubicacion}</p>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
