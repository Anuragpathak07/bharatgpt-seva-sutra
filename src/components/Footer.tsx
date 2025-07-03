import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className="bg-gradient-to-t from-secondary to-secondary/90 text-secondary-foreground py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* Brand section */}
          <div className="md:col-span-2">
            <h3 className="text-3xl font-display font-bold mb-4">
              <span className="bg-gradient-to-r from-primary-glow to-accent bg-clip-text text-transparent">
                BharatGPT
              </span>
            </h3>
            <p className="text-secondary-foreground/80 mb-6 max-w-md">
              Empowering Indian citizens with AI-driven governance solutions. 
              Making bureaucracy simple, accessible, and efficient for everyone.
            </p>
            
            {/* Glowing Ask Me Anything Orb */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-saffron rounded-full flex items-center justify-center shadow-glow animate-glow-pulse cursor-pointer">
                  <span className="text-xl">💬</span>
                </div>
                <div className="absolute -inset-2 bg-primary/20 rounded-full animate-ping"></div>
              </div>
              <div>
                <div className="text-sm font-semibold">Ask me anything</div>
                <div className="text-xs text-secondary-foreground/60">24/7 AI Assistant</div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#services" className="hover:text-primary transition-colors">All Services</a></li>
              <li><a href="#rti" className="hover:text-primary transition-colors">File RTI</a></li>
              <li><a href="#grievance" className="hover:text-primary transition-colors">Submit Grievance</a></li>
              <li><a href="#schemes" className="hover:text-primary transition-colors">Find Schemes</a></li>
              <li><a href="#support" className="hover:text-primary transition-colors">Get Support</a></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-secondary-foreground/80">
              <li><a href="#docs" className="hover:text-primary transition-colors">Documentation</a></li>
              <li><a href="#api" className="hover:text-primary transition-colors">API Access</a></li>
              <li><a href="#tutorials" className="hover:text-primary transition-colors">Tutorials</a></li>
              <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
              <li><a href="#contact" className="hover:text-primary transition-colors">Contact Us</a></li>
            </ul>
          </div>
        </div>

        {/* Pilot Partners */}
        <div className="border-t border-secondary-foreground/20 pt-8 mb-8">
          <h4 className="text-lg font-semibold mb-6 text-center">Pilot Partners</h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-70">
            <div className="bg-background/10 px-6 py-3 rounded-lg border border-secondary-foreground/20">
              <span className="font-semibold">Ministry of Electronics & IT</span>
            </div>
            <div className="bg-background/10 px-6 py-3 rounded-lg border border-secondary-foreground/20">
              <span className="font-semibold">Digital India Initiative</span>
            </div>
            <div className="bg-background/10 px-6 py-3 rounded-lg border border-secondary-foreground/20">
              <span className="font-semibold">MyGov Platform</span>
            </div>
            <div className="bg-background/10 px-6 py-3 rounded-lg border border-secondary-foreground/20">
              <span className="font-semibold">State IT Departments</span>
            </div>
          </div>
        </div>

        {/* GitHub and Social */}
        <div className="border-t border-secondary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-6 mb-4 md:mb-0">
              <Button 
                variant="outline" 
                className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary"
              >
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd"/>
                </svg>
                View on GitHub
              </Button>
              
              <div className="flex space-x-4">
                <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </a>
                <a href="#" className="text-secondary-foreground/60 hover:text-primary transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
            </div>

            <div className="text-center md:text-right">
              <p className="text-secondary-foreground/60 text-sm">
                © 2024 BharatGPT. Made with ❤️ for Indian Citizens.
              </p>
              <p className="text-secondary-foreground/40 text-xs mt-1">
                Powered by Indian AI | Open Source Initiative
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};