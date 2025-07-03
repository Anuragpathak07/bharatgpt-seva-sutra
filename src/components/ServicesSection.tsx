import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const services = [
  { emoji: "🏠", title: "Property Records", description: "Land records & mutation help", category: "Property" },
  { emoji: "👶", title: "Birth Certificate", description: "Birth/Caste/Domicile certificates", category: "Certificates" },
  { emoji: "💳", title: "Aadhaar Support", description: "Aadhaar card issues & updates", category: "Identity" },
  { emoji: "🍚", title: "Ration Card", description: "PDS and ration card services", category: "Food Security" },
  { emoji: "💼", title: "MGNREGA Jobs", description: "Rural employment guarantee", category: "Employment" },
  { emoji: "🎓", title: "Scholarships", description: "Education financial assistance", category: "Education" },
  { emoji: "👵", title: "Pension Benefits", description: "Old age & widow pension", category: "Welfare" },
  { emoji: "💊", title: "Health Schemes", description: "Medical insurance & treatment", category: "Healthcare" },
  { emoji: "🗳", title: "Voter ID Help", description: "Election card services", category: "Civic" },
  { emoji: "📱", title: "WhatsApp Bot", description: "24/7 WhatsApp assistance", category: "Support" },
  { emoji: "🚗", title: "Driving License", description: "DL application & renewal", category: "Transport" },
  { emoji: "🏭", title: "Business License", description: "MSME & trade licenses", category: "Business" },
];

const suggestedQueries = [
  "Lost my job card",
  "Apply for widow pension", 
  "Property document missing",
  "Aadhaar not linking",
];

export const ServicesSection = () => {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        {/* Section header - Apple style */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-foreground">
            Get help with<br />
            <span className="font-medium">any government service.</span>
          </h2>

          {/* Search bar - Apple style */}
          <div className="max-w-xl mx-auto mb-12">
            <div className="relative">
              <Input 
                placeholder="How can I help you today?" 
                className="text-lg py-4 pl-6 pr-20 rounded-2xl border-0 bg-muted/50 shadow-soft focus:shadow-medium transition-spring backdrop-blur-sm"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 rounded-xl btn-apple text-sm px-4"
              >
                Ask
              </Button>
            </div>
            
            {/* Quick suggestions */}
            <div className="flex flex-wrap justify-center gap-3 mt-6">
              {suggestedQueries.map((query) => (
                <Button 
                  key={query}
                  variant="outline" 
                  size="sm"
                  className="text-sm rounded-full border-border/50 hover:border-primary/50 hover:bg-primary/5 transition-spring"
                >
                  {query}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Services grid - cleaner Apple grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-20">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="card-apple p-6 text-center cursor-pointer group transition-spring hover:scale-105"
              style={{ animationDelay: `${index * 0.02}s` }}
            >
              <div className="text-3xl mb-3 group-hover:scale-110 transition-spring">
                {service.emoji}
              </div>
              <h3 className="text-sm font-semibold mb-1 text-foreground group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-xs text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom stats - minimal Apple style */}
        <div className="text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 max-w-3xl mx-auto">
            <div>
              <div className="text-3xl font-light text-foreground mb-2">2.5M+</div>
              <div className="text-sm text-muted-foreground font-medium">Applications</div>
            </div>
            <div>
              <div className="text-3xl font-light text-foreground mb-2">98%</div>
              <div className="text-sm text-muted-foreground font-medium">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-light text-foreground mb-2">24/7</div>
              <div className="text-sm text-muted-foreground font-medium">AI Support</div>
            </div>
            <div>
              <div className="text-3xl font-light text-foreground mb-2">15min</div>
              <div className="text-sm text-muted-foreground font-medium">Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};