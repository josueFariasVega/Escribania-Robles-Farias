import { useState, useEffect } from "react";
import {
  Scale,
  FileText,
  Building,
  HandshakeIcon,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "../ui/button";
import { Card } from "../ui/card";
import { ImageWithFallback } from "../figma/ImageWithFallback";

interface HomePageProps {
  onNavigate: (page: string) => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const heroTexts = [
    {
      title: "Servicios Notariales de Confianza",
      subtitle:
        "Más de 5 años brindando seguridad jurídica a familias y empresas",
    },
    {
      title: "Profesionalismo y Experiencia",
      subtitle:
        "Asesoramiento integral en todos sus trámites notariales",
    },
    {
      title: "Su Seguridad Jurídica, Nuestra Prioridad",
      subtitle:
        "Atención personalizada y soluciones eficientes",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroTexts.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroTexts.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) =>
        (prev - 1 + heroTexts.length) % heroTexts.length,
    );
  };

  const services = [
    {
      icon: Scale,
      title: "Servicios Judiciales",
      description:
        "Sucesión, cobro de guaraníes, prestación de alimentos y divorcios con asesoramiento profesional.",
      link: "services",
    },
    {
      icon: FileText,
      title: "Contratos y Certificaciones",
      description:
        "Elaboración y certificación de contratos de vehículos e inmuebles con total seguridad jurídica.",
      link: "services",
    },
    {
      icon: Building,
      title: "Sociedades y Empresas",
      description:
        "Constitución y gestión de sociedades comerciales con asesoramiento integral.",
      link: "services",
    },
    {
      icon: HandshakeIcon,
      title: "Poderes y Legalizaciones",
      description:
        "Otorgamiento de poderes generales y especiales con validez legal completa.",
      link: "services",
    },
  ];

  const stats = [
    { number: "8+", label: "Años de experiencia" },
    { number: "15K+", label: "Documentos tramitados" },
    { number: "92%", label: "Satisfacción del cliente" },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Text Carousel */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Static Background Image */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://subir-imagen.com/images/2025/10/06/studioRoblesFariasImg.png"
            /*"https://subir-imagen.com/images/2025/10/05/Screenshot-2025-10-05-172858.png"*/
            alt="Studio Robles.Farías"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-[#1a2332]/75" />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 md:left-8 z-20 w-12 h-12 bg-white/10 hover:bg-[#c9a961] backdrop-blur-sm rounded-full flex items-center justify-center transition-colors text-white"
          aria-label="Anterior"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 md:right-8 z-20 w-12 h-12 bg-white/10 hover:bg-[#c9a961] backdrop-blur-sm rounded-full flex items-center justify-center transition-colors text-white"
          aria-label="Siguiente"
        >
          <ChevronRight size={24} />
        </button>

        {/* Hero Content with Animated Text */}
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="max-w-4xl mx-auto space-y-6">
            <h1
              key={`title-${currentSlide}`}
              className="text-4xl md:text-5xl lg:text-6xl text-white animate-fade-in-up"
            >
              {heroTexts[currentSlide].title}
            </h1>
            <p
              key={`subtitle-${currentSlide}`}
              className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto animate-fade-in-up"
              style={{
                animationDelay: "0.2s",
                opacity: 0,
                animationFillMode: "forwards",
              }}
            >
              {heroTexts[currentSlide].subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center pt-6">
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-[#c9a961] hover:bg-[#b8941f] text-white px-6 py-3"
              >
                Solicitar Turno
              </Button>
              <Button
                onClick={() => onNavigate("services")}
                variant="outline"
                className="border-2 border-white hover:bg-white hover:text-[#1a2332] px-6 py-3"
              >
                Nuestros Servicios
              </Button>
            </div>
          </div>
        </div>

        {/* Carousel Indicators */}
        <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {heroTexts.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${index === currentSlide
                ? "bg-[#c9a961] w-8"
                : "bg-white/50"
                }`}
              aria-label={`Ir a slide ${index + 1}`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl text-[#1a2332] mb-4">
              Nuestros Servicios Principales
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Ofrecemos soluciones integrales en servicios
              notariales con la más alta calidad profesional
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer border-none bg-white shadow-md"
                onClick={() => onNavigate(service.link)}
              >
                <div className="w-16 h-16 bg-[#f5e6d3] rounded-lg flex items-center justify-center mb-4">
                  <service.icon
                    size={32}
                    className="text-[#1a2332]"
                  />
                </div>
                <h3 className="text-xl text-[#1a2332] mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {service.description}
                </p>
                <button className="text-[#c9a961] hover:text-[#b8941f] flex items-center gap-2 transition-colors">
                  Ver más <ArrowRight size={16} />
                </button>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              onClick={() => onNavigate("services")}
              variant="outline"
              className="border-2 border-[#1a2332] text-[#1a2332] hover:bg-[#1a2332] hover:text-white px-8 py-6 text-lg h-auto"
            >
              Ver todos los servicios
            </Button>
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-[#f5e6d3] overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image Container */}
            <div className="relative w-full order-1 lg:order-1">
              <div className="absolute -inset-4 bg-[#c9a961] rounded-lg -rotate-3 transform transition-transform hover:rotate-0 duration-500" />
              <ImageWithFallback
                src="https://subir-imagen.com/images/2025/10/05/Screenshot-2025-10-05-193650.png"
                alt="Equipo profesional"
                className="relative rounded-lg shadow-2xl w-full h-auto object-cover transform transition-transform hover:scale-[1.02] duration-500"
              />
            </div>

            {/* Content Container */}
            <div className="space-y-8 order-2 lg:order-2 rounded-2xl backdrop-blur-sm shadow-sm">
              <div className="space-y-4">
                <div className="text-[#c9a961] tracking-wider uppercase text-sm font-bold">
                  Confianza y Experiencia
                </div>
                <h2 className="text-4xl md:text-5xl text-[#1a2332] font-serif">
                  Robles-Farías
                </h2>
                <p className="text-gray-700 leading-relaxed text-lg text-justify">
                  Con más de 8 años de experiencia en el campo
                  jurídico, nuestra firma se ha establecido como
                  un referente en la prestación de servicios
                  legales y notariales de alta calidad. Nuestro
                  equipo de profesionales altamente capacitados y
                  experimentados se dedica a brindar asesoramiento
                  y representación legal a individuos, empresas y
                  organizaciones en una amplia gama de asuntos
                  jurídicos.
                </p>

                <ul className="space-y-4 mt-4">
                  <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-[#1a2332]/5 hover:border-[#c9a961]/30 transition-colors">
                    <span className="mr-3 text-[#c9a961] font-bold text-xl">•</span>
                    <span className="text-gray-700 leading-relaxed">
                      <strong className="text-[#1a2332]">Asesoramiento Legal:</strong>{" "}
                      Nuestro equipo de abogados expertos ofrece
                      asesoramiento y representación legal en
                      diversas áreas del derecho, incluyendo
                      derecho civil, comercial, laboral,
                      tributario y más.
                    </span>
                  </li>
                  <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-[#1a2332]/5 hover:border-[#c9a961]/30 transition-colors">
                    <span className="mr-3 text-[#c9a961] font-bold text-xl">•</span>
                    <span className="text-gray-700 leading-relaxed">
                      <strong className="text-[#1a2332]">Servicios Notariales:</strong>{" "}
                      Nuestra escribanía ofrece servicios
                      notariales para garantizar la autenticidad y
                      validez de documentos y actos jurídicos.
                    </span>
                  </li>
                  <li className="flex items-start bg-white p-4 rounded-lg shadow-sm border border-[#1a2332]/5 hover:border-[#c9a961]/30 transition-colors">
                    <span className="mr-3 text-[#c9a961] font-bold text-xl">•</span>
                    <span className="text-gray-700 leading-relaxed">
                      <strong className="text-[#1a2332]">Gestión de Documentos:</strong>{" "}
                      Nos encargamos de la gestión y tramitación de
                      documentos legales, incluyendo escrituras
                      públicas, contratos y más.
                    </span>
                  </li>
                </ul>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-6 border-t border-[#1a2332]/10">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center group">
                    <div className="text-3xl md:text-4xl text-[#c9a961] mb-2 font-bold group-hover:scale-110 transition-transform">
                      {stat.number}
                    </div>
                    <div className="text-sm font-medium text-gray-600">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Button
                  onClick={() => onNavigate("about")}
                  className="bg-[#1a2332] hover:bg-[#2d3748] text-white px-8 py-6 text-lg h-auto w-full sm:w-auto shadow-lg hover:shadow-xl transition-all"
                >
                  Conocer más sobre nosotros
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1a2332] text-white">
        <div className="container mx-auto px-4 text-center mb-12">
          <div className="max-w-3xl mx-auto space-y-6">
            <h2 className="text-4xl md:text-5xl">
              ¿Necesita asesoramiento?
            </h2>
            <p className="text-xl text-white/90">
              Contáctenos hoy y descubra cómo podemos ayudarle
              con sus trámites notariales
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                onClick={() => onNavigate("contact")}
                className="bg-[#c9a961] hover:bg-[#b8941f] text-white px-8 py-6 text-lg h-auto"
              >
                Solicitar Turno
              </Button>
              {/*<Button
                variant="outline"
                className="border-2 border-white text-white hover:bg-white hover:text-[#1a2332] px-8 py-6 text-lg h-auto"
                onClick={() =>
                  window.open(
                    "https://wa.me/595991708283",
                    "_blank",
                  )
                }
              >
                WhatsApp
              </Button>*/}
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl text-[#1e3a5f] text-center mb-12">
                Preguntas Frecuentes
              </h2>
              <div className="space-y-4">
                <Card className="p-6">
                  <h3 className="text-lg text-[#1e3a5f] mb-2">
                    ¿Necesito turno previo para realizar una
                    consulta?
                  </h3>
                  <p className="text-gray-600">
                    Si bien atendemos consultas sin turno,
                    recomendamos reservar un turno para garantizar
                    una atención personalizada y sin demoras.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg text-[#1e3a5f] mb-2">
                    ¿Qué formas de pago aceptan?
                  </h3>
                  <p className="text-gray-600">
                    Aceptamos efectivo, transferencias bancarias,
                    tarjetas de débito y crédito. Consulte por
                    planes de financiación disponibles.
                  </p>
                </Card>
                <Card className="p-6">
                  <h3 className="text-lg text-[#1e3a5f] mb-2">
                    ¿Realizan trámites a domicilio?
                  </h3>
                  <p className="text-gray-600">
                    Sí, ofrecemos servicio de escribanía móvil
                    para casos especiales. Consulte disponibilidad
                    y aranceles adicionales.
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </section>
    </div>
  );
}