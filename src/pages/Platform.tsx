import Layout from "@/components/layout/Layout";
import { ArrowRight, Brain, Database, Cpu, Zap, Shield, Settings, Cloud, CheckCircle, Sparkles, Users, Rocket } from "lucide-react";

const Platform = () => {
  return (
    <Layout>
      {/* Hero - Core IP Power */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />
        
        <div className="container relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 shimmer">
              Core Power
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">2 Proprietary IPs</span>
              <br />
              <span className="text-foreground">That Make The Difference</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Combining <span className="text-primary font-semibold">Career Ontology<sup className="text-xs">™</sup></span> + <span className="text-purple-500 font-semibold">Engeni<sup className="text-xs">™</sup></span> = 
              <br className="hidden md:block" />
              <span className="gradient-text font-bold"> Professional Apps in Seconds</span>
            </p>
            <p className="text-lg text-muted-foreground">
              Better than any other AI app builder
            </p>
          </div>

          {/* 2 Core IPs */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-20">
            {/* Career Ontology */}
            <div className="glow-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Career Ontology<sup className="text-sm">™</sup></h3>
                <p className="text-lg text-primary font-semibold mb-3">We Know Your Industry</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Already knows how your job works</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Understands real problems you face daily</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Built from thousands of real use cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Researched from real professional needs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Engeni AI */}
            <div className="glow-card rounded-2xl p-8 group hover:scale-[1.02] transition-all duration-500 animate-fade-in-up relative overflow-hidden" style={{ animationDelay: "0.15s" }}>
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-700 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Engeni<sup className="text-sm">™</sup> AI Engine</h3>
                <p className="text-lg text-purple-500 font-semibold mb-3">Smart App Builder</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Creates working apps, not just demos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Builds complete app structure automatically</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Learns from thousands of successful projects</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Fast and secure from day one</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* The Magic Combination */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-4 px-8 py-4 bg-gradient-to-r from-primary/20 via-purple-500/20 to-primary/20 rounded-full border border-primary/30">
              <Users className="w-8 h-8 text-primary" />
              <span className="text-2xl font-bold text-foreground">+</span>
              <Brain className="w-8 h-8 text-purple-500" />
              <span className="text-2xl font-bold text-foreground">=</span>
              <Sparkles className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-8 mb-4">
              <span className="gradient-text">Apps Built By Professionals, For Professionals</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Not just beautiful apps, but <span className="text-primary font-semibold">built for your job</span>, 
              <span className="text-purple-500 font-semibold"> solving real problems</span>, 
              and <span className="text-foreground font-semibold">ready to use right away</span>
            </p>
          </div>

          {/* Why Better Than Vibe Coding */}
          <div className="glow-card rounded-2xl p-8 md:p-12 max-w-5xl mx-auto mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-purple-500/10 text-purple-500 rounded-full text-sm font-medium mb-4">
                  Real Comparison
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  Why We're <span className="gradient-text">Better?</span>
                </h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-muted-foreground flex items-center gap-2">
                    <span className="w-8 h-8 bg-muted rounded-full flex items-center justify-center text-sm">❌</span>
                    Other AI Tools
                  </h4>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Generic apps—doesn't know your job</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>You have to explain everything yourself</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Demo-only, needs lots of fixing</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Missing industry best practices</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm">✓</span>
                    RootKnow
                  </h4>
                  <ul className="space-y-3 text-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Already knows</strong> how your job works</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Auto-adds</strong> common features for your industry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Ready to use</strong> from the start</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Built with</strong> best practices from real projects</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4-Organ Architecture */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Architecture
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">4 Parts</span>
              <span className="text-foreground"> of Every App</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Fast without structure means fast failure. RootKnow gives you both.
            </p>
          </div>

          {/* 4-Organ System */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {[
              { icon: Cpu, title: "Look (Interface)", desc: "Beautiful screens that work on any device", delay: "0s" },
              { icon: Database, title: "Memory (Database)", desc: "Stores all your data safely and organized", delay: "0.1s" },
              { icon: Brain, title: "Brain (Rules)", desc: "Business rules you can change anytime", delay: "0.2s" },
              { icon: Zap, title: "Auto-Tasks", desc: "Background work like emails and notifications", delay: "0.3s" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="glow-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: item.delay }}
              >
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Three Steps to Your Custom SaaS */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Three Steps to Your Custom SaaS</h2>
            <p className="text-muted-foreground">Our process is simple: define, build, deploy.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              { 
                num: "01", 
                icon: Database,
                title: "Define Your Logic", 
                desc: "Simply enter your job role and the idea you want to solve in your profession. That's it." 
              },
              { 
                num: "02", 
                icon: Zap,
                title: "We Build Everything", 
                desc: "RootKnow instantly creates your full app—database, connections, and screens—all working together." 
              },
              { 
                num: "03", 
                icon: Rocket,
                title: "Launch & Earn", 
                desc: "Use it for yourself or sell it to others. We handle hosting and everything technical." 
              },
            ].map((step, index) => (
              <div 
                key={index} 
                className="glow-card rounded-xl p-8 group hover:scale-105 transition-all duration-300 animate-fade-in-up relative"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Step number with line */}
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-sm font-medium text-primary">{step.num}</span>
                  <div className="flex-1 h-px bg-gradient-to-r from-primary/50 to-transparent"></div>
                </div>
                
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-primary to-purple-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <step.icon className="w-7 h-7 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl" />
        
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
              { icon: Shield, title: "Login System", desc: "Email, social login, password reset—all working" },
              { icon: Database, title: "Database", desc: "Well-organized data storage with updates included" },
              { icon: Settings, title: "Admin Dashboard", desc: "Manage users, see stats, create reports" },
              { icon: Zap, title: "Payments", desc: "Accept payments, manage subscriptions easily" },
              { icon: Cloud, title: "Auto-Tasks", desc: "Emails, notifications, scheduled jobs" },
              { icon: Rocket, title: "Ready to Launch", desc: "Everything set up for you to go live" },
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start gap-4 glow-card p-6 rounded-lg group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-purple-500 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-white" />
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

      {/* Built to Last */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Built to Last
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="gradient-text">Real Apps</span>, Not Demos
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need for a professional, reliable app.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            {[
              "Handles errors without crashing",
              "Retries automatically when something fails",
              "Stays stable even when other services are down",
              "Checks itself to make sure everything works",
              "Easy to monitor and track issues",
              "Your data stays safe and accurate",
              "Validates all user input",
              "Protected against common attacks",
              "Limits spam and abuse",
              "Tracks all activity for records",
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-center gap-3 p-4 glow-card rounded-lg group hover:scale-[1.02] transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="w-8 h-8 bg-gradient-to-br from-primary to-purple-500 rounded-full flex items-center justify-center flex-shrink-0">
                  <CheckCircle className="w-4 h-4 text-white" />
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
