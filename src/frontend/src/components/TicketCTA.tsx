import { Button } from '@/components/ui/button';
import { Calendar, MapPin, Ticket } from 'lucide-react';

export default function TicketCTA() {
  return (
    <section id="ticket-cta" className="w-full bg-gradient-to-r from-saffron via-gold to-saffron py-16 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-maroon mb-6">
            Be Part of the Living Heritage
          </h2>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-8 mb-8 text-maroon/90">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              <span className="font-lato text-lg md:text-xl font-medium">March 15-17, 2026</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5" />
              <span className="font-lato text-lg md:text-xl font-medium">IGNCA, New Delhi</span>
            </div>
          </div>
          
          <Button 
            size="lg"
            className="bg-maroon hover:bg-maroon/90 text-ivory font-bold text-xl px-12 py-7 rounded-full shadow-2xl transition-all duration-300 hover:scale-105"
          >
            <Ticket className="mr-3 h-6 w-6" />
            Book Your Tickets Now
          </Button>
          
          <p className="font-lato text-maroon/80 mt-6 text-base md:text-lg">
            Limited seats available • Early bird discounts until February 28
          </p>
        </div>
      </div>
    </section>
  );
}
