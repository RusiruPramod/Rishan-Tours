import { useState, useEffect, useCallback } from "react";
import sigiriya from "@/assets/sigiriya.jpg";
import palmBeach from "@/assets/palm-beach.jpg";
import sigiriyaAerial from "@/assets/sigiriya-aerial.jpg";
import { MessageCircle, ArrowRight } from "lucide-react";

const slides = [
  { src: sigiriya, alt: "Sigiriya Rock Fortress, Sri Lanka" },
  { src: palmBeach, alt: "Tropical palm beach, Sri Lanka" },
  { src: sigiriyaAerial, alt: "Aerial view of Sigiriya Rock Fortress" },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {slides.map((slide, i) => (
        <img
          key={i}
          src={slide.src}
          alt={slide.alt}
          className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          loading={i === 0 ? "eager" : "lazy"}
        />
      ))}
      <div className="absolute inset-0 bg-foreground/45" />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-primary-foreground/80 text-sm md:text-base font-medium tracking-widest uppercase mb-4 animate-fade-up">
          11+ Years of Trusted Service
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6 animate-fade-up" style={{ animationDelay: "0.1s" }}>
          Explore Sri Lanka<br />Your Way
        </h1>
        <p className="text-lg md:text-xl text-primary-foreground/85 max-w-2xl mx-auto mb-10 animate-fade-up" style={{ animationDelay: "0.2s" }}>
          Private Tours, Custom Packages & Personal Drivers — crafted for unforgettable experiences across the pearl of the Indian Ocean.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-up" style={{ animationDelay: "0.3s" }}>
          <a
            href="#booking"
            className="flex items-center gap-2 rounded-full bg-primary px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Plan Your Tour
            <ArrowRight size={16} />
          </a>
          <a
            href="https://wa.me/94773332290"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-primary-foreground/15 backdrop-blur-sm border border-primary-foreground/30 px-8 py-3.5 text-sm font-semibold text-primary-foreground hover:bg-primary-foreground/25 transition-colors"
          >
            <MessageCircle size={16} />
            WhatsApp Us
          </a>
        </div>
      </div>

      {/* Dot indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex gap-2.5">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
              i === current
                ? "bg-primary-foreground w-8"
                : "bg-primary-foreground/40 hover:bg-primary-foreground/60"
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
