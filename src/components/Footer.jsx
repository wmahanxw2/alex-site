import { Send, Instagram, Youtube } from "lucide-react";
import Logo from "./Logo.jsx";
import { site } from "../config/site.js";

export default function Footer() {
  const social = [[Send, site.links.telegram, "تلگرام"], [Instagram, site.links.instagram, "اینستاگرام"], [Youtube, site.links.youtube, "یوتیوب"]];
  return (
    <footer id="support" className="border-t border-neon/15 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-4 text-sm text-lav/70 md:flex-row md:justify-between">
        <Logo name={site.brand} />
        <div className="flex gap-3">
          {social.map(([Icon, href, label]) => (
            <a key={label} href={href} aria-label={label} target="_blank" rel="noreferrer" className="glass grid h-10 w-10 place-items-center rounded-xl transition hover:border-neon"><Icon size={18} /></a>
          ))}
        </div>
        <p dir="ltr">© {new Date().getFullYear()} {site.brand}. All rights reserved.</p>
      </div>
    </footer>
  );
}
