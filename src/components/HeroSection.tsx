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
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center max-w-5xl mx-auto px-6 py-20">
        {/* Main headline - Apple style */}
        <h1 className="text-4xl md:text-7xl font-light tracking-tight mb-8 leading-tight">
          <span className="text-foreground">Governance.</span>
          <br />
          <span className="font-medium bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Simplified.
          </span>
          <br />
          <span className="text-muted-foreground">In Your Language.</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-light">
          RTIs, Yojanas, Grievances — all handled by AI, instantly.
        </p>

        {/* Rotating phrases - cleaner Apple style */}
        <div className="mb-16 h-16 flex items-center justify-center">
          <div className={`transition-all duration-300 ${isAnimating ? 'opacity-0 transform scale-95' : 'opacity-100 transform scale-100'}`}>
            <div className="flex items-center justify-center space-x-6 max-w-4xl">
              <div className="card-glass px-6 py-3 rounded-2xl">
                <p className="text-muted-foreground font-medium">"{rotatingPhrases[currentPhrase].problem}"</p>
              </div>
              <div className="text-primary">→</div>
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-2xl shadow-medium">
                <p className="font-semibold">"{rotatingPhrases[currentPhrase].solution}"</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action buttons - Apple style */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-20">
          <Button className="btn-apple text-lg px-8 py-4">
            Start Now
          </Button>
          <Button className="btn-apple-secondary text-lg px-8 py-4">
            Watch How It Works
          </Button>
        </div>

        {/* Quick stats - minimal */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-3xl mx-auto">
          <div className="text-center">
            <div className="text-4xl font-light text-foreground mb-2">13+</div>
            <div className="text-muted-foreground font-medium">Civic Services</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-foreground mb-2">22</div>
            <div className="text-muted-foreground font-medium">Indian Languages</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-light text-foreground mb-2">1M+</div>
            <div className="text-muted-foreground font-medium">Citizens Helped</div>
          </div>
        </div>
      </div>

      {/* Floating chat button */}
      <Button className="btn-floating">
        💬
      </Button>
    </section>
  );
};