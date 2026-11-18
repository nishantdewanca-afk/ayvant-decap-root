// ayvant.ca's Surrey page, carried over word for word.
import LegacyPage from "@/components/ca/LegacyPage";
import { getLegacyPage } from "@/lib/ca/pages";
import { caMeta } from "@/lib/ca/meta";

const p = getLegacyPage("/managed-it-services-surrey/");
export const metadata = caMeta({ title: p.metaTitle, description: p.description, path: p.route });

export default function Page() {
  return <LegacyPage page={p} />;
}
