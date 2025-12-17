import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
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
      subtext: "Free forever",
      features: ["1 Project", "Basic Ontology Access", "Community Support"],
      cta: "Get Started",
      highlighted: false,
    },
    {
      name: "PROFESSIONAL",
      price: "$49",
      billing: "per month",
      subtext: "Billed monthly",
      features: [
        "Unlimited Projects",
        "Full Ontology Access",
        "Custom Domain",
        "Priority Email Support",
        "Monthly billing via Stripe",
      ],
      cta: "Get Started",
      highlighted: true,
      badge: "Most Popular",
    },
    {
      name: "ENTERPRISE",
      price: "Contact",
      billing: "Sales",
      subtext: "For large organizations",
      features: [
        "Unlimited Everything",
        "Custom Ontology Mapping",
        "SLA Support (99.9% uptime)",
        "On-premise deployment",
        "Dedicated account manager",
      ],
      cta: "Contact Sales",
      highlighted: false,
    },
  ];

  const faqs = [
    {
      question: "Can I cancel anytime?",
      answer: "Yes, subscriptions are billed monthly via Stripe. You can cancel at any time.",
    },
    {
      question: "Is my data secure?",
      answer: "Yes, we use industry-standard AES-256 encryption and secure hosting on AWS.",
    },
    {
      question: "Do you offer discounts for annual billing?",
      answer: "Contact our sales team for custom pricing and annual plans.",
    },
  ];

  return (
    <Layout>
      {/* Pricing Section */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Simple Subscription Pricing
            </h1>
            <p className="text-lg text-muted-foreground">
              Choose the plan that works for you.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
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
