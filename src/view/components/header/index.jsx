import { ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./components/button";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false);

  const toggleMenuMobile = () => {
    setIsMenuOpenMobile(!isMenuOpenMobile);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
    setIsServicesDropdownOpen(false);
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
        className={`flex items-center gap-40 justify-between p-2 ${
          isScrolled ? "fixed-header" : ""
        } bg-gradient-to-br from-purple-800 to-indigo-500`}
      >
        <div className="flex items-center gap-10">
          <img src="/icon.svg" alt="logo" width={50} />

          <nav
            className={`lg:flex lg:items-center lg:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:gap-3 justify-between text-white lg:cursor-pointer ">
              <li onClick={() => scrollToSection("home")}>
                <span className=" font-semibold cursor-pointer px-5 py-2 bg-[#db2777] rounded-sm">
                  Quem Somos
                </span>
              </li>

              <li onClick={() => scrollToSection("solutions")}>
                <span className="font-semibold cursor-pointer px-5 py-2 bg-[#db2777] rounded-sm">
                  Para quem
                </span>
              </li>
              <li
                onMouseEnter={toggleServicesDropdown}
                onMouseLeave={toggleServicesDropdown}
                className="relative"
              >
                <span className="font-semibold cursor-pointer px-5 py-2 bg-[#db2777] rounded-sm">
                  Soluções
                  <ChevronDown
                    className={`ml-1 inline-block w-4 h-4 transform ${
                      isServicesDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                </span>

                {isServicesDropdownOpen && (
                  <div className="absolute bg-gradient-to-br rounded-sm from-purple-800 to-indigo-500 w-[500px] text-white p-2 shadow-lg z-50">
                    <span>Gestão de Eventos</span>
                  </div>
                )}
              </li>
              <li onClick={() => scrollToSection("contact")}>
                <span className="font-semibold cursor-pointer px-5 py-2 bg-[#db2777] rounded-sm">
                  Eventos
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <div className=" hidden lg:block">
          <Button
            text="Criar seu evento"
            onClick={() => scrollToSection("create-event")}
          />
          <Button text="Login" className="ml-5" />
        </div>

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

            <li onClick={toggleServices} className="relative cursor-pointer">
              <span className="hover:font-bold lg:hover:font-normal">
                Serviços
                <ChevronDown
                  className={`ml-1 inline-block w-4 h-4 transform ${
                    isServicesOpen ? "rotate-180" : ""
                  }`}
                />
              </span>

              {isServicesOpen && (
                <div className="bg-gradient-to-br from-purple-800 rounded-md to-indigo-500 text-gray-800 p-2 shadow-lg mt-2">
                  <span>Gestão de Eventos</span>
                </div>
              )}
            </li>

            <li>
              <Button
                text="Criar seu evento"
                onClick={() => scrollToSection("create-event")}
              />
            </li>
            <li>
              <Button text="Login" />
            </li>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
