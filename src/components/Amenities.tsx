import { useState } from "react";
import { Wifi, Coffee, Dumbbell, Utensils, Car, Waves, Sparkles, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const amenities = [
  {
    icon: Wifi,
    title: "High-Speed WiFi",
    description: "Complimentary high-speed internet access throughout the property",
    details: "Stay connected with our fiber-optic WiFi network, offering speeds up to 1Gbps in all rooms and public areas.",
  },
  {
    icon: Coffee,
    title: "24/7 Room Service",
    description: "Round-the-clock dining at your convenience",
    details: "Our extensive menu features international cuisine, local specialties, and healthy options available any time of day or night.",
  },
  {
    icon: Dumbbell,
    title: "Fitness Center",
    description: "State-of-the-art gym with personal trainers",
    details: "Fully equipped fitness center with cardio machines, free weights, and yoga studio. Personal training sessions available on request.",
  },
  {
    icon: Utensils,
    title: "Fine Dining",
    description: "Award-winning restaurants and bars",
    details: "Experience culinary excellence with our three signature restaurants, rooftop bar, and café serving breakfast, lunch, and dinner.",
  },
  {
    icon: Waves,
    title: "Infinity Pool",
    description: "Rooftop pool with panoramic city views",
    details: "Relax in our temperature-controlled infinity pool, featuring poolside bar service and comfortable lounge seating.",
  },
  {
    icon: Sparkles,
    title: "Luxury Spa",
    description: "Full-service spa and wellness center",
    details: "Indulge in traditional and modern treatments, including massages, facials, body treatments, and signature spa experiences.",
  },
  {
    icon: Car,
    title: "Valet Parking",
    description: "Complimentary valet and secure parking",
    details: "Convenient valet service with secure underground parking for all guests. Electric vehicle charging stations available.",
  },
  {
    icon: ShieldCheck,
    title: "Concierge Service",
    description: "24/7 personalized assistance",
    details: "Our dedicated concierge team can arrange tours, transportation, reservations, and fulfill any special requests to enhance your stay.",
  },
];

const Amenities = () => {
  const [expandedAmenity, setExpandedAmenity] = useState<string | null>(null);

  return (
    <section id="amenities" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">World-Class Amenities</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for an unforgettable stay
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenities.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <Card
                key={amenity.title}
                className="group hover:shadow-glow transition-smooth cursor-pointer animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() =>
                  setExpandedAmenity(expandedAmenity === amenity.title ? null : amenity.title)
                }
              >
                <CardContent className="p-6 text-center">
                  <div className="mb-4 inline-flex p-4 bg-accent/10 rounded-full group-hover:bg-gradient-accent group-hover:shadow-glow transition-smooth">
                    <Icon className="h-8 w-8 text-accent group-hover:text-accent-foreground transition-smooth" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{amenity.title}</h3>
                  <p className="text-muted-foreground text-sm">{amenity.description}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Expandable Details */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Accordion type="single" collapsible value={expandedAmenity || ""}>
            {amenities.map((amenity) => (
              <AccordionItem key={amenity.title} value={amenity.title}>
                <AccordionTrigger
                  className="text-lg font-semibold"
                  onClick={() =>
                    setExpandedAmenity(expandedAmenity === amenity.title ? null : amenity.title)
                  }
                >
                  {amenity.title}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {amenity.details}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Amenities;
