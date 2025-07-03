import { HeroSection } from '@/components/HeroSection';
import { FeaturesSection } from '@/components/FeaturesSection';
import { ServicesSection } from '@/components/ServicesSection';
import { StoryboardSection } from '@/components/StoryboardSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <ServicesSection />
      <StoryboardSection />
      <Footer />
    </div>
  );
};

export default Index;
