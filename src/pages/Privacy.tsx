import Layout from "@/components/layout/Layout";

const Privacy = () => {
  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-background">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground mb-12">Last Updated: December 2025</p>

          <div className="prose prose-gray max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">1. Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                RootKnow Global Inc. ("we", "our", or "us") operates the rootknow.com website and 
                RootKnow application (the "Service"). We are committed to protecting your privacy. 
                This Privacy Policy explains how we collect, use, disclose, and safeguard your 
                information when you visit our website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">2. Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect information about you in a variety of ways. The information we may 
                collect on the Site includes:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Personal Data: Name, email address, phone number</li>
                <li>Account Information: Username, password (encrypted)</li>
                <li>Usage Data: Pages visited, time spent, clicks, referral source</li>
                <li>Device Information: Browser type, IP address, operating system</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">3. Use of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Provide and maintain the Service</li>
                <li>Send you updates and promotions (with your consent)</li>
                <li>Monitor and analyze usage trends</li>
                <li>Detect, prevent and address fraud</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">4. Security of Your Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use administrative, technical, and physical security measures to protect your 
                information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">5. Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may use Stripe for payment processing and AWS for data hosting. These third 
                parties have their own privacy policies that you should review.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">6. Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>Access your personal data</li>
                <li>Correct inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-foreground mb-4">7. Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have questions about this Privacy Policy, please contact us at:{" "}
                <a href="mailto:support@rootknow.com" className="text-primary hover:underline">
                  support@rootknow.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Privacy;
