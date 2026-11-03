"use client";

import { useEffect } from "react";

export default function MotionExperience() {
  useEffect(() => {
    const root = document.documentElement;
    const header = document.querySelector(".site-header");
    const finePointer = window.matchMedia("(pointer: fine)").matches;
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let frame = 0;
    let latestY = window.scrollY;

    const updateScroll = () => {
      frame = 0;
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(1, latestY / scrollable) : 0;
      root.style.setProperty("--scroll-progress", String(progress));
      header?.classList.toggle("is-scrolled", latestY > 12);
    };

    const onScroll = () => {
      latestY = window.scrollY;
      if (!frame) frame = window.requestAnimationFrame(updateScroll);
    };

    const onPointerMove = (event) => {
      if (!finePointer || reducedMotion) return;
      const target = event.target instanceof Element ? event.target.closest("[data-tilt]") : null;
      if (!target) return;
      const rect = target.getBoundingClientRect();
      const x = (event.clientX - rect.left) / rect.width;
      const y = (event.clientY - rect.top) / rect.height;
      target.style.setProperty("--tilt-x", ((x - 0.5) * 5.5).toFixed(2) + "deg");
      target.style.setProperty("--tilt-y", ((0.5 - y) * 5.5).toFixed(2) + "deg");
      target.style.setProperty("--spot-x", (x * 100).toFixed(1) + "%");
      target.style.setProperty("--spot-y", (y * 100).toFixed(1) + "%");
      target.classList.add("is-tilting");
    };

    const onPointerOut = (event) => {
      const target = event.target instanceof Element ? event.target.closest("[data-tilt]") : null;
      if (!target || (event.relatedTarget instanceof Node && target.contains(event.relatedTarget))) return;
      target.style.setProperty("--tilt-x", "0deg");
      target.style.setProperty("--tilt-y", "0deg");
      target.classList.remove("is-tilting");
    };

    updateScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    if (finePointer && !reducedMotion) {
      document.addEventListener("pointermove", onPointerMove, { passive: true });
      document.addEventListener("pointerout", onPointerOut, { passive: true });
    }

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("pointermove", onPointerMove);
      document.removeEventListener("pointerout", onPointerOut);
      if (frame) window.cancelAnimationFrame(frame);
      root.style.removeProperty("--scroll-progress");
      header?.classList.remove("is-scrolled");
    };
  }, []);

  return <div className="motion-progress" aria-hidden="true" />;
}
