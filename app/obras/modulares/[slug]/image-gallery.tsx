  "use client"

  import type React from "react"

  import { useState } from "react"
  import Image from "next/image"
  import { ChevronLeft, ChevronRight, X } from "lucide-react"
  import { motion, AnimatePresence } from "framer-motion"

  interface ImageGalleryProps {
    images: string[]
    title: string
  }

  export default function ImageGallery({ images, title }: ImageGalleryProps) {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [viewerOpen, setViewerOpen] = useState(false)

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }

    const prevImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)
    }

    const openViewer = (index: number) => {
      setCurrentIndex(index)
      setViewerOpen(true)
      document.body.style.overflow = "hidden"
    }

    const closeViewer = () => {
      setViewerOpen(false)
      document.body.style.overflow = "auto"
    }

    // Manejar teclas para navegación
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "ArrowRight") nextImage()
      if (e.key === "ArrowLeft") prevImage()
      if (e.key === "Escape") closeViewer()
    }

    return (
      <div>
        {/* Grid de miniaturas */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-square overflow-hidden cursor-pointer group"
              onClick={() => openViewer(index)}
            >
              <Image
                src={image}
                alt={`${title} - Imagen ${index + 1}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="text-white text-center">
                  <span className="sr-only">Ver imagen</span>
                  <div className="w-10 h-10 border-2 border-white rounded-full flex items-center justify-center">
                    <ChevronRight className="h-6 w-6" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Visor de imágenes a pantalla completa */}
        <AnimatePresence>
          {viewerOpen && (
            <motion.div
              className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onKeyDown={handleKeyDown}
              tabIndex={0}
            >
              {/* Botón de cerrar */}
              <button
                onClick={closeViewer}
                className="absolute top-6 right-6 text-white hover:text-bordo transition-colors duration-300 z-10"
                aria-label="Cerrar visor"
              >
                <X className="h-8 w-8" />
              </button>

              {/* Navegación */}
              <button
                onClick={prevImage}
                className="absolute left-4 md:left-8 text-white hover:text-bordo transition-colors duration-300 z-10"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="h-8 w-8 md:h-12 md:w-12" />
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 md:right-8 text-white hover:text-bordo transition-colors duration-300 z-10"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="h-8 w-8 md:h-12 md:w-12" />
              </button>

              {/* Imagen actual */}
              <motion.div
                className="relative w-full h-full flex items-center justify-center p-8 md:p-16"
                key={currentIndex}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative w-full h-full">
                  <Image
                    src={images[currentIndex] || "/placeholder.svg"}
                    alt={`${title} - Imagen ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </motion.div>

              {/* Contador de imágenes */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-white text-sm">
                {currentIndex + 1} / {images.length}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    )
  }
