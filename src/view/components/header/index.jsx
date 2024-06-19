import React, { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      closeMenu();
    }
  };

  return (
    <header className="flex items-center justify-between p-5">
      <img src="/src/view/assets/icon.svg" alt="logo" width={60} />

      <div className="block lg:hidden">
        <button onClick={toggleMenu} className="text-white focus:outline-none">
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              ""
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
        <ul className="flex flex-col lg:flex-row lg:gap-3 text-white lg:cursor-pointer">
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
  );
}

export default Header;
