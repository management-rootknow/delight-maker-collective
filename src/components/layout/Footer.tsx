import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-footer text-footer-foreground py-10">
      <div className="container">
        <div className="flex flex-col items-center gap-4 text-center">
          <p className="text-sm">
            © 2025 RootKnow Global Inc. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            8 The Green, Ste R, Dover, DE 19901
          </p>
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
          <p className="text-xs text-muted-foreground">
            management@rootknow.com
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
