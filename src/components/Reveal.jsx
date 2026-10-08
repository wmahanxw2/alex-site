import { useEffect, useRef } from "react";

// Fades children in once when they scroll into view.
export default function Reveal({ children, delay = 0, className = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { el.classList.add("in"); io.disconnect(); } },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div ref={ref} className={`reveal ${className}`} style={{ transitionDelay: `${delay}ms` }}>
      {children}
    </div>
  );
}
