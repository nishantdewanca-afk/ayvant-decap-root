"use client";
import { Header } from "@/components/site/Header";
import { Hero, Ticker } from "@/components/site/Hero";
import { IntroVideo } from "@/components/site/IntroVideo";
import { Team } from "@/components/site/Team";
import { Benefit } from "@/components/site/Benefit";
import { Reviews } from "@/components/site/Reviews";
import { CtaBand } from "@/components/site/CtaBand";
import { AboutBlock } from "@/components/site/AboutBlock";
import { CaseStudies } from "@/components/site/CaseStudies";
import { Downloads } from "@/components/site/Downloads";
import { Services, Industries } from "@/components/site/Services";
import { Assessment } from "@/components/site/Assessment";
import { LearningHub } from "@/components/site/LearningHub";
import { Faq } from "@/components/site/Faq";
import { Footer } from "@/components/site/Footer";
import { useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";

export default function HomeView({ posts }) {
  useReveal();
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (id) setTimeout(() => document.getElementById(id)?.scrollIntoView(), 50);
  }, []);
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main id="top">
        <Hero />
        <Ticker />
        <IntroVideo />
        <Team />
        <Benefit />
        <Reviews />
        <CtaBand />
        <AboutBlock />
        <CaseStudies />
        <Downloads />
        <Services />
        <Industries />
        <Assessment />
        <LearningHub posts={posts} />
        <Faq />
      </main>
      <Footer />
    </div>
  );
}
