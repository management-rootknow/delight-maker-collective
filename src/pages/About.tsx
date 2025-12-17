import Layout from "@/components/layout/Layout";
import { User, Target, Zap, Shield, Award } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About TRM
            </h1>
            <p className="text-xl text-muted-foreground">
              The first and only AI platform that generates production-ready applications.
            </p>
          </div>

          {/* What TRM Is */}
          <div className="bg-card rounded-xl p-8 lg:p-12 border border-primary mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              TRM IS
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              The first and only AI platform that generates production-ready, full-stack applications with <span className="text-primary font-semibold">95% completeness</span>—authentication, payments, business logic, admin dashboard, and deployment—in 2-4 hours, without requiring any manual coding.
            </p>
          </div>

          {/* What TRM Is NOT */}
          <div className="bg-card rounded-xl p-8 lg:p-12 border border-border mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4">TRM IS NOT</h2>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-center gap-3">
                <span className="text-destructive">✗</span>
                A code assistant (not Cursor/Copilot)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive">✗</span>
                A prototype builder (not 60% complete like competitors)
              </li>
              <li className="flex items-center gap-3">
                <span className="text-destructive">✗</span>
                A toy generator (not 30-second widgets)
              </li>
            </ul>
          </div>

          {/* What TRM Enables */}
          <div className="bg-card rounded-xl p-8 lg:p-12 border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              TRM ENABLES
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Anyone with a business idea to launch a production-ready SaaS platform without hiring developers, without learning to code, and without spending months or $50k.
            </p>
          </div>

          {/* The Promise */}
          <div className="bg-primary/5 rounded-xl p-8 lg:p-12 border border-primary/20 mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-6 text-center">The Real Promise</h2>
            <div className="space-y-4 text-muted-foreground mb-6">
              <p>TRM's promise isn't "AI can build apps" (everyone knows this).</p>
              <p>TRM's promise isn't "build apps fast" (others do 30 seconds).</p>
              <p>TRM's promise isn't "build apps cheap" (free tools exist).</p>
            </div>
            <div className="bg-card rounded-lg p-6 border border-primary">
              <p className="text-lg text-foreground font-medium text-center">
                "You will ship to production. Not 'almost done.' Not 'prototype.' <span className="text-primary">Production</span>. With real users. Processing real payments. In the time it used to take to write requirements."
              </p>
            </div>
          </div>

          {/* Unfair Advantages */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">Our Unfair Advantages</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Shield className="w-5 h-5 text-primary" />
                  Architectural Thinking
                </h3>
                <p className="text-sm text-muted-foreground">
                  Competitors think in "features." TRM thinks in "systems." GoRules enables governance, adaptability, and enterprise readiness.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Award className="w-5 h-5 text-primary" />
                  Completeness as Culture
                </h3>
                <p className="text-sm text-muted-foreground">
                  Most AI tools celebrate "shipped fast." TRM celebrates "shipped complete." Every feature considers full lifecycle.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Target className="w-5 h-5 text-primary" />
                  The 5% Philosophy
                </h3>
                <p className="text-sm text-muted-foreground">
                  TRM generates 95% intentionally. The last 5% is where businesses differentiate. Customers want infrastructure, not commodification.
                </p>
              </div>
              
              <div className="bg-card rounded-xl p-6 border border-border">
                <h3 className="font-semibold text-foreground mb-2 flex items-center gap-2">
                  <Zap className="w-5 h-5 text-primary" />
                  Production-First DNA
                </h3>
                <p className="text-sm text-muted-foreground">
                  Every generated app has: error boundaries, retry logic, circuit breakers, health checks, observability. Production systems, not demos.
                </p>
              </div>
            </div>
          </div>

          {/* Leadership Section */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground">Meet Our Founder</h2>
          </div>

          <div className="bg-card rounded-xl p-8 border border-border max-w-md mx-auto">
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center mb-6">
                <User className="w-16 h-16 text-muted-foreground" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">Ba Tuan Nguyen</h3>
              <p className="text-primary font-medium mb-4">Founder & CEO</p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Software Engineer and Entrepreneur with over 10 years of experience in system 
                architecture and semantic web technologies. Founded TRM to solve the "60% problem"—giving 
                everyone the power to ship production-ready applications, not prototypes.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
