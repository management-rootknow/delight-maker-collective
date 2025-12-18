import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Shield, CreditCard, CheckCircle, Clock, DollarSign, ArrowRight, Sparkles } from "lucide-react";
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
                95% Complete. 100% Production-Ready.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight animate-fade-in" style={{ animationDelay: "0.1s" }}>
                The Instant Software Engine for{" "}
                <span className="gradient-text">Professionals.</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl animate-fade-in" style={{ animationDelay: "0.2s" }}>
                RootKnow builds complete, ready-to-use apps in hours. Login, payments, dashboard—everything works right away. No coding needed.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <Button size="lg" asChild className="text-base px-8 glow-primary group">
                  <Link to="/app">
                    Start Building Now
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8 border-border/50 hover:bg-primary/5 hover:border-primary/50">
                  <Link to="/platform">See How It Works</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4 animate-fade-in" style={{ animationDelay: "0.4s" }}>
                <div className="flex items-center gap-2 group">
                  <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">95% Complete</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Clock className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">2-4 Hours</span>
                </div>
                <div className="flex items-center gap-2 group">
                  <div className="p-1.5 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <DollarSign className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">90% Cheaper</span>
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
              
              {/* Floating badge */}
              <div className="absolute -bottom-4 -left-4 bg-card rounded-xl p-4 shadow-xl border border-border/50 animate-bounce-subtle">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-500/10 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Production Ready</p>
                    <p className="text-xs text-muted-foreground">Deploy instantly</p>
                  </div>
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
              The 60% Problem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              AI shouldn't give you homework. It should give you products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Others */}
            <div className="bg-card rounded-xl p-8 border border-destructive/30 glow-card animate-fade-in-left" style={{ animationDelay: "0.2s" }}>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-destructive">✗</span> Other AI Tools
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  60% complete - you code the rest
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Prototype only, not production-ready
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  Credit burnout pricing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-destructive mt-1">•</span>
                  1-2 weeks to finish manually
                </li>
              </ul>
            </div>
            
            {/* RootKnow */}
            <div className="bg-card rounded-xl p-8 border border-primary/50 glow-card animate-fade-in-right" style={{ animationDelay: "0.3s" }}>
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">✓</span> RootKnow
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  95% complete, you customize the 5%
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Production-ready from day one
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Fixed, predictable pricing
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  Deploy in 2-4 hours
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Code Generation Preview */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="container">
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
            <div className="order-1 lg:order-2 space-y-6 animate-fade-in-right">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                AI Builds Your <span className="gradient-text">Entire App</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Watch RootKnow turn your idea into a working app. Login system, database, connections, and dashboard—all included.
              </p>
              <ul className="space-y-4">
                {["Auto-creates your database", "Security built-in from start", "Grows with your business"].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-foreground">
                    <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center">
                      <CheckCircle className="w-4 h-4 text-primary" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Built to Work, Not Just Look Good
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Every app handles errors gracefully, retries when needed, and keeps running smoothly.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Smart Auto-Build",
                description: "AI automatically creates your database and connects everything based on your industry.",
                delay: "0.1s"
              },
              {
                icon: Shield,
                title: "Built-in Security",
                description: "User permissions and activity tracking included from the start.",
                delay: "0.2s"
              },
              {
                icon: CreditCard,
                title: "Easy Payments",
                description: "Accept payments and manage subscriptions with no extra setup.",
                delay: "0.3s"
              }
            ].map((feature, i) => (
              <div 
                key={i}
                className="bg-card rounded-xl p-8 border border-border/50 glow-card animate-fade-in-up"
                style={{ animationDelay: feature.delay }}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
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

      {/* Audience Messages */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="container relative">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 animate-fade-in">
              Built for Everyone
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {[
              {
                title: "For Non-Technical Founders",
                description: "No need to hire developers. RootKnow builds your entire app—login, payments, dashboards—in hours. 90% cheaper, 300x faster, no coding needed.",
                delay: "0.1s"
              },
              {
                title: "For Technical Founders",
                description: "RootKnow generates professional-level apps: flexible business rules, background tasks, live data sync, and well-organized databases. This is senior-engineer quality, fully automated.",
                delay: "0.2s"
              },
              {
                title: "For Agencies",
                description: "Deliver 10x more projects without hiring. RootKnow builds 95% of the app. Your team just adds the finishing touches.",
                delay: "0.3s"
              },
              {
                title: "For Enterprises",
                description: "Apps that meet business standards: flexible rules, reliable background tasks, safe data handling, and full activity tracking. Ready to launch on day one.",
                delay: "0.4s"
              }
            ].map((item, i) => (
              <div 
                key={i}
                className="bg-card rounded-xl p-8 border border-border/50 glow-card animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <h3 className="text-lg font-semibold text-primary mb-3">{item.title}</h3>
                <p className="text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary via-purple-600 to-primary"></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48Y2lyY2xlIGN4PSIzMCIgY3k9IjMwIiByPSIyIi8+PC9nPjwvZz48L3N2Zz4=')] opacity-30"></div>
        <div className="container relative text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 animate-fade-in">
            Stop Finishing AI's Homework
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            Ship products, not prototypes. From idea to production in hours, not months.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-base px-8 animate-fade-in group" style={{ animationDelay: "0.2s" }}>
            <Link to="/app">
              Start Building Now
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
