import NetworkVisual from "./NetworkVisual.jsx";
import { site } from "../config/site.js";

export default function Hero() {
  const h = site.hero;
  return (
    <section id="home" className="relative overflow-hidden pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="pointer-events-none absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-deep/30 blur-[140px]" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 md:grid-cols-2">
        <div className="text-center md:text-start">
          <h1>
            <span className="rise text-neon-grad block text-7xl font-black leading-none sm:text-8xl" dir="ltr" style={{ animationDelay: ".05s" }}>
              {site.brand}
            </span>
            <span className="rise mt-4 block text-2xl font-bold leading-snug sm:text-3xl" style={{ animationDelay: ".2s" }}>
              {h.title}
            </span>
          </h1>
          <p className="rise mt-4 text-lg text-lav/90" style={{ animationDelay: ".35s" }}>{h.text}</p>
          <div className="rise mt-8 flex flex-col justify-center gap-3 sm:flex-row md:justify-start" style={{ animationDelay: ".5s" }}>
            <a href="#services" className="btn-neon rounded-2xl px-8 py-3.5 text-center font-bold">{h.primary}</a>
            <a href="#services" className="btn-ghost rounded-2xl px-8 py-3.5 text-center">{h.secondary}</a>
          </div>
        </div>
        <div className="rise" style={{ animationDelay: ".3s" }}><NetworkVisual /></div>
      </div>
    </section>
  );
}
