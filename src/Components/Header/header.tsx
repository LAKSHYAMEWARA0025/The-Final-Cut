import { useState, useEffect } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const SCROLL_THRESHOLD = 50;

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > SCROLL_THRESHOLD);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const CAL_LINK = "https://cal.com/itsvijaychoudhary/schedule-a-call";

  const navItems = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#testimonials", label: "Testimonials" },
  ];

  // FIXED: Explicitly typed 'e' and 'href' to solve the TS error
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    
    const element = document.querySelector(href);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - headerOffset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
    
    // Close mobile menu if open
    if (isOpen) setIsOpen(false);
  };

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 
      ${
        scrolled
          ? "bg-[var(--color-bg-darker)]/95 backdrop-blur-md shadow-lg border-b border-[var(--color-border)]"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo Area */}
          <a
            href="#top"
            onClick={(e) => handleSmoothScroll(e, "#top")}
            className="flex items-center gap-2 transition-opacity duration-300 hover:opacity-80 flex-shrink-0"
          >
            <img
              src="/logo/Whitelogo.png"
              alt="Logo"
              className="w-36 md:w-44 h-auto object-contain drop-shadow-md"
              onError={(e) => {
                e.currentTarget.src = "/logo/Whitelogo.png";
              }}
            />
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-10">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                // FIXED: Passing 'e' correctly here
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-[var(--color-text-secondary)] font-medium text-[15px] hover:text-[var(--color-primary)] transition-colors duration-200"
              >
                {item.label}
              </a>
            ))}

            {/* Primary CTA */}
            <a
              href={CAL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="ml-2 px-6 py-2.5 rounded-[var(--radius-md)] text-sm font-bold text-white 
                       bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)]
                       shadow-[var(--shadow-md)] hover:shadow-[var(--shadow-glow)]
                       transform hover:-translate-y-0.5 transition-all duration-200"
            >
              Book a Call
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-border)] transition-colors focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              <svg
                className="w-7 h-7"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-[var(--color-bg-darker)] border-b border-[var(--color-border)] shadow-xl">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={(e) => handleSmoothScroll(e, item.href)}
              className="block px-3 py-3 rounded-md text-base font-medium text-[var(--color-text-secondary)] hover:text-white hover:bg-[var(--color-card-bg)] transition-colors"
            >
              {item.label}
            </a>
          ))}
          <a
            href={CAL_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="block mt-4 text-center px-4 py-3 rounded-[var(--radius-md)] text-base font-bold text-white bg-[var(--color-primary)] hover:bg-[var(--color-primary-dark)] transition-colors shadow-md"
            onClick={() => setIsOpen(false)}
          >
            Book a Call
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;