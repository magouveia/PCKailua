import React, { useState, useEffect } from 'react';
import { Slide } from './services/ai';
import { hardcodedSlides } from './data/slides';
import { PresentationView } from './components/PresentationView';
import { HomeView } from './components/HomeView';
import { OrganogramView } from './components/OrganogramView';
import { JobDescriptionsView } from './components/JobDescriptionsView';
import { PerformanceView } from './components/PerformanceView';
import { Loader2 } from 'lucide-react';

type ViewState = 'home' | 'career' | 'organogram' | 'job-descriptions' | 'performance';

function App() {
  const [slides, setSlides] = useState<Slide[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentView, setCurrentView] = useState<ViewState>('home');
  const [selectedSectorName, setSelectedSectorName] = useState<string | null>(null);
  const [lastSlideIndex, setLastSlideIndex] = useState(0);

  useEffect(() => {
    // Load slides immediately without artificial delay
    setSlides(hardcodedSlides);
    setIsLoading(false);
  }, []);

  const handleNavigateToSector = (sectorName: string, slideIndex: number) => {
    setSelectedSectorName(sectorName);
    setLastSlideIndex(slideIndex);
    setCurrentView('job-descriptions');
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-brand-cream flex flex-col items-center justify-center text-brand-dark">
        <Loader2 size={48} className="animate-spin text-brand-tan mb-4" />
        <h2 className="text-2xl font-serif font-bold">A preparar a tua apresentação...</h2>
        <p className="text-brand-stone mt-2">A estruturar o plano de carreira.</p>
      </div>
    );
  }

  switch (currentView) {
    case 'career':
      return (
        <PresentationView 
          slides={slides} 
          initialSlideIndex={lastSlideIndex}
          onClose={() => {
            setCurrentView('home');
            setLastSlideIndex(0);
          }} 
          onNavigateToSector={handleNavigateToSector}
          onSlideChange={setLastSlideIndex}
        />
      );
    case 'organogram':
      return <OrganogramView onBack={() => setCurrentView('home')} />;
    case 'job-descriptions':
      return (
        <JobDescriptionsView 
          onBack={() => {
            if (selectedSectorName) {
              setCurrentView('career');
              // Keep lastSlideIndex as is
            } else {
              setCurrentView('home');
            }
            setSelectedSectorName(null);
          }} 
          initialSectorName={selectedSectorName || undefined}
        />
      );
    case 'performance':
      return <PerformanceView onBack={() => setCurrentView('home')} />;
    default:
      return <HomeView onNavigate={(view) => setCurrentView(view)} />;
  }
}

export default App;
