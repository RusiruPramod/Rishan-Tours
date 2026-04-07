import { Phone, Mail, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Footer = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
  <footer className="bg-foreground text-primary-foreground" ref={ref}>
    <div className="container mx-auto px-6 py-16">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className={`will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`}>
          <h3 className="text-lg font-semibold mb-4">Rishan Tours</h3>
          <p className="text-sm text-primary-foreground/70 leading-relaxed">
            Your trusted partner for personalized Sri Lanka travel experiences since 2013.
          </p>
        </div>
        <div className={`will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`} style={{ transitionDelay: isVisible ? "80ms" : "0ms" }}>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h4>
          <nav className="flex flex-col gap-2">
            {["Home", "About", "Services", "Tours", "Gallery", "Reviews"].map((l) => (
              <a key={l} href={`#${l.toLowerCase()}`} className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {l}
              </a>
            ))}
          </nav>
        </div>
        <div className={`will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`} style={{ transitionDelay: isVisible ? "160ms" : "0ms" }}>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Tours</h4>
          <nav className="flex flex-col gap-2">
            {["Colombo Day Tour", "Kandy Day Tour", "Sigiriya Day Tour", "Southern Coast", "Grand Island Tour"].map((t) => (
              <a key={t} href="#tours" className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
                {t}
              </a>
            ))}
          </nav>
        </div>
        <div className={`will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`} style={{ transitionDelay: isVisible ? "240ms" : "0ms" }}>
          <h4 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h4>
          <div className="flex flex-col gap-3">
            <a href="tel:+94773332290" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors">
              <Phone size={14} /> +94 77 333 2290
            </a>
            <a href="mailto:srilankaprivatedrivers2290@gmail.com" className="flex items-center gap-2 text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors break-all">
              <Mail size={14} /> srilankaprivatedrivers2290@gmail.com
            </a>
            <p className="flex items-center gap-2 text-sm text-primary-foreground/70">
              <MapPin size={14} /> Rambukkana, Sri Lanka
            </p>
          </div>
        </div>
      </div>
      <div className={`border-t border-primary-foreground/10 mt-12 pt-8 text-center will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`} style={{ transitionDelay: isVisible ? "320ms" : "0ms" }}>
        <p className="text-sm text-primary-foreground/50">
          © {new Date().getFullYear()} Rishan Tours. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
  );
};

export default Footer;
