import { Outlet } from "react-router-dom";
import { assets } from "@/assets/assets";

export default function OnboardingLayout() {
  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* ── Left panel — shared across all onboarding pages ── */}
      <div className="hidden lg:flex lg:w-[45%] p-4">
        <div
          className="relative w-full rounded-2xl overflow-hidden flex flex-col justify-end"
          style={{
            backgroundImage: `url(${assets.BlackBackground})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          {/* Gradient overlay for text legibility */}
          <div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

          <div className="relative z-10 p-10">
            <h2 className="text-white text-3xl font-bold leading-snug mb-3">
              Built For IMTO Operations
            </h2>
            <p className="text-white/70 text-sm leading-relaxed max-w-sm">
              Real-time transaction visibility, secure approvals, wallet
              management, and exportable reports, all in one platform.
            </p>
            <p className="text-white/40 text-xs mt-8">
              © 2025 All rights reserved. Squad
            </p>
          </div>
        </div>
      </div>

      {/* ── Right panel — each page renders its form here ── */}
      <div className="flex flex-1 flex-col justify-center px-8 sm:px-16 lg:px-24">
        <div className="w-full max-w-md mx-auto">
          {/* Logo — same on every onboarding page */}
          <img
            src={assets.PrimaryLogo}
            alt="Squad"
            className="h-8 w-auto mb-10"
          />

          {/* Page content renders here */}
          <Outlet />
        </div>
      </div>
    </div>
  );
}