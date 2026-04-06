import lotusTower from "@/assets/lotus-tower.jpg";
import templeKandy from "@/assets/temple-kandy.jpg";
import sigiriya from "@/assets/sigiriya.jpg";
import teaPlantation from "@/assets/tea-plantation.jpg";
import mirissa from "@/assets/mirissa-beach.jpg";
import nineArch from "@/assets/nine-arch-bridge.jpg";
import { ArrowRight } from "lucide-react";

const tours = [
  { img: lotusTower, title: "Colombo Day Tour", duration: "1 Day", desc: "Explore the vibrant capital — Lotus Tower, Gangaramaya Temple, Pettah markets & coastal views." },
  { img: templeKandy, title: "Kandy Day Tour", duration: "1 Day", desc: "Temple of the Tooth, Royal Botanical Gardens, traditional dance show & scenic lake walk." },
  { img: sigiriya, title: "Sigiriya Day Tour", duration: "1 Day", desc: "Climb the ancient Lion Rock fortress, visit Dambulla Cave Temple & enjoy village safaris." },
  { img: nineArch, title: "Ella & Hill Country", duration: "2–3 Days", desc: "Nine Arch Bridge, Little Adam's Peak, tea plantations & the famous train ride." },
  { img: mirissa, title: "Southern Coast Tour", duration: "3–5 Days", desc: "Galle Fort, Mirissa whale watching, Unawatuna beaches & turtle hatcheries." },
  { img: teaPlantation, title: "Grand Island Tour", duration: "7–12 Days", desc: "The complete Sri Lanka experience — culture, wildlife, beaches & hill country combined." },
];

const Tours = () => (
  <section id="tours" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Tour Packages</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Popular Tours</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          Hand-picked experiences for every type of traveler. All tours are fully customizable.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tours.map((t) => (
          <div key={t.title} className="group rounded-2xl overflow-hidden bg-background border border-border hover:shadow-lg transition-shadow">
            <div className="overflow-hidden aspect-[16/10]">
              <img
                src={t.img}
                alt={t.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-semibold text-foreground">{t.title}</h3>
                <span className="text-xs font-medium text-primary bg-accent rounded-full px-3 py-1">{t.duration}</span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4">{t.desc}</p>
              <a
                href="#booking"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-3 transition-all"
              >
                Book Now <ArrowRight size={14} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Tours;
