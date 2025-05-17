import { notFound } from 'next/navigation';
import { obrasResidenciales } from '@/data';
import Image from 'next/image';

interface Props {
  params: { slug: string };
}

export default function ObraDetailPage({ params }: Props) {
  const obra = obrasResidenciales.find((obra) => obra.slug === params.slug);

  if (!obra) return notFound();

  return (
    <div className="bg-black text-gray-300 min-h-screen">
      {/* Hero con imagen de fondo */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <Image
          src={obra.imagen}
          alt={obra.titulo}
          fill
          className="object-cover object-center grayscale"
          priority
        />
        <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-center px-6">
          <h1 className="text-4xl md:text-6xl font-bold text-white uppercase font-serif mb-4 drop-shadow-lg">
            {obra.titulo}
          </h1>
          {obra.categoria && (
            <p className="text-sm md:text-lg text-bordo tracking-widest uppercase">
              {obra.categoria}
            </p>
          )}
        </div>
      </div>

      {/* Sección de contenido */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <div className="mb-10">
          <h2 className="text-2xl font-semibold text-white mb-4">Descripción</h2>
          <p className="text-gray-400 leading-relaxed">{obra.descripcion}</p>
        </div>

        {/* Línea divisoria bordo */}
        <div className="w-20 h-1 bg-bordo mb-10"></div>

        {/* Contenido adicional (puede ser más info o datos técnicos) */}
        <div className="prose prose-invert prose-gray max-w-none">
          {obra.categoria ? (
            <p>{obra.descripcion}</p>
          ) : (
            <p>Próximamente más información sobre esta obra.</p>
          )}
        </div>
      </section>
    </div>
  );
}
