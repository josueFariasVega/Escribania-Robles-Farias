import { useState } from "react";
import {
  Scale,
  FileText,
  Building,
  HandshakeIcon,
  ChevronDown,
  ChevronRight,
  Clock,
  FileCheck,
  MessageSquare,
} from "lucide-react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../ui/collapsible";

interface ServicesPageProps {
  onNavigate: (page: string) => void;
}

export function ServicesPage({
  onNavigate,
}: ServicesPageProps) {
  const [openCategories, setOpenCategories] = useState<
    Record<string, boolean>
  >({
    judiciales: true,
    notariales: false,
    asesoramiento: false,
  });

  const toggleCategory = (category: string) => {
    setOpenCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categories = [
    {
      id: "judiciales",
      icon: Scale,
      title: "Servicios Judiciales",
      description:
        "Asesoramiento integral en procesos judiciales",
      services: [
        {
          name: "Sucesión",
          description:
            "Trámites sucesorios y declaratoria de herederos",
          docs: [
            "Certificado de defunción del causante",
            "Certificado de nacimiento de los herederos",
            "Título de propiedades",
            "Cédula de las partes",
          ],
          time: "Indefinido",
        },
        {
          name: "Cobro de Guaraníes",
          description:
            "Gestión de cobro de deudas mediante pagarés o cheques",
          docs: ["Pagaré o cheque", "Cédula de identidad"],
          time: "Indefinido",
        },
        {
          name: "Prestación de Alimentos",
          description: "Trámites de pensión alimenticia",
          docs: [
            "Cédula de las partes",
            "Certificado de nacimiento",
          ],
          time: "Indefinido",
        },
        {
          name: "Divorcios",
          description: "Gestión de procesos de divorcio",
          docs: [
            "Cédula de las partes",
            "Certificado de matrimonio",
          ],
          time: "Indefinido",
        },
      ],
    },
    {
      id: "notariales",
      icon: FileText,
      title: "Servicios Notariales",
      description:
        "Soluciones notariales completas y certificaciones",
      services: [
        {
          name: "Contratos y Certificaciones",
          description:
            "Elaboración y certificación de contratos de vehículos e inmuebles",
          docs: [
            "Cédula de las partes",
            "Documentación del vehículo o inmueble",
          ],
          time: "Indefinido",
        },
        {
          name: "Sociedades y Empresas",
          description:
            "Constitución y gestión de sociedades comerciales",
          docs: [
            "Cédula de identidad de las partes",
            "Nombre de la futura sociedad",
            "Capital y Objeto social",
          ],
          time: "Indefinido",
        },
        {
          name: "Poderes y Legalizaciones",
          description:
            "Otorgamiento de poderes generales y especiales",
          docs: [
            "Cédula de identidad del otorgante y Apoderado",
          ],
          time: "Indefinido",
        },
      ],
    },
    {
      id: "asesoramiento",
      icon: MessageSquare,
      title: "Asesoramiento",
      description:
        "Orientación profesional para resolver sus dudas legales y notariales",
      services: [
        {
          name: "Asesoramiento Notarial",
          description:
            "Consultoría especializada en trámites notariales. Le guiamos paso a paso para que comprenda todos los aspectos de su proceso notarial y esté preparado para llevar a cabo cualquier acción",
          docs: [
            "Cédula de identidad",
            "Documentación relacionada a su consulta (si la posee)",
            "Descripción de su situación o duda",
          ],
          time: "Indefinido",
        },
        {
          name: "Asesoramiento Judicial",
          description:
            "Orientación legal en procesos judiciales. Nuestros profesionales le brindan una guía completa sobre los pasos a seguir, documentación necesaria y mejores estrategias para su caso, preparándole para actuar con seguridad",
          docs: [
            "Cédula de identidad",
            "Documentación relacionada a su caso (si la posee)",
            "Descripción de su situación legal",
          ],
          time: "Indefinido",
        },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a5f] text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Nuestros Servicios
            </h1>
            <p className="text-xl text-white/90">
              Soluciones legales y notariales con respaldo
              profesional
            </p>
          </div>
        </div>
      </section>

      {/* Services Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Sidebar */}
            <aside className="lg:col-span-3">
              <Card className="p-6 sticky top-24">
                <h3 className="text-lg text-[#1e3a5f] mb-4">
                  Categorías
                </h3>
                <nav className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => {
                        toggleCategory(category.id);
                        document
                          .getElementById(category.id)
                          ?.scrollIntoView({
                            behavior: "smooth",
                            block: "start",
                          });
                      }}
                      className={`w-full text-left px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
                        openCategories[category.id]
                          ? "bg-[#1e3a5f] text-white"
                          : "hover:bg-[#f5e6d3] text-gray-700"
                      }`}
                    >
                      <category.icon size={20} />
                      <span className="text-sm">
                        {category.title}
                      </span>
                    </button>
                  ))}
                </nav>
                <div className="mt-8 p-4 bg-[#f5e6d3] rounded-lg">
                  <p className="text-sm text-gray-700 mb-4">
                    ¿No encuentra el servicio que necesita?
                  </p>
                  <Button
                    onClick={() => onNavigate("contact")}
                    className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white"
                  >
                    Consultar
                  </Button>
                </div>
              </Card>
            </aside>

            {/* Main Content */}
            <div className="lg:col-span-9 space-y-8">
              {categories.map((category) => (
                <div
                  key={category.id}
                  id={category.id}
                  className="scroll-mt-24"
                >
                  <Card className="overflow-hidden">
                    <div className="bg-[#1e3a5f] text-white p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-16 h-16 bg-[#d4af37] rounded-lg flex items-center justify-center flex-shrink-0">
                          <category.icon size={32} />
                        </div>
                        <div>
                          <h2 className="text-2xl md:text-3xl mb-2">
                            {category.title}
                          </h2>
                          <p className="text-white/80">
                            {category.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="p-6 space-y-4">
                      {category.services.map(
                        (service, index) => (
                          <Collapsible key={index}>
                            <Card className="border border-gray-200">
                              <CollapsibleTrigger className="w-full text-left p-6 hover:bg-gray-50 transition-colors">
                                <div className="flex items-center justify-between">
                                  <div>
                                    <h3 className="text-xl text-[#1e3a5f] mb-2">
                                      {service.name}
                                    </h3>
                                    <p className="text-gray-600">
                                      {service.description}
                                    </p>
                                  </div>
                                  <ChevronDown className="text-[#1e3a5f] flex-shrink-0 ml-4" />
                                </div>
                              </CollapsibleTrigger>
                              <CollapsibleContent>
                                <div className="px-6 pb-6 border-t border-gray-100 pt-6">
                                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                      <h4 className="text-[#1e3a5f] mb-3 flex items-center gap-2">
                                        <FileCheck size={18} />
                                        Documentación Necesaria
                                      </h4>
                                      <ul className="space-y-2">
                                        {service.docs.map(
                                          (doc, idx) => (
                                            <li
                                              key={idx}
                                              className="flex items-start gap-2 text-sm text-gray-600"
                                            >
                                              <ChevronRight
                                                size={16}
                                                className="text-[#d4af37] mt-0.5 flex-shrink-0"
                                              />
                                              {doc}
                                            </li>
                                          ),
                                        )}
                                      </ul>
                                    </div>
                                    <div>
                                      <h4 className="text-[#1e3a5f] mb-3 flex items-center gap-2">
                                        <Clock size={18} />
                                        Tiempo Estimado
                                      </h4>
                                      <p className="text-gray-600">
                                        {service.time}
                                      </p>
                                      <Button
                                        onClick={() =>
                                          window.open(
                                            "https://wa.me/595991708283",
                                            "_blank",
                                          )
                                        }
                                        className="mt-6 bg-[#d4af37] hover:bg-[#b8941f] text-white"
                                      >
                                        Solicitar Turno
                                      </Button>
                                    </div>
                                  </div>
                                </div>
                              </CollapsibleContent>
                            </Card>
                          </Collapsible>
                        ),
                      )}
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#f5e6d3]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl text-[#1e3a5f] mb-4">
            ¿Necesita asesoramiento personalizado?
          </h2>
          <p className="text-gray-700 text-lg mb-8 max-w-2xl mx-auto">
            Nuestro equipo está listo para ayudarle con
            cualquier consulta sobre trámites legales y
            notariales
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-[#1e3a5f] hover:bg-[#2d5080] text-white px-8 py-6 text-lg h-auto"
            >
              Contáctenos
            </Button>
            <Button
              variant="outline"
              className="border-2 border-[#1e3a5f] text-[#1e3a5f] hover:bg-[#1e3a5f] hover:text-white px-8 py-6 text-lg h-auto"
              onClick={() =>
                window.open(
                  "https://wa.me/595991708283",
                  "_blank",
                )
              }
            >
              WhatsApp
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}