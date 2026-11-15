import { yarnLines } from "@/lib/products";
import { ADDRESS, GSTIN, PHONE } from "@/lib/site";

const SITE_URL = "https://www.giriraajtextiles.com";
const BUSINESS_ID = `${SITE_URL}/#business`;

const addressParts = ADDRESS.split(", ");
const addressRegion = addressParts.at(-1) ?? "";
const addressLocality = addressParts.at(-2) ?? "";
const streetAddress = addressParts.slice(0, -2).join(", ");

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": BUSINESS_ID,
      name: "Giriraaj Textiles",
      url: SITE_URL,
      telephone: `+91${PHONE}`,
      taxID: GSTIN,
      address: {
        "@type": "PostalAddress",
        streetAddress,
        addressLocality,
        addressRegion,
        addressCountry: "IN",
      },
    },
    ...yarnLines.map((line) => ({
      "@type": "Product",
      "@id": `${SITE_URL}/products/${line.id}#product`,
      name: line.name,
      description: line.summary,
      image: `${SITE_URL}${line.coverImage}`,
      url: `${SITE_URL}/products/${line.id}`,
      brand: { "@id": BUSINESS_ID },
      additionalProperty: line.specs.map((spec) => ({
        "@type": "PropertyValue",
        name: spec.label,
        value: spec.value,
      })),
    })),
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(structuredData).replace(/</g, "\\u003c"),
      }}
    />
  );
}
