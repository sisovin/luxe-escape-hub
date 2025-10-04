import { useState } from "react";
import { Bed, Users, Maximize, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import roomDeluxe from "@/assets/room-deluxe.jpg";
import roomSuite from "@/assets/room-suite.jpg";
import roomPenthouse from "@/assets/room-penthouse.jpg";

const rooms = [
  {
    id: 1,
    name: "Deluxe Room",
    image: roomDeluxe,
    price: 199,
    size: "35 sqm",
    guests: 2,
    description: "Elegantly appointed room with premium amenities and city views. Features include king-size bed, marble bathroom, smart TV, and complimentary WiFi.",
    amenities: ["King Bed", "City View", "WiFi", "Smart TV", "Mini Bar"],
  },
  {
    id: 2,
    name: "Executive Suite",
    image: roomSuite,
    price: 349,
    size: "65 sqm",
    guests: 3,
    description: "Spacious suite with separate living area and dining space. Perfect for business travelers and families seeking extra comfort and luxury.",
    amenities: ["Separate Living Area", "Ocean View", "Kitchenette", "Workspace", "Balcony"],
  },
  {
    id: 3,
    name: "Presidential Penthouse",
    image: roomPenthouse,
    price: 899,
    size: "120 sqm",
    guests: 4,
    description: "Ultimate luxury with panoramic views and exclusive services. Private terrace, butler service, and access to executive lounge included.",
    amenities: ["Panoramic Views", "Private Terrace", "Butler Service", "Jacuzzi", "Executive Lounge"],
  },
];

const categories = ["All Rooms", "Deluxe", "Suite", "Penthouse"];

const RoomShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Rooms");
  const [selectedRoom, setSelectedRoom] = useState<typeof rooms[0] | null>(null);

  const filteredRooms = rooms.filter((room) =>
    selectedCategory === "All Rooms" ? true : room.name.includes(selectedCategory)
  );

  return (
    <section id="rooms" className="py-20 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Rooms & Suites</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover the perfect accommodation for your stay
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className={
                selectedCategory === category
                  ? "bg-gradient-accent hover:opacity-90"
                  : "hover:border-accent"
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Room Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRooms.map((room, index) => (
            <Card
              key={room.id}
              className="overflow-hidden hover:shadow-glow transition-smooth group animate-fade-in"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={room.image}
                  alt={room.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-smooth"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-smooth"
                  onClick={() => setSelectedRoom(room)}
                >
                  <Eye className="h-4 w-4" />
                </Button>
              </div>

              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                <div className="flex items-center gap-4 text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Maximize className="h-4 w-4" />
                    <span className="text-sm">{room.size}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    <span className="text-sm">{room.guests} Guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="h-4 w-4" />
                    <span className="text-sm">King</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <div>
                    <span className="text-3xl font-bold text-accent">${room.price}</span>
                    <span className="text-muted-foreground">/night</span>
                  </div>
                  <Button className="bg-gradient-accent hover:opacity-90 transition-smooth">
                    Book Now
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Room Details Modal */}
      <Dialog open={!!selectedRoom} onOpenChange={() => setSelectedRoom(null)}>
        <DialogContent className="max-w-3xl">
          <DialogHeader>
            <DialogTitle className="text-3xl font-bold">{selectedRoom?.name}</DialogTitle>
          </DialogHeader>
          {selectedRoom && (
            <div className="space-y-6">
              <img
                src={selectedRoom.image}
                alt={selectedRoom.name}
                className="w-full h-80 object-cover rounded-lg"
              />
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Maximize className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="font-semibold">{selectedRoom.size}</p>
                  <p className="text-sm text-muted-foreground">Room Size</p>
                </div>
                <div>
                  <Users className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="font-semibold">{selectedRoom.guests} Guests</p>
                  <p className="text-sm text-muted-foreground">Capacity</p>
                </div>
                <div>
                  <Bed className="h-6 w-6 mx-auto mb-2 text-accent" />
                  <p className="font-semibold">King Bed</p>
                  <p className="text-sm text-muted-foreground">Bed Type</p>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Description</h4>
                <p className="text-muted-foreground">{selectedRoom.description}</p>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Amenities</h4>
                <div className="flex flex-wrap gap-2">
                  {selectedRoom.amenities.map((amenity) => (
                    <span
                      key={amenity}
                      className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm"
                    >
                      {amenity}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t">
                <div>
                  <span className="text-4xl font-bold text-accent">${selectedRoom.price}</span>
                  <span className="text-muted-foreground">/night</span>
                </div>
                <Button
                  size="lg"
                  className="bg-gradient-accent hover:opacity-90 transition-smooth"
                >
                  Book This Room
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default RoomShowcase;
