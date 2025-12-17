import Layout from "@/components/layout/Layout";
import { ArrowRight, Brain, Database, Cpu, Zap, Shield, Settings, Cloud, CheckCircle } from "lucide-react";

const Platform = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              The 4-Organ Architecture
            </h1>
            <p className="text-lg text-muted-foreground">
              Speed without architecture is just fast failure. RootKnow generates both.
            </p>
          </div>

          {/* 4-Organ System */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">UI (Skin)</h3>
              <p className="text-sm text-muted-foreground">
                Beautiful, responsive interfaces with modern React
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Database className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Data (Bones)</h3>
              <p className="text-sm text-muted-foreground">
                30+ normalized tables with real-time GraphQL
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Brain (Logic)</h3>
              <p className="text-sm text-muted-foreground">
                External, configurable business rules engine
              </p>
            </div>

            <div className="bg-card rounded-xl p-6 border border-border text-center">
              <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">Nerves (Async)</h3>
              <p className="text-sm text-muted-foreground">
                Workflows, sagas & background jobs
              </p>
            </div>
          </div>

          {/* Three Steps */}
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-muted-foreground">From idea to production in three simple steps.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 relative max-w-4xl mx-auto">
            {/* Arrows (desktop only) */}
            <div className="hidden md:flex absolute top-1/2 left-1/3 -translate-y-1/2 -translate-x-1/2">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>
            <div className="hidden md:flex absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2">
              <ArrowRight className="w-8 h-8 text-primary" />
            </div>

            {/* Step 1 */}
            <div className="bg-card rounded-xl p-8 border border-border text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Define Your App
              </h3>
              <p className="text-muted-foreground">
                Describe your SaaS idea. E-commerce, marketplace, or custom workflow.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-xl p-8 border border-border text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                RootKnow Generates 95%
              </h3>
              <p className="text-muted-foreground">
                Full architecture: auth, payments, admin, workflows—production-ready in hours.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-xl p-8 border border-border text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Customize the 5%
              </h3>
              <p className="text-muted-foreground">
                Add your unique differentiators. Deploy immediately with real users.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What's Included */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What You Get (95% Complete)
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
              <div key={index} className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
                <item.icon className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
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
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Production-First DNA
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
              <div key={index} className="flex items-center gap-3 p-3 bg-card rounded-lg border border-border">
                <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
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
