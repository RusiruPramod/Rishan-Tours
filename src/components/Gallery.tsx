import sigiriya from "@/assets/sigiriya.jpg";
import galleFort from "@/assets/galle-fort.jpg";
import elephant from "@/assets/elephant.jpg";
import oceanBoats from "@/assets/ocean-boats.jpg";
import templeKandy from "@/assets/temple-kandy.jpg";
import teaPlantation from "@/assets/tea-plantation.jpg";
import waterfallFriends from "@/assets/waterfall-friends.jpg";
import mirissa from "@/assets/mirissa-beach.jpg";
import galleLibrary from "@/assets/galle-library.jpg";
import nineArchBridge from "@/assets/nine-arch-bridge-real.jpg";

const images = [
  { src: sigiriya, alt: "Sigiriya Rock Fortress" },
  { src: elephant, alt: "Wild elephants in Sri Lanka" },
  { src: galleLibrary, alt: "Historic Galle Library, established 1832" },
  { src: galleFort, alt: "Historic Galle Fort" },
  { src: oceanBoats, alt: "Crystal clear waters of Sri Lanka" },
  { src: nineArchBridge, alt: "Nine Arch Bridge, Ella" },
  { src: templeKandy, alt: "Temple of the Tooth, Kandy" },
  { src: teaPlantation, alt: "Tea plantations in hill country" },
  { src: waterfallFriends, alt: "Travelers at a waterfall" },
  { src: mirissa, alt: "Mirissa Beach, southern coast" },
];

const Gallery = () => (
  <section id="gallery" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="text-center mb-16">
        <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Gallery</p>
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Discover Sri Lanka</h2>
        <p className="text-muted-foreground max-w-xl mx-auto">
          A glimpse of the breathtaking beauty waiting for you.
        </p>
      </div>
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
        {images.map((img, i) => (
          <div key={i} className="break-inside-avoid rounded-xl overflow-hidden group">
            <img
              src={img.src}
              alt={img.alt}
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
