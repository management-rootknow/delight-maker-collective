import Layout from "@/components/layout/Layout";
import { User, Target, Zap, Lightbulb } from "lucide-react";

const About = () => {
  return (
    <Layout>
      {/* Mission Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About RootKnow
            </h1>
            <p className="text-xl text-muted-foreground">
              The Instant Software Engine for Professionals.
            </p>
          </div>

          {/* Mission */}
          <div className="bg-card rounded-xl p-8 lg:p-12 border border-primary mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Target className="w-6 h-6 text-primary" />
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              RootKnow allows businesses to generate <span className="text-primary font-semibold">production-ready</span> internal tools and workflows in minutes. Powered by our proprietary Professional Knowledge Graph, we deliver 95% complete applications with authentication, payments, business logic, admin dashboard, and deployment—in 2-4 hours, without requiring any manual coding.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-card rounded-xl p-8 lg:p-12 border border-border mb-8">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Lightbulb className="w-6 h-6 text-primary" />
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We believe anyone with a business idea should be able to launch a production-ready SaaS platform without hiring developers, without learning to code, and without spending months or $50k. RootKnow democratizes software development for professionals in every industry.
            </p>
          </div>

          {/* What We Do */}
          <div className="bg-card rounded-xl p-8 lg:p-12 border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
              <Zap className="w-6 h-6 text-primary" />
              What We Do
            </h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Generate complete, production-ready applications from business requirements</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Include all essential features: authentication, payments, admin dashboards, workflows</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Deliver enterprise-grade architecture with security, compliance, and scalability</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>Provide full code ownership—you own 100% of what we generate</span>
              </li>
            </ul>
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
                Researcher and Entrepreneur with extensive experience in career development, sociology, 
                and AI applications in professional contexts. Founded RootKnow to bridge the gap between 
                business ideas and production-ready software—empowering professionals across industries 
                to build without barriers.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
