import Layout from "@/components/layout/Layout";
import { User } from "lucide-react";

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
          </div>

          <div className="bg-card rounded-xl p-8 lg:p-12 border border-border mb-16">
            <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
            <p className="text-xl text-primary font-medium mb-6">
              To democratize software creation for professionals worldwide.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              RootKnow Global Inc. is a Delaware-incorporated software company dedicated to 
              bridging the gap between professional expertise and software development. We believe 
              anyone with domain knowledge should be able to create powerful business applications 
              without learning to code.
            </p>
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
                architecture and semantic web technologies. Founded RootKnow Global Inc. to 
                democratize software creation and empower non-technical professionals to build 
                enterprise-grade applications.
              </p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
