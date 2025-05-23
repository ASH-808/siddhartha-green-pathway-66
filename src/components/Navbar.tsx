import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Phone, Mail } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    // Initialize the scroll state on page load
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const isHomePage = location.pathname === '/';

  return (
    <>
      {/* Top contact bar - fixed positioning to prevent overlap */}
      <div className="bg-emerald-800 text-white py-2 w-full z-50 top-contact-bar">
        <div className="container-wide flex flex-wrap justify-between items-center">
          <div className="text-sm flex flex-wrap items-center space-x-2 md:space-x-4">
            <a href="tel:+919606974400" className="flex items-center hover:text-emerald-200 transition-colors py-1">
              <Phone className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">+91 9606974400</span>
            </a>
            <a href="mailto:admissions@siddharthaglobal.com" className="flex items-center hover:text-emerald-200 transition-colors py-1">
              <Mail className="h-3 w-3 mr-1" />
              <span className="hidden sm:inline">admissions@siddharthaglobal.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navbar - adjusted positioning and styling */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled || !isHomePage ? 'bg-white shadow-md py-3' : 'bg-transparent py-4 mt-8'
        }`}
      >
        <div className="container-wide flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <img 
                src="/logo-placeholder.svg" 
                alt="Siddhartha Global & Avalon University" 
                className="h-10 w-auto"
                onError={(e) => {
                  e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='40' height='40' viewBox='0 0 24 24' fill='none' stroke='%23047857' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2L2 7l10 5 10-5-10-5z'/%3E%3Cpath d='M2 17l10 5 10-5'/%3E%3Cpath d='M2 12l10 5 10-5'/%3E%3C/svg%3E";
                  e.currentTarget.onerror = null;
                }}
              />
              <span className={`text-lg font-semibold transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-emerald-700' : 'text-white'}`}>
                Siddhartha Global
              </span>
            </Link>
          </div>
          
          {/* Desktop Navigation - enhanced hover states and alignment */}
          <div className="hidden md:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`${isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-emerald-200'} 
                    bg-transparent hover:bg-transparent focus:bg-transparent transition-colors duration-200`}
                  >
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link
                          to="/about"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">Overview</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our mission and vision
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about/advantage"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">The SG-Avalon Advantage</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Discover what sets us apart
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about/message-ssahe"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">Message from SSAHE</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Words from our leadership
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/about/message-avalon"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">Message from Avalon</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Insights from our Caribbean partner
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <NavigationMenuTrigger 
                    className={`${isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-emerald-200'} 
                    bg-transparent hover:bg-transparent focus:bg-transparent transition-colors duration-200`}
                  >
                    Programs
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <li>
                        <Link
                          to="/programs/bs-md"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">Integrated BS/MD Program</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Alternative path to become a doctor
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/programs/process"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">The Process</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Learn about our admission process
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/programs/benefits"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">Key Benefits</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Advantages of our programs
                          </p>
                        </Link>
                      </li>
                      <li>
                        <Link
                          to="/programs/faq"
                          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-emerald-50 hover:text-emerald-700"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          <div className="text-sm font-medium leading-none">FAQ</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Common questions answered
                          </p>
                        </Link>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/admissions"
                    className={`flex items-center px-3 py-2 text-sm ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-emerald-200'} transition-colors duration-200`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Admissions
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/info"
                    className={`flex items-center px-3 py-2 text-sm ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-emerald-200'} transition-colors duration-200`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Useful Information
                  </Link>
                </NavigationMenuItem>
                
                <NavigationMenuItem>
                  <Link 
                    to="/contact"
                    className={`flex items-center px-3 py-2 text-sm ${isScrolled || !isHomePage ? 'text-gray-700 hover:text-emerald-700' : 'text-white hover:text-emerald-200'} transition-colors duration-200`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact Us
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
          
          <div className="hidden md:block">
            <Link to="/admissions">
              <Button 
                variant={isScrolled || !isHomePage ? "default" : "secondary"} 
                className={`${isScrolled || !isHomePage 
                  ? "bg-emerald-700 hover:bg-emerald-800 text-white" 
                  : "bg-white text-emerald-700 hover:bg-emerald-50"} 
                  font-semibold px-6 py-2 rounded-md transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg`}
              >
                Apply Now
              </Button>
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className={`p-2 rounded-md ${isScrolled || !isHomePage ? 'text-gray-700' : 'text-white'}`}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile menu, show/hide based on menu state - improved styling */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white shadow-lg absolute w-full z-50 top-full mt-1 rounded-b-lg max-h-[80vh] overflow-y-auto">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <div className="px-3 py-2 text-gray-700 font-medium">About Us</div>
              <Link 
                to="/about"
                className="block px-6 py-1 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Overview
              </Link>
              <Link 
                to="/about/advantage"
                className="block px-6 py-1 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                The SG-Avalon Advantage
              </Link>
              <Link 
                to="/about/message-ssahe"
                className="block px-6 py-1 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Message from SSAHE
              </Link>
              <Link 
                to="/about/message-avalon"
                className="block px-6 py-1 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Message from Avalon
              </Link>
              
              <div className="px-3 py-2 text-gray-700 font-medium mt-4">Programs</div>
              <Link 
                to="/programs/bs-md"
                className="block px-6 py-1 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Integrated BS/MD Program
              </Link>
              <Link 
                to="/programs/process"
                className="block px-6 py-1 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                The Process
              </Link>
              <Link 
                to="/programs/benefits"
                className="block px-6 py-1 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Key Benefits
              </Link>
              <Link 
                to="/programs/faq"
                className="block px-6 py-1 text-gray-600 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                FAQ
              </Link>
              
              <Link 
                to="/admissions"
                className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Admissions
              </Link>
              
              <Link 
                to="/info"
                className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Useful Information
              </Link>
              
              <Link 
                to="/contact"
                className="block px-3 py-2 text-gray-700 hover:bg-emerald-50 hover:text-emerald-700 rounded-md"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
              
              <Link to="/admissions">
                <Button 
                  variant="default" 
                  className="w-full bg-emerald-700 hover:bg-emerald-800 mt-4 text-white"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Apply Now
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;
