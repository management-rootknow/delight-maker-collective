import Layout from "@/components/layout/Layout";
import { Target, Zap, Lightbulb, Heart, Code, Globe } from "lucide-react";
import founderImage from "@/assets/founder.png";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container max-w-4xl relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              <span className="gradient-text">About</span>
              <br />
              <span className="text-foreground">RootKnow</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              The Instant Software Engine for Professionals.
            </p>
          </div>

          {/* Mission */}
          <div className="glow-card rounded-xl p-8 lg:p-12 mb-8 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Target className="w-4 h-4 text-primary-foreground" />
              </div>
              Our Mission
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              To empower domain experts and enterprises to transform professional knowledge into production-ready software instantly, eliminating the gap between business logic and technical execution.
            </p>
          </div>

          {/* Vision */}
          <div className="glow-card rounded-xl p-8 lg:p-12 mb-8 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Lightbulb className="w-4 h-4 text-primary-foreground" />
              </div>
              Our Vision
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              A future where software creation is driven by industry expertise, not coding constraints. We aim to be the global infrastructure where professional knowledge powers the world's applications.
            </p>
          </div>

          {/* What We Do */}
          <div className="glow-card rounded-xl p-8 lg:p-12 mb-16 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-bold text-foreground mb-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-primary-foreground" />
              </div>
              What We Do
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { icon: Code, text: "Build complete, working apps from your business idea" },
                { icon: Globe, text: "Include everything you need: login, payments, dashboard, auto-tasks" },
                { icon: Zap, text: "Create professional apps that are secure and grow with you" },
                { icon: Heart, text: "You own 100% of your app—it's completely yours" },
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3 p-4 bg-muted/30 rounded-lg">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-muted-foreground">{item.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Leadership Section */}
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Leadership
            </span>
            <h2 className="text-3xl font-bold text-foreground">
              Meet Our <span className="gradient-text">Founder</span>
            </h2>
          </div>

          <div className="glow-card rounded-xl p-8 lg:p-10 max-w-lg mx-auto animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <div className="flex flex-col items-center text-center">
              <div className="w-32 h-32 rounded-full mb-6 ring-4 ring-primary/20 overflow-hidden">
                <img 
                  src={founderImage} 
                  alt="Ba Tuan Nguyen - Founder & CEO" 
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-1">Ba Tuan Nguyen</h3>
              <p className="gradient-text font-semibold mb-4">Founder & CEO</p>
              <p className="text-muted-foreground leading-relaxed">
                Ba Tuan Nguyen believes that if you can explain your job, you can build software for it. He created RootKnow to replace complex coding with professional understanding. Now, your industry knowledge is the only tool you need to launch a real technology business.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;