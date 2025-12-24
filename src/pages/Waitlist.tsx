import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { ArrowLeft, CheckCircle, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const Waitlist = () => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    setLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setSubmitted(true);
    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <header className="container py-6">
        <Link to="/" className="flex items-center gap-3 group w-fit">
          <img src={logo} alt="RootKnow" className="h-10 w-10 rounded-lg shadow-md" />
          <span className="text-xl font-bold gradient-text">RootKnow</span>
        </Link>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4">
        <div className="w-full max-w-md">
          {!submitted ? (
            <div className="space-y-8">
              {/* Icon */}
              <div className="flex justify-center">
                <div className="p-4 rounded-2xl bg-primary/10 border border-primary/20">
                  <Sparkles className="h-10 w-10 text-primary" />
                </div>
              </div>

              {/* Text */}
              <div className="text-center space-y-3">
                <h1 className="text-3xl md:text-4xl font-bold">Join the Waitlist</h1>
                <p className="text-muted-foreground text-lg">
                  Get priority access when we launch
                </p>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="email"
                  placeholder="Enter your work email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="h-12 text-base"
                />
                <Button 
                  type="submit" 
                  className="w-full h-12 text-base glow-primary"
                  disabled={loading}
                >
                  {loading ? "Submitting..." : "Request Early Access"}
                </Button>
              </form>

              {/* Trust indicators */}
              <p className="text-center text-sm text-muted-foreground">
                Join 500+ enterprise leaders on the waitlist
              </p>
            </div>
          ) : (
            <div className="text-center space-y-6">
              <div className="flex justify-center">
                <div className="p-4 rounded-full bg-green-500/10 border border-green-500/20">
                  <CheckCircle className="h-12 w-12 text-green-500" />
                </div>
              </div>
              <div className="space-y-3">
                <h2 className="text-2xl font-bold">You're on the list!</h2>
                <p className="text-muted-foreground">
                  We'll notify you at <span className="text-foreground font-medium">{email}</span> when early access is available.
                </p>
              </div>
              <Button variant="outline" asChild>
                <Link to="/">
                  <ArrowLeft className="mr-2 h-4 w-4" />
                  Back to Home
                </Link>
              </Button>
            </div>
          )}
        </div>
      </main>

      {/* Footer */}
      <footer className="container py-6 text-center text-sm text-muted-foreground">
        <p>© 2025 RootKnow. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Waitlist;
