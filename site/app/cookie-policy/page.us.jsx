import LegalPage from "@/components/LegalPage";
import { getLegal } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

const doc = getLegal("cookie-policy");
export const metadata = pageMeta({ title: `${doc.title} | Ayvant`, description: doc.description, path: "/cookie-policy" });

export default function Page() {
  return <LegalPage doc={doc} />;
}
