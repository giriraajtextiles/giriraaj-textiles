export const polyesterCounts = ["10", "12", "15"] as const;

export const polyesterColours = ["White", "Cream", "Blue"] as const;

/** Sample photos — colour/count combinations we have on file. Not a full catalogue grid. */
export const polyesterPhotos = [
  {
    src: "/3-12-white.jpg",
    alt: "White polyester yarn spools, 12 count",
    label: "White",
    count: "12",
  },
  {
    src: "/3-12-blue.jpg",
    alt: "Blue polyester yarn spools, 12 count",
    label: "Blue",
    count: "12",
  },
  {
    src: "/3-15-cream-3.jpeg",
    alt: "Cream polyester yarn spool, 15 count",
    label: "Cream",
    count: "15",
  },
  {
    src: "/3-15-cream-1.jpeg",
    alt: "Cream polyester yarn cone, 15 count",
    label: "Cream",
    count: "15",
  },
  {
    src: "/3-15-cream-2.jpeg",
    alt: "Cream polyester yarn cones, 15 count",
    label: "Cream",
    count: "15",
  },
] as const;

/** @deprecated Use polyesterPhotos */
export const polyesterVariants = polyesterPhotos;

export const polypropylenePhotos = [
  {
    src: "/pp-3.jpeg",
    alt: "Polypropylene bag closing yarn cone on white surface",
  },
  {
    src: "/pp-2.jpeg",
    alt: "Polypropylene bag closing yarn cone, angled view",
  },
  {
    src: "/pp-1.jpeg",
    alt: "Polypropylene bag closing yarn cone",
  },
] as const;

export type YarnLine = {
  id: "polyester" | "pp";
  name: string;
  summary: string;
  coverImage: string;
  coverAlt: string;
  specs: { label: string; value: string }[];
};

export const yarnLines: YarnLine[] = [
  {
    id: "polyester",
    name: "Polyester yarn",
    summary:
      "3-ply synthetic yarn for bag-closing machines on HDPE and woven sack lines.",
    coverImage: "/3-12-white.jpg",
    coverAlt: "White polyester yarn spools",
    specs: [
      { label: "Construction", value: "3-ply" },
      { label: "Count", value: polyesterCounts.join(", ") },
      { label: "Material", value: "Recycled and virgin" },
      {
        label: "Cone weight",
        value: "250 g and 350 g (gross, including a 25 g cone)",
      },
      { label: "Colours", value: `${polyesterColours.join(", ")}, on request` },
      { label: "MOQ", value: "1,000 cones" },
      { label: "HSN", value: "5509" },
    ],
  },
  {
    id: "pp",
    name: "Polypropylene yarn",
    summary:
      "PP yarn for open-mouth woven sacks and industrial bag closing.",
    coverImage: "/pp-3.jpeg",
    coverAlt: "Polypropylene bag closing yarn cone on white surface",
    specs: [
      { label: "Use", value: "Woven sack bag closing" },
      { label: "Details", value: "Specifications on enquiry" },
    ],
  },
];
