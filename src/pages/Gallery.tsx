
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import SectionTitle from "@/components/SectionTitle";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [
    { id: "all", name: "All" },
    { id: "tennis", name: "Tennis Facilities" },
    { id: "accommodations", name: "Accommodations" },
    { id: "dining", name: "Dining" },
    { id: "experiences", name: "Experiences" },
  ];

  const galleryImages = [
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      alt: "Tennis court with sea view",
      category: "tennis",
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
      alt: "Luxury villa exterior",
      category: "accommodations",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
      alt: "Gourmet dining experience",
      category: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800",
      alt: "Yacht experience",
      category: "experiences",
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800",
      alt: "Tennis coaching session",
      category: "tennis",
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
      alt: "Luxury bedroom",
      category: "accommodations",
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      alt: "Fine dining setup",
      category: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1458668383970-8ddd3927deed?auto=format&fit=crop&w=800",
      alt: "Wine tasting",
      category: "experiences",
    },
    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800",
      alt: "Clay court",
      category: "tennis",
    },
    {
      src: "https://images.unsplash.com/photo-1470813740244-df37b8c1edcb?auto=format&fit=crop&w=800",
      alt: "Villa swimming pool",
      category: "accommodations",
    },
    {
      src: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?auto=format&fit=crop&w=800",
      alt: "Chef preparing meal",
      category: "dining",
    },
    {
      src: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?auto=format&fit=crop&w=800",
      alt: "Coastal excursion",
      category: "experiences",
    },
  ];

  const filteredImages =
    selectedCategory === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  return (
    <>
      <HeroSection
        backgroundImage="https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&h=800"
        title="Our Gallery"
        subtitle="Explore images from our exclusive tennis retreats on the French Riviera and Monaco. From world-class tennis facilities to luxury accommodations and unique experiences."
      />

      <section className="py-24 px-4 bg-white">
        <div className="container mx-auto">
          <SectionTitle
            title="Experience Tennis Luxe Club"
            subtitle="Browse our gallery to get a glimpse of the luxury tennis experience that awaits you."
            centered
          />

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-6 py-2 text-sm font-medium transition-colors ${
                  selectedCategory === category.id
                    ? "bg-gold text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="overflow-hidden group relative cursor-pointer"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-navy bg-opacity-0 group-hover:bg-opacity-60 flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <div className="text-white text-center p-4">
                    <p className="text-lg font-playfair">{image.alt}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 bg-beige">
        <div className="container mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-navy mb-6">
            Experience the Tennis Luxe Difference
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-10">
            Our exclusive tennis retreats offer a perfect blend of professional coaching, luxury accommodations, and unforgettable experiences. Join us for a week of tennis excellence in stunning Mediterranean locations.
          </p>
          <div className="aspect-w-16 aspect-h-9 max-w-4xl mx-auto overflow-hidden">
            {/* This would typically be a video embed */}
            <div className="bg-navy flex items-center justify-center h-full">
              <div className="text-white text-center">
                <p className="text-xl font-playfair mb-4">Tennis Luxe Club Experience</p>
                <p className="text-sm opacity-80">[Video Placeholder]</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
