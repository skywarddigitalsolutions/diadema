"use client"

import Image from "next/image"
import Link from "next/link"
import { ChevronLeft } from "lucide-react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import { obrasResidenciales } from "@/data/data"
// Dummy data for proyectosResidenciales


export default function ObrasResidencialesPage() {
  return (
    <div className="bg-black text-white">
      <Navbar />
      {/* Back Button */}
      <div className="fixed top-20 left-6 md:left-4 z-40">
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
            <h1 className="text-5xl md:text-7xl font-bodoni mb-6">Obras Residenciales</h1>
            <p className="text-gray-400 max-w-2xl">
              Explorá nuestra selección de proyectos residenciales, desde casas unifamiliares hasta complejos
              multifamiliares, diseñados con atención al detalle y enfoque en la calidad de vida.
            </p>
          </div>
        </div>
      </section>



      {/* Projects Grid */}
      <section className="py-8 md:py-16">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {obrasResidenciales.map((proyecto) => (
              <div key={proyecto.id}>
                <Link href={`/obras/residenciales/${proyecto.slug}`} className="block group">
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
                        <span className="inline-block bg-bordo rounded-lg text-white px-3 py-1 text-xs uppercase tracking-wider mb-2">
                          Ver detalles
                        </span>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-bordo text-sm font-medium">Residencial</span>
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
