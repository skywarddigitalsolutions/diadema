import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="text-center">
        <Loader2 className="h-12 w-12 animate-spin text-bordo mx-auto" />
        <p className="mt-4 text-white text-lg">Cargando proyecto...</p>
      </div>
    </div>
  )
}
