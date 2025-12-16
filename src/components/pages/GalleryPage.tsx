import { useState } from 'react';
import { X } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';

interface GalleryPageProps {
  onNavigate: (page: string) => void;
}

export function GalleryPage({ onNavigate }: GalleryPageProps) {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');

  const images = [
    {
      src: 'https://images.unsplash.com/photo-1692133226337-55e513450a32?w=800',
      category: 'office',
      title: 'Sala de Atención Principal',
    },
    {
      src: 'https://images.unsplash.com/photo-1758813240178-19ef760ded2c?w=800',
      category: 'office',
      title: 'Fachada del Edificio',
    },
    {
      src: 'https://images.unsplash.com/photo-1630283017802-785b7aff9aac?w=800',
      category: 'office',
      title: 'Sala de Espera',
    },
    {
      src: 'https://images.unsplash.com/photo-1758518729685-f88df7890776?w=800',
      category: 'team',
      title: 'Reunión de Equipo',
    },
    {
      src: 'https://images.unsplash.com/photo-1758518731462-d091b0b4ed0d?w=800',
      category: 'work',
      title: 'Firma de Documentos',
    },
    {
      src: 'https://images.unsplash.com/photo-1758599543157-bc1a94fec33c?w=800',
      category: 'work',
      title: 'Asesoramiento Profesional',
    },
    {
      src: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800',
      category: 'office',
      title: 'Oficina Moderna',
    },
    {
      src: 'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800',
      category: 'office',
      title: 'Espacio de Trabajo',
    },
    {
      src: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?w=800',
      category: 'team',
      title: 'Equipo Profesional',
    },
  ];

  const filters = [
    { id: 'all', label: 'Todas' },
    { id: 'office', label: 'Oficinas' },
    { id: 'team', label: 'Equipo' },
    { id: 'work', label: 'Trabajo' },
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(img => img.category === filter);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a5f] text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Galería
            </h1>
            <p className="text-xl text-white/90">
              Conozca nuestras instalaciones y equipo de trabajo
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white sticky top-20 z-30 shadow-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {filters.map((filterOption) => (
              <button
                key={filterOption.id}
                onClick={() => setFilter(filterOption.id)}
                className={`px-6 py-2 rounded-full transition-colors ${
                  filter === filterOption.id
                    ? 'bg-[#1e3a5f] text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-[#f5e6d3]'
                }`}
              >
                {filterOption.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer aspect-[4/3]"
                onClick={() => setSelectedImage(index)}
              >
                <ImageWithFallback
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e3a5f] to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-end">
                  <div className="p-6 text-white">
                    <h3 className="text-lg">{image.title}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div
          className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 text-white hover:text-[#d4af37] transition-colors"
          >
            <X size={32} />
          </button>
          
          <div className="relative max-w-6xl w-full" onClick={(e) => e.stopPropagation()}>
            <ImageWithFallback
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="w-full h-auto max-h-[85vh] object-contain rounded-lg"
            />
            <div className="text-center mt-4 text-white">
              <h3 className="text-xl">{filteredImages[selectedImage].title}</h3>
              <p className="text-white/70">
                {selectedImage + 1} / {filteredImages.length}
              </p>
            </div>

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => 
                    prev! > 0 ? prev! - 1 : filteredImages.length - 1
                  );
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Anterior
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage((prev) => 
                    prev! < filteredImages.length - 1 ? prev! + 1 : 0
                  );
                }}
                className="bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-lg transition-colors"
              >
                Siguiente
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-4">
            ¿Le gustaría visitarnos?
          </h2>
          <p className="text-gray-600 text-lg mb-8 max-w-2xl mx-auto">
            Estamos ubicados en el centro de la ciudad, con fácil acceso y estacionamiento disponible
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-[#1e3a5f] hover:bg-[#2d5080] text-white px-8 py-4 rounded-lg transition-colors"
            >
              Solicitar Turno
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-4 rounded-lg transition-colors"
            >
              Conocer el Equipo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}