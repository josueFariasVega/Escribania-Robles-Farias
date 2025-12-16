import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { Card } from "../ui/card";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import { Label } from "../ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

interface ContactPageProps {
  onNavigate: (page: string) => void;
}

export function ContactPage({ onNavigate }: ContactPageProps) {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to WhatsApp
    window.open("https://wa.me/595991708283", "_blank");
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Dirección",
      content:
        "Tte Cnel. Irala Camperchioli casi,\nFernando de la Mora 110303",
      link: "https://www.google.com/maps/place/Estudio+Robles+Far%C3%ADas/@-25.310085,-57.5354541,17.57z/data=!4m6!3m5!1s0x945daf22e6a9e88d:0xaa77874c97ee88d5!8m2!3d-25.3101152!4d-57.5355757!16s%2Fg%2F11hc_84x33?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D",
    },
    {
      icon: Phone,
      title: "Teléfono",
      content: "+595 991 708283",
      link: "tel:+595991708283",
    },
    {
      icon: Mail,
      title: "Email",
      content: "estudioroblesfarias@gmail.com",
      link: "mailto:estudioroblesfarias@gmail.com",
    },
    {
      icon: Clock,
      title: "Horarios",
      content:
        "Lunes a Viernes\n9:00 - 18:00 hs\nSábado\n 09:00 a 13:00hs",
      link: null,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-[#1e3a5f] text-white py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-4">
              Contacto
            </h1>
            <p className="text-xl text-white/90">
              Estamos aquí para ayudarle con sus consultas y
              trámites notariales
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="p-8">
                <h2 className="text-2xl md:text-3xl text-[#1e3a5f] mb-6">
                  Envíenos su Consulta
                </h2>
                <form
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div>
                    <Label htmlFor="name">
                      Nombre Completo *
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Ingrese su nombre"
                      required
                      className="mt-2"
                    />
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="su@email.com"
                        required
                        className="mt-2"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Teléfono *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        placeholder="+54 9 11 1234-5678"
                        required
                        className="mt-2"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="service">
                      Tipo de Consulta *
                    </Label>
                    <Select>
                      <SelectTrigger className="mt-2">
                        <SelectValue placeholder="Seleccione un servicio" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="compraventa">
                          Compraventa de Inmuebles
                        </SelectItem>
                        <SelectItem value="hipoteca">
                          Hipotecas
                        </SelectItem>
                        <SelectItem value="certificacion">
                          Certificaciones
                        </SelectItem>
                        <SelectItem value="sucesorio">
                          Trámites Sucesorios
                        </SelectItem>
                        <SelectItem value="poderes">
                          Poderes
                        </SelectItem>
                        <SelectItem value="otro">
                          Otro
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <Label htmlFor="message">Mensaje *</Label>
                    <Textarea
                      id="message"
                      placeholder="Cuéntenos sobre su consulta..."
                      required
                      className="mt-2 min-h-32"
                    />
                  </div>

                  <div className="flex items-start gap-2">
                    <input
                      type="checkbox"
                      id="privacy"
                      required
                      className="mt-1"
                    />
                    <label
                      htmlFor="privacy"
                      className="text-sm text-gray-600"
                    >
                      Acepto las políticas de privacidad y el
                      tratamiento de mis datos personales
                    </label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-[#d4af37] hover:bg-[#b8941f] text-white py-6 text-lg h-auto"
                  >
                    <Send className="mr-2" size={20} />
                    Enviar Consulta
                  </Button>
                </form>
              </Card>
            </div>

            {/* Contact Info & Map */}
            <div className="space-y-6">
              {/* Contact Info Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="p-6">
                    <div className="w-12 h-12 bg-[#f5e6d3] rounded-lg flex items-center justify-center mb-4">
                      <info.icon
                        size={24}
                        className="text-[#1e3a5f]"
                      />
                    </div>
                    <h3 className="text-[#1e3a5f] mb-2">
                      {info.title}
                    </h3>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-600 hover:text-[#d4af37] transition-colors whitespace-pre-line"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <p className="text-gray-600 whitespace-pre-line">
                        {info.content}
                      </p>
                    )}
                  </Card>
                ))}
              </div>

              {/* Map */}
              <Card className="overflow-hidden h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3606.0782988847243!2d-57.5380626!3d-25.3101152!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x945daf22e6a9e88d%3A0xaa77874c97ee88d5!2sEstudio%20Robles%20Far%C3%ADas!5e0!3m2!1ses!2spy!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de la Escribanía"
                />
              </Card>

              {/* Additional Info */}
              {/*<Card className="p-6 bg-[#f5e6d3]">
                <h3 className="text-[#1e3a5f] mb-3">
                  ¿Cómo llegar?
                </h3>
                <ul className="space-y-2 text-gray-700 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] mt-1">
                      •
                    </span>
                    <span>
                      Subte: Líneas B, C y D (estación Diagonal
                      Norte)
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] mt-1">
                      •
                    </span>
                    <span>
                      Colectivos: 5, 6, 7, 23, 26, 50, 56, 91,
                      93, 102
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#d4af37] mt-1">
                      •
                    </span>
                    <span>
                      Estacionamiento: Disponible en edificio
                      (consultar tarifa)
                    </span>
                  </li>
                </ul>
              </Card>*/}
            </div>
          </div>
        </div>
      </section>

      {/* Online Appointment Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Card className="max-w-4xl mx-auto p-8 md:p-12 bg-gradient-to-br from-[#1e3a5f] to-[#2d5080] text-white">
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl">
                Sistema de Turnos Online
              </h2>
              <p className="text-xl text-white/90 max-w-2xl mx-auto">
                Reserve su turno de manera rápida y sencilla.
                Reciba confirmación automática y recordatorios
                por email y WhatsApp.
              </p>
              <div className="flex justify-center pt-4">
                <Button
                  className="bg-[#c9a961] hover:bg-[#b8941f] text-white px-8 py-6 text-lg h-auto"
                  onClick={() =>
                    window.open(
                      "https://wa.me/595991708283?text=Hola,%20quisiera%20reservar%20un%20turno%20online.",
                      "_blank",
                    )
                  }
                >
                  Reservar Turno Online
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </div>
  );
}