import Header from "@/components/Header";
import HeroCarousel from "@/components/HeroCarousel";
import RoomShowcase from "@/components/RoomShowcase";
import Amenities from "@/components/Amenities";
import BookingWidget from "@/components/BookingWidget";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroCarousel />
      <RoomShowcase />
      <Amenities />
      <BookingWidget />
      <Footer />
    </div>
  );
};

export default Index;
