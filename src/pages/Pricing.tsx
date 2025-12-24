import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X, Sparkles } from "lucide-react";
import Layout from "@/components/layout/Layout";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Pricing = () => {
  const plans = [
    {
      name: "EXPLORER",
      price: "$0",
      billing: "forever",
      subtext: "Experience the power",
      features: [
        "1 Demo Project",
        "Industry Templates",
        "Community Support",
        "See Your App in Action",
      ],
      cta: "Request Early Access",
      highlighted: false,
      link: "/waitlist",
    },
    {
      name: "PROFESSIONAL",
      price: "$99",
      billing: "per month",
      subtext: "For individual experts",
      features: [
        "3 Live Projects",
        "Full-Stack Apps (95% Ready)",
        "Login & User Management",
        "Payment Integration",
        "Automated Tasks (Email, Reports)",
        "Priority Support",
        "Export & Own Your Code",
      ],
      cta: "Request Early Access",
      highlighted: true,
      badge: "Most Popular",
      link: "/waitlist",
    },
    {
      name: "ENTERPRISE",
      price: "Custom",
      billing: "pricing",
      subtext: "For teams & organizations",
      features: [
        "Unlimited Projects",
        "Custom Industry Configuration",
        "Private Cloud Deployment",
        "99.9% Uptime SLA",
        "Dedicated Success Manager",
        "Custom Integrations & API",
        "Team Collaboration",
      ],
      cta: "Contact Sales",
      highlighted: false,
      link: "mailto:management@rootknow.com",
    },
  ];

  const comparison = [
    { feature: "Time to Launch", rootknow: "2-4 Hours", others: "4-8 Weeks" },
    { feature: "Development Cost", rootknow: "$99/mo", others: "$10K-$200K" },
    { feature: "App Completeness", rootknow: "95-98%", others: "60% (need more dev)" },
    { feature: "Success Rate", rootknow: "90%", others: "15%" },
    { feature: "Technical Skills Needed", rootknow: "None", others: "Developer Required" },
    { feature: "Code Ownership", rootknow: "100% Yours", others: "Depends" },
  ];

  const faqs = [
    {
      question: "I'm not technical. Can I really build an app?",
      answer: "Absolutely! RootKnow was built specifically for industry experts like you. If you can explain how your business works, RootKnow builds the app. No coding, no technical jargon—just your expertise.",
    },
    {
      question: "How is $99/month so cheap compared to hiring developers?",
      answer: "Traditional development costs $10,000-$200,000 and takes months. RootKnow uses AI + industry knowledge to generate 95% complete apps in hours. You get enterprise-quality software at a fraction of the cost.",
    },
    {
      question: "What happens to my app if I cancel?",
      answer: "You can export and own 100% of your code anytime. Your app continues to work independently. No lock-in, no hostage situations.",
    },
    {
      question: "Will this work for my specific industry?",
      answer: "RootKnow is built on Career Ontology™—a system that understands professional workflows across industries. Finance, healthcare, logistics, consulting—your domain expertise is the fuel.",
    },
    {
      question: "Is my business data secure?",
      answer: "Enterprise-grade security is built-in: encryption, role-based access, audit logs, and compliance-ready infrastructure. Your data stays yours.",
    },
    {
      question: "What's the catch?",
      answer: "No catch. Traditional dev: 85% failure rate, months of waiting, $50K+ cost. RootKnow: 90% success rate, 2-4 hours, $99/month. We win when you win.",
    },
  ];

  return (
    <Layout>
      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-background relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 mesh-gradient opacity-30" />
        <div className="absolute top-20 right-10 w-72 h-72 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        
        <div className="container relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              Pricing
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="gradient-text">Fixed Pricing.</span>
              <br />
              <span className="text-foreground">No Credit Burnout.</span>
            </h1>
            <p className="text-lg text-muted-foreground">
              Pay once, own forever. 90% cheaper than hiring developers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative rounded-xl p-8 transition-all duration-300 animate-fade-in-up ${
                  plan.highlighted
                    ? "glow-card scale-105 border-2 border-primary shadow-2xl"
                    : "glow-card hover:scale-[1.02]"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-primary to-accent text-primary-foreground text-xs font-semibold px-4 py-1.5 rounded-full flex items-center gap-1">
                      <Sparkles className="w-3 h-3" />
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className={`text-4xl font-bold ${plan.highlighted ? 'gradient-text' : 'text-foreground'}`}>
                      {plan.price}
                    </span>
                    <span className="text-muted-foreground">/{plan.billing}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.subtext}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary-foreground" />
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className={`w-full ${plan.highlighted ? 'bg-gradient-to-r from-primary to-accent hover:opacity-90' : ''}`}
                  asChild
                >
                  <Link to={plan.link}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-3xl mx-auto animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              RootKnow vs <span className="gradient-text">Others</span>
            </h2>
            <div className="glow-card rounded-xl overflow-hidden">
              <div className="grid grid-cols-3 bg-gradient-to-r from-primary/20 to-accent/20 p-4 font-semibold text-foreground">
                <div>Feature</div>
                <div className="text-center gradient-text">RootKnow</div>
                <div className="text-center">Others</div>
              </div>
              {comparison.map((row, index) => (
                <div key={index} className="grid grid-cols-3 p-4 border-t border-border/50 hover:bg-muted/30 transition-colors">
                  <div className="text-muted-foreground">{row.feature}</div>
                  <div className="text-center font-medium text-foreground flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-primary-foreground" />
                    </div>
                    {row.rootknow}
                  </div>
                  <div className="text-center text-muted-foreground flex items-center justify-center gap-2">
                    <div className="w-5 h-5 bg-destructive/20 rounded-full flex items-center justify-center">
                      <X className="w-3 h-3 text-destructive" />
                    </div>
                    {row.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        
        <div className="container max-w-2xl relative z-10">
          <div className="text-center mb-12 animate-fade-in">
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
              FAQ
            </span>
            <h2 className="text-3xl font-bold text-foreground">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glow-card rounded-lg px-6 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="text-left font-medium text-foreground hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;