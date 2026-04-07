import { Star } from "lucide-react";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const reviews = [
  {
    name: "Sophie & Marc",
    country: "France",
    text: "Rishan made our 10-day trip absolutely magical. He knew every hidden gem, was always on time, and became a friend by the end. Highly recommended!",
    rating: 5,
  },
  {
    name: "Klaus W.",
    country: "Germany",
    text: "Professional, safe, and incredibly knowledgeable. The best decision we made for our Sri Lanka holiday. Fair prices and honest communication throughout.",
    rating: 5,
  },
  {
    name: "Anna P.",
    country: "Austria",
    text: "From Sigiriya to the southern beaches — every day was a new adventure. Rishan's local insights made all the difference. We'll be back!",
    rating: 5,
  },
  {
    name: "Dmitry & Olga",
    country: "Russia",
    text: "We felt safe and welcome the entire trip. The vehicle was comfortable, the routes were perfect, and Rishan's warmth made Sri Lanka feel like home.",
    rating: 5,
  },
];

const Reviews = () => {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section id="reviews" className="py-24 md:py-32" ref={ref}>
      <div className="container mx-auto px-6">
        <div className={`text-center mb-16 will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`}>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Testimonials</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">What Travelers Say</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real experiences from real travelers who explored Sri Lanka with us.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((r, i) => (
            <div key={r.name} className={`bg-secondary rounded-2xl p-6 flex flex-col will-animate transition-all duration-700 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`} style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, i) => (
                  <Star key={i} size={16} className="fill-gold text-gold" />
                ))}
              </div>
              <p className="text-sm text-foreground leading-relaxed flex-1 mb-4">"{r.text}"</p>
              <div>
                <p className="text-sm font-semibold text-foreground">{r.name}</p>
                <p className="text-xs text-muted-foreground">{r.country}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
