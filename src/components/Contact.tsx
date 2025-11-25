import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create a mailto link that will open the user's default mail client
    const to = "ashwinm253@gmail.com";
    const subject = `New contact from ${name || "Website Visitor"}`;
    const bodyLines = [
      `Name: ${name}`,
      `Email: ${email}`,
      "",
      "Message:",
      message,
    ];
    const body = encodeURIComponent(bodyLines.join("\n"));
    const mailto = `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${body}`;

    // Open mailto - this requires the visitor to send the email from their mail client.
    window.location.href = mailto;
  };

  return (
    <section className="py-20 sm:py-24 md:py-32 px-4 sm:px-6 relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-[500px] sm:w-[600px] md:w-[800px] h-[500px] sm:h-[600px] md:h-[800px] bg-secondary/20 rounded-full blur-[100px] sm:blur-[120px] -translate-x-1/2 translate-y-1/2 pointer-events-none animate-blob" />

      <div className="container mx-auto relative z-10">
        <h2 className="section-title">Get In Touch</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 sm:gap-16 max-w-6xl mx-auto items-start">
          <div className="space-y-8 sm:space-y-10">
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Let's work together</h3>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                Have a project in mind? Let's work together to create something amazing.
                I'm always open to discussing new projects and opportunities.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              <Card className="p-5 sm:p-6 flex items-center gap-4 sm:gap-6 bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-colors duration-300 group">
                <div className="p-3 sm:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div className="min-w-0">
                  <p className="font-semibold text-base sm:text-lg mb-1">Email</p>
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-primary transition-colors truncate">ashwinm253@gmail.com</p>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 flex items-center gap-4 sm:gap-6 bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-colors duration-300 group">
                <div className="p-3 sm:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <Phone className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-base sm:text-lg mb-1">Phone</p>
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-primary transition-colors">7071500247</p>
                </div>
              </Card>

              <Card className="p-5 sm:p-6 flex items-center gap-4 sm:gap-6 bg-card/50 backdrop-blur-sm border-white/5 hover:border-primary/30 transition-colors duration-300 group">
                <div className="p-3 sm:p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                  <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-primary" />
                </div>
                <div>
                  <p className="font-semibold text-base sm:text-lg mb-1">Location</p>
                  <p className="text-sm sm:text-base text-muted-foreground group-hover:text-primary transition-colors">Lucknow, INDIA</p>
                </div>
              </Card>
            </div>
          </div>

          <Card className="p-6 sm:p-8 bg-card/50 backdrop-blur-sm border-white/5 shadow-2xl">
            <form className="space-y-5 sm:space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Name</label>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Your name"
                  className="bg-background/50 border-white/10 focus:border-primary/50 h-11 sm:h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Email</label>
                <Input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="your.email@example.com"
                  className="bg-background/50 border-white/10 focus:border-primary/50 h-11 sm:h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium ml-1">Message</label>
                <Textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project..."
                  className="bg-background/50 border-white/10 focus:border-primary/50 min-h-[140px] sm:min-h-[150px] resize-none text-base"
                />
              </div>

              <Button type="submit" className="btn-hero w-full group h-11 sm:h-auto sm:py-4 text-base sm:text-lg">
                Send Message
                <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Button>
            </form>
          </Card>
        </div>
      </div>
    </section>
  );
};
