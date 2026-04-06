import ResponsiveImage from "@/components/ResponsiveImage";

const images = [
  { imageName: "sigiriya" as const, alt: "Sigiriya Rock Fortress" },
  { imageName: "elephant" as const, alt: "Wild elephants in Sri Lanka" },
  { imageName: "galle-library" as const, alt: "Historic Galle Library, established 1832" },
  { imageName: "galle-fort" as const, alt: "Historic Galle Fort" },
  { imageName: "ocean-boats" as const, alt: "Crystal clear waters of Sri Lanka" },
  { imageName: "nine-arch-bridge-real" as const, alt: "Nine Arch Bridge, Ella" },
  { imageName: "temple-kandy" as const, alt: "Temple of the Tooth, Kandy" },
  { imageName: "tea-plantation" as const, alt: "Tea plantations in hill country" },
  { imageName: "waterfall-friends" as const, alt: "Travelers at a waterfall" },
  { imageName: "mirissa-beach" as const, alt: "Mirissa Beach, southern coast" },
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
            <ResponsiveImage
              imageName={img.imageName}
              alt={img.alt}
              loading="lazy"
              className="w-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
