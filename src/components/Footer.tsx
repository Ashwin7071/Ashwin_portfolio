import { Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container mx-auto text-center text-muted-foreground">
        <p className="flex items-center justify-center gap-2">
          Made with <Heart className="h-4 w-4 text-primary fill-primary" /> by Candy
        </p>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} All rights reserved.
        </p>
      </div>
    </footer>
  );
};
