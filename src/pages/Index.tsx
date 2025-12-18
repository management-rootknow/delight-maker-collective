import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Shield, Database, Brain, Clock, Layers, ArrowRight, Sparkles, Globe } from "lucide-react";
import Layout from "@/components/layout/Layout";
import dashboardPreview from "@/assets/dashboard-preview.png";
import codeGeneration from "@/assets/code-generation.png";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full animate-fade-in border border-primary/20">
                <Sparkles className="w-4 h-4" />
                The Era of Static Software Is Over
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                The Future of{" "}
                <span className="gradient-text">Enterprise Software.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                For two decades, enterprises adapted to rigid, pre-packaged SaaS. We are dismantling that paradigm. RootKnow generates bespoke software that evolves with your business DNA.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button size="lg" asChild className="text-base px-8 glow-primary group">
                  <Link to="/contact">
                    Request Executive Briefing
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 border-border/50 hover:bg-primary/5 hover:border-primary/50">
                  <Link to="/platform">View The Architecture</Link>
                </Button>
              </div>
              
              {/* Trust Indicators */}
              <div className="flex flex-wrap gap-8 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Globe className="w-4 h-4 text-primary" />
                  <span className="text-sm">Trusted by experts in Finance, Logistics, and Healthcare</span>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="relative animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <div className="relative floating">
                <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-2xl blur-2xl"></div>
                <div className="relative bg-card rounded-2xl shadow-2xl overflow-hidden border border-border/50">
                  <div className="bg-muted/50 px-4 py-3 flex items-center gap-2 border-b border-border/50">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">RootKnow Dashboard</span>
                  </div>
                  <img 
                    src={dashboardPreview} 
                    alt="RootKnow Dashboard Preview" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-transparent h-20"></div>
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              The Hidden Cost of Conformity
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              In the pursuit of scalability, the global software industry has commoditized business logic. Enterprises are forced into a "One-Size-Fits-None" model.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-16">
            {[
              { value: "80%", label: "of SaaS features remain unused by enterprises", delay: "0.1s" },
              { value: "$2.4T", label: "lost annually due to software misalignment", delay: "0.2s" },
              { value: "6-12", label: "months average ERP deployment time", delay: "0.3s" }
            ].map((stat, i) => (
              <div 
                key={i} 
                className="text-center bg-card rounded-xl p-8 border border-border/50 glow-card animate-fade-in-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="text-4xl md:text-5xl font-bold gradient-text mb-2">{stat.value}</div>
                <p className="text-muted-foreground text-sm">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-lg text-foreground max-w-2xl mx-auto italic border-l-4 border-primary pl-6 text-left">
              When you adopt mass-market SaaS, you are not just buying software—you are importing someone else's limitations. You are renting your own operational capacity.
            </p>
          </div>
        </div>
      </section>

      {/* The Platform Section */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Beyond Digital Transformation.{" "}
              <span className="gradient-text">This is Digital Genesis.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              RootKnow is not an app builder. It is a Cognitive Software Architect—the world's first Generative ERP Core that synthesizes software from semantic intent.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Dynamic Ontology",
                subtitle: "The Genetic Code of Your Business",
                description: "Our AI analyzes the semantic structure of your industry to construct a living database schema. Self-healing data structures that migrate without downtime.",
                delay: "0.1s"
              },
              {
                icon: Brain,
                title: "Logic Engine",
                subtitle: "Decision Velocity at the Speed of Thought",
                description: "Business logic decoupled from code. C-Level executives modify rules instantly—pricing models, compliance checks—enforced globally in milliseconds.",
                delay: "0.2s"
              },
              {
                icon: Zap,
                title: "Async Orchestration",
                subtitle: "The Nervous System of Enterprise",
                description: "Event-driven architecture processing millions of signals per minute. Complex workflows execute invisibly while your interface stays fluid.",
                delay: "0.3s"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-card rounded-xl p-8 border border-border/50 glow-card animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-primary font-medium mb-2">{feature.subtitle}</p>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Key Benefits */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 animate-fade-in-left">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 via-primary/20 to-purple-500/20 rounded-2xl blur-2xl"></div>
                <img 
                  src={codeGeneration} 
                  alt="AI Code Generation" 
                  className="relative rounded-xl shadow-2xl border border-border/50 w-full"
                />
              </div>
            </div>
            <div className="order-1 lg:order-2 space-y-8 animate-fade-in-right">
              <div className="space-y-6">
                {[
                  {
                    icon: Layers,
                    title: "Zero-Friction Operations",
                    description: "The software mirrors your reality, not the other way around."
                  },
                  {
                    icon: Globe,
                    title: "Liquid Scalability",
                    description: "From single node to global mesh without architectural refactoring."
                  },
                  {
                    icon: Shield,
                    title: "Total Sovereignty",
                    description: "You own the data, the logic, and the roadmap. We provide the engine."
                  }
                ].map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Manifesto */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              The Software of One
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border/50 glow-card animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <h3 className="text-xl font-semibold text-primary mb-4">The Return to Craftsmanship</h3>
              <p className="text-muted-foreground mb-4">
                Before the Industrial Revolution, every tool was crafted for the hand that wielded it. The Digital Age initially followed mass production—efficient, but impersonal.
              </p>
              <p className="text-foreground">
                We believe that era is ending. AI allows us to return to the ethos of craftsmanship at industrial scale. We call this <span className="text-primary font-semibold">Mass Artisanship</span>—software that respects the unique nuances of your culture and process.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border/50 glow-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-primary mb-4">Digital Sovereignty</h3>
              <p className="text-muted-foreground mb-4">
                In the 21st century, data is the most valuable asset. Yet most companies surrender their data sovereignty to multi-tenant SaaS vendors. You are renting your data.
              </p>
              <p className="text-foreground">
                RootKnow restores ownership. We deploy dedicated instances. Your data lives in your cloud, under your encryption keys, governed by your rules. This is not just a feature—it is a <span className="text-primary font-semibold">fundamental right</span> in the digital age.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Ready to architect the future?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-4 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            We are addressing a $70 Billion gap in the enterprise software market—the "Customization Chasm." Join the enterprises reclaiming their digital sovereignty.
          </p>
          <div className="flex flex-wrap justify-center gap-2 text-primary-foreground/60 text-sm mb-8 animate-fade-in" style={{ animationDelay: "0.15s" }}>
            <span>Singapore</span>
            <span>•</span>
            <span>Vietnam</span>
            <span>•</span>
            <span>Tokyo</span>
            <span>•</span>
            <span>Dubai</span>
            <span>•</span>
            <span>London</span>
            <span>•</span>
            <span>New York</span>
          </div>
          <Button size="lg" variant="secondary" asChild className="text-base px-8 animate-fade-in group" style={{ animationDelay: "0.2s" }}>
            <Link to="/contact">
              Request Executive Briefing
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
