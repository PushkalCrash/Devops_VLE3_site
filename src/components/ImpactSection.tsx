import { useState } from "react";
import { IMPACT_STATS } from "@/config/impact";
import ImpactCard from "./ImpactCard";

const ImpactSection = () => {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section className="relative w-full py-28 overflow-hidden">

      {/* ===== TITLE ===== */}
      <div className="container mb-16 flex justify-center">
        <h2 className="font-display text-5xl md:text-7xl text-white leading-none flex items-baseline gap-3">
          WHO IS

          {/* Adjustable APG */}
          <span
            className="font-brush text-red-500 relative inline-block"
            style={{
              fontSize: "1.55em",   // 🔥 size control
              top: "2px",           // 🔥 vertical adjust (move up/down)
              left: "2px",          // 🔥 horizontal adjust
            }}
          >
            APG
          </span>

          ?
        </h2>
      </div>


      {/* ===== MARQUEE ===== */}
      <div className="relative w-full overflow-hidden">

        {/* Left fade */}
        <div
          className="absolute left-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, hsl(var(--background)), transparent)",
          }}
        />

        {/* Right fade */}
        <div
          className="absolute right-0 top-0 bottom-0 w-24 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to left, hsl(var(--background)), transparent)",
          }}
        />

        <div
          className="flex w-max gap-8 px-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {[...Array(3)].map((_, trackIndex) => (
            <div
              key={trackIndex}
              className="flex gap-8 animate-marquee"
              style={{
                animationPlayState: isPaused ? "paused" : "running",
              }}
            >
              {IMPACT_STATS.map((stat, i) => (
                <ImpactCard
                  key={`${trackIndex}-${i}`}
                  stat={stat}
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
