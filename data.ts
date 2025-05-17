// app/residencial/data.ts

export interface Obra {
  id: number;
  titulo: string;
  slug: string;
  imagen: string;
  descripcion: string;
  categoria: string;
  anio: string;
  ubicacion: string;
}

export const obrasResidenciales: Obra[] = [
  {
    id: 1,
    titulo: 'Ozanam 446',
    slug: 'ozanam-446',
    imagen: '/ozanam.jpg',
    descripcion: 'Se realizó una reformación del quincho, transformando en comedor y cocina, con un diseño moderno y funcional.',
    categoria: 'Residenciales',
    anio: '2022',
    ubicacion: 'Morón, Buenos Aires',
  },
  {
    id: 2,
    titulo: 'Glenmore',
    slug: 'glenmore',
    imagen: '/glenmore.jpeg',
    descripcion: 'En proceso de construcción, este proyecto residencial destaca por su diseño contemporáneo y funcionalidad.',
    categoria: 'Residenciales',
    anio: '2023',
    ubicacion: 'Pilar, Buenos Aires',
  },


];
