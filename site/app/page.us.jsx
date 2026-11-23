import HomeView from "@/components/views/HomeView";
import { FAQS } from "@/components/site/faqData";
import { JsonLd } from "@/components/JsonLd";
import { pageMeta, faqJsonLd } from "@/lib/seo";
import { getFeaturedPosts } from "@/lib/posts";

export const metadata = pageMeta({
  title: "Managed IT & Cybersecurity for Law, Medical & CPA Firms | Ayvant",
  description: "Managed IT, cybersecurity, compliance and AI governance for law firms, medical and dental practices and CPAs. Based in Irvine, CA since 1985, serving the US.",
  path: "/",
});

export default function Page() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", ...faqJsonLd(FAQS) }} />
      <HomeView posts={getFeaturedPosts()} />
    </>
  );
}
