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
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Interactive Services
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Access 13+ government services through our intelligent dashboard. 
            Get personalized help for your specific needs.
          </p>

          {/* Search bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Input 
                placeholder="How can I help you today?" 
                className="text-lg py-4 pl-6 pr-16 rounded-2xl border-2 border-primary/20 focus:border-primary shadow-warm"
              />
              <Button 
                size="sm" 
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-primary hover:bg-primary-glow"
              >
                Ask
              </Button>
            </div>
            
            {/* Quick suggestions */}
            <div className="flex flex-wrap justify-center gap-2 mt-4">
              {suggestedQueries.map((query) => (
                <Button 
                  key={query}
                  variant="outline" 
                  size="sm"
                  className="text-sm border-muted hover:border-primary hover:bg-primary/5"
                >
                  {query}
                </Button>
              ))}
            </div>
          </div>
        </div>

        {/* Services grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={service.title}
              className="card-elevated group hover:scale-105 transition-all duration-300 cursor-pointer"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.emoji}
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {service.description}
                </p>
                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground"
                >
                  Get Help
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom stats */}
        <div className="mt-20 text-center">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div>
              <div className="text-3xl font-bold text-primary mb-2">2.5M+</div>
              <div className="text-muted-foreground">Applications Filed</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">98%</div>
              <div className="text-muted-foreground">Success Rate</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">AI Support</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary mb-2">15min</div>
              <div className="text-muted-foreground">Avg. Response</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};