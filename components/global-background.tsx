"use client";

import AnimatedSpaceBackground from "@/components/animated-space-background";

export default function GlobalBackground() {
  return (
    <div className="fixed inset-0 w-full h-full">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-neutral-900">
        <AnimatedSpaceBackground />
      </div>
      {/* Additional gradient overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-slate-900/30"></div>
    </div>
  );
}