import { Shield, Smile, MapPin, DollarSign, Clock } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reasons = [
  { icon: Smile, title: "Personalized Service", desc: "Every tour is tailored to your interests, pace, and preferences." },
  { icon: Shield, title: "Safe & Reliable", desc: "Licensed, insured, and experienced drivers you can trust completely." },
  { icon: MapPin, title: "Local Experiences", desc: "Discover hidden villages, authentic cuisine, and real Sri Lankan culture." },
  { icon: DollarSign, title: "Fair & Transparent", desc: "No hidden costs. Honest prices with upfront, clear communication." },
  { icon: Clock, title: "24/7 Support", desc: "We're available around the clock — before, during, and after your trip." },
];

const WhyChooseUs = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section className="py-24 md:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Why Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose Us</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Trusted by thousands of international travelers for over a decade.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <div key={r.title} className={`text-center p-6 will-animate transition-all duration-700 ${isVisible ? "animate-scale-in" : "opacity-0 scale-90"}`} style={{ transitionDelay: isVisible ? `${i * 80}ms` : "0ms" }}>
              <div className="w-14 h-14 rounded-full bg-accent flex items-center justify-center mx-auto mb-4">
                <r.icon size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold text-foreground mb-2">{r.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
