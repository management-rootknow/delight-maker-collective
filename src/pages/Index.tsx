import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Shield, CreditCard, CheckCircle, Clock, DollarSign } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <div className="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-2 rounded-full">
                95% Complete. 100% Production-Ready.
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                While Others Generate Code, TRM Ships Products.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                TRM generates complete, production-ready applications in hours. Authentication, payments, admin dashboard—all working, all included. Zero coding required.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base px-8">
                  <Link to="/app">Start Building Now</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8">
                  <Link to="/platform">See How It Works</Link>
                </Button>
              </div>
              
              {/* Stats */}
              <div className="flex flex-wrap gap-8 pt-4">
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">95% Complete</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">2-4 Hours</span>
                </div>
                <div className="flex items-center gap-2">
                  <DollarSign className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">90% Cheaper</span>
                </div>
              </div>
            </div>
            <div className="relative animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-2xl p-4 lg:p-8">
                <div className="bg-card rounded-xl shadow-2xl overflow-hidden border border-border">
                  <div className="bg-muted px-4 py-3 flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 rounded-full bg-destructive/60"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400/60"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400/60"></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2">TRM Dashboard</span>
                  </div>
                  <div className="p-6 space-y-4">
                    <div className="h-8 bg-muted rounded w-1/2"></div>
                    <div className="grid grid-cols-3 gap-4">
                      <div className="h-20 bg-primary/10 rounded"></div>
                      <div className="h-20 bg-primary/10 rounded"></div>
                      <div className="h-20 bg-primary/10 rounded"></div>
                    </div>
                    <div className="h-32 bg-muted rounded"></div>
                    <div className="flex gap-2">
                      <div className="h-8 bg-primary/20 rounded flex-1"></div>
                      <div className="h-8 bg-muted rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The 60% Problem
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              AI shouldn't give you homework. It should give you products.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {/* Others */}
            <div className="bg-card rounded-xl p-8 border border-destructive/30">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-destructive">✗</span> Other AI Tools
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 60% complete - you code the rest</li>
                <li>• Prototype only, not production-ready</li>
                <li>• Credit burnout pricing</li>
                <li>• 1-2 weeks to finish manually</li>
              </ul>
            </div>
            
            {/* TRM */}
            <div className="bg-card rounded-xl p-8 border border-primary">
              <h3 className="text-xl font-semibold text-foreground mb-4 flex items-center gap-2">
                <span className="text-primary">✓</span> TRM
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li>• 95% complete, you customize the 5%</li>
                <li>• Production-ready from day one</li>
                <li>• Fixed, predictable pricing</li>
                <li>• Deploy in 2-4 hours</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Production-First Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Every generated app has: error boundaries, retry logic, circuit breakers, health checks, observability.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                GoRules Business Logic
              </h3>
              <p className="text-muted-foreground">
                External, configurable business rules. Governance, adaptability, and enterprise readiness—not hardcoded logic.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Trigger.dev Workflows
              </h3>
              <p className="text-muted-foreground">
                Async workflows, sagas, compensating transactions. Background jobs that actually work in production.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Stripe Integration
              </h3>
              <p className="text-muted-foreground">
                Payment processing, subscription management, and billing—all built-in and working from day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Audience Messages */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Built for Everyone
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">For Non-Technical Founders</h3>
              <p className="text-muted-foreground">
                You don't need to hire developers. TRM builds your entire SaaS platform—authentication, payments, dashboards—in hours. 90% cheaper than hiring devs, 300x faster, zero coding required.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">For Technical Founders</h3>
              <p className="text-muted-foreground">
                TRM generates production-grade architecture: GoRules for business logic, Trigger.dev for async, Hasura for real-time, 30+ normalized tables. This isn't toy code. This is what senior engineers architect, but automated.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">For Agencies</h3>
              <p className="text-muted-foreground">
                Deliver 10x more projects without hiring. TRM generates 95% complete apps. Your team customizes the 5% that makes each client unique. Stop being a "finishing service" for AI tools.
              </p>
            </div>
            
            <div className="bg-card rounded-xl p-8 border border-border">
              <h3 className="text-lg font-semibold text-primary mb-3">For Enterprises</h3>
              <p className="text-muted-foreground">
                TRM-generated apps meet enterprise standards: external business rules (governance), async workflows (reliability), ACID transactions (safety), audit logs (compliance). Deploy to production day one.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Stop Finishing AI's Homework
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Ship products, not prototypes. From idea to production in hours, not months.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-base px-8">
            <Link to="/app">Start Building Now</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
