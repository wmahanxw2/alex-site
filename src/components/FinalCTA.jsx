import Reveal from "./Reveal.jsx";
import { site } from "../config/site.js";

export default function FinalCTA() {
  return (
    <section className="mx-auto max-w-5xl px-4 pb-24">
      <Reveal>
        <div className="glass relative overflow-hidden rounded-[2rem] px-6 py-14 text-center">
          <div className="pointer-events-none absolute inset-x-0 -top-24 mx-auto h-48 w-2/3 rounded-full bg-neon/30 blur-[90px]" />
          <h2 className="relative text-2xl font-black sm:text-3xl">{site.cta.title}</h2>
          <a href="#services" className="btn-neon relative mt-8 inline-block rounded-2xl px-10 py-3.5 font-bold">{site.cta.button}</a>
        </div>
      </Reveal>
    </section>
  );
}
