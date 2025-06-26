"use client";
import { useEffect } from "react";

export function useCloseModalWithKey(key: string, value: () => void) {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => e.key === key && value();
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [value, key]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  return { key, value };
}
