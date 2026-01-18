"use client";

import { useEffect } from "react";

export default function ClientLoaderCleanup() {
  useEffect(() => {
    const el = document.getElementById("initial-loader");
    if (el) el.remove();
  }, []);

  return null;
}
