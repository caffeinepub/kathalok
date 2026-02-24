import { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Clock, MapPin } from 'lucide-react';

const scheduleData = {
  day1: [
    { time: '10:00 AM', title: 'Opening Ceremony', category: 'Talks', venue: 'Main Auditorium' },
    { time: '11:30 AM', title: 'Classical Vocal Performance', category: 'Music', venue: 'Heritage Hall' },
    { time: '2:00 PM', title: 'Book Launch: Stories of Ancient India', category: 'Talks', venue: 'Literature Pavilion' },
    { time: '4:00 PM', title: 'College Band Showcase', category: 'Music', venue: 'Open Air Stage' },
    { time: '6:30 PM', title: 'Storytelling Session', category: 'Theatre', venue: 'Intimate Theatre' }
  ],
  day2: [
    { time: '10:00 AM', title: 'Taal-Yudh: Percussion Battle', category: 'Music', venue: 'Main Auditorium' },
    { time: '12:00 PM', title: 'Dialogue on Cultural Heritage', category: 'Talks', venue: 'Conference Hall' },
    { time: '2:30 PM', title: 'Sur-SamayYaan: Musical Journey', category: 'Music', venue: 'Heritage Hall' },
    { time: '5:00 PM', title: 'Traditional Dance Performance', category: 'Theatre', venue: 'Open Air Stage' },
    { time: '7:00 PM', title: 'NSD Theatrical Play', category: 'Theatre', venue: 'Main Auditorium' }
  ],
  day3: [
    { time: '10:00 AM', title: 'Folk Music Ensemble', category: 'Music', venue: 'Heritage Hall' },
    { time: '12:00 PM', title: 'Panel Discussion: Preserving Traditions', category: 'Talks', venue: 'Conference Hall' },
    { time: '3:00 PM', title: 'Solo Artist Performances', category: 'Music', venue: 'Intimate Theatre' },
    { time: '5:30 PM', title: 'Grand Finale Concert', category: 'Music', venue: 'Main Auditorium' },
    { time: '8:00 PM', title: 'Closing Ceremony', category: 'Talks', venue: 'Main Auditorium' }
  ]
};

const categories = ['All', 'Talks', 'Music', 'Theatre', 'Zones'];

export default function Schedule() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filterEvents = (events: typeof scheduleData.day1) => {
    if (selectedCategory === 'All') return events;
    return events.filter(event => event.category === selectedCategory);
  };

  return (
    <section className="w-full py-20 md:py-28 bg-ivory relative overflow-hidden">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 opacity-5 bg-pattern-mandala bg-repeat"
        style={{ backgroundSize: '500px 500px' }}
      />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h2 className="font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-maroon mb-6">
            Program Schedule
          </h2>
          <p className="font-lato text-xl text-forest">
            Three days of immersive cultural experiences
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-lato font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-maroon text-ivory shadow-lg scale-105'
                  : 'bg-white text-maroon border-2 border-maroon/20 hover:border-maroon hover:shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <Tabs defaultValue="day1" className="w-full max-w-5xl mx-auto">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-white/80 p-2 rounded-xl shadow-md">
            <TabsTrigger value="day1" className="font-playfair text-lg data-[state=active]:bg-maroon data-[state=active]:text-ivory">
              Day 1 - March 15
            </TabsTrigger>
            <TabsTrigger value="day2" className="font-playfair text-lg data-[state=active]:bg-maroon data-[state=active]:text-ivory">
              Day 2 - March 16
            </TabsTrigger>
            <TabsTrigger value="day3" className="font-playfair text-lg data-[state=active]:bg-maroon data-[state=active]:text-ivory">
              Day 3 - March 17
            </TabsTrigger>
          </TabsList>
          
          {(['day1', 'day2', 'day3'] as const).map((day) => (
            <TabsContent key={day} value={day} className="space-y-4">
              {filterEvents(scheduleData[day]).map((event, index) => (
                <Card key={index} className="bg-white/90 backdrop-blur border-l-4 border-l-gold hover:shadow-lg transition-all duration-300">
                  <CardHeader className="pb-3">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">
                      <CardTitle className="font-playfair text-xl md:text-2xl text-maroon">
                        {event.title}
                      </CardTitle>
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-saffron/20 text-maroon w-fit">
                        {event.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-col sm:flex-row gap-4 text-forest/80 font-lato">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{event.venue}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
