"use client";
import { Linkedin } from "lucide-react";
import { Section, RailGrid, RailLabel } from "./primitives";
import { TEAM } from "@/lib/content";

export const Team = () => (
  <Section id="team" className="bg-paper text-ink border-t border-ink" testid="team-section">
    <RailGrid>
      <RailLabel n="02">Team</RailLabel>
      <div className="min-w-0">
        <div className="grid md:grid-cols-[1fr_1fr] gap-6 mb-12 items-end reveal">
          <h2 className="disp h2-size">Real names. Real people.</h2>
          <p className="text-[17px] leading-[1.6] max-w-md">When you call, you reach the people below and the engineers who work with them. No offshore queue, no faceless ticket portal.</p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {TEAM.map((m, i) => (
            <div key={m.name} className="group reveal" style={{ transitionDelay: `${i * 90}ms` }} data-testid={`team-member-${i}`}>
              <figure className="aspect-square bg-slot overflow-hidden border border-ink">
                <img src={m.img} alt={`${m.name}, ${m.role} at Ayvant`} className="img-duo w-full h-full object-cover" loading="lazy" />
              </figure>
              <p className="font-semibold mt-4 text-lg">{m.name}</p>
              <div className="flex items-center justify-between gap-2">
                <p className="lbl text-smoke">{m.role}</p>
                <a href={m.li} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`} className="hover:text-signal transition-colors" data-testid={`team-linkedin-${i}`}>
                  <Linkedin size={16} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </RailGrid>
  </Section>
);
