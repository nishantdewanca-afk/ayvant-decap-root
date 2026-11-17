import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Header } from "@/components/site/Header";
import { Footer } from "@/components/site/Footer";
import { fmtDate } from "@/lib/format";
import { slugify } from "@/lib/legal";

const text = (children) => (Array.isArray(children) ? children : [children]).map((c) => (typeof c === "string" ? c : c?.props?.children ?? "")).join("");

const md = {
  h2: ({ children }) => <h2 id={slugify(text(children))} className="disp text-3xl md:text-4xl mt-14 mb-5 scroll-mt-28">{children}</h2>,
  h3: ({ children }) => <h3 id={slugify(text(children))} className="text-xl font-bold mt-10 mb-3 scroll-mt-28">{children}</h3>,
  p: (p) => <p className="mb-5" {...p} />,
  a: ({ href, children }) => <a href={href} className="text-signal underline underline-offset-4" {...(href?.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{children}</a>,
  ul: (p) => <ul className="list-disc pl-6 mb-6 space-y-2" {...p} />,
  ol: (p) => <ol className="list-decimal pl-6 mb-6 space-y-2" {...p} />,
  table: (p) => <div className="overflow-x-auto my-6 border border-ink"><table className="w-full text-[15px] leading-[1.5]" {...p} /></div>,
  th: (p) => <th className="text-left font-semibold bg-sand px-4 py-3 border-b border-ink align-top" {...p} />,
  td: (p) => <td className="px-4 py-3 border-b border-ink/15 align-top" {...p} />,
};

export default function LegalPage({ doc, children }) {
  return (
    <div className="bg-paper text-ink font-body">
      <Header />
      <main>
        <article className="max-w-3xl mx-auto px-6 pt-16 md:pt-24 pb-24" data-testid="legal-page">
          <p className="lbl text-signal mb-6">Legal</p>
          <h1 className="disp text-[44px] md:text-[64px] leading-[1.05]">{doc.title}</h1>
          <p className="lbl text-smoke mt-6">Last updated {fmtDate(doc.updated)}</p>
          {children}
          <div className="text-[17px] leading-[1.75] mt-10">
            <ReactMarkdown remarkPlugins={[remarkGfm]} components={md}>{doc.body}</ReactMarkdown>
          </div>
        </article>
      </main>
      <Footer />
    </div>
  );
}
