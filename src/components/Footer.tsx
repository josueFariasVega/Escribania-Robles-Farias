import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Facebook,
  Instagram,
  Linkedin,
} from "lucide-react";

interface FooterProps {
  onNavigate: (page: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a2332] text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo y Descripción */}
          <div>
            <div className="mb-4">
              <div className="text-white text-xl">
                Studio Robles.Farías
              </div>
              <div className="text-[#c9a961] text-sm">
                Servicios Notariales
              </div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Más de 8 años brindando seguridad jurídica a
              familias y empresas con profesionalismo y
              confianza.
            </p>
          </div>

          {/* Enlaces Rápidos */}
          <div>
            <h3 className="text-[#c9a961] mb-4">
              Enlaces Rápidos
            </h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => onNavigate("home")}
                  className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                >
                  Inicio
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("services")}
                  className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                >
                  Servicios
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("about")}
                  className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                >
                  Nosotros
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate("contact")}
                  className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                >
                  Contacto
                </button>
              </li>
            </ul>
          </div>

          {/* Horarios y Contacto */}
          <div>
            <h3 className="text-[#c9a961] mb-4">
              Horarios de Atención
            </h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <Clock
                  size={18}
                  className="text-[#c9a961] mt-1 flex-shrink-0"
                />
                <div className="text-sm">
                  <p className="text-white/70">
                    Lunes a Viernes
                  </p>
                  <p className="text-white">9:00 - 18:00 hs</p>
                  <p className="text-white/70">Sábado</p>
                  <p className="text-white">9:00 - 13:00 hs</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone
                  size={18}
                  className="text-[#c9a961] mt-1 flex-shrink-0"
                />
                <a
                  href="tel:+595991708283"
                  className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                >
                  +595 991 708283
                </a>
              </div>
              <div className="flex items-start gap-2">
                <Mail
                  size={18}
                  className="text-[#c9a961] mt-1 flex-shrink-0"
                />
                <a
                  href="mailto:estudioroblesfarias@gmail.com"
                  className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
                >
                  estudioroblesfarias@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Dirección y Redes */}
          <div>
            <h3 className="text-[#c9a961] mb-4">Ubicación</h3>
            <div className="flex items-start gap-2 mb-6">
              <MapPin
                size={18}
                className="text-[#c9a961] mt-1 flex-shrink-0"
              />
              <a
                href="https://www.google.com/maps/place/Estudio+Robles+Far%C3%ADas/@-25.310085,-57.5354541,17.57z/data=!4m6!3m5!1s0x945daf22e6a9e88d:0xaa77874c97ee88d5!8m2!3d-25.3101152!4d-57.5355757!16s%2Fg%2F11hc_84x33?entry=ttu&g_ep=EgoyMDI1MTAwMS4wIKXMDSoASAFQAw%3D%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/70 hover:text-[#c9a961] transition-colors text-sm"
              >
                Tte Cnel. Irala Camperchioli casi,
                <br />
                Fernando de la Mora 110303
              </a>
            </div>
            <h4 className="text-[#c9a961] text-sm mb-3">
              Síguenos
            </h4>
            <div className="flex gap-3">
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#c9a961] rounded-lg flex items-center justify-center transition-colors"
              >
                <Facebook size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#c9a961] rounded-lg flex items-center justify-center transition-colors"
              >
                <Instagram size={18} />
              </a>
              {/*<a
                href="#"
                className="w-10 h-10 bg-white/10 hover:bg-[#c9a961] rounded-lg flex items-center justify-center transition-colors"
              >
                <Linkedin size={18} />
              </a>*/}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/60 text-sm">
            © {currentYear} Studio Robles.Farías. Todos los
            derechos reservados.
          </p>
          <div className="flex gap-6">
            <button className="text-white/60 hover:text-[#c9a961] transition-colors text-sm">
              Políticas de Privacidad
            </button>
            <button className="text-white/60 hover:text-[#c9a961] transition-colors text-sm">
              Términos y Condiciones
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}