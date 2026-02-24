import HeroSection from './components/HeroSection';
import TicketCTA from './components/TicketCTA';
import FestivalHighlights from './components/FestivalHighlights';
import ExperienceZones from './components/ExperienceZones';
import Schedule from './components/Schedule';
import ParticipateSection from './components/ParticipateSection';
import ClosingSection from './components/ClosingSection';

function App() {
  return (
    <div className="w-full max-w-none overflow-x-hidden">
      <HeroSection />
      <TicketCTA />
      <FestivalHighlights />
      <ExperienceZones />
      <Schedule />
      <ParticipateSection />
      <ClosingSection />
    </div>
  );
}

export default App;
