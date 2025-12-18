import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { ArrowRight, Mail, MapPin, Building } from "lucide-react";
import Layout from "@/components/layout/Layout";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Request Submitted",
      description: "Thank you for your interest. Our team will contact you within 24 hours.",
    });
    
    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }}></div>
        
        <div className="container relative">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6 animate-fade-in">
              Request an{" "}
              <span className="gradient-text">Executive Briefing</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground animate-fade-in" style={{ animationDelay: "0.1s" }}>
              Discover how RootKnow can transform your enterprise software strategy. Our team will provide a personalized demonstration tailored to your industry.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            {/* Contact Form */}
            <div className="bg-card rounded-2xl p-8 border border-border/50 glow-card animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <h2 className="text-2xl font-semibold text-foreground mb-6">Schedule Your Briefing</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium text-foreground mb-2">
                      First Name *
                    </label>
                    <Input 
                      id="firstName" 
                      name="firstName" 
                      required 
                      placeholder="John"
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium text-foreground mb-2">
                      Last Name *
                    </label>
                    <Input 
                      id="lastName" 
                      name="lastName" 
                      required 
                      placeholder="Smith"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Work Email *
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company *
                  </label>
                  <Input 
                    id="company" 
                    name="company" 
                    required 
                    placeholder="Company Inc."
                  />
                </div>

                <div>
                  <label htmlFor="title" className="block text-sm font-medium text-foreground mb-2">
                    Job Title
                  </label>
                  <Input 
                    id="title" 
                    name="title" 
                    placeholder="CEO, CTO, VP Engineering..."
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Tell us about your needs
                  </label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={4}
                    placeholder="Describe your current challenges and what you're looking to achieve..."
                  />
                </div>

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full text-base glow-primary group"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Request Briefing"}
                  <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Email</p>
                      <a href="mailto:management@rootknow.com" className="text-muted-foreground hover:text-primary transition-colors">
                        management@rootknow.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <Building className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Company</p>
                      <p className="text-muted-foreground">RootKnow Global Inc.</p>
                      <p className="text-sm text-muted-foreground">Delaware C-Corporation</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">Headquarters</p>
                      <p className="text-muted-foreground">8 The Green, Suite R</p>
                      <p className="text-muted-foreground">Dover, DE 19901, USA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-card rounded-2xl p-8 border border-border/50">
                <h3 className="text-xl font-semibold text-foreground mb-4">Regions of Focus</h3>
                <div className="flex flex-wrap gap-2">
                  {["Singapore", "Vietnam", "Tokyo", "Dubai", "London", "New York"].map((region) => (
                    <span 
                      key={region}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {region}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-primary/10 via-purple-500/10 to-primary/10 rounded-2xl p-8 border border-primary/20">
                <h3 className="text-xl font-semibold text-foreground mb-3">What to Expect</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Personalized demo for your industry
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    ROI analysis and implementation roadmap
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Technical deep-dive with our architects
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                    Response within 24 hours
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
