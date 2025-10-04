import { useState } from "react";
import { Menu, X, Globe, LogIn, UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const Header = () => {
  const [language, setLanguage] = useState<"en" | "km">("en");
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "km" : "en");
  };

  const translations = {
    en: {
      rooms: "Rooms",
      amenities: "Amenities",
      dining: "Dining",
      contact: "Contact",
      bookNow: "Book Now",
    },
    km: {
      rooms: "បន្ទប់",
      amenities: "សេវាកម្ម",
      dining: "អាហារដ្ឋាន",
      contact: "ទំនាក់ទំនង",
      bookNow: "កក់ទុកឥឡូវនេះ",
    },
  };

  const t = translations[language];

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/95 backdrop-blur-md shadow-soft" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent">
              Luxe Haven
            </h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#rooms" className="text-foreground hover:text-accent transition-smooth">
              {t.rooms}
            </a>
            <a href="#amenities" className="text-foreground hover:text-accent transition-smooth">
              {t.amenities}
            </a>
            <a href="#dining" className="text-foreground hover:text-accent transition-smooth">
              {t.dining}
            </a>
            <a href="#contact" className="text-foreground hover:text-accent transition-smooth">
              {t.contact}
            </a>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleLanguage}
              className="hover:bg-accent/10"
            >
              <Globe className="h-5 w-5" />
              <span className="ml-2 text-sm">{language.toUpperCase()}</span>
            </Button>
            <Button className="bg-gradient-accent hover:opacity-90 transition-smooth">
              {t.bookNow}
            </Button>
            <Button variant="outline">
              <LogIn className="h-4 w-4" />
              Login
            </Button>
            <Button variant="default">
              <UserPlus className="h-4 w-4" />
              Sign Up
            </Button>
          </div>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px]">
              <div className="flex flex-col space-y-6 mt-8">
                <a href="#rooms" className="text-lg hover:text-accent transition-smooth">
                  {t.rooms}
                </a>
                <a href="#amenities" className="text-lg hover:text-accent transition-smooth">
                  {t.amenities}
                </a>
                <a href="#dining" className="text-lg hover:text-accent transition-smooth">
                  {t.dining}
                </a>
                <a href="#contact" className="text-lg hover:text-accent transition-smooth">
                  {t.contact}
                </a>
                <Button
                  variant="outline"
                  onClick={toggleLanguage}
                  className="justify-start"
                >
                  <Globe className="h-5 w-5 mr-2" />
                  {language === "en" ? "ភាសាខ្មែរ" : "English"}
                </Button>
                <Button className="bg-gradient-accent hover:opacity-90 transition-smooth">
                  {t.bookNow}
                </Button>
                <Button variant="outline" className="justify-start">
                  <LogIn className="h-5 w-5 mr-2" />
                  Login
                </Button>
                <Button variant="default" className="justify-start">
                  <UserPlus className="h-5 w-5 mr-2" />
                  Sign Up
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
