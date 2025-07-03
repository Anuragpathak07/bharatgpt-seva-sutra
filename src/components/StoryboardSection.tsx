import { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const storyPanels = [
  {
    id: 1,
    userQuery: "Mera land encroach hua hai",
    userLanguage: "Hindi",
    userAvatar: "👨‍🌾",
    userLocation: "Uttar Pradesh",
    aiProcess: "property.py + grievance_builder.py",
    output: "RTI Draft + Legal Notice",
    description: "AI identifies land encroachment issue and generates both RTI application and legal notice template",
    modules: ["🏠 Property Analysis", "📝 RTI Generator", "⚖️ Legal Templates"]
  },
  {
    id: 2,
    userQuery: "Widow pension band ho gaya",
    userLanguage: "Hindi",
    userAvatar: "👵",
    userLocation: "Rajasthan",
    aiProcess: "pension.py + cpgrams.py",
    output: "Grievance + CPGRAMS Submission",
    description: "AI processes pension stoppage complaint and files grievance through official channels",
    modules: ["💰 Pension Tracker", "📢 Grievance System", "🔄 Auto-Submit"]
  },
  {
    id: 3,
    userQuery: "Which schemes I am eligible for?",
    userLanguage: "English",
    userAvatar: "👩‍💼",
    userLocation: "Karnataka",
    aiProcess: "schemes.py + profile_matcher.py",
    output: "PMAY, Ujjwala, PM-KISAN",
    description: "AI analyzes user profile and suggests matching government welfare schemes",
    modules: ["🎯 Profile Analysis", "📊 Scheme Matcher", "✅ Eligibility Check"]
  }
];

export const StoryboardSection = () => {
  const [activePanel, setActivePanel] = useState(0);

  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Real Stories, Real Solutions
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            See how BharatGPT transforms citizen queries into actionable solutions 
            through AI-powered governance assistance.
          </p>
        </div>

        {/* Story timeline */}
        <div className="space-y-12">
          {storyPanels.map((panel, index) => (
            <div 
              key={panel.id}
              className={`transition-all duration-500 ${activePanel === index ? 'opacity-100' : 'opacity-70'}`}
              onMouseEnter={() => setActivePanel(index)}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                
                {/* User Input Panel */}
                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <div className="flex items-start space-x-4 mb-6">
                      <div className="text-4xl">{panel.userAvatar}</div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">{panel.userLocation}</div>
                        <div className="text-xs bg-muted px-2 py-1 rounded">{panel.userLanguage}</div>
                      </div>
                    </div>
                    
                    <div className="bg-gradient-to-r from-muted/50 to-transparent p-4 rounded-lg border-l-4 border-primary">
                      <p className="text-lg font-medium italic">"{panel.userQuery}"</p>
                    </div>
                  </CardContent>
                </Card>

                {/* AI Processing Panel */}
                <Card className="card-elevated relative overflow-hidden">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="inline-flex items-center space-x-2 bg-gradient-heritage text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold">
                        <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse"></div>
                        <span>BharatGPT AI</span>
                      </div>
                    </div>

                    <div className="space-y-3 mb-6">
                      {panel.modules.map((module, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-2 text-sm bg-muted/30 p-2 rounded"
                          style={{ animationDelay: `${idx * 0.2}s` }}
                        >
                          <div className="w-2 h-2 bg-accent rounded-full"></div>
                          <span>{module}</span>
                        </div>
                      ))}
                    </div>

                    <div className="text-center">
                      <code className="bg-secondary/10 text-secondary px-3 py-1 rounded text-sm">
                        {panel.aiProcess}
                      </code>
                    </div>
                  </CardContent>
                  
                  {/* Animated processing indicator */}
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent animate-pulse"></div>
                </Card>

                {/* Output Panel */}
                <Card className="card-elevated">
                  <CardContent className="p-8">
                    <div className="text-center mb-6">
                      <div className="w-16 h-16 bg-gradient-saffron rounded-full flex items-center justify-center mx-auto mb-4 shadow-glow">
                        <span className="text-2xl">✅</span>
                      </div>
                      <h4 className="text-xl font-bold text-accent mb-2">Solution Ready</h4>
                    </div>

                    <div className="bg-gradient-to-r from-accent/10 to-transparent p-4 rounded-lg border border-accent/20 mb-4">
                      <p className="font-semibold text-accent text-lg">{panel.output}</p>
                    </div>

                    <p className="text-sm text-muted-foreground mb-6">
                      {panel.description}
                    </p>

                    <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground">
                      View Solution
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Connection arrows */}
              {index < storyPanels.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-px h-12 bg-gradient-to-b from-primary to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button className="btn-hero text-lg px-12 py-4">
            Try BharatGPT Now →
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Join 1M+ citizens who've simplified their government interactions
          </p>
        </div>
      </div>
    </section>
  );
};