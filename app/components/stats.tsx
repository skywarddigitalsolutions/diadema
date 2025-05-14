'use client';
import { useRef, useEffect, useState } from "react"


  // Datos de estadísticas
  const estadisticas = [
    { valor: 20, etiqueta: "Obras industriales", sufijo: "+" },
    { valor: 50, etiqueta: "Remodelaciones y viviendas", sufijo: "+" },
    { valor: 10, etiqueta: "Años de experiencia", sufijo: "+" },
  ]

export default function Stats() {
  return (
    <section className="bg-black text-white pt-0 md:pb-20 px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {estadisticas.map((stat, index) => (
            <CounterItem key={index} value={stat.valor} label={stat.etiqueta} suffix={stat.sufijo} />
          ))}
        </div>
    </section>
  );
}

// Componente para contador animado
function CounterItem({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const [count, setCount] = useState(0)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let startValue = 0
          const duration = 2000 // ms
          const increment = Math.ceil(value / (duration / 16)) // 60fps aproximadamente

          const timer = setInterval(() => {
            startValue += increment
            if (startValue >= value) {
              setCount(value)
              clearInterval(timer)
            } else {
              setCount(startValue)
            }
          }, 16)

          return () => clearInterval(timer)
        }
      },
      { threshold: 0.1 },
    )

    if (counterRef.current) {
      observer.observe(counterRef.current)
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current)
      }
    }
  }, [value])

  // Formatear número con separadores de miles
  const formattedCount = count.toLocaleString()

  return (
    <div ref={counterRef} className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-bordo mb-2">
        {formattedCount}
        {suffix}
      </div>
      <p className="text-gray-400 uppercase tracking-wider text-sm">{label}</p>
    </div>
  )
}
