import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-bg.jpg';

const rotatingPhrases = [
  { problem: "I lost my land record", solution: "Draft RTI ready" },
  { problem: "My pension stopped", solution: "Grievance submitted" },
  { problem: "Which Yojanas apply to me?", solution: "PMAY & PM-KISAN detected" },
  { problem: "Need birth certificate", solution: "Application guided" },
];

export const HeroSection = () => {
  const [currentPhrase, setCurrentPhrase] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPhrase((prev) => (prev + 1) % rotatingPhrases.length);
        setIsAnimating(false);
      }, 300);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="BharatGPT Hero Background" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/95"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-background/50"></div>
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 left-10 animate-float">
        <div className="w-3 h-3 bg-primary rounded-full shadow-glow"></div>
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: '2s' }}>
        <div className="w-2 h-2 bg-accent rounded-full shadow-glow"></div>
      </div>
      <div className="absolute bottom-32 left-20 animate-float" style={{ animationDelay: '4s' }}>
        <div className="w-4 h-4 bg-secondary rounded-full shadow-glow"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-6 animate-fade-slide-up">
        {/* Main headline */}
        <h1 className="text-6xl md:text-8xl font-display font-bold mb-6">
          <span className="bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent">
            Governance.
          </span>
          <br />
          <span className="animate-text-shimmer">Simplified.</span>
          <br />
          <span className="text-accent">In Your Language.</span>
        </h1>

        {/* Rotating phrases */}
        <div className="mb-12 h-20 flex items-center justify-center">
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <div className="flex items-center justify-center space-x-4">
              <div className="bg-muted/80 backdrop-blur-sm px-6 py-3 rounded-lg border border-border/50">
                <p className="text-muted-foreground italic">"{rotatingPhrases[currentPhrase].problem}"</p>
              </div>
              <div className="flex items-center">
                <div className="w-8 h-0.5 bg-primary"></div>
                <div className="w-0 h-0 border-l-8 border-l-primary border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>
              </div>
              <div className="bg-gradient-saffron px-6 py-3 rounded-lg shadow-warm">
                <p className="text-primary-foreground font-semibold">"{rotatingPhrases[currentPhrase].solution}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button className="btn-hero text-lg px-8 py-4 animate-glow-pulse">
            💬 Chat with BharatGPT
          </Button>
          <Button variant="outline" className="btn-outline-saffron text-lg px-8 py-4">
            📄 Upload Document
          </Button>
        </div>

        {/* Quick stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">13+</div>
            <div className="text-muted-foreground">Civic Services</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">22</div>
            <div className="text-muted-foreground">Indian Languages</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Citizens Helped</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};