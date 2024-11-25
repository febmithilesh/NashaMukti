import React, { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Phone, Mail, MapPin, PhoneIcon as WhatsApp, ArrowUp, ArrowDown } from "lucide-react";

export function Footer() {
  const [showScrollButtons, setShowScrollButtons] = useState(false);

  // Monitor scroll position
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButtons(window.scrollY > 200); 
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to the top
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Scroll to the bottom
  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <>
      <footer className="bg-green-100 text-foreground">
        <div className="container mx-auto px-6 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Center Info */}
            <div className="md:col-span-2">
              <h2 className="text-2xl font-bold mb-4">Dhara Nasha Mukti Kendra</h2>
              <p className="mb-4 text-muted-foreground">
                Empowering lives through compassionate care and effective rehabilitation services.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com"
                  className="text-primary hover:text-primary/80"
                  aria-label="Facebook"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Facebook size={24} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-primary hover:text-primary/80"
                  aria-label="Instagram"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Instagram size={24} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-primary hover:text-primary/80"
                  aria-label="Twitter"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter size={24} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a href="/" className="text-muted-foreground hover:text-primary">
                    Home
                  </a>
                </li>
                <li>
                  <a href="/about" className="text-muted-foreground hover:text-primary">
                    About
                  </a>
                </li>
                <li>
                  <a href="/services" className="text-muted-foreground hover:text-primary">
                    Services
                  </a>
                </li>
                <li>
                  <a href="/contact" className="text-muted-foreground hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="flex items-center text-muted-foreground">
                  <Phone size={18} className="mr-2 text-primary" />
                  <span>+91 1234567890</span>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <Mail size={18} className="mr-2 text-primary" />
                  <a href="mailto:info@dharanashamukti.com" className="hover:text-primary">
                    info@dharanashamukti.com
                  </a>
                </li>
                <li className="flex items-center text-muted-foreground">
                  <MapPin size={18} className="mr-2 text-primary" />
                  <span>123 Rehab Street, City, State, India</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="mt-8 pt-8 border-t border-muted-foreground/10 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} Dhara Nasha Mukti Kendra. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Call Button */}
      <a
        href="https://wa.me/911234567890"
        className="fixed left-4 bottom-4 bg-green-500 text-white p-4 m-5 rounded-full shadow-lg hover:bg-green-600 transition-colors duration-300"
        aria-label="Call on WhatsApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <WhatsApp size={24} />
      </a>

      {/* Scroll-to-Top Button */}
      {showScrollButtons && (
        <>
          <button
            onClick={scrollToTop}
            className="fixed right-4 bottom-20 bg-green-400 text-gray-900 p-3 m-4 rounded-full shadow-lg hover:bg-primary/80 transition-colors duration-300"
            aria-label="Scroll to top"
          >
            <ArrowUp size={24} />
          </button>

          {/* Scroll-to-Down Button */}
          <button
            onClick={scrollToBottom}
            className="fixed right-4 bottom-4 bg-green-400 text-gray-900 p-3 m-4 rounded-full shadow-lg hover:bg-secondary/80 transition-colors duration-300"
            aria-label="Scroll to bottom"
          >
            <ArrowDown size={24} />
          </button>
        </>
      )}
    </>
  );
}

export default Footer;



