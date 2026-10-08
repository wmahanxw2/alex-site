import { Power, Gamepad2, Download, Globe, Send, ArrowDown, ArrowUp } from "lucide-react";

const nodes = [
  { Icon: Gamepad2, cls: "top-[8%] right-[14%]", d: "0s" },
  { Icon: Download, cls: "top-[30%] left-[2%]", d: "1.2s" },
  { Icon: Globe, cls: "bottom-[12%] left-[14%]", d: "2.1s" },
  { Icon: Send, cls: "bottom-[24%] right-[2%]", d: ".6s" },
];

// Abstract network: rotating orbits + floating app nodes around a phone mockup.
export default function NetworkVisual() {
  return (
    <div className="relative mx-auto aspect-square w-full max-w-[460px]" aria-hidden="true" dir="ltr">
      <div className="absolute inset-[8%] rounded-full bg-neon/25 blur-[90px]" />
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full" style={{ animation: "spin-slow 60s linear infinite" }}>
        <circle cx="200" cy="200" r="190" fill="none" stroke="#a855f7" strokeOpacity=".25" strokeDasharray="3 9" />
        <circle cx="200" cy="200" r="145" fill="none" stroke="#c4b5fd" strokeOpacity=".18" />
        <circle cx="200" cy="200" r="100" fill="none" stroke="#a855f7" strokeOpacity=".2" strokeDasharray="2 6" />
        {[[200, 10], [345, 200], [60, 290], [330, 330]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="#a855f7" />
        ))}
      </svg>
      {nodes.map(({ Icon, cls, d }, i) => (
        <div key={i} className={`glass absolute ${cls} grid h-12 w-12 place-items-center rounded-2xl text-lav shadow-[0_0_24px_-4px_#a855f7]`} style={{ animation: `float 6s ease-in-out ${d} infinite` }}>
          <Icon size={22} />
        </div>
      ))}
      <div className="glass absolute left-1/2 top-1/2 w-[46%] -translate-x-1/2 -translate-y-1/2 rounded-[2rem] p-4 text-center shadow-[0_20px_60px_-10px_#7c3aed]">
        <p className="text-[11px] font-bold tracking-wider text-lav">ALEX</p>
        <div className="relative mx-auto my-4 grid h-20 w-20 place-items-center">
          <span className="absolute inset-0 rounded-full border border-neon" style={{ animation: "pulse-ring 2.4s ease-out infinite" }} />
          <span className="grid h-full w-full place-items-center rounded-full border-2 border-neon bg-ink text-lav shadow-[0_0_30px_#a855f7]">
            <Power size={30} />
          </span>
        </div>
        <span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-400/10 px-3 py-1 text-[11px] text-emerald-300">
          <i className="h-1.5 w-1.5 rounded-full bg-emerald-400" /> Connected
        </span>
        <div className="mt-3 flex justify-between text-[10px] text-lav/80">
          <span className="flex items-center gap-1"><ArrowDown size={11} />128 Mbps</span>
          <span className="flex items-center gap-1"><ArrowUp size={11} />42 Mbps</span>
        </div>
      </div>
    </div>
  );
}
