import { ChevronDown } from "lucide-react";
import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false); // Estado para o menu mobile
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false); // Estado para a div de serviços no desktop

  const toggleMenuMobile = () => {
    setIsMenuOpenMobile(!isMenuOpenMobile);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsServicesDropdownOpen(false); // Garante que o dropdown esteja fechado quando clicar para abrir/fechar o menu mobile
  };

  const toggleServicesDropdown = () => {
    setIsServicesDropdownOpen(!isServicesDropdownOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsMenuOpenMobile(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`flex items-center gap-40 md:justify-center justify-between p-2 ${
          isScrolled ? "fixed-header" : ""
        }`}
      >
        <img src="/icon.svg" alt="logo" width={50} />

        <div className="block lg:hidden">
          <button
            onClick={toggleMenuMobile}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpenMobile ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>

        <nav
          className={`lg:flex lg:items-center lg:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
        >
          <ul className="flex flex-col lg:flex-row lg:gap-3 justify-between text-white lg:cursor-pointer w-[500px]">
            <li
              onMouseEnter={toggleServicesDropdown}
              onMouseLeave={toggleServicesDropdown}
              className="relative"
            >
              <span className="hover:font-bold lg:hover:font-normal cursor-pointer">
                Serviços
                <ChevronDown
                  className={`ml-1 inline-block w-4 h-4 transform ${
                    isServicesDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              </span>

              {isServicesDropdownOpen && (
                <div className="absolute bg-gradient-to-br rounded-md from-purple-800 to-indigo-500 w-[500px] text-white p-2 shadow-lg z-50">
                  <span>Gestão de Eventos</span>
                </div>
              )}
            </li>
            <li onClick={() => scrollToSection("home")}>
              <span className="hover:font-bold lg:hover:font-normal cursor-pointer">
                Início
              </span>
            </li>

            <li onClick={() => scrollToSection("solutions")}>
              <span className="hover:font-bold lg:hover:font-normal cursor-pointer">
                Soluções
              </span>
            </li>
            <li onClick={() => scrollToSection("contact")}>
              <span className="hover:font-bold lg:hover:font-normal cursor-pointer">
                Contato
              </span>
            </li>
          </ul>
        </nav>
      </header>

      {/* Div do menu mobile */}
      <div className={`mobile-menu ${isMenuOpenMobile ? "open" : ""}`}>
        <ul>
          <li onClick={() => scrollToSection("home")}>
            <span>Início</span>
          </li>
          <li onClick={() => scrollToSection("solutions")}>
            <span>Soluções</span>
          </li>
          <li onClick={() => scrollToSection("contact")}>
            <span>Contato</span>
          </li>
          {/* Botão de Serviços para abrir a lista de serviços */}
          <li onClick={toggleServices} className="relative cursor-pointer">
            <span className="hover:font-bold lg:hover:font-normal">
              Serviços
              <ChevronDown
                className={`ml-1 inline-block w-4 h-4 transform ${
                  isServicesOpen ? "rotate-180" : ""
                }`}
              />
            </span>

            {/* Lista de serviços */}
            {isServicesOpen && (
              <div className="bg-gradient-to-br from-purple-800 rounded-md to-indigo-500 text-gray-800 p-2 shadow-lg mt-2">
                <span>Gestão de Eventos</span>
                {/* Adicione mais serviços aqui conforme necessário */}
              </div>
            )}
          </li>
        </ul>
      </div>
    </>
  );
}

export default Header;
