import { useEffect, useState } from "react";

export function useHeader() {
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

  return {
    redirectToExternalPage,
    scrollToSection,
    toggleServicesDropdown,
    toggleServices,
    toggleMenuMobile,
    isMenuOpen,
    isScrolled,
    isServicesOpen,
    isServicesDropdownOpen,
    isMenuOpenMobile,
    closeMenu,
    setIsMenuOpen,
    setIsMenuOpenMobile,
  };
}
