import Reveal from "./Reveal.jsx";
import { site } from "../config/site.js";

export default function Stats() {
  return (
    <section className="mx-auto max-w-6xl px-4">
      <Reveal>
        <dl className="glass grid grid-cols-2 gap-y-6 rounded-3xl py-8 md:grid-cols-4">
          {site.stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-neon-grad text-3xl font-black md:text-4xl">{s.value}</dd>
              <p className="mt-1 text-sm text-lav/80">{s.label}</p>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  );
}
