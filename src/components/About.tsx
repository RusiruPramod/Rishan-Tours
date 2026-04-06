import ResponsiveImage from "@/components/ResponsiveImage";
import { Award, Users, Globe, Heart } from "lucide-react";

const stats = [
  { icon: Award, label: "Years Experience", value: "11+" },
  { icon: Users, label: "Happy Travelers", value: "2,000+" },
  { icon: Globe, label: "Countries Served", value: "25+" },
  { icon: Heart, label: "5-Star Reviews", value: "500+" },
];

const About = () => (
  <section id="about" className="py-24 md:py-32">
    <div className="container mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <ResponsiveImage
            imageName="galle-fort"
            alt="Galle Fort coastline, Sri Lanka"
            loading="lazy"
            className="rounded-2xl w-full object-cover aspect-[4/3]"
          />
          <div className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground rounded-2xl p-6 shadow-lg hidden md:block">
            <p className="text-3xl font-bold">11+</p>
            <p className="text-sm opacity-90">Years of Trust</p>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">About Us</p>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 leading-tight">
            Your Journey, Our Passion
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            I'm <strong className="text-foreground">Rishan</strong>, founder of Sri Lanka Private Drivers & Tours. What started over 11 years ago as a humble driving service has grown into a trusted tourism business serving travelers from France, Germany, Russia, Austria, and many more countries.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-8">
            Every tour is personal. I believe in honest guidance, fair prices, and creating authentic experiences — from hidden village trails to the most iconic landmarks of Sri Lanka.
          </p>

          <div className="grid grid-cols-2 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="bg-secondary rounded-xl p-4 text-center">
                <s.icon className="mx-auto text-primary mb-2" size={22} />
                <p className="text-2xl font-bold text-foreground">{s.value}</p>
                <p className="text-xs text-muted-foreground">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default About;
