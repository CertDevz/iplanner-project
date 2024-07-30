import { useEffect, useState } from 'react';
import '../../../index.css';

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
      element.scrollIntoView({ behavior: 'smooth' });
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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpenMobile) {
      document.body.classList.add('no-scroll');
    } else {
      document.body.classList.remove('no-scroll');
    }
  }, [isMenuOpenMobile]);

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash) {
        const id = window.location.hash.substring(1);
        scrollToSection(id);
      }
    };

    window.addEventListener('load', handleHashChange);
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('load', handleHashChange);
      window.removeEventListener('hashchange', handleHashChange);
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
