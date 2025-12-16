import {
  Award,
  ShieldCheck,
  Users,
  TrendingUp,
  Linkedin,
} from "lucide-react";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface AboutPageProps {
  onNavigate: (page: string) => void;
}

export function AboutPage({ onNavigate }: AboutPageProps) {
  const timeline = [
    {
      year: "2017",
      event: "Fundación de la Escribanía Robles Barrios",
    },
    {
      year: "2023",
      event:
        "Integración de asesoramiento jurídico previo a trámites notariales",
    },
    {
      year: "2025",
      event:
        "Fusión estratégica de alto prestigio, expansión de servicios jurídicos y el fortalecimiento del enfoque integral",
    },
    {
      year: "2025",
      event:
        "	Transformación oficial en Estudio Jurídico Notarial Robles Barrios",
    },
  ];

  const team = [
    {
      name: "Alfredo",
      role: "Escribano Público",
      matricula: "Mat. 701",
      image:
        "https://subir-imagen.com/images/2025/12/16/1765905398365-019b2828-da8b-729d-b892-ed8e150a2d5c.png",
      bio: "Escribano público con amplia experiencia en derecho notarial y judicial. Especializado en trámites sucesorios, societarios y actos de fe pública. Su compromiso con la excelencia y el trato personalizado garantiza seguridad jurídica en cada gestión.",
    },
    {
      name: "Maia",
      role: "Abogada",
      matricula: "Mat. 51703",
      image:
        "https://subir-imagen.com/images/2025/12/16/1765904968592-019b2822-5067-74ff-a48d-ad232a443179.png",
      bio: "Abogada con sólida formación en derecho notarial y asesoramiento jurídico integral. Especializada en contratos, poderes y certificaciones. Su enfoque profesional y dedicado asegura precisión y confiabilidad en cada acto notarial.",
    },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: "Confianza",
      description:
        "Garantizamos la máxima seguridad jurídica en cada acto notarial que realizamos.",
    },
    {
      icon: Award,
      title: "Profesionalismo",
      description:
        "Equipo altamente calificado con formación continua y actualización permanente.",
    },
    {
      icon: Users,
      title: "Confidencialidad",
      description:
        "Manejo reservado y profesional de toda la información de nuestros clientes.",
    },
    {
      icon: TrendingUp,
      title: "Compromiso",
      description:
        "Dedicación total para lograr la satisfacción y tranquilidad de cada cliente.",
    },
  ];

  const certifications = [
    { name: "Colegio de Escribanos", logo: "CE" },
    { name: "ISO 9001:2015", logo: "ISO" },
    { name: "Asociación Notarial", logo: "AN" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a5f] text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Sobre Nosotros
            </h1>
            <p className="text-xl text-white/90">
              Construyendo confianza a través de la excelencia
              profesional desde 1998
            </p>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="text-[#d4af37] tracking-wider uppercase text-sm mb-4">
                Nuestra Historia
              </div>
              <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-6">
                8 Años de Trayectoria
              </h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                Desde su fundación el 4 de septiembre de 2017,
                la Escribanía Robles Barrios se destacó por su
                compromiso con la excelencia, la transparencia y
                la satisfacción de sus clientes. Durante años,
                brindó servicios notariales con profesionalismo,
                ganándose la confianza de cientos de personas y
                empresas.
              </p>
              <p className="text-gray-700 leading-relaxed mb-4">
                El 27 de enero de 2025, marcamos un nuevo
                capítulo en nuestra trayectoria: una fusión
                estratégica con una colaboradora visionaria dio
                origen al actual Estudio Jurídico Notarial
                Robles Barrios. Esta transformación no fue solo
                un cambio de nombre, sino una evolución profunda
                en nuestra propuesta de valor.
              </p>
              <p className="text-gray-700 leading-relaxed">
                Hoy, integramos asesoramiento jurídico previo a
                cada trámite, ofreciendo una experiencia más
                completa, segura y personalizada. Esta
                revolución en nuestros servicios refleja nuestro
                compromiso con la innovación legal y el
                acompañamiento integral de nuestros clientes.
              </p>
            </div>
            <div>
              <Card className="p-8 bg-white">
                <h3 className="text-xl text-[#1e3a5f] mb-6">
                  Hitos Importantes
                </h3>
                <div className="space-y-6">
                  {timeline.map((item, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex flex-col items-center">
                        <div className="w-12 h-12 bg-[#d4af37] rounded-full flex items-center justify-center text-white flex-shrink-0">
                          {item.year.slice(-2)}
                        </div>
                        {index < timeline.length - 1 && (
                          <div className="w-0.5 h-full bg-[#d4af37]/30 my-2" />
                        )}
                      </div>
                      <div className="pb-6">
                        <div className="text-[#d4af37]">
                          {item.year}
                        </div>
                        <div className="text-gray-700">
                          {item.event}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-4">
              Nuestro Equipo
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Escribanos públicos con sólida trayectoria y compromiso con la excelencia jurídica
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {team.map((member, index) => (
              <Card
                key={index}
                className="overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative h-96">
                  <ImageWithFallback
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a2332] via-[#1a2332]/60 to-transparent opacity-70" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <h3 className="text-2xl mb-2">
                      {member.name}
                    </h3>
                    <p className="text-[#c9a961] mb-1">
                      {member.role}
                    </p>
                    <p className="text-white/90 text-sm">
                      {member.matricula}
                    </p>
                  </div>
                </div>
                <div className="p-8 bg-gradient-to-b from-white to-gray-50">
                  <p className="text-gray-700 leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-[#f5e6d3]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-4">
              Nuestros Valores
            </h2>
            <p className="text-gray-700 text-lg max-w-2xl mx-auto">
              Los principios que guían nuestro trabajo diario
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card
                key={index}
                className="p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-16 h-16 bg-[#1e3a5f] rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon
                    size={32}
                    className="text-[#d4af37]"
                  />
                </div>
                <h3 className="text-xl text-[#1e3a5f] mb-3">
                  {value.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      {/*<section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-4">
              Certificaciones y Afiliaciones
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Respaldados por las principales instituciones
              profesionales
            </p>
          </div>

          <div className="flex flex-wrap justify-center items-center gap-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex flex-col items-center gap-4 group"
              >
                <div className="w-32 h-32 bg-[#f5e6d3] rounded-lg flex items-center justify-center group-hover:bg-[#1e3a5f] transition-colors">
                  <span className="text-3xl text-[#1e3a5f] group-hover:text-[#d4af37] transition-colors">
                    {cert.logo}
                  </span>
                </div>
                <p className="text-gray-700 text-center">
                  {cert.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>*/}

      {/* CTA Section */}
      {/*<section className="py-16 bg-[#1e3a5f] text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl mb-4">
            ¿Desea conocernos personalmente?
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Visite nuestras oficinas o solicite una consulta
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => onNavigate("contact")}
              className="bg-[#d4af37] hover:bg-[#b8941f] text-white px-8 py-4 rounded-lg transition-colors"
            >
              Solicitar Turno
            </button>
            <button
              onClick={() => onNavigate("gallery")}
              className="border-2 border-white text-white hover:bg-white hover:text-[#1e3a5f] px-8 py-4 rounded-lg transition-colors"
            >
              Ver Instalaciones
            </button>
          </div>
        </div>
      </section>*/}
    </div>
  );
}