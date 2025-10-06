'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'framer-motion';
import { usePathname } from 'next/navigation';
import IntroOverlay from './IntroOverlay';
import { useAnimation } from '@/context/AnimationContext';

const links = [
  { href: '/#about', label: 'O nama' },
  { 
    href: '/#services', 
    label: 'Usluge',
    hasSubmenu: true,
    submenu: [
      { id: "001", title: "BRANDING", link: "/branding" },
      { id: "002", title: "GRAFIČKI DIZAJN", link: "/graficki-dizajn" },
      { id: "003", title: "WEB DIZAJN", link: "/web-dizajn" },
      { id: "004", title: "WEB DEVELOPMENT", link: "/development" },
    ] 
  },
  { href: '/#portfolio', label: 'Portfolio' },
  { href: '/#contact', label: 'Kontakt' },
];

const Navbar: React.FC = () => {
  const [showIntro, setShowIntro] = useState(true);
  const { setIntroComplete } = useAnimation();
  const [isYellowSection, setIsYellowSection] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const pathname = usePathname();
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const submenuTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    setOpenSubmenu(null); // Close any open submenu when toggling main menu
  };

  const toggleMobileSubmenu = (href: string) => {
    if (openSubmenu === href) {
      setOpenSubmenu(null);
    } else {
      setOpenSubmenu(href);
    }
  };

  const handleMouseEnter = (href: string) => {
    // Clear any pending timeout
    if (submenuTimeoutRef.current) {
      clearTimeout(submenuTimeoutRef.current);
      submenuTimeoutRef.current = null;
    }
    setOpenSubmenu(href);
  };

  const handleMouseLeave = () => {
    // Set a timeout to close submenu after a small delay
    submenuTimeoutRef.current = setTimeout(() => {
      setOpenSubmenu(null);
    }, 300);
  };

  // Handle intro completion
  const handleIntroFinish = () => {
    setShowIntro(false);
    // Force a small timeout to ensure state updates properly
    setTimeout(() => {
      setIntroComplete(true); // Signal that intro is complete
    }, 50);
  };

  // Clean up timeout on unmount
  useEffect(() => {
    return () => {
      if (submenuTimeoutRef.current) {
        clearTimeout(submenuTimeoutRef.current);
      }
    };
  }, []);

  // Detect active section based on scroll
  useEffect(() => {
    if (pathname !== '/') return;

    const sections = [
      { id: 'about', element: document.querySelector('#about') },
      { id: 'services', element: document.querySelector('#services') },
      { id: 'portfolio', element: document.querySelector('#portfolio') },
      { id: 'contact', element: document.querySelector('#contact') },
    ];
    
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const viewportHeight = window.innerHeight;
      const offset = viewportHeight * 0.3; // 30% of viewport height
      
      // Find the current section
      for (const section of sections) {
        if (!section.element) continue;
        
        const rect = section.element.getBoundingClientRect();
        const sectionTop = rect.top + window.scrollY;
        const sectionBottom = sectionTop + rect.height;
        
        if (scrollY >= sectionTop - offset && scrollY < sectionBottom - offset) {
          setActiveSection(section.id);
          return;
        }
      }
      
      // If no section is active, we're likely at the top (hero section)
      if (scrollY < viewportHeight * 0.5) {
        setActiveSection('');
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Handle navbar visibility based on scroll direction
  useEffect(() => {
    let ticking = false;
    
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          // Ako je mobile menu otvoren, uvijek prikaži navbar i ne nastavi s logikom
          if (mobileMenuOpen || openSubmenu) {
            setIsVisible(true);
            setLastScrollY(currentScrollY);
            ticking = false;
            return;
          }
          
          // Only proceed if scroll difference is significant (avoids tiny movements)
          if (scrollDifference < 5) {
            ticking = false;
            return;
          }
          
          if (currentScrollY < 10) {
            // Always show at top
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100 && !isHovered) {
            // Scrolling down - hide navbar (only after scrolling past 100px)
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up - show navbar
            setIsVisible(true);
          }
          
          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY, isHovered, mobileMenuOpen, openSubmenu]);

  // Provjeri treba li sakriti navbar nakon zatvaranja mobile menua
  useEffect(() => {
    if (!mobileMenuOpen) {
      // Kratka pauza pa provjeri scroll poziciju
      const timer = setTimeout(() => {
        const currentScrollY = window.scrollY;
        if (currentScrollY > 100 && !isHovered) {
          setIsVisible(false);
        }
      }, 100);
      
      return () => clearTimeout(timer);
    }
  }, [mobileMenuOpen, isHovered]);

  useEffect(() => {
    // Ako smo na contact stranici, ne pratimo žute sekcije
    if (pathname === '/contact') return;

    const yellowSections = [
      document.querySelector('#scrollcards'),
      document.querySelector('#contact'),
    ].filter(Boolean) as HTMLElement[];

    if (!yellowSections.length) return;

    const handleScroll = () => {
      const scrollY = window.scrollY + window.innerHeight / 2;
      let inYellow = false;

      for (const section of yellowSections) {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;
        if (scrollY >= top && scrollY <= bottom) {
          inYellow = true;
          break;
        }
      }

      setIsYellowSection(inYellow);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  // Determine if we're on a service page
  const isServicePage = ['/branding', '/graficki-dizajn', '/web-dizajn', '/development'].includes(pathname);

  // Odredi logo i boju teksta
  let logoSrc = '/logo/kavo-logo.png';
  let textColor: 'white' | 'black' = 'white';
  let navbarBg = 'transparent';
  let accentColor = '#FFBD00';

  if (pathname === '/contact' || pathname === '/privacy-policy') {
    // Contact stranica je tamna - koristimo bijeli logo i bijeli tekst
    logoSrc = '/logo/kavo-logo.png';
    textColor = 'white';
    navbarBg = 'rgba(8, 13, 16, 0.95)';
    accentColor = '#FFBD00';
  } else if (isYellowSection || isServicePage) {
    logoSrc = '/logo/logo-crni.png';
    textColor = 'black';
    navbarBg = 'rgba(255, 189, 0, 0.95)';
    accentColor = '#080D10';
  } else if (pathname !== '/') {
    logoSrc = '/logo/logo-crni.png';
    textColor = 'black';
  
    navbarBg = 'rgba(235, 236, 231, 0.95)';
    accentColor = '#FFBD00';
  }

  // Mobile menu pozadina - prilagodi ovisno o stranici
  const mobileMenuBg = pathname === '/contact' 
    ? 'rgba(8, 13, 16, 0.98)' 
    : 'rgba(255, 255, 255, 0.97)';
  
  const mobileTextColor = pathname === '/contact' 
    ? '#FFBD00'  // Žuta boja za tamnu pozadinu
    : '#080D10';

  // Submenu background based on the navbar color
  const submenuBg = pathname === '/contact' || pathname === '/privacy-policy'
    ? 'rgba(8, 13, 16, 0.97)'
    : isYellowSection || isServicePage
      ? 'rgba(255, 189, 0, 0.97)'
      : 'rgba(235, 236, 231, 0.97)';

  return (
    <LayoutGroup>
      {showIntro && <IntroOverlay onFinish={handleIntroFinish} />}
      
      <nav 
        className="fixed top-0 left-0 right-0 z-50 w-full transition-all duration-500 ease-in-out"
        style={{
          transform: isVisible ? 'translateY(0)' : 'translateY(-100%)',
          backgroundColor: mobileMenuOpen ? mobileMenuBg : navbarBg,
          backdropFilter: 'blur(10px)',
        }}
        onMouseEnter={() => {
          setIsHovered(true);
          setIsVisible(true);
        }}
        onMouseLeave={() => {
          setIsHovered(false);
        }}
      >
        <div className="container mx-auto px-6 md:px-8 lg:px-12">
          <div className="flex justify-between items-center h-20 md:h-24 w-full max-w-full">
            {/* Logo */}
            <motion.div
              layoutId="logo"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <Link href="/">
                <motion.div
                  key={logoSrc}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <Image 
                    src={mobileMenuOpen ? (pathname === '/contact' ? '/logo/kavo-logo.png' : '/logo/logo-crni.png') : logoSrc} 
                    alt="Logo" 
                    width={60} 
                    height={60} 
                  />
                </motion.div>
              </Link>
            </motion.div>

            {/* Desktop menu with enhanced animations */}
            <div className="hidden md:flex items-center space-x-8 xl:space-x-12 text-lg xl:text-xl uppercase tracking-wide font-bold">
              {links.map((link) => {
                const isActive = activeSection === link.href.replace('/#', '');
                const isServiceActive = isServicePage && link.href === '/#services';
                
                return (
                  <div 
                    key={link.href} 
                    className="relative"
                    onMouseEnter={() => link.hasSubmenu && handleMouseEnter(link.href)}
                    onMouseLeave={link.hasSubmenu ? handleMouseLeave : undefined}
                  >
                    <Link
                      href={link.href}
                      className="py-2 px-1 block transition-colors duration-300 relative"
                      style={{ color: textColor }}
                    >
                      <motion.span
                        initial={false}
                        animate={{ color: (isActive || isServiceActive) ? accentColor : textColor }}
                        whileHover={{ color: accentColor }}
                        transition={{ duration: 0.2 }}
                        className="flex items-center"
                      >
                        {link.label}
                        
                        {/* Dropdown indicator for submenu */}
                        {link.hasSubmenu && (
                          <motion.span 
                            className="ml-1"
                            animate={{ 
                              rotate: openSubmenu === link.href ? 180 : 0,
                              color: openSubmenu === link.href ? accentColor : 'inherit'
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <svg 
                              xmlns="http://www.w3.org/2000/svg" 
                              width="10" 
                              height="6" 
                              viewBox="0 0 10 6" 
                              fill="none" 
                              stroke="currentColor" 
                              strokeWidth="2"
                              strokeLinecap="round" 
                              strokeLinejoin="round"
                            >
                              <polyline points="1 1 5 5 9 1"></polyline>
                            </svg>
                          </motion.span>
                        )}
                        
                        {/* Animated underline */}
                        <motion.span
                          className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full block"
                          initial={{ scaleX: 0, originX: 0 }}
                          animate={{ 
                            scaleX: (isActive || isServiceActive) ? 1 : 0,
                            backgroundColor: accentColor
                          }}
                          whileHover={{ 
                            scaleX: 1,
                            backgroundColor: accentColor
                          }}
                          transition={{ 
                            duration: 0.3, 
                            ease: "easeInOut"
                          }}
                        />
                      </motion.span>
                    </Link>

                    {/* Submenu dropdown for desktop */}
                    {link.hasSubmenu && link.submenu && (
                      <AnimatePresence>
                        {openSubmenu === link.href && (
                          <motion.div
                            initial={{ opacity: 0, y: 10, height: 0 }}
                            animate={{ opacity: 1, y: 0, height: 'auto' }}
                            exit={{ opacity: 0, y: 10, height: 0 }}
                            transition={{ duration: 0.3 }}
                            className="absolute left-0 mt-1 py-2 w-64 rounded-md shadow-lg z-50"
                            style={{ 
                              backgroundColor: submenuBg,
                              backdropFilter: 'blur(10px)'
                            }}
                            onMouseEnter={() => {
                              if (submenuTimeoutRef.current) {
                                clearTimeout(submenuTimeoutRef.current);
                                submenuTimeoutRef.current = null;
                              }
                            }}
                            onMouseLeave={handleMouseLeave}
                          >
                            <div className="py-1">
                              {link.submenu.map((subItem) => {
                                const isSubActive = pathname === subItem.link;
                                
                                return (
                                  <Link
                                    key={subItem.id}
                                    href={subItem.link}
                                    className="block px-4 py-3 text-sm hover:bg-opacity-10 transition-all duration-200 relative"
                                    style={{ 
                                      color: isSubActive ? accentColor : (pathname === '/contact' ? '#ffffff' : '#080D10'), // Hard-coded colors for better visibility
                                      backgroundColor: isSubActive 
                                        ? (pathname === '/contact' ? 'rgba(255,189,0,0.1)' : 'rgba(8,13,16,0.1)')
                                        : 'transparent',
                                      fontWeight: isSubActive ? '700' : '600' // Increased from 500 to 600 for better visibility
                                    }}
                                    onClick={() => setOpenSubmenu(null)}
                                  >
                                    <motion.div
                                      whileHover={{ x: 5 }}
                                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                                    >
                                      <span className="text-xs opacity-80 mr-2">{subItem.id}</span> {/* Increased opacity from 70 to 80 */}
                                      {subItem.title}
                                    </motion.div>
                                  </Link>
                                );
                              })}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Mobile hamburger */}
            <div className="md:hidden flex items-center">
              <motion.button
                onClick={toggleMobileMenu}
                className="focus:outline-none p-3 rounded-md transition-all duration-300 relative"
                aria-label="Toggle menu"
                whileTap={{ scale: 0.95 }}
                animate={{ 
                  backgroundColor: mobileMenuOpen 
                    ? (pathname === '/contact' ? 'rgba(255, 189, 0, 0.1)' : 'rgba(8, 13, 16, 0.1)') 
                    : 'transparent' 
                }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                  <motion.span
                    className="w-5 h-0.5 rounded-full block absolute"
                    style={{ backgroundColor: mobileMenuOpen ? mobileTextColor : textColor }}
                    animate={{
                      rotate: mobileMenuOpen ? 45 : 0,
                      y: mobileMenuOpen ? 0 : -6,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="w-5 h-0.5 rounded-full block absolute"
                    style={{ backgroundColor: mobileMenuOpen ? mobileTextColor : textColor }}
                    animate={{
                      opacity: mobileMenuOpen ? 0 : 1,
                      scaleX: mobileMenuOpen ? 0 : 1,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                  <motion.span
                    className="w-5 h-0.5 rounded-full block absolute"
                    style={{ backgroundColor: mobileMenuOpen ? mobileTextColor : textColor }}
                    animate={{
                      rotate: mobileMenuOpen ? -45 : 0,
                      y: mobileMenuOpen ? 0 : 6,
                    }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  />
                </div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Enhanced mobile menu with animations */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="md:hidden overflow-hidden w-full shadow-2xl"
              style={{ 
                backgroundColor: mobileMenuBg,
                backdropFilter: 'blur(20px)',
                borderTop: pathname === '/contact' 
                  ? '1px solid rgba(255, 189, 0, 0.2)' 
                  : '1px solid rgba(128, 128, 128, 0.2)'
              }}
            >
              <div className="flex flex-col w-full px-6 py-8 space-y-1 uppercase tracking-wide font-bold">
                {links.map((link, index) => {
                  const isActive = activeSection === link.href.replace('/#', '');
                  const isServiceActive = isServicePage && link.href === '/#services';
                  const hasSubmenu = link.hasSubmenu && link.submenu;
                  const isSubmenuOpen = openSubmenu === link.href;
                  
                  return (
                    <motion.div
                      key={link.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ 
                        delay: index * 0.1, 
                        duration: 0.3,
                        ease: "easeOut"
                      }}
                      className="relative"
                    >
                      <motion.div 
                        className="absolute left-0 top-0 bottom-0 w-1 rounded-full"
                        initial={{ scaleY: 0 }}
                        animate={{ 
                          scaleY: (isActive || isServiceActive || isSubmenuOpen) ? 1 : 0,
                          backgroundColor: mobileTextColor
                        }}
                        style={{ 
                          originY: 0,
                          backgroundColor: (isActive || isServiceActive || isSubmenuOpen) ? accentColor : 'transparent'
                        }}
                      />
                      
                      <div
                        className="flex justify-between items-center w-full transition-all duration-300 text-xl rounded-xl"
                        style={{ 
                          color: (isActive || isServiceActive || isSubmenuOpen) ? accentColor : mobileTextColor,
                          borderBottom: pathname === '/contact' 
                            ? '1px solid rgba(255, 189, 0, 0.1)' 
                            : '1px solid rgba(128, 128, 128, 0.1)',
                          backgroundColor: (isActive || isServiceActive || isSubmenuOpen)
                            ? (pathname === '/contact' ? 'rgba(255, 189, 0, 0.05)' : 'rgba(8, 13, 16, 0.05)')
                            : 'transparent'
                        }}
                      >
                        <Link
                          href={hasSubmenu ? '#' : link.href}
                          className="py-4 px-6 block flex-grow"
                          onClick={(e) => {
                            if (hasSubmenu) {
                              e.preventDefault();
                              toggleMobileSubmenu(link.href);
                            } else {
                              setMobileMenuOpen(false);
                            }
                          }}
                        >
                          <motion.span
                            whileHover={{ scale: 1.05, x: 5 }}
                            whileTap={{ scale: 0.95 }}
                            transition={{ type: "spring", stiffness: 400, damping: 17 }}
                            className="block"
                          >
                            {link.label}
                          </motion.span>
                        </Link>
                        
                        {/* Dropdown arrow for submenu */}
                        {hasSubmenu && (
                          <button
                            onClick={() => toggleMobileSubmenu(link.href)}
                            className="pr-6 py-4"
                            aria-label="Toggle submenu"
                          >
                            <motion.span
                              animate={{ rotate: isSubmenuOpen ? 180 : 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="14" 
                                height="8" 
                                viewBox="0 0 14 8" 
                                fill="none"
                                stroke="currentColor" 
                                strokeWidth="2"
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                              >
                                <polyline points="1 1 7 7 13 1"></polyline>
                              </svg>
                            </motion.span>
                          </button>
                        )}
                      </div>
                      
                      {/* Mobile submenu */}
                      {hasSubmenu && (
                        <AnimatePresence>
                          {isSubmenuOpen && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: 'auto' }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="pl-6 overflow-hidden"
                            >
                              {link.submenu.map((subItem) => {
                                const isSubActive = pathname === subItem.link;
                                
                                return (
                                  <motion.div
                                    key={subItem.id}
                                    initial={{ opacity: 0, x: -10 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ duration: 0.2 }}
                                    className="border-l border-opacity-20"
                                    style={{ 
                                      borderColor: pathname === '/contact' ? 'rgba(255, 189, 0, 0.2)' : 'rgba(128, 128, 128, 0.2)'
                                    }}
                                  >
                                    <Link
                                      href={subItem.link}
                                      className="block py-3 px-6 text-base transition-all duration-300"
                                      style={{ 
                                        color: isSubActive ? accentColor : mobileTextColor,
                                        opacity: isSubActive ? 1 : 0.9,
                                        backgroundColor: isSubActive 
                                          ? (pathname === '/contact' ? 'rgba(255, 189, 0, 0.05)' : 'rgba(8, 13, 16, 0.05)')
                                          : 'transparent'
                                      }}
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      <motion.span
                                        whileHover={{ x: 5 }}
                                        whileTap={{ scale: 0.95 }}
                                        transition={{ duration: 0.2 }}
                                        className="flex items-center"
                                      >
                                        <span className="text-xs opacity-80 mr-2">{subItem.id}</span>
                                        {subItem.title}
                                      </motion.span>
                                    </Link>
                                  </motion.div>
                                );
                              })}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      )}
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </LayoutGroup>
  );
};

export default Navbar;
