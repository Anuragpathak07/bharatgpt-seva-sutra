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
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section header - Apple minimal style */}
        <div className="text-center mb-20">
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-foreground">
            Everything you need.<br />
            <span className="font-medium">Nothing you don't.</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto font-light leading-relaxed">
            Empowering Indian citizens with AI-driven governance solutions.
          </p>
        </div>

        {/* Features grid - Apple 3-column style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-20">
          {features.slice(0, 3).map((feature, index) => (
            <div 
              key={feature.id} 
              className="card-feature text-center"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Large line-style icon */}
              <div className="mb-8">
                <div className="w-16 h-16 mx-auto mb-4 text-6xl feature-icon transition-spring">
                  {feature.emoji}
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-4 text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Fourth feature - full width showcase */}
        <div className="card-apple p-12 text-center">
          <div className="max-w-2xl mx-auto">
            <div className="text-6xl mb-6">{features[3].emoji}</div>
            <h3 className="text-2xl font-semibold mb-4 text-foreground">
              {features[3].title}
            </h3>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed font-light">
              {features[3].description}
            </p>
            <Button className="btn-apple">
              Try Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};