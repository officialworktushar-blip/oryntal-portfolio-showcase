import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Get a Free Project Estimate | Oryntal" },
      { name: "description", content: "Tell us what you want to build. We reply within one working day with a real opinion — never a sales deck." },
      { property: "og:title", content: "Contact — Get a Free Project Estimate | Oryntal" },
      { property: "og:description", content: "One thoughtful reply within a working day." },
    ],
  }),
  component: ContactPage,
});

const budgets = ["< $10k", "$10–25k", "$25–60k", "$60k+", "Retainer"];
const services = ["AI", "Automation", "Full Stack", "Shopify", "WordPress", "Mobile App"];

function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [selected, setSelected] = useState<string[]>([]);

  const toggle = (s: string) =>
    setSelected((p) => (p.includes(s) ? p.filter((x) => x !== s) : [...p, s]));

  return (
    <>
      <section className="border-b border-gold">
        <div className="relative mx-auto max-w-4xl px-6 py-24 md:py-32">
          <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">Contact</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05]">
            Tell us what you <span className="text-gold italic">want to build.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg text-muted-foreground">
            One reply within a working day. No drip campaigns, no discovery decks — just a real opinion from the people who'll do the work.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="mx-auto max-w-5xl px-6 grid lg:grid-cols-[1fr_320px] gap-12">
          <div className="rounded-3xl border border-gold bg-card p-8 md:p-12">
            {submitted ? (
              <div className="text-center py-16">
                <div className="inline-block h-16 w-16 rounded-full bg-gold-gradient mb-6 glow-gold" />
                <h2 className="font-display text-3xl mb-3">Brief received.</h2>
                <p className="text-muted-foreground">We'll reply from hello@oryntal.com within one working day.</p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setSubmitted(true);
                }}
                className="space-y-8"
              >
                <div className="grid md:grid-cols-2 gap-6">
                  <Field label="Your name" name="name" placeholder="Jane Mercer" required />
                  <Field label="Email" name="email" type="email" placeholder="jane@company.com" required />
                </div>
                <Field label="Company" name="company" placeholder="Acme Co." />

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold mb-3">What do you need?</label>
                <div className="flex flex-wrap gap-2">
                  {services.map((s) => (
                    <button
                      type="button"
                      key={s}
                      onClick={() => toggle(s)}
                      className={`px-4 py-2 rounded-full text-xs uppercase tracking-widest border transition-all ${
                        selected.includes(s)
                          ? "bg-gold-gradient text-primary-foreground border-transparent hover:brightness-110"
                          : "border-gold text-muted-foreground hover:text-gold"
                      }`}
                    >
                      {s}
                    </button>
                  ))}
                </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold mb-3">Budget</label>
                <div className="flex flex-wrap gap-2">
                  {budgets.map((b) => (
                    <label key={b} className="cursor-pointer">
                      <input type="radio" name="budget" value={b} className="peer sr-only" />
                      <span className="block px-4 py-2 rounded-full text-xs uppercase tracking-widest border border-gold text-muted-foreground hover:text-gold hover:border-gold hover:bg-gold/10 peer-checked:bg-gold-gradient peer-checked:text-primary-foreground peer-checked:border-transparent peer-checked:hover:text-primary-foreground peer-checked:hover:brightness-110 transition-all">
                        {b}
                      </span>
                    </label>
                  ))}
                </div>
                </div>

                <div>
                  <label className="block text-xs uppercase tracking-widest text-gold mb-3">The brief</label>
                  <textarea
                    name="message"
                    rows={6}
                    required
                    placeholder="What are you trying to build, change, or fix? The more specific, the sharper our reply."
                    className="w-full rounded-xl border border-gold bg-background px-5 py-4 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-gold-gradient py-4 text-sm uppercase tracking-widest text-primary-foreground font-medium shadow-gold hover:scale-[1.01] transition-transform"
                >
                  Send Brief
                </button>
              </form>
            )}
          </div>

          <aside className="space-y-8">
            <div>
              <div className="text-xs uppercase tracking-widest text-gold mb-2">Direct</div>
              <a href="mailto:hello@oryntal.com" className="font-display text-2xl hover:text-gold transition-colors">hello@oryntal.com</a>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold mb-2">Response Time</div>
              <p className="text-foreground">Within 1 working day. Always.</p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold mb-2">Engagement Model</div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Fixed-scope projects, retainers, or fractional CTO arrangements. NDA available on request.
              </p>
            </div>
            <div>
              <div className="text-xs uppercase tracking-widest text-gold mb-2">Time Zones</div>
              <p className="text-muted-foreground text-sm">UTC −5 → UTC +8 covered</p>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  placeholder,
  required,
}: {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-widest text-gold mb-3">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-gold bg-background px-5 py-3.5 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-gold transition-all"
      />
    </div>
  );
}
