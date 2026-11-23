import { cybersecurity } from "./cybersecurity";
import { aiGovernance } from "./aiGovernance";
import { managedIt } from "./managedIt";
import { compliance } from "./compliance";

// Built service pages. Add the other services here as they are written.
export const SERVICE_PAGES = { cybersecurity, "ai-governance": aiGovernance, "managed-it": managedIt, compliance };

export const servicePath = (id) => (SERVICE_PAGES[id] ? `/services/${id}` : `/#${id}`);
