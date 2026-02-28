"use client";

import Aurora from "./Aurora";

export default function AuroraBackground() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#0d1117]">
      <Aurora
        colorStops={["#238636", "#2ea043", "#3fb950"]}
        amplitude={1.0}
        blend={0.5}
        speed={0.5}
      />
    </div>
  );
}
