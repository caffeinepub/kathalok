import { useState } from 'react';

const zones = [
  {
    image: '/assets/generated/ayurveda.dim_600x400.png',
    title: 'Ayurveda Workshops',
    description: 'Discover ancient wellness practices and herbal wisdom'
  },
  {
    image: '/assets/generated/attar.dim_600x400.png',
    title: 'Attar & Fragrance Experience',
    description: 'Explore traditional Indian perfumery and essential oils'
  },
  {
    image: '/assets/generated/games.dim_600x400.png',
    title: 'Traditional Games of Bharat',
    description: 'Play ancient board games and outdoor activities'
  },
  {
    image: '/assets/generated/brahmi.dim_600x400.png',
    title: 'Brahmi Script Writing',
    description: 'Learn the art of ancient Indian calligraphy'
  },
  {
    image: '/assets/generated/literature.dim_600x400.png',
    title: 'Books & Literature Corner',
    description: 'Browse rare manuscripts and contemporary Indian literature'
  },
  {
    image: '/assets/generated/food.dim_600x400.png',
    title: 'Regional Food Stalls',
    description: 'A Culinary Map of India — taste authentic regional cuisines'
  }
];

export default function ExperienceZones() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="w-full py-20 md:py-28 bg-gradient-to-b from-background to-maroon/5 relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-pattern-blockprint bg-repeat"
        style={{ backgroundSize: '500px 500px' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-maroon mb-6">
            Experience Zones
          </h2>
          <p className="font-lato text-xl md:text-2xl text-forest leading-relaxed">
            Step into India — one experience at a time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {zones.map((zone, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl shadow-lg cursor-pointer transition-all duration-500 hover:shadow-2xl hover:scale-105"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Image */}
              <div className="aspect-[3/2] overflow-hidden">
                <img 
                  src={zone.image} 
                  alt={zone.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-t from-maroon via-maroon/70 to-transparent transition-opacity duration-300 ${hoveredIndex === index ? 'opacity-95' : 'opacity-80'}`} />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                <h3 className="font-playfair text-2xl md:text-3xl font-bold mb-2">
                  {zone.title}
                </h3>
                <p className={`font-lato text-base md:text-lg text-ivory/90 transition-all duration-300 ${hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {zone.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
