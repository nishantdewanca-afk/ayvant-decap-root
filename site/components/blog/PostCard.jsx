"use client";
import { ArrowUpRight } from "lucide-react";
import { fmtDate } from "@/lib/format";
import { postHref } from "@/lib/site";

export const PostCard = ({ p, i = 0, testid }) => (
  <article className="reveal group" style={{ transitionDelay: `${(i % 3) * 90}ms` }}>
    <a href={postHref(p.slug)} className="block" data-testid={testid}>
      <figure className="aspect-[16/10] bg-slot overflow-hidden border border-ink">
        {p.cover && <img src={p.cover} alt="" className="img-duo w-full h-full object-cover" loading="lazy" />}
      </figure>
      <p className="lbl mt-5 flex flex-wrap gap-x-3"><span className="text-signal">{p.type}</span><span className="text-smoke">{p.read_time || fmtDate(p.date)}</span></p>
      <h3 className="text-xl font-bold leading-snug mt-2 group-hover:text-signal transition-colors">{p.title}</h3>
      <p className="text-[15px] leading-[1.6] mt-2 text-ink/75">{p.excerpt}</p>
      <span className="inline-flex items-center gap-1 mt-4 font-semibold text-sm border-b border-ink pb-0.5">Read <ArrowUpRight size={14} /></span>
    </a>
  </article>
);
