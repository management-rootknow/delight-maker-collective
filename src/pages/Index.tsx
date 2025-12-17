import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Zap, Shield, CreditCard } from "lucide-react";
import Layout from "@/components/layout/Layout";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-background">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                The Instant Software Engine for Professionals.
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-xl">
                RootKnow allows businesses to generate production-ready internal tools and workflows in minutes. Powered by our proprietary Professional Knowledge Graph.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" asChild className="text-base px-8">
                  <Link to="/app">Start Free Trial</Link>
                </Button>
                <Button size="lg" variant="outline" asChild className="text-base px-8">
                  <Link to="/platform">Learn More</Link>
                </Button>
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
                    <span className="text-xs text-muted-foreground ml-2">RootKnow Dashboard</span>
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

      {/* Features Section */}
      <section className="py-20 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Enterprise-Grade Architecture
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Built with the tools and security that modern businesses demand.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature Card 1 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                AI-Powered Generation
              </h3>
              <p className="text-muted-foreground">
                Automatically generate database schemas and API endpoints based on industry standards.
              </p>
            </div>

            {/* Feature Card 2 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <Shield className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Built-in Compliance
              </h3>
              <p className="text-muted-foreground">
                Includes role-based access control (RBAC) and audit logs out of the box.
              </p>
            </div>

            {/* Feature Card 3 */}
            <div className="bg-card rounded-xl p-8 border border-border shadow-sm hover:shadow-md transition-shadow animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-6">
                <CreditCard className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Integrated Payments
              </h3>
              <p className="text-muted-foreground">
                Seamless Stripe integration for subscription management.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Ready to get started?
          </h2>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Join thousands of professionals building with RootKnow.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-base px-8">
            <Link to="/app">Start Free Trial</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
