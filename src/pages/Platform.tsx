import Layout from "@/components/layout/Layout";
import { ArrowRight, Brain, Database, Cpu, Zap, Shield, Settings, CheckCircle, Users, DollarSign, Clock, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Platform = () => {
  return (
    <Layout>
      {/* 1. HERO SECTION */}
      <section className="py-20 lg:py-32 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="text-foreground">You Know Your Job.</span>
              <br />
              <span className="gradient-text">Now Build Software For It.</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              You have the expertise. We have the engine. RootKnow helps professionals turn industry knowledge into production-ready apps in hours. <span className="text-primary font-semibold">No coding required. 95% complete from the start.</span>
            </p>
            
            <Button size="lg" className="text-lg px-8 py-6 mb-8 group" asChild>
              <Link to="/waitlist">
                Request Early Access
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            {/* Trust Indicators */}
            <p className="text-sm text-muted-foreground">
              Trusted by experts in <span className="text-foreground font-medium">Finance</span>, <span className="text-foreground font-medium">Logistics</span>, and <span className="text-foreground font-medium">Healthcare</span>
            </p>
          </div>
        </div>
      </section>

      {/* 2. THE PROBLEM */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-6">
              The Real Problem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              The <span className="text-destructive">"No-Code" Trap</span>
            </h2>
          </div>

          {/* 3 Columns */}
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-12">
            <div className="glow-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up">
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <DollarSign className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-destructive mb-3">Expensive</h3>
              <p className="text-muted-foreground">
                Traditional development costs <span className="text-foreground font-semibold">$50K+</span> and takes months to complete.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <AlertTriangle className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-destructive mb-3">Incomplete</h3>
              <p className="text-muted-foreground">
                Other AI tools only give you <span className="text-foreground font-semibold">60% complete apps</span>—the rest is homework.
              </p>
            </div>

            <div className="glow-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-16 h-16 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-destructive" />
              </div>
              <h3 className="text-xl font-bold text-destructive mb-3">Complex</h3>
              <p className="text-muted-foreground">
                <span className="text-foreground font-semibold">85% of software projects fail</span> due to technical complexity.
              </p>
            </div>
          </div>

          {/* Key Message */}
          <div className="text-center">
            <p className="text-xl md:text-2xl font-semibold text-foreground">
              The world has <span className="gradient-text">70M experts left behind</span> because they can't code.
              <br />
              <span className="text-primary">We fix that.</span>
            </p>
          </div>
        </div>
      </section>

      {/* 3. THE SOLUTION */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl floating" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">2 Proprietary Engines.</span>
              <br />
              <span className="text-foreground">1 Complete Solution.</span>
            </h2>
          </div>

          {/* 2 Core IPs */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* RootKnow Ontology™ */}
            <div className="glow-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">RootKnow Ontology<sup className="text-sm">™</sup></h3>
                <p className="text-lg text-primary font-semibold mb-4">The Brain</p>
                <p className="text-muted-foreground leading-relaxed">
                  We already speak your language. Built from thousands of real professional use cases, our AI understands the logic of <span className="text-foreground font-medium">finance, logistics, and healthcare</span> without you needing to explain the basics.
                </p>
              </div>
            </div>

            {/* RootKnow Engine™ */}
            <div className="glow-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up relative overflow-hidden" style={{ animationDelay: "0.15s" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Brain className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">RootKnow Engine<sup className="text-sm">™</sup></h3>
                <p className="text-lg text-purple-500 font-semibold mb-4">The Muscle</p>
                <p className="text-muted-foreground leading-relaxed">
                  95% Complete Apps, Not Demos. While others give you a prototype, we generate <span className="text-foreground font-medium">20+ database tables, payments, auth, and admin dashboards</span>. Production-ready from day one.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. COMPARISON */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              The Difference
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              RootKnow vs. <span className="text-muted-foreground">The Rest</span>
            </h2>
          </div>

          {/* Comparison Table */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="glow-card rounded-2xl overflow-hidden">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-left p-6 text-muted-foreground font-medium">Metric</th>
                    <th className="text-center p-6">
                      <span className="gradient-text font-bold text-lg">RootKnow</span>
                    </th>
                    <th className="text-center p-6 text-muted-foreground">Traditional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border/50">
                    <td className="p-6 text-foreground font-medium">Time to Launch</td>
                    <td className="p-6 text-center">
                      <span className="text-2xl font-bold text-primary">2-4 Hours</span>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">4-8 Weeks</td>
                  </tr>
                  <tr className="border-b border-border/50">
                    <td className="p-6 text-foreground font-medium">Completeness</td>
                    <td className="p-6 text-center">
                      <span className="text-2xl font-bold text-primary">95-98%</span>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">60-70%</td>
                  </tr>
                  <tr>
                    <td className="p-6 text-foreground font-medium">Success Rate</td>
                    <td className="p-6 text-center">
                      <span className="text-2xl font-bold text-primary">90%</span>
                    </td>
                    <td className="p-6 text-center text-muted-foreground">15%</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Highlight */}
          <div className="text-center">
            <p className="text-xl font-semibold text-foreground px-6 py-4 bg-primary/10 rounded-full inline-block">
              <span className="text-primary">"Stop doing the homework</span> left by other AI tools."
            </p>
          </div>
        </div>
      </section>

      {/* 5. ARCHITECTURE */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Architecture
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              <span className="gradient-text">4 Parts</span> of Every App. <span className="text-foreground">Automated.</span>
            </h2>
          </div>

          {/* 4-Part System */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { 
                icon: Cpu, 
                title: "Look", 
                subtitle: "(Interface)", 
                desc: "Beautiful screens that work on any device.",
                delay: "0s" 
              },
              { 
                icon: Database, 
                title: "Memory", 
                subtitle: "(Database)", 
                desc: "Stores all your data safely and organized.",
                delay: "0.1s" 
              },
              { 
                icon: Brain, 
                title: "Brain", 
                subtitle: "(Rules)", 
                desc: "Business logic you can change anytime.",
                delay: "0.2s" 
              },
              { 
                icon: Zap, 
                title: "Auto-Tasks", 
                subtitle: "", 
                desc: "Background work like emails and notifications.",
                delay: "0.3s" 
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glow-card rounded-2xl p-8 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                  <item.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                {item.subtitle && <p className="text-sm text-muted-foreground mb-3">{item.subtitle}</p>}
                <p className="text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FEATURES */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Features
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
              Everything You Need <span className="gradient-text">to Launch</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {[
              { 
                icon: Shield, 
                title: "Login System", 
                desc: "Auth, Password Reset, Social Login—all working out of the box." 
              },
              { 
                icon: Zap, 
                title: "Payments", 
                desc: "Subscriptions & one-time payments built-in and ready to accept." 
              },
              { 
                icon: Settings, 
                title: "Admin Dashboard", 
                desc: "Manage users and data instantly with a complete admin panel." 
              },
              { 
                icon: CheckCircle, 
                title: "Security", 
                desc: "Validated inputs, protected against attacks, enterprise-grade." 
              },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-5 glow-card p-6 rounded-2xl group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="text-lg font-bold text-foreground mb-2">{item.title}</h4>
                  <p className="text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button size="lg" className="text-lg px-8 py-6 group" asChild>
              <Link to="/pricing">
                See Pricing
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
