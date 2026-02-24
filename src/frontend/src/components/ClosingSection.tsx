import { Heart, Mail, Phone, MapPin } from 'lucide-react';
import { SiFacebook, SiX, SiInstagram, SiYoutube } from 'react-icons/si';
import { Separator } from '@/components/ui/separator';

const partners = [
  {
    logo: '/assets/generated/logo-moc.dim_200x200.png',
    name: 'Ministry of Culture',
    subtitle: 'Government of India'
  },
  {
    logo: '/assets/generated/logo-ignca.dim_200x200.png',
    name: 'IGNCA',
    subtitle: 'Indira Gandhi National Centre for the Arts'
  },
  {
    logo: '/assets/generated/logo-asi.dim_200x200.png',
    name: 'ASI',
    subtitle: 'Archaeological Survey of India'
  },
  {
    logo: '/assets/generated/logo-nsd.dim_200x200.png',
    name: 'NSD',
    subtitle: 'National School of Drama'
  }
];

export default function ClosingSection() {
  const currentYear = new Date().getFullYear();
  const appIdentifier = typeof window !== 'undefined' ? encodeURIComponent(window.location.hostname) : 'kathalok-app';

  return (
    <section className="w-full bg-gradient-to-b from-background to-maroon/10">
      {/* Mission Statement */}
      <div className="container mx-auto px-4 py-20 md:py-28">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-4xl md:text-5xl font-bold text-maroon mb-8">
            Our Mission
          </h2>
          <p className="font-lato text-xl md:text-2xl text-forest leading-relaxed mb-6">
            KathaLok is more than a festival — it's a living bridge between India's timeless heritage and contemporary expression. Through music, theatre, dialogue, and immersive experiences, we celebrate the stories, traditions, and wisdom that have shaped Bharat for millennia.
          </p>
          <p className="font-lato text-lg md:text-xl text-forest/80 leading-relaxed">
            Join us in preserving, celebrating, and reimagining India's cultural legacy for generations to come.
          </p>
        </div>
      </div>
      
      {/* Partners & Acknowledgements */}
      <div className="bg-ivory py-16 md:py-20">
        <div className="container mx-auto px-4">
          <h3 className="font-playfair text-3xl md:text-4xl font-bold text-maroon text-center mb-12">
            In Partnership With
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                <div className="w-32 h-32 md:w-40 md:h-40 mb-4 bg-white rounded-full p-4 shadow-lg group-hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                  <img 
                    src={partner.logo} 
                    alt={partner.name}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h4 className="font-playfair text-lg font-semibold text-maroon mb-1">
                  {partner.name}
                </h4>
                <p className="font-lato text-sm text-forest/70">
                  {partner.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-maroon text-ivory py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-10">
            {/* Brand */}
            <div>
              <h3 className="font-playfair text-3xl font-bold mb-4">SamayYaan</h3>
              <p className="font-lato text-ivory/80 mb-4">
                Celebrating India's timeless cultural heritage through immersive festivals and experiences.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-gold transition-colors" aria-label="Facebook">
                  <SiFacebook className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gold transition-colors" aria-label="X (Twitter)">
                  <SiX className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gold transition-colors" aria-label="Instagram">
                  <SiInstagram className="h-6 w-6" />
                </a>
                <a href="#" className="hover:text-gold transition-colors" aria-label="YouTube">
                  <SiYoutube className="h-6 w-6" />
                </a>
              </div>
            </div>
            
            {/* Contact */}
            <div>
              <h4 className="font-playfair text-xl font-semibold mb-4">Contact Us</h4>
              <div className="space-y-3 font-lato text-ivory/80">
                <div className="flex items-start gap-3">
                  <Mail className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>info@samayyaan.org</span>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>+91 11 2345 6789</span>
                </div>
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                  <span>IGNCA Campus, New Delhi, India</span>
                </div>
              </div>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="font-playfair text-xl font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-lato text-ivory/80">
                <li><a href="#" className="hover:text-gold transition-colors">About KathaLok</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Festival Schedule</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Book Tickets</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Volunteer</a></li>
                <li><a href="#" className="hover:text-gold transition-colors">Media & Press</a></li>
              </ul>
            </div>
          </div>
          
          <Separator className="bg-ivory/20 mb-8" />
          
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 font-lato text-sm text-ivory/70">
            <p>© {currentYear} SamayYaan. All rights reserved.</p>
            <p className="flex items-center gap-2">
              Built with <Heart className="h-4 w-4 text-gold fill-gold" /> using{' '}
              <a 
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </section>
  );
}
