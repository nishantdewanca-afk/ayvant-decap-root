import LegalPage from "@/components/LegalPage";
import { OptOutPanel } from "@/components/consent/PrivacyLinks";
import { getLegal } from "@/lib/legal";
import { pageMeta } from "@/lib/seo";

const doc = getLegal("privacy-choices");
export const metadata = pageMeta({ title: `${doc.title} | Ayvant`, description: doc.description, path: "/privacy-choices" });

export default function Page() {
  return (
    <LegalPage doc={doc}>
      <OptOutPanel />
    </LegalPage>
  );
}
