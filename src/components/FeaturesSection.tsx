import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import rtiIcon from '@/assets/rti-icon.jpg';
import grievanceIcon from '@/assets/grievance-icon.jpg';
import schemesIcon from '@/assets/schemes-icon.jpg';
import chatbotIcon from '@/assets/chatbot-icon.jpg';

const features = [
  {
    id: 1,
    title: "File RTIs",
    description: "Get help drafting Right to Information requests with AI guidance",
    icon: rtiIcon,
    emoji: "📝",
    gradient: "from-primary to-primary-glow",
  },
  {
    id: 2,
    title: "Submit Grievances", 
    description: "Lodge complaints and track resolution status seamlessly",
    icon: grievanceIcon,
    emoji: "📢",
    gradient: "from-secondary to-accent",
  },
  {
    id: 3,
    title: "Know Your Scheme",
    description: "Discover government benefits and welfare programs you qualify for",
    icon: schemesIcon,
    emoji: "📚",
    gradient: "from-accent to-primary",
  },
  {
    id: 4,
    title: "Vernacular Chatbot",
    description: "Get assistance in 22+ Indian languages with AI-powered support",
    icon: chatbotIcon,
    emoji: "🗣",
    gradient: "from-primary-glow to-secondary",
  },
];

export const FeaturesSection = () => {
  return (
    <section className="py-24 px-6 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold mb-6">
            <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Core Features
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Empowering Indian citizens with AI-driven governance solutions that simplify 
            bureaucratic processes and improve access to public services.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card 
              key={feature.id} 
              className="card-elevated card-glow group hover:scale-105 transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-8 text-center h-full flex flex-col">
                {/* Icon container */}
                <div className="relative mb-6">
                  <div className={`w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br ${feature.gradient} p-1 shadow-warm`}>
                    <img 
                      src={feature.icon} 
                      alt={feature.title}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </div>
                  <div className="absolute -top-2 -right-2 text-2xl">{feature.emoji}</div>
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-4 text-foreground group-hover:text-primary transition-colors">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground mb-6 flex-grow text-base leading-relaxed">
                  {feature.description}
                </p>

                {/* Action button */}
                <Button 
                  variant="outline" 
                  className="w-full border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                >
                  Get Started
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <Button className="btn-hero text-lg px-12 py-4">
            Explore All Services →
          </Button>
        </div>
      </div>
    </section>
  );
};