"use client"

import { useState, useEffect } from "react"

export default function ScrollIndicator() {
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]")

    const handleScroll = () => {
      // Calcular progreso de scroll
      const totalHeight = document.body.scrollHeight - window.innerHeight
      const progress = Math.min(Math.max(window.scrollY / totalHeight, 0), 1)
      setScrollProgress(progress)

      // Determinar sección activa
      let current = ""
      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop
        const sectionHeight = (section as HTMLElement).offsetHeight
        if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
          current = section.getAttribute("id") || ""
        }
      })
      setActiveSection(current)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden md:block">
      <div className="flex flex-col items-center">
        {/* Barra de progreso vertical */}
        <div className="h-40 w-1 bg-white/20 rounded-full relative">
          <div
            className="absolute top-0 left-0 w-full bg-bordo rounded-full transition-all duration-300"
            style={{ height: `${scrollProgress * 100}%` }}
          ></div>
        </div>

        {/* Indicadores de sección */}
        <div className="mt-6 flex flex-col items-center space-y-4">
          {["Inicio", "Valores", "Proyectos", "ObrasDestacadas", "AntesyDespues", "Clientes", "Contacto"].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                activeSection === section ? "bg-bordo scale-125" : "bg-white/30 hover:bg-white/50"
              }`}
              aria-label={`Ir a la sección ${section}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
