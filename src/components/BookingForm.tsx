import { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { toast } from "sonner";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const tourTypes = [
  "Colombo Day Tour",
  "Kandy Day Tour",
  "Sigiriya Day Tour",
  "Ella & Hill Country (2–3 Days)",
  "Southern Coast Tour (3–5 Days)",
  "Grand Island Tour (7–12 Days)",
  "Airport Transfer",
  "Custom Tour",
];

const BookingForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    whatsapp: "",
    dates: "",
    tourType: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = `Hi Rishan! I'd like to book a tour.\n\nName: ${form.name}\nEmail: ${form.email}\nWhatsApp: ${form.whatsapp}\nDates: ${form.dates}\nTour: ${form.tourType}\nMessage: ${form.message}`;
    window.open(`https://wa.me/94773332290?text=${encodeURIComponent(text)}`, "_blank");
    toast.success("Redirecting to WhatsApp...");
  };

  const update = (field: string) => (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="booking" className="py-24 md:py-32 bg-section-alt" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <div className={`text-center mb-12 will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`}>
            <p className="text-sm font-medium text-primary tracking-widest uppercase mb-3">Book Now</p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Plan Your Trip</h2>
            <p className="text-muted-foreground">
              Fill in the form below and we'll get back to you within hours via WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className={`bg-background rounded-2xl p-8 shadow-sm space-y-5 will-animate transition-all duration-600 ${isVisible ? "animate-fade-up" : "opacity-0 translate-y-30"}`} style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Full Name</label>
                <input
                  required
                  type="text"
                  value={form.name}
                  onChange={update("name")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="John Doe"
                  maxLength={100}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Email</label>
                <input
                  required
                  type="email"
                  value={form.email}
                  onChange={update("email")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="you@email.com"
                  maxLength={255}
                />
              </div>
            </div>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">WhatsApp Number</label>
                <input
                  required
                  type="tel"
                  value={form.whatsapp}
                  onChange={update("whatsapp")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="+1 234 567 890"
                  maxLength={20}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Travel Dates</label>
                <input
                  required
                  type="text"
                  value={form.dates}
                  onChange={update("dates")}
                  className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  placeholder="e.g. May 10 – May 20"
                  maxLength={100}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Tour Type</label>
              <select
                required
                value={form.tourType}
                onChange={update("tourType")}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <option value="">Select a tour</option>
                {tourTypes.map((t) => (
                  <option key={t} value={t}>{t}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-foreground mb-1.5">Message</label>
              <textarea
                value={form.message}
                onChange={update("message")}
                rows={4}
                className="w-full rounded-lg border border-input bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring resize-none"
                placeholder="Tell us about your travel plans..."
                maxLength={1000}
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity"
              >
                <Send size={16} />
                Send via WhatsApp
              </button>
              <a
                href="https://wa.me/94773332290"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 rounded-lg border border-primary px-6 py-3 text-sm font-semibold text-primary hover:bg-accent transition-colors"
              >
                <MessageCircle size={16} />
                Quick Chat
              </a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
