import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  const scrollToContent = () => {
    const nextSection = document.querySelector('#ticket-cta');
    nextSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/assets/generated/hero-background.dim_1920x1080.png)' }}
      />
      
      {/* Warm Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-maroon/70 via-maroon/50 to-saffron/60" />
      
      {/* Subtle Pattern Overlay */}
      <div 
        className="absolute inset-0 opacity-10 bg-pattern-mandala bg-repeat"
        style={{ backgroundSize: '400px 400px' }}
      />
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl font-bold text-ivory mb-4 md:mb-6 drop-shadow-lg">
          SamayYaan presents KathaLok
        </h1>
        <h2 className="font-playfair text-3xl md:text-4xl lg:text-5xl text-gold mb-6 md:mb-8 drop-shadow-md">
          Where Bharat's Culture Comes Alive
        </h2>
        <p className="font-lato text-lg md:text-xl lg:text-2xl text-ivory/95 mb-10 md:mb-12 max-w-3xl mx-auto drop-shadow">
          SamayYaan's Annual Cultural Festival Celebrating India's Timeless Heritage
        </p>
        
        <Button 
          onClick={scrollToContent}
          size="lg"
          className="bg-gold hover:bg-gold/90 text-maroon font-semibold text-lg px-8 py-6 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
        >
          Discover KathaLok
          <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
        </Button>
      </div>
      
      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
