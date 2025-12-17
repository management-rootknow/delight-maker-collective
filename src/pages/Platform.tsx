import Layout from "@/components/layout/Layout";
import { ArrowRight, Brain, Database, Cpu, Zap, Shield, Settings, Cloud, CheckCircle } from "lucide-react";

const Platform = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Architecture
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">The 4-Organ</span>
              <br />
              <span className="text-foreground">Architecture</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Speed without architecture is just fast failure. RootKnow generates both.
            </p>
          </div>

          {/* 4-Organ System */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Cpu, title: "UI (Skin)", desc: "Beautiful, responsive interfaces with modern React", delay: "0s" },
              { icon: Database, title: "Data (Bones)", desc: "30+ normalized tables with real-time GraphQL", delay: "0.1s" },
              { icon: Brain, title: "Brain (Logic)", desc: "External, configurable business rules engine", delay: "0.2s" },
              { icon: Zap, title: "Nerves (Async)", desc: "Workflows, sagas & background jobs", delay: "0.3s" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glow-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Three Steps */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground">From idea to production in three simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            {/* Arrows (desktop only) */}
            <div className="hidden md:flex absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            </div>
            <div className="hidden md:flex absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2">
              <ArrowRight className="w-8 h-8 text-primary animate-pulse" />
            </div>

            {[
              { num: 1, title: "Define Your App", desc: "Describe your SaaS idea. E-commerce, marketplace, or custom workflow." },
              { num: 2, title: "RootKnow Generates 95%", desc: "Full architecture: auth, payments, admin, workflows—production-ready in hours." },
              { num: 3, title: "Customize the 5%", desc: "Add your unique differentiators. Deploy immediately with real users." },
            ].map((step, index) => (
              <div 
                key={index} 
                className="glow-card rounded-xl p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:scale-110 transition-transform">
                  {step.num}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get <span className="gradient-text">(95% Complete)</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to launch. No homework required.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { icon: Shield, title: "Authentication", desc: "Email, social login, password reset—all working" },
              { icon: Database, title: "Database Schema", desc: "30+ normalized tables, migrations included" },
              { icon: Settings, title: "Admin Dashboard", desc: "User management, analytics, reports" },
              { icon: Zap, title: "Payment Processing", desc: "Payment integration, subscriptions, webhooks" },
              { icon: Cloud, title: "Background Jobs", desc: "Emails, notifications, async processing" },
              { icon: CheckCircle, title: "Deployment Ready", desc: "Docker, CI/CD, environment configs" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 glow-card p-6 rounded-lg group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Production-First DNA */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Production Ready
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="gradient-text">Production-First</span> DNA
            </h2>
            <p className="text-lg text-muted-foreground">
              RootKnow generates production systems, not demos.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Error boundaries & graceful fallbacks",
              "Retry logic with exponential backoff",
              "Circuit breakers for external services",
              "Health checks & readiness probes",
              "Observability & monitoring ready",
              "ACID transactions & data integrity",
              "Input validation schemas",
              "SQL injection & XSS protection",
              "CSRF tokens & rate limiting",
              "Audit logs for compliance",
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 glow-card rounded-lg group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-primary-foreground" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;