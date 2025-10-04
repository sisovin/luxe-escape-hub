import { MapPin, Phone, Mail, Facebook, Instagram, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-accent bg-clip-text text-transparent mb-4">
              Luxe Haven
            </h3>
            <p className="text-primary-foreground/80 text-sm">
              Experience unparalleled luxury and comfort in the heart of the city.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                <span className="text-primary-foreground/80">
                  123 Luxury Boulevard, Downtown District, City 12345
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-accent" />
                <span className="text-primary-foreground/80">reservations@luxehaven.com</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#rooms" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Rooms & Suites
                </a>
              </li>
              <li>
                <a href="#amenities" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Amenities
                </a>
              </li>
              <li>
                <a href="#dining" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Dining
                </a>
              </li>
              <li>
                <a href="#" className="text-primary-foreground/80 hover:text-accent transition-smooth">
                  Special Offers
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="font-semibold mb-4 text-accent">Follow Us</h4>
            <div className="flex gap-4">
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent p-2 rounded-full transition-smooth"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent p-2 rounded-full transition-smooth"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary-foreground/10 hover:bg-accent p-2 rounded-full transition-smooth"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
            </div>
            <div className="mt-6">
              <p className="text-sm text-primary-foreground/60">
                Subscribe to our newsletter for exclusive offers
              </p>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/60">
          <p>&copy; {new Date().getFullYear()} Luxe Haven Hotel. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
