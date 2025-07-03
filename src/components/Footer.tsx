import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-muted/30 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Main content */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-light mb-4 text-foreground">BharatGPT</h3>
          <p className="text-muted-foreground max-w-md mx-auto font-light leading-relaxed">
            Built for Bharat by dreamers & developers
          </p>
        </div>

        {/* Pilot Partners - minimal */}
        <div className="mb-16">
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium">Pilot Partners</p>
          <div className="flex justify-center items-center space-x-12 opacity-40">
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
              <span className="text-xs font-medium">GOV</span>
            </div>
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
              <span className="text-xs font-medium">NGO</span>
            </div>
            <div className="w-12 h-12 bg-muted rounded-xl flex items-center justify-center">
              <span className="text-xs font-medium">TECH</span>
            </div>
          </div>
        </div>

        {/* Links - minimal */}
        <div className="flex justify-center space-x-8 mb-12">
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            GitHub
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Privacy
          </a>
          <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors font-medium">
            Support
          </a>
        </div>

        {/* Copyright */}
        <div className="text-center">
          <p className="text-xs text-muted-foreground">
            © 2024 BharatGPT. Made with care for India.
          </p>
        </div>
      </div>
    </footer>
  );
};