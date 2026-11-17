"use client";
import { useReveal } from "@/hooks/useReveal";

// Fades in every ".reveal" element as it scrolls into view, on every page.
export default function RevealOnScroll() {
  useReveal();
  return null;
}
