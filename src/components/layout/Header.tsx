import { Link, NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Briefcase, FolderOpen } from "lucide-react";

const navItems = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/contact", label: "Contact" },
];

const mobileNavItems = [
  { 
    to: "/about", 
    label: "About", 
    iconType: "custom",
    iconUrl: "https://img.icons8.com/ios-filled/50/guest-male--v2.png"
  },
  { 
    to: "/services", 
    label: "Services", 
    iconType: "lucide",
    icon: Briefcase 
  },
  { 
    to: "/pricing", 
    label: "Pricing", 
    iconType: "custom",
    iconUrl: "https://img.icons8.com/ios/50/money-bag-rupee.png"
  },
  { 
    to: "/contact", 
    label: "Contact", 
    iconType: "custom",
    iconUrl: "https://img.icons8.com/pulsar-line/48/phone-bubble.png"
  },
  { 
    to: "/portfolio", 
    label: "Portfolio", 
    iconType: "lucide",
    icon: FolderOpen 
  },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Desktop Navigation */}
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-white/60 backdrop-blur-sm'
      }`}>
        <div className="container mx-auto max-w-7xl px-6">
          <div className="flex items-center justify-between h-16">
            {/* Desktop Logo - Left Side */}
            <Link 
              to="/" 
              className="hidden lg:flex items-center group hover:scale-105 transition-transform duration-200"
            >
              <img 
                src="/logo.png" 
                alt="Trivesha" 
                className="w-24 h-24 object-contain transition-opacity duration-200 group-hover:opacity-80" 
              />
            </Link>

            {/* Mobile Centered Logo */}
            <div className="lg:hidden flex-1 flex justify-center">
              <Link 
                to="/" 
                className="flex items-center group hover:scale-105 transition-transform duration-200"
              >
                <img 
                  src="/logo.png" 
                  alt="Trivesha" 
                  className="w-24 h-24 object-contain transition-opacity duration-200 group-hover:opacity-80" 
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? 'text-gray-800 bg-gray-100/70'
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-50/50'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </nav>

            {/* CTA Button - Minimal Style */}
            <div className="hidden md:flex items-center">
              <Link 
                to="/contact"
                className="px-6 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-medium rounded-lg transition-all duration-300 hover:shadow-md"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation - Redesigned with Glass Effect */}
      <div className="lg:hidden fixed bottom-6 left-4 right-4 z-50">
        <nav className="bg-white/80 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 px-4 py-3">
          <div className="flex items-center justify-between">
            {mobileNavItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className="flex flex-col items-center justify-center min-w-[64px] py-2 px-3 rounded-xl transition-all duration-300"
              >
                {({ isActive }) => (
                  <>
                    <div className={`p-2 rounded-lg transition-all duration-300 ${
                      isActive 
                        ? 'bg-gray-800 text-white shadow-lg' 
                        : 'text-gray-500 hover:bg-gray-100 hover:text-gray-700'
                    }`}>
                      {item.iconType === 'custom' ? (
                        <img 
                          src={item.iconUrl} 
                          alt={item.label}
                          className={`w-5 h-5 ${
                            isActive 
                              ? 'filter brightness-0 invert' 
                              : 'filter opacity-70 hover:opacity-100'
                          }`}
                        />
                      ) : (
                        <item.icon size={20} strokeWidth={1.5} />
                      )}
                    </div>
                    <span className={`text-xs font-medium mt-1 transition-colors duration-300 ${
                      isActive ? 'text-gray-800' : 'text-gray-500'
                    }`}>
                      {item.label}
                    </span>
                  </>
                )}
              </NavLink>
            ))}
          </div>
        </nav>
      </div>

      {/* Spacer for fixed header */}
      <div className="h-16" />
    </>
  );
}
