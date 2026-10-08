import { useState } from "react";
import { ChevronDown } from "lucide-react";
import Reveal from "./Reveal.jsx";
import { site } from "../config/site.js";

export default function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 pb-24">
      <Reveal><h2 className="text-center text-3xl font-black">سوالات متداول</h2></Reveal>
      <div className="mt-10 space-y-3">
        {site.faq.map((item, i) => {
          const isOpen = open === i;
          return (
            <div key={item.q} className="glass rounded-2xl">
              <button className="flex w-full items-center justify-between gap-4 p-5 text-start font-bold" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                {item.q}
                <ChevronDown size={20} className={`shrink-0 text-neon transition-transform ${isOpen ? "rotate-180" : ""}`} />
              </button>
              <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}>
                <p className="overflow-hidden px-5 text-sm leading-7 text-lav/85"><span className="block pb-5">{item.a}</span></p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
