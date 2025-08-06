import { notFound } from "next/navigation"
import { obrasIndustriales } from "@/data/data"
import Image from "next/image"
import Link from "next/link"
import { ChevronLeft, ChevronRight, MapPin, Calendar, Ruler, CalendarIcon } from "lucide-react"
import Navbar from "@/app/components/navbar"
import Footer from "@/app/components/footer"
import ImageGallery from "./image-gallery"
import { getRandomItems } from "@/utils/proyectos"

interface ObraDetailParams {
  slug: string;
}

export default async function ObraDetailPage({ params }: { params: Promise<ObraDetailParams> }) {
  const { slug } = await params;
  const obra = obrasIndustriales.find((obra) => obra.slug === slug);

  if (!obra) return notFound()

  const getImagenes = (): string[] => {
    return obra.imagenes || [obra.imagen];
  }

  // Obtener imágenes para este proyecto
  const imagenes = getImagenes();

  // Datos técnicos del proyecto
  const datosTecnicos = [
    { icon: <MapPin className="h-5 w-5" />, label: "Ubicación", value: obra.ubicacion || "No especificada" },
    { icon: <Calendar className="h-5 w-5" />, label: "Año", value: obra.anio || "No especificado" },
    { icon: <Ruler className="h-5 w-5" />, label: "Categoría", value: obra.categoria || "No especificada", },
    { icon: <CalendarIcon className="h-5 w-5" />, label: "Superficie", value: obra.superficie || "No especificada" },
  ]

  const obrasRelacionadas = getRandomItems(obrasIndustriales, 3);

  return (
    <div className="bg-black text-gray-300 min-h-screen">
      <Navbar />

      {/* Botón de volver con animación sutil */}
      <div className="fixed top-20 left-6 md:left-4 z-40">
        <Link
          href="/proyectos/industriales"
          className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors duration-300 group"
        >
          <ChevronLeft className="h-5 w-5 transform group-hover:-translate-x-1 transition-transform duration-300" />
          <span>Volver a industriales</span>
        </Link>
      </div>

      {/* Hero con imagen de fondo */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden">
        <Image
          src={obra.imagen || "/placeholder.svg"}
          alt={obra.titulo}
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent flex flex-col justify-end items-center text-center px-6 pb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase font-serif mb-4 drop-shadow-lg">
            {obra.titulo}
          </h1>
          {obra.categoria && (
            <p className="text-sm md:text-lg text-bordo tracking-widest uppercase">{obra.categoria}</p>
          )}
        </div>
      </div>


      {/* Sección de contenido con grid para información técnica */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4 font-serif">Descripción</h2>
          {obra.descripcion.map((frase, index) => (
            <p key={index} className="text-gray-400 leading-relaxed mb-2">
              {frase}
            </p>
          ))}

        </div>

        {/* Línea divisoria bordo */}
        <div className="w-20 h-1 bg-bordo mb-10"></div>

        {/* Datos técnicos */}
        <div className="mb-16">
          <h2 className="text-2xl font-semibold text-white mb-6 font-serif">Información Técnica</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {datosTecnicos.map((dato, index) => (
              <div key={index} className="flex items-start space-x-4 border-l-2 border-bordo pl-4 py-2">
                <div className="text-bordo">{dato.icon}</div>
                <div>
                  <h3 className="text-white text-sm uppercase tracking-wider">{dato.label}</h3>
                  <p className="text-gray-400">{dato.value}</p>
                </div>
              </div>
            ))}
          </div>
        </div>



        {/* Contenido adicional - Puedes expandir esto con más información cuando la tengas */}
        <div className="prose prose-invert prose-gray max-w-none">
          <p className="text-gray-400 leading-relaxed">
            Este proyecto refleja nuestra filosofía de diseño, combinando estética y funcionalidad para crear espacios
            que se adaptan perfectamente a las necesidades de nuestros clientes.
          </p>
        </div>

      </section>

      {/* Galería de imágenes */}
      <section className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Galería del Proyecto</h2>
        <ImageGallery images={imagenes} title={obra.titulo} />
      </section>

      {/* Obras relacionadas */}
      {obrasRelacionadas.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 py-16 border-t border-gray-800">
          <h2 className="text-2xl font-semibold text-white mb-8 font-serif">Proyectos Relacionados</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {obrasRelacionadas.map(obraRelacionada => (
              <Link href={`/proyectos/${obraRelacionada.slug}`} key={obraRelacionada.slug} className="group">
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={obraRelacionada.imagen || "/placeholder.svg"}
                    alt={obraRelacionada.titulo}
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="text-white text-center">
                      <ChevronRight className="h-8 w-8 mx-auto mb-2" />
                      <span>Ver proyecto</span>
                    </div>
                  </div>
                </div>
                <h3 className="text-white mt-4 font-medium group-hover:text-bordo transition-colors duration-300">
                  {obraRelacionada.titulo}
                </h3>
                {obraRelacionada.categoria && <p className="text-sm text-gray-400">{obraRelacionada.categoria}</p>}
              </Link>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </div>
  )
}
