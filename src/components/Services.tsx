import { Car, Map, Plane, Calendar } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const services = [
  {
    icon: Car,
    title: "Private Tours with Driver",
    desc: "Travel at your pace with a dedicated, English-speaking driver who knows every corner of Sri Lanka.",
  },
  {
    icon: Map,
    title: "Tailor-Made Packages",
    desc: "Custom itineraries designed around your interests — culture, nature, adventure, or relaxation.",
  },
  {
    icon: Plane,
    title: "Airport Transfers",
    desc: "Reliable pickup and drop-off at Bandaranaike International Airport, any time of day or night.",
  },
  {
    icon: Calendar,
    title: "Day & Multi-Day Tours",
    desc: "From quick day trips to immersive week-long explorations across the entire island.",
  },
];

const Services = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="services" className="py-24 md:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-6 text-center">
        <div className={`will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">What We Offer</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Services</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-16">
            Everything you need for a seamless Sri Lanka experience, handled with care and professionalism.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`bg-background rounded-2xl p-8 text-left shadow-sm hover:shadow-md will-animate transition-all duration-700 group ${isVisible ? (i % 2 === 0 ? "animate-slide-in-left" : "animate-slide-in-right") : "opacity-0 translate-y-30"}`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
              <s.icon size={22} className="text-accent-foreground group-hover:text-primary-foreground transition-colors" />
            </div>
            <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
