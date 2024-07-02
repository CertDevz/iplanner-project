import {
  Award,
  Calendar,
  Captions,
  ChevronDown,
  FileBadge2,
  Files,
  GraduationCap,
  Landmark,
  Menu,
  MessagesSquare,
  Route,
  ShieldCheck,
  User,
  Wrench,
  X,
} from "lucide-react";
import Button from "./components/button";
import { Link, useNavigate } from "react-router-dom";
import { useHeader } from "../hooks/useHeader";

function Header() {
  const {
    isMenuOpen,
    redirectToExternalPage,
    scrollToSection,
    toggleMenuMobile,
    toggleServices,
    toggleServicesDropdown,
    isServicesOpen,
    isServicesDropdownOpen,
    isMenuOpenMobile,
  } = useHeader();

  const navigate = useNavigate();

  const handleSectionClick = (sectionId) => {
    if (window.location.pathname === "/") {
      scrollToSection(sectionId);
    } else {
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <>
      <header
        className={`flex items-center gap-40 justify-between px-4 p-1 fixed-header`}
        style={{
          background:
            "linear-gradient(to bottom right, #7c3aed 20%, #3d44c7 100%)",
        }}
      >
        <div className="flex items-center gap-10">
          <Link to="/">
            <img src="/icon.svg" alt="logo" width={45} />
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

              <li onClick={() => handleSectionClick("para-quem")}>
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
                  <div className="absolute flex items-center gap-5 bg-white w-[500px] text-white p-2 shadow-lg z-50 rounded-sm">
                    <div>
                      <ul className="font-bold flex flex-col gap-2">
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <Captions color="black" size={15} />
                          Incrições
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <Calendar color="black" size={15} />
                          Programação
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <Files color="black" size={15} />
                          Submissões
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <FileBadge2 color="black" size={15} />
                          Credenciamento
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <ShieldCheck color="black" size={15} />
                          Certificados
                        </li>
                      </ul>
                    </div>
                    <div>
                      <h3 className="tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold border-b">
                        Tipos de eventos
                      </h3>
                      <ul className="font-bold flex flex-col gap-2 mt-2">
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <User color="black" size={15} />
                          Seminário
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <Route color="black" size={15} />
                          Jornada
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <Landmark color="black" size={15} />
                          Congresso
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <MessagesSquare color="black" size={15} />
                          Simpósio
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <Wrench color="black" size={15} />
                          Workshop
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <GraduationCap color="black" size={15} />
                          Curso
                        </li>
                        <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                          <Award ldCheck color="black" size={15} />
                          Feira
                        </li>
                      </ul>
                    </div>
                  </div>
                )}
              </li>
              <li onClick={() => handleSectionClick("events")}>
                <span className="font-semibold cursor-pointer px-5 py-2 bg-[#db2777] rounded-sm">
                  Eventos
                </span>
              </li>
            </ul>
          </nav>
        </div>

        <div className="hidden lg:block">
          <Link to="https://painel.iplanner.net.br/event">
            <Button
              text="Criar seu evento"
              onClick={() => scrollToSection("/constructor")}
            />
          </Link>
          <Link to="https://painel.iplanner.net.br">
            <Button text="Login" className="ml-5" />
          </Link>
        </div>

        <div className="block lg:hidden">
          <button
            onClick={toggleMenuMobile}
            className="text-white focus:outline-none"
          >
            <Menu />
            {isMenuOpenMobile ? (
              ""
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </button>
        </div>

        <div className={`mobile-menu ${isMenuOpenMobile ? "open" : ""}`}>
          <button
            onClick={toggleMenuMobile}
            className="text-white focus:outline-none mb-10"
          >
            <X />
          </button>

          <ul>
            <li onClick={() => redirectToExternalPage("/quem-somos")}>
              <span>Quem Somos</span>
            </li>
            <li onClick={() => handleSectionClick("para-quem")}>
              <span>Para quem</span>
            </li>
            <li onClick={() => handleSectionClick("events")}>
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
                <div className="bg-white p-2 shadow-lg mt-2 rounded-sm">
                  <div>
                    <ul className="font-bold flex flex-col gap-2">
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <Captions color="black" size={15} />
                        Incrições
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <Calendar color="black" size={15} />
                        Programação
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <Files color="black" size={15} />
                        Submissões
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <FileBadge2 color="black" size={15} />
                        Credenciamento
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <ShieldCheck color="black" size={15} />
                        Certificados
                      </li>
                    </ul>
                  </div>
                  <div className="mt-2">
                    <h3 className="tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-bold border-b mb-2">
                      Tipos de eventos
                    </h3>
                    <ul className="font-bold flex flex-col gap-2 mt-2">
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <User color="black" size={15} />
                        Seminário
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <Route color="black" size={15} />
                        Jornada
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <Landmark color="black" size={15} />
                        Congresso
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <MessagesSquare color="black" size={15} />
                        Simpósio
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <Wrench color="black" size={15} />
                        Workshop
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <GraduationCap color="black" size={15} />
                        Curso
                      </li>
                      <li className="flex items-center gap-2 tracking-wide bg-gradient-to-br from-purple-800 to-indigo-500 text-transparent bg-clip-text font-light">
                        <Award ldCheck color="black" size={15} />
                        Feira
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </li>

            <Link to="https://painel.iplanner.net.br/event">
              <Button
                text="Criar seu evento"
                onClick={() => scrollToSection("create-event")}
              />
            </Link>
            <Link to="https://painel.iplanner.net.br/">
              <Button text="Login" />
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
}

export default Header;
