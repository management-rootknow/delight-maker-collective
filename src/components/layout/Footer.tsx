import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-12">
      <div className="container">
        <div className="flex flex-col items-center gap-6 text-center">
          {/* Company Name */}
          <div className="space-y-1">
            <p className="text-xl font-bold text-primary">
              RootKnow Global Inc.
            </p>
            <p className="text-sm text-muted-foreground">
              Delaware C-Corporation • File Number: 10421545
            </p>
          </div>

          {/* Address */}
          <p className="text-sm text-muted-foreground">
            8 The Green, Ste R, Dover, DE 19901, USA
          </p>

          {/* Links */}
          <div className="flex items-center gap-4 text-sm">
            <Link to="/privacy" className="text-primary hover:underline">
              Privacy Policy
            </Link>
            <span className="text-muted-foreground">|</span>
            <Link to="/terms" className="text-primary hover:underline">
              Terms of Service
            </Link>
            <span className="text-muted-foreground">|</span>
            <a href="mailto:management@rootknow.com" className="text-primary hover:underline">
              Contact Us
            </a>
          </div>

          {/* Email */}
          <p className="text-xs text-muted-foreground">
            management@rootknow.com
          </p>

          {/* Copyright */}
          <p className="text-xs text-muted-foreground border-t border-border pt-6 w-full">
            © 2025 RootKnow Global Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
