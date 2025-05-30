"use client"

import { useState, useLayoutEffect, useRef, useEffect } from "react"
import { Menu, X, ChevronDown } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const navItems = [
  { label: "Inicio", href: "/" },
  { label: "Obras", href: "/obras", hasDropdown: true },
  { label: "Nosotros", href: "/nosotros" },
  { label: "Contacto", href: "/contacto" },
]

const dropdownItems = [
  { label: "Residenciales", href: "/obras/residenciales", image: "/residenciales.jpg" },
  { label: "Industriales", href: "/obras/industriales", image: "/industriales.jpg" },
  { label: "Modulares", href: "/obras/modulares", image: "/modulares.png" }, // Cambiar imagen cuando esté disponible
]

export default function Navbar() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [expandedMobileItem, setExpandedMobileItem] = useState<string | null>(null)

  const dropdownRef = useRef<HTMLDivElement>(null)
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null)

  // Detectar tamaño de pantalla
  useLayoutEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Limpiar timeout al desmontar
  useEffect(() => {
    return () => {
      if (dropdownTimeoutRef.current) {
        clearTimeout(dropdownTimeoutRef.current)
      }
    }
  }, [])

  // Función para manejar el clic en el dropdown en mobile
  const toggleMobileDropdown = (label: string) => {
    if (expandedMobileItem === label) {
      setExpandedMobileItem(null)
    } else {
      setExpandedMobileItem(label)
    }
  }

  // Funciones para manejar el hover del dropdown en desktop
  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
      dropdownTimeoutRef.current = null
    }
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    // Añadir un pequeño retraso antes de cerrar el dropdown
    dropdownTimeoutRef.current = setTimeout(() => {
      setDropdownOpen(false)
    }, 100)
  }

  if (isMobile === null) return null

  return (
    <>
      {/* DIADEMA EN DESKTOP */}
      {!isMobile && (
        <div className="fixed top-6 left-6 z-50">
          <Link href="/" className="text-white text-2xl font-Work_Sans uppercase tracking-widest">
            Diadema
          </Link>
        </div>
      )}

      {/* HEADER */}
      <header
        className={`fixed z-50 px-6 py-3 backdrop-blur-md shadow-md transition-all duration-300 flex items-center ${
          isMobile
            ? "top-0 w-full bg-black/20 justify-between"
            : "top-6 left-1/2 transform -translate-x-1/2 bg-black/30 rounded-full space-x-8 w-max"
        }`}
      >
        {isMobile ? (
          <div className="w-full flex items-center justify-between">
            <Link href="/" className="text-white text-lg font-serif uppercase tracking-widest">
              Diadema
            </Link>
            <button onClick={() => setMenuOpen(!menuOpen)} className="text-white">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        ) : (
          <nav className="flex space-x-6 text-sm font-sans text-white uppercase tracking-wide relative">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                  ref={dropdownRef}
                >
                  {/* El enlace principal ahora es clickeable independientemente del hover */}
                  <Link href={item.href} className="cursor-pointer hover:text-gray-300 transition-colors">
                    {item.label}
                  </Link>

                  {/* Dropdown que aparece al hacer hover */}
                  {dropdownOpen && (
                    <>
                      {/* Puente visual para evitar espacios entre el enlace y el dropdown */}
                      <div className="absolute w-full h-4 bottom-0 translate-y-full"></div>

                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-4 flex space-x-4 bg-black/80 backdrop-blur-md rounded-xl shadow-lg p-4 z-50">
                        {dropdownItems.map((dropItem) => (
                          <Link key={dropItem.label} href={dropItem.href} className="block group w-40">
                            <div className="overflow-hidden rounded-md mb-2">
                              <Image
                                src={dropItem.image || "/placeholder.svg"}
                                alt={dropItem.label}
                                className="w-full h-28 object-cover group-hover:scale-105 transition-transform duration-300"
                                height={112}
                                width={160}
                              />
                            </div>
                            <p className="text-white text-sm uppercase tracking-wide group-hover:text-gray-300">
                              {dropItem.label}
                            </p>
                          </Link>
                        ))}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <Link key={item.href} href={item.href} className="hover:text-gray-300 transition-colors">
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        )}
      </header>

      {/* DROPDOWN MOBILE - RENDERIZADO FIJO CERCA DEL HEADER */}
      {isMobile && menuOpen && (
        <div className="fixed top-[56px] left-0 w-full z-40 bg-black/50 backdrop-blur-md px-6 py-4">
          <nav className="flex flex-col gap-4 text-white text-base font-sans font-medium uppercase tracking-wide">
            {navItems.map((item) =>
              item.hasDropdown ? (
                <div key={item.label} className="flex flex-col">
                  <div className="flex justify-between items-center">
                    {/* Enlace principal clickeable */}
                    <Link href={item.href} onClick={() => setMenuOpen(false)} className="hover:text-gray-300">
                      {item.label}
                    </Link>

                    {/* Botón para expandir/colapsar */}
                    <button onClick={() => toggleMobileDropdown(item.label)} className="p-2 hover:text-gray-300">
                      <ChevronDown
                        size={18}
                        className={`transition-transform ${expandedMobileItem === item.label ? "rotate-180" : ""}`}
                      />
                    </button>
                  </div>

                  {/* Dropdown items */}
                  {expandedMobileItem === item.label && (
                    <div className="pl-4 mt-2 flex flex-col gap-2 text-sm font-normal">
                      {dropdownItems.map((dropItem) => (
                        <Link
                          key={dropItem.label}
                          href={dropItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="hover:text-gray-300 py-1"
                        >
                          {dropItem.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-gray-300"
                >
                  {item.label}
                </Link>
              ),
            )}
          </nav>
        </div>
      )}
    </>
  )
}
