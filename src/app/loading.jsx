"use client";

import PageLoader from "@/components/PageLoader";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-bgDark">
      <PageLoader />
    </div>
  );
}

// loading workflow....

// HTML loads → CSS loader shows instantly
// ↓
// React hydrates
// ↓
// ClientLoaderCleanup runs
// ↓
// CSS loader removed
// ↓
// If route is slow → loading.jsx PageLoader appears
// ↓
// Page loads → PageReveal animation


