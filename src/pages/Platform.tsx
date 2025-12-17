import Layout from "@/components/layout/Layout";
import { ArrowRight, Cpu, Settings, Database, Shield, Cloud } from "lucide-react";

const Platform = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              How RootKnow Works
            </h1>
            <p className="text-lg text-muted-foreground">
              From idea to production in three simple steps.
            </p>
          </div>

          {/* Three Steps */}
          <div className="grid md:grid-cols-3 gap-8 relative">
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
                Define Intent
              </h3>
              <p className="text-muted-foreground">
                Select your industry (e.g., Logistics, HR, Finance) from our library.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-card rounded-xl p-8 border border-border text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Engine Processing
              </h3>
              <p className="text-muted-foreground">
                Our engine maps your requirements against thousands of professional workflows.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-card rounded-xl p-8 border border-border text-center">
              <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                Deploy
              </h3>
              <p className="text-muted-foreground">
                Launch a fully hosted web application instantly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              The Tech Stack
            </h2>
            <p className="text-lg text-muted-foreground">
              Enterprise-grade technology powering your applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
              <Cpu className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Workflow Engine</h4>
                <p className="text-sm text-muted-foreground">Powered by Trigger.dev patterns.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
              <Settings className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Business Rules</h4>
                <p className="text-sm text-muted-foreground">Configurable logic via GoRules.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
              <Cloud className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Infrastructure</h4>
                <p className="text-sm text-muted-foreground">Hosted on AWS / Vercel.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
              <Database className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Database</h4>
                <p className="text-sm text-muted-foreground">Secure, encrypted storage.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-card p-6 rounded-lg border border-border">
              <Shield className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h4 className="font-semibold text-foreground mb-1">Security</h4>
                <p className="text-sm text-muted-foreground">Enterprise-grade encryption (AES-256).</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Platform;
