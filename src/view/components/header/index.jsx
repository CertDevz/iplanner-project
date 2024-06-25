import {
  Calendar,
  Captions,
  ChevronDown,
  FileBadge2,
  Files,
  ShieldCheck,
} from "lucide-react";
import { useState, useEffect } from "react";
import Button from "./components/button";
import { Link } from "react-router-dom";

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

  const redirectToExternalPage = (url) => {
    window.location.href = url;
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
          <Link to="/">
            <img src="/icon.svg" alt="logo" width={50} />
          </Link>

          <nav
            className={`lg:flex lg:items-center lg:w-auto ${
              isMenuOpen ? "block" : "hidden"
            }`}
          >
            <ul className="flex flex-col lg:flex-row lg:gap-3 justify-between text-white lg:cursor-pointer ">
              <Link to="/quem-somos">
                <span className="font-semibold cursor-pointer px-5 py-2 bg-[#db2777] rounded-sm">
                  Quem Somos
                </span>
              </Link>

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
                  <div className="absolute bg-white w-[500px] text-white p-2 shadow-lg z-50 rounded-sm">
                    <ul className="font-bold flex flex-col gap-2">
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                        <Captions color="black" size={15} />
                        Incrições
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                        <Calendar color="black" size={15} />
                        Programação
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                        <Files color="black" size={15} />
                        Submissões
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                        <FileBadge2 color="black" size={15} />
                        Credenciamento
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                        <ShieldCheck color="black" size={15} />
                        Certificados
                      </li>
                    </ul>
                  </div>
                )}
              </li>
              <li onClick={() => scrollToSection("events")}>
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
            <li onClick={() => redirectToExternalPage("/quem-somos")}>
              <span>Quem Somos</span>
            </li>
            <li onClick={() => scrollToSection("solutions")}>
              <span>Para quem</span>
            </li>
            <li onClick={() => scrollToSection("events")}>
              <span>Eventos</span>
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
                <div className="bg-white  p-2 shadow-lg mt-2 rounded-sm">
                  <ul className="font-bold flex flex-col gap-2">
                    <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                      <Captions color="black" size={15} />
                      Incrições
                    </li>
                    <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                      <Calendar color="black" size={15} />
                      Programação
                    </li>
                    <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                      <Files color="black" size={15} />
                      Submissões
                    </li>
                    <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                      <FileBadge2 color="black" size={15} />
                      Credenciamento
                    </li>
                    <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text">
                      <ShieldCheck color="black" size={15} />
                      Certificados
                    </li>
                  </ul>
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
