import Reveal from "./Reveal.jsx";
import { icons } from "./icons.js";
import { site } from "../config/site.js";

export default function Why() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 pb-24">
      <Reveal><h2 className="text-center text-3xl font-black">چرا ALEX؟</h2></Reveal>
      <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {site.features.map((f, i) => {
          const Icon = icons[f.icon];
          return (
            <Reveal key={f.title} delay={i * 70}>
              <div className="glass h-full rounded-2xl p-5 transition hover:border-neon/60">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-neon/15 text-neon"><Icon size={22} /></span>
                <h3 className="mt-4 font-bold">{f.title}</h3>
                <p className="mt-1.5 text-sm leading-relaxed text-lav/75">{f.text}</p>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
