import { useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo.jsx";
import { site } from "../config/site.js";
import { openAuth } from "../config/api.js";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neon/15 bg-ink/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        <Logo name={site.brand} />
        <nav className="hidden items-center gap-7 text-sm text-lav md:flex" aria-label="منوی اصلی">
          {site.nav.map((l) => (
            <a key={l.href} href={l.href} className="transition hover:text-white">{l.label}</a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <button onClick={() => openAuth("login")} className="btn-ghost rounded-xl px-4 py-2 text-sm">ورود</button>
          <button onClick={() => openAuth("register")} className="btn-neon rounded-xl px-4 py-2 text-sm font-bold">ثبت‌نام</button>
        </div>
        <button className="md:hidden" aria-label="منو" aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className="glass mx-3 mb-3 rounded-2xl p-4 md:hidden">
          <nav className="flex flex-col gap-1" aria-label="منوی موبایل">
            {site.nav.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-lg px-3 py-3 text-lav hover:bg-neon/10">{l.label}</a>
            ))}
          </nav>
          <div className="mt-3 grid grid-cols-2 gap-2">
            <button onClick={() => openAuth("login")} className="btn-ghost rounded-xl py-3 text-sm">ورود</button>
            <button onClick={() => openAuth("register")} className="btn-neon rounded-xl py-3 text-sm font-bold">ثبت‌نام</button>
          </div>
        </div>
      )}
    </header>
  );
}
