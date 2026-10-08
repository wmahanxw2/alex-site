import { Check } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { icons } from "./icons.js";
import { site } from "../config/site.js";
import { startCheckout, getFreeConfig } from "../config/api.js";

function PlanCard({ plan }) {
  const Icon = icons[plan.icon];
  const onClick = () => (plan.id === "free" ? getFreeConfig() : startCheckout(plan.id)); // API hook
  const body = (
    <div className={`flex h-full flex-col rounded-[1.4rem] p-6 ${plan.featured ? "bg-[#10082a]" : "glass"}`}>
      <div className="flex items-center justify-between">
        <h3 className="text-xl font-bold" dir="auto">{plan.name}</h3>
        <span className="grid h-11 w-11 place-items-center rounded-xl bg-neon/15 text-neon"><Icon size={22} /></span>
      </div>
      <p className="mt-2 text-sm text-lav/80">{plan.desc}</p>
      <p className="mt-5"><span className="text-3xl font-black">{plan.price}</span> <span className="text-sm text-lav/70">{plan.unit}</span></p>
      <ul className="my-6 flex-1 space-y-3 border-t border-neon/15 pt-5 text-sm">
        {plan.features.map((f) => (
          <li key={f} className="flex items-center gap-2.5"><Check size={16} className="shrink-0 text-neon" />{f}</li>
        ))}
      </ul>
      <button onClick={onClick} className={`${plan.featured ? "btn-neon font-bold" : "btn-ghost"} rounded-xl py-3`}>{plan.cta}</button>
    </div>
  );
  return plan.featured ? (
    <div className="relative rounded-[1.5rem] bg-gradient-to-b from-neon via-deep to-fuchsia-500 p-px shadow-[0_0_60px_-10px_#a855f7] md:-translate-y-4">
      <span className="absolute -top-3 left-6 z-10 rounded-full bg-gradient-to-l from-amber-300 to-orange-400 px-3 py-1 text-xs font-bold text-black">{plan.badge}</span>
      {body}
    </div>
  ) : (
    <div className="rounded-[1.5rem] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_0_40px_-12px_#a855f7]">{body}</div>
  );
}

export default function Services() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24">
      <Reveal><h2 className="text-center text-3xl font-black">انتخاب با شماست</h2>
        <p className="mt-2 text-center text-lav/80">سه سرویس برای نیازهای مختلف</p></Reveal>
      <div className="mt-14 grid gap-6 md:grid-cols-3 md:items-stretch">
        {site.plans.map((p, i) => <Reveal key={p.id} delay={i * 100} className="h-full"><PlanCard plan={p} /></Reveal>)}
      </div>
    </section>
  );
}
