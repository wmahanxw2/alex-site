import { Crown } from "lucide-react";

export default function Logo({ name }) {
  return (
    <a href="#home" className="flex items-center gap-2 font-black text-xl tracking-wide" dir="ltr">
      <Crown className="text-neon drop-shadow-[0_0_8px_#a855f7]" size={26} />
      <span>{name}</span>
    </a>
  );
}
