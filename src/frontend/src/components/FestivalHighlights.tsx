import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const highlights = [
  {
    icon: '/assets/generated/icon-talks.dim_128x128.png',
    title: 'Talks & Dialogues',
    description: 'Speeches and discussions by respected cultural personalities exploring India\'s rich intellectual traditions.'
  },
  {
    icon: '/assets/generated/icon-band.dim_128x128.png',
    title: 'College Band Performances',
    description: 'Live musical sets by talented student bands bringing contemporary energy to traditional sounds.'
  },
  {
    icon: '/assets/generated/icon-solo.dim_128x128.png',
    title: 'Solo Artist Performances',
    description: 'Individual artists across classical and folk genres showcasing the depth of Indian musical heritage.'
  },
  {
    icon: '/assets/generated/icon-books.dim_128x128.png',
    title: 'Book Launches',
    description: 'New titles celebrating Indian literature, history, and culture from renowned authors and publishers.'
  },
  {
    icon: '/assets/generated/icon-taal.dim_128x128.png',
    title: 'Taal-Yudh',
    description: 'The battle of Indian percussionists — a rhythmic showdown celebrating the art of tabla and mridangam.'
  },
  {
    icon: '/assets/generated/icon-sur.dim_128x128.png',
    title: 'Sur-SamayYaan: Sa Se Sargam Tak',
    description: 'A musical journey tracing the evolution of Indian instruments across eras, from ancient to modern.'
  },
  {
    icon: '/assets/generated/icon-story.dim_128x128.png',
    title: 'Storytelling Performances',
    description: 'Oral traditions brought to life on stage through captivating narratives from across India.'
  },
  {
    icon: '/assets/generated/icon-theatre.dim_128x128.png',
    title: 'NSD Theatrical Play',
    description: 'A dramatic production by the National School of Drama showcasing excellence in Indian theatre.'
  }
];

export default function FestivalHighlights() {
  return (
    <section className="w-full py-20 md:py-28 bg-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-pattern-rangoli bg-repeat"
        style={{ backgroundSize: '600px 600px' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16 max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-maroon mb-6">
            Festival Highlights
          </h2>
          <p className="font-lato text-xl md:text-2xl text-forest leading-relaxed">
            KathaLok bridges Ancient Bharat with contemporary expression — through voice, rhythm, story, and stage.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index}
              className="bg-white/80 backdrop-blur border-2 border-gold/20 hover:border-gold hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              <CardHeader className="text-center pb-4">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-saffron/20 to-gold/20 p-4 flex items-center justify-center">
                  <img 
                    src={highlight.icon} 
                    alt={highlight.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <CardTitle className="font-playfair text-xl text-maroon">
                  {highlight.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="font-lato text-base text-forest text-center leading-relaxed">
                  {highlight.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
