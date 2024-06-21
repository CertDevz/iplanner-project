import React, { useState, useEffect } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuOpenMobile, setIsMenuOpenMobile] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleMenuMobile = () => {
    setIsMenuOpenMobile(!isMenuOpenMobile);
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
        </ul>
      </div>
    </header>
  );
}

export default Header;
