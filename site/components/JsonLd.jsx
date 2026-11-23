// Structured data rendered into the page HTML, so crawlers see it without running JavaScript.
export const JsonLd = ({ data }) => (
  <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
);
