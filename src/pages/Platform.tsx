import Layout from "@/components/layout/Layout";
import { ArrowRight, Brain, Database, Cpu, Zap, Shield, Settings, Cloud, CheckCircle, Sparkles, Users, Rocket } from "lucide-react";

const Platform = () => {
  return (
    <Layout>
      {/* Pain Point Hero */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl floating" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl floating" style={{ animationDelay: "1s" }} />
        
        <div className="container relative z-10">
          {/* Market Opportunity Banner */}
          <div className="text-center mb-12 animate-fade-in">
            <div className="inline-flex flex-wrap items-center justify-center gap-4 md:gap-8 px-6 py-4 bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl border border-primary/20">
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold gradient-text">100M+</p>
                <p className="text-xs text-muted-foreground">Potential Users</p>
              </div>
              <div className="h-8 w-px bg-border hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-purple-500">70M</p>
                <p className="text-xs text-muted-foreground">Untapped Market</p>
              </div>
              <div className="h-8 w-px bg-border hidden md:block" />
              <div className="text-center">
                <p className="text-2xl md:text-3xl font-bold text-foreground">$89B</p>
                <p className="text-xs text-muted-foreground">No-Code Market by 2032</p>
              </div>
            </div>
          </div>

          <div className="text-center max-w-4xl mx-auto mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-destructive/10 text-destructive rounded-full text-sm font-medium mb-6">
              The Real Problem
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="text-foreground">You Know Your Job.</span>
              <br />
              <span className="gradient-text">But Can't Build Software For It.</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto">
              <span className="text-foreground font-semibold">85% of software projects fail.</span> Traditional development costs <span className="text-destructive font-semibold">$10,000 - $200,000</span> and takes <span className="text-destructive font-semibold">4-8 weeks</span>. 
              Other AI tools only give you <span className="text-muted-foreground">60-70% complete apps</span>—the rest is homework.
            </p>
            <p className="text-lg text-primary font-semibold">
              You have the expertise. We have the engine. Let's build.
            </p>
          </div>

          {/* Pain Points Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-20">
            {[
              { icon: Users, stat: "70M", label: "Professionals Left Behind", desc: "Have expertise but no tech skills to build software" },
              { icon: Zap, stat: "$50K+", label: "Can't Afford Developers", desc: "Traditional development is out of reach for most" },
              { icon: Shield, stat: "85%", label: "Projects Fail", desc: "Most software projects never see completion" },
              { icon: Rocket, stat: "8 Weeks", label: "Too Long to Wait", desc: "By the time it's done, the opportunity is gone" },
            ].map((item, index) => (
              <div 
                key={index}
                className="glow-card rounded-xl p-6 text-center group hover:scale-105 transition-all duration-300 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-destructive/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-destructive" />
                </div>
                <p className="text-2xl font-bold text-destructive mb-1">{item.stat}</p>
                <p className="text-sm font-semibold text-foreground mb-2">{item.label}</p>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Solution - Core IPs */}
          <div className="text-center mb-12">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6 shimmer">
              The Solution
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              <span className="gradient-text">2 Proprietary IPs</span>
              <span className="text-foreground"> That Change Everything</span>
            </h2>
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
                <p className="text-lg text-primary font-semibold mb-3">We Already Know Your Industry</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Understands finance, logistics, healthcare, real estate...</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Knows the workflows, pain points, and solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>Built from thousands of real professional use cases</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>No explaining needed—we speak your language</span>
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
                <p className="text-lg text-purple-500 font-semibold mb-3">95% Complete Apps, Not Demos</p>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Creates working apps with 20-30+ database tables</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Built-in payments, auth, admin dashboards</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Real-time updates, background tasks, everything</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-purple-500 flex-shrink-0 mt-0.5" />
                    <span>Production-ready from day one</span>
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

          {/* Comparison Stats */}
          <div className="glow-card rounded-2xl p-8 md:p-12 max-w-6xl mx-auto mb-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5" />
            <div className="relative z-10">
              <div className="text-center mb-10">
                <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
                  The Numbers Don't Lie
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-foreground">
                  RootKnow vs <span className="text-muted-foreground">Everyone Else</span>
                </h3>
              </div>
              
              {/* Stats Comparison Table */}
              <div className="grid md:grid-cols-3 gap-6 mb-10">
                <div className="text-center p-6 rounded-xl bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Time to Launch</p>
                  <p className="text-3xl font-bold gradient-text mb-1">2-4 Hours</p>
                  <p className="text-xs text-muted-foreground">vs 4-8 weeks traditional</p>
                  <p className="text-xs text-primary font-semibold mt-2">300x Faster</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Production Ready</p>
                  <p className="text-3xl font-bold gradient-text mb-1">95-98%</p>
                  <p className="text-xs text-muted-foreground">vs 60-70% competitors</p>
                  <p className="text-xs text-primary font-semibold mt-2">No Homework</p>
                </div>
                <div className="text-center p-6 rounded-xl bg-muted/50">
                  <p className="text-sm text-muted-foreground mb-2">Success Rate</p>
                  <p className="text-3xl font-bold gradient-text mb-1">90%</p>
                  <p className="text-xs text-muted-foreground">vs 15% traditional</p>
                  <p className="text-xs text-primary font-semibold mt-2">6x Higher</p>
                </div>
              </div>

              {/* Detailed Comparison */}
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-destructive flex items-center gap-2">
                    <span className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center text-sm">❌</span>
                    Other AI App Builders
                  </h4>
                  <ul className="space-y-3 text-muted-foreground text-sm">
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>60-70% complete—you finish the rest yourself</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>No payments, no auth, no admin dashboard</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Credit burns fast ($25-100/month consumed quickly)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Generic apps that don't understand your industry</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-destructive">•</span>
                      <span>Complex apps require significant manual work</span>
                    </li>
                  </ul>
                </div>
                
                <div className="space-y-4">
                  <h4 className="text-lg font-semibold text-primary flex items-center gap-2">
                    <span className="w-8 h-8 bg-primary/20 rounded-full flex items-center justify-center text-sm">✓</span>
                    RootKnow
                  </h4>
                  <ul className="space-y-3 text-foreground text-sm">
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>95-98% complete</strong>—just customize 5%</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Full stack:</strong> Payments, auth, admin, real-time</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Fixed pricing</strong>—no surprise credit burns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>Industry-aware:</strong> We know finance, logistics, healthcare...</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span><strong>20-30+ database tables</strong> with complex relationships</span>
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
