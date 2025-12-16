import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function Header({
  currentPage,
  onNavigate,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] =
    useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Inicio", path: "home" },
    { name: "Servicios", path: "services" },
    { name: "Nosotros", path: "about" },
    { name: "Contacto", path: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#1a2332] shadow-lg"
          : "bg-[#1a2332]/95"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Brand Name */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center group"
          >
            <div>
              <div className="text-white text-xl">
                Estudio Robles.Farías
              </div>
              <div className="text-[#c9a961] text-xs">
                Servicios Notariales
              </div>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.path}
                onClick={() => onNavigate(item.path)}
                className={`text-white hover:text-[#c9a961] transition-colors duration-200 relative ${
                  currentPage === item.path
                    ? "text-[#c9a961]"
                    : ""
                }`}
              >
                {item.name}
                {currentPage === item.path && (
                  <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#c9a961]" />
                )}
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              onClick={() => onNavigate("contact")}
              className="bg-[#c9a961] hover:bg-[#b8941f] text-white px-6"
            >
              Solicitar Turno
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
            className="lg:hidden text-white p-2"
          >
            {isMobileMenuOpen ? (
              <X size={24} />
            ) : (
              <Menu size={24} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-white/10">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <button
                  key={item.path}
                  onClick={() => {
                    onNavigate(item.path);
                    setIsMobileMenuOpen(false);
                  }}
                  className={`text-white hover:text-[#c9a961] transition-colors duration-200 text-left py-2 ${
                    currentPage === item.path
                      ? "text-[#c9a961]"
                      : ""
                  }`}
                >
                  {item.name}
                </button>
              ))}
              <Button
                onClick={() => {
                  onNavigate("contact");
                  setIsMobileMenuOpen(false);
                }}
                className="bg-[#c9a961] hover:bg-[#b8941f] text-white w-full"
              >
                Solicitar Turno
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}