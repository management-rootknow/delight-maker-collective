import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, X } from "lucide-react";
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
      name: "STARTER",
      price: "$0",
      billing: "per month",
      subtext: "Try it free",
      features: ["1 Project", "Basic Templates", "Community Support", "Public Deployment"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "PROFESSIONAL",
      price: "$800",
      billing: "one-time",
      subtext: "Per project, not per month",
      features: [
        "95% Complete App",
        "Full Tech Stack",
        "Authentication & Payments",
        "Admin Dashboard",
        "Background Jobs",
        "Priority Support",
        "You Own the Code",
      ],
      cta: "Start Building",
      highlighted: true,
      badge: "Best Value",
    },
    {
      name: "ENTERPRISE",
      price: "Contact",
      billing: "Sales",
      subtext: "Custom solutions",
      features: [
        "Unlimited Projects",
        "Custom Ontology Mapping",
        "On-premise Deployment",
        "SLA Support (99.9%)",
        "Dedicated Account Manager",
        "Custom Integrations",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const comparison = [
    { feature: "Completeness", trm: "95%", others: "60%" },
    { feature: "Time to Deploy", trm: "2-4 hours", others: "1-2 weeks" },
    { feature: "Pricing Model", trm: "Fixed, one-time", others: "Credit burnout" },
    { feature: "Business Rules", trm: "External (GoRules)", others: "Hardcoded" },
    { feature: "Async Workflows", trm: "Trigger.dev", others: "Blocking" },
    { feature: "Code Ownership", trm: "100% yours", others: "Varies" },
  ];

  const faqs = [
    {
      question: "Why one-time pricing instead of subscription?",
      answer: "You pay once, you own the code forever. No credit burnout, no monthly surprises. Traditional development costs $50k+. TRM gives you production-ready code for $800.",
    },
    {
      question: "What if TRM goes away?",
      answer: "You own the generated code. It's your repo. If TRM disappeared tomorrow, you have a working app using standard tech stack (Next.js, PostgreSQL). Any dev can maintain it.",
    },
    {
      question: "Can TRM integrate with [specific service]?",
      answer: "If it has an API, yes. TRM generates standard code—add any API call you need. Common integrations (Stripe, email, analytics) are built-in.",
    },
    {
      question: "My industry is unique, this won't work",
      answer: "Most apps are: users, content, transactions, permissions. The business logic is unique—that's why TRM uses GoRules for external configuration.",
    },
    {
      question: "How secure is TRM-generated code?",
      answer: "Multi-layer security: input validation (Zod), SQL injection prevention, XSS protection, CSRF tokens, rate limiting. You own the code—run your own security audit.",
    },
    {
      question: "What's the catch?",
      answer: "No catch. The economics are different: Traditional = 1 app per 3 months. TRM = 1 app per 4 hours. We trade time for volume—more apps at accessible pricing.",
    },
  ];

  return (
    <Layout>
      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Fixed Pricing. No Credit Burnout.
            </h1>
            <p className="text-lg text-muted-foreground">
              Pay once, own forever. 90% cheaper than hiring developers.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`relative bg-card rounded-xl p-8 border-2 ${
                  plan.highlighted
                    ? "border-primary shadow-lg scale-105"
                    : "border-border"
                }`}
              >
                {plan.badge && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full">
                      {plan.badge}
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-sm font-semibold text-muted-foreground mb-2">
                    {plan.name}
                  </h3>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground">/{plan.billing}</span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-1">{plan.subtext}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <Check className="w-4 h-4 text-primary flex-shrink-0" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button
                  variant={plan.highlighted ? "default" : "outline"}
                  className="w-full"
                  asChild
                >
                  <Link to={plan.name === "ENTERPRISE" ? "mailto:support@rootknow.com" : "/app"}>
                    {plan.cta}
                  </Link>
                </Button>
              </div>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-foreground text-center mb-8">
              TRM vs Others
            </h2>
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <div className="grid grid-cols-3 bg-muted/50 p-4 font-semibold text-foreground">
                <div>Feature</div>
                <div className="text-center text-primary">TRM</div>
                <div className="text-center">Others</div>
              </div>
              {comparison.map((row, index) => (
                <div key={index} className="grid grid-cols-3 p-4 border-t border-border">
                  <div className="text-muted-foreground">{row.feature}</div>
                  <div className="text-center font-medium text-foreground flex items-center justify-center gap-1">
                    <Check className="w-4 h-4 text-primary" />
                    {row.trm}
                  </div>
                  <div className="text-center text-muted-foreground flex items-center justify-center gap-1">
                    <X className="w-4 h-4 text-destructive/60" />
                    {row.others}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 lg:py-24 bg-muted/30">
        <div className="container max-w-2xl">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Frequently Asked Questions
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-medium text-foreground">
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
