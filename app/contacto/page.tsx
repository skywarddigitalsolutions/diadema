"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, ArrowRight } from "lucide-react"
import Image from "next/image"
import Navbar from "@/app/components/navbar"
import Footer from "../components/footer"

export default function ContactoPage() {
  const [formState, setFormState] = useState({
    nombre: "",
    email: "",
    telefono: "",
    tipoProyecto: "residencial",
    mensaje: "",
    submitted: false,
    loading: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (value: string) => {
    setFormState((prev) => ({ ...prev, tipoProyecto: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormState((prev) => ({ ...prev, loading: true }))

    // Simulación de envío
    setTimeout(() => {
      setFormState((prev) => ({ ...prev, submitted: true, loading: false }))
    }, 1500)
  }

  // Referencias para animaciones
  const headerRef = useRef(null)
  const formRef = useRef(null)
  const infoRef = useRef(null)
  const mapRef = useRef(null)


  const headerInView = useInView(headerRef, { once: true, amount: 0.2 })
  const formInView = useInView(formRef, { once: true, amount: 0.1 })
  const infoInView = useInView(infoRef, { once: true, amount: 0.1 })
  const mapInView = useInView(mapRef, { once: true, amount: 0.1 })

  const headerControls = useAnimation()
  const formControls = useAnimation()
  const infoControls = useAnimation()
  const mapControls = useAnimation()

  useEffect(() => {
    if (headerInView) headerControls.start({ opacity: 1, y: 0 })
    if (formInView) formControls.start({ opacity: 1, x: 0 })
    if (infoInView) infoControls.start({ opacity: 1, x: 0 })
    if (mapInView) mapControls.start({ opacity: 1, y: 0 })
  }, [headerInView, formInView, infoInView, mapInView, headerControls, formControls, infoControls, mapControls])

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden opacity-10 pointer-events-none">
          <div className="absolute -right-10 top-40 w-[600px] h-[600px] border border-bordo rounded-full"></div>
          <div className="absolute -right-40 top-20 w-[800px] h-[800px] border border-bordo rounded-full"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 30 }}
            animate={headerControls}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl mb-6">Conectemos</h1>
            <p className="text-gray-400 text-xl max-w-2xl mb-8">
              Estamos aquí para transformar tus ideas en espacios excepcionales. Cuéntanos sobre tu proyecto y
              comencemos a crear juntos.
            </p>
            <div className="flex flex-wrap gap-4 items-center">
              <a
                href="#formulario"
                className="px-8 py-3 bg-bordo text-white hover:bg-white hover:text-bordo transition-colors duration-300 flex items-center group"
              >
                Contactar ahora
                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+5411555512345"
                className="px-8 py-3 border border-white/30 hover:border-bordo text-white hover:text-bordo transition-colors duration-300"
              >
                Comunicarse por whatsapp <Phone className="inline-block ml-2 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section id="formulario" className="py-16 md:py-24 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            {/* Contact Form */}
            <motion.div
              ref={formRef}
              initial={{ opacity: 0, x: -50 }}
              animate={formControls}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="sticky top-32">
                <h2 className="text-3xl mb-2">Hablemos de tu proyecto</h2>
                <div className="w-20 h-1 bg-bordo mb-8"></div>

                {formState.submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5 }}
                    className="bg-white/5 backdrop-blur-sm p-8 rounded-lg text-center py-16"
                  >
                    <div className="w-20 h-20 bg-bordo rounded-full flex items-center justify-center mx-auto mb-6">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-10 w-10 text-white"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-3xl text-white mb-4">¡Mensaje enviado!</h3>
                    <p className="text-gray-300 mb-8">
                      Gracias por contactarnos. Nuestro equipo se pondrá en contacto contigo a la brevedad.
                    </p>
                    <button
                      onClick={() =>
                        setFormState({
                          nombre: "",
                          email: "",
                          telefono: "",
                          tipoProyecto: "residencial",
                          mensaje: "",
                          submitted: false,
                          loading: false,
                        })
                      }
                      className="px-8 py-3 border border-bordo text-bordo hover:bg-bordo hover:text-white transition-colors duration-300"
                    >
                      Enviar otro mensaje
                    </button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="nombre" className="block text-sm uppercase tracking-wider text-gray-400">
                          Nombre completo
                        </label>
                        <input
                          id="nombre"
                          name="nombre"
                          value={formState.nombre}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border-b border-gray-700 focus:border-bordo py-3 px-4 outline-none transition-colors duration-300"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm uppercase tracking-wider text-gray-400">
                          Correo electrónico
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full bg-white/5 border-b border-gray-700 focus:border-bordo py-3 px-4 outline-none transition-colors duration-300"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="space-y-2">
                        <label htmlFor="telefono" className="block text-sm uppercase tracking-wider text-gray-400">
                          Teléfono
                        </label>
                        <input
                          id="telefono"
                          name="telefono"
                          value={formState.telefono}
                          onChange={handleChange}
                          className="w-full bg-white/5 border-b border-gray-700 focus:border-bordo py-3 px-4 outline-none transition-colors duration-300"
                        />
                      </div>

                      <div className="space-y-4">
                        <span className="block text-sm uppercase tracking-wider text-gray-400">Tipo de proyecto</span>
                        <div className="flex space-x-6">
                          {["residencial", "industrial", "modular"].map((tipo) => (
                            <label key={tipo} className="flex items-center space-x-2 cursor-pointer">
                              <input
                                type="radio"
                                name="tipoProyecto"
                                value={tipo}
                                checked={formState.tipoProyecto === tipo}
                                onChange={() => handleRadioChange(tipo)}
                                className="sr-only"
                              />
                              <span
                                className={`w-4 h-4 border rounded-full flex items-center justify-center ${
                                  formState.tipoProyecto === tipo ? "border-bordo" : "border-gray-600"
                                }`}
                              >
                                {formState.tipoProyecto === tipo && <span className="w-2 h-2 rounded-full bg-bordo" />}
                              </span>
                              <span className="capitalize">{tipo}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="mensaje" className="block text-sm uppercase tracking-wider text-gray-400">
                        Cuéntanos sobre tu proyecto
                      </label>
                      <textarea
                        id="mensaje"
                        name="mensaje"
                        value={formState.mensaje}
                        onChange={handleChange}
                        rows={5}
                        required
                        className="w-full bg-white/5 border-b border-gray-700 focus:border-bordo py-3 px-4 outline-none transition-colors duration-300"
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={formState.loading}
                      className="px-8 py-4 bg-bordo text-white hover:bg-white hover:text-bordo transition-colors duration-300 flex items-center"
                    >
                      {formState.loading ? (
                        <span className="flex items-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Enviando...
                        </span>
                      ) : (
                        <span className="flex items-center">
                          Enviar mensaje <Send className="ml-2 h-4 w-4" />
                        </span>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <div>
              <motion.div
                ref={infoRef}
                initial={{ opacity: 0, x: 50 }}
                animate={infoControls}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <h2 className="text-3xl mb-2">Información de contacto</h2>
                <div className="w-20 h-1 bg-bordo mb-8"></div>

                <div className="bg-[#0f0f0f] p-8 mb-12 border-l-2 border-bordo">
                  <div className="space-y-8">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-bordo/10 flex items-center justify-center shrink-0">
                        <MapPin className="h-5 w-5 text-bordo" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Dirección</h3>
                        <p className="text-gray-400">Av. Libertador 4500, Piso 12</p>
                        <p className="text-gray-400">Buenos Aires, Argentina</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-bordo/10 flex items-center justify-center shrink-0">
                        <Phone className="h-5 w-5 text-bordo" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                        <p className="text-gray-400">+54 11 5555-1234</p>
                        <p className="text-gray-400">+54 11 4444-5678</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-bordo/10 flex items-center justify-center shrink-0">
                        <Mail className="h-5 w-5 text-bordo" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Email</h3>
                        <p className="text-gray-400">info@diadema.com</p>
                        <p className="text-gray-400">proyectos@diadema.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-full bg-bordo/10 flex items-center justify-center shrink-0">
                        <Clock className="h-5 w-5 text-bordo" />
                      </div>
                      <div>
                        <h3 className="font-bold text-lg mb-1">Horario de atención</h3>
                        <p className="text-gray-400">Lunes a Viernes: 9:00 - 18:00</p>
                        <p className="text-gray-400">Sábados: 10:00 - 14:00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 relative overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/placeholder.svg?height=1000&width=2000"
            alt="Fondo arquitectónico"
            fill
            className="object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/90 to-black"></div>
        </div>

        <div className="container mx-auto px-6 md:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl mb-6">¿Listo para dar vida a tu proyecto?</h2>
              <p className="text-gray-300 text-lg mb-10 max-w-2xl mx-auto">
                Nuestro equipo de expertos está preparado para transformar tus ideas en espacios excepcionales que
                superen tus expectativas.
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <a
                  href="#formulario"
                  className="px-8 py-3 bg-bordo text-white hover:bg-white hover:text-bordo transition-colors duration-300"
                >
                  Contactar ahora
                </a>
                <a
                  href="/proyectos"
                  className="px-8 py-3 border border-white/30 hover:border-bordo text-white hover:text-bordo transition-colors duration-300"
                >
                  Ver nuestros proyectos
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
