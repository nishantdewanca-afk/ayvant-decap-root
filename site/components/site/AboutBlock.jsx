"use client";
import { ArrowUpRight } from "lucide-react";
import { Section, RailGrid, RailLabel } from "./primitives";
import { BIZ } from "@/lib/content";

export const AboutBlock = () => (
  <Section id="about" className="bg-paper text-ink" testid="about-section">
    <RailGrid>
      <RailLabel n="06">About</RailLabel>
      <div className="min-w-0 grid lg:grid-cols-[1fr_1fr] gap-12">
        <div className="reveal">
          <h2 className="disp h2-size">Four decades of keeping quiet businesses running quietly.</h2>
          <figure className="mt-10 bg-white p-3 pb-5 border border-ink/15 shadow-[0_18px_40px_-22px_rgba(20,20,20,0.45)] -rotate-[1.5deg] hover:rotate-0 transition-transform duration-700 max-w-md" data-testid="about-archive-photo">
            <img src="/sean-1991.jpg" alt="Sean Dewan as a child around 1991, sitting at a computer with 16KB of memory in an early computer room" className="w-full h-auto" width="1346" height="1168" loading="lazy" />
            <figcaption className="mt-4 px-1">
              <span className="lbl text-signal">Circa 1991 / 1992</span>
              <span className="block disp italic text-xl mt-1">Sean, now our CTO and co-founder, at a computer with 16KB of memory.</span>
            </figcaption>
          </figure>
        </div>
        <div className="space-y-6 text-[17px] leading-[1.7] reveal">
          <p>
            We started in San Jose in 1985, back when "IT support" meant a person with a toolbox and a stack of floppy disks. The tools have changed many times since. What hasn't changed is the kind of client we're best at helping: small and mid-sized firms that are trusted with other people's private information.
          </p>
          <p>
            In 2020 we became Ayvant, and today we work from Irvine, California with law offices, medical and dental practices, CPAs, accountants and investment firms across the United States. Our job is to make your technology dependable, your data hard to steal, and your compliance easy to prove.
          </p>
          <p>
            24x7 support for clients, based on their service agreement, and an office team for everything else.
          </p>
          <a href={BIZ.aboutUrl} className="group inline-flex items-center gap-2 font-semibold border-b-2 border-signal pb-1 hover:text-signal transition-colors" data-testid="about-link">
            More about Ayvant <ArrowUpRight size={18} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </RailGrid>
  </Section>
);
