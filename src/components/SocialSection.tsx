import { useInView } from "@/hooks/useParallax";
import { Instagram, Youtube, Twitter, Facebook,Linkedin, Mail } from "lucide-react";
import { SITE } from "@/config/site";

const socials = [
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@its.apg",
    url: "https://www.instagram.com/its.apg?igsh=Y3Y0OHY2bzhnOGdj",
    color: "hover:text-pink-500",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "AryaPradyumnGupta",
    url: "https://www.youtube.com/@AryaPradyumnGupta",
    color: "hover:text-red-500",
  },
  {
    icon: Mail,
    label: "Email",
    handle: "its.apg@gmail.com",
    url: "mailto:Its.apg.music@gmail.com",
    color: "hover:text-primary",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    handle: "Arya Pradyumn Gupta",
    url: "https://mail.google.com/mail/?view=cm&fs=1&to=its.apg@gmail.com&su=Music%20Inquiry&body=Hi%20Arya,",
    color: "hover:text-blue-500",
  }
];

const SocialSection = () => {
  const [ref, isInView] = useInView(0.2);

  return (
    <footer ref={ref} className="py-24 bg-background border-t border-border">
      <div className="container mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-primary uppercase tracking-[0.3em] text-sm font-medium mb-4">
            Let’s Connect
          </p>
          <h2 className="font-display text-5xl md:text-7xl text-foreground mb-6">
            FOLLOW ME
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Stay updated with new releases, behind-the-scenes content, and upcoming shows
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 mb-16">
          {socials.map((social, index) => (
            <a
              key={social.label}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className={`group w-14 h-14 rounded-full bg-card border border-border flex items-center justify-center hover:border-primary hover:bg-primary/10 transition-all duration-300 ${social.color} ${
                isInView ? "opacity-100 scale-100" : "opacity-0 scale-75"
              }`}
              style={{ transitionDelay: `${index * 80}ms` }}
            >
              <social.icon className="w-6 h-6 transition-colors" />
            </a>
          ))}
        </div>

        {/* Newsletter */}
        <div
          className={`max-w-xl mx-auto text-center p-8 rounded-2xl card-glass transition-all duration-700 ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          style={{ transitionDelay: "600ms" }}
        >
          <h3 className="font-display text-2xl text-foreground mb-4">
            Join The Mailing List
          </h3>
          <p className="text-sm text-muted-foreground mb-6">
            Get exclusive updates and early access to tickets
          </p>

          <form className="flex flex-col gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-muted border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary transition-colors"
            />
            <button className="w-full px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
              Subscribe
            </button>
          </form>
        </div>

        {/* Footer Bottom */}
        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-display text-2xl text-gradient">{SITE.name}</p>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default SocialSection;
