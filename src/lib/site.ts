export const PHONE = "8005916878";
export const PHONE_DISPLAY = "+91 80059 16878";
export const TEL_HREF = `tel:+91${PHONE}`;
export const ADDRESS = "6B, Chandra Vihar Colony, Beawar, Rajasthan";
export const MAPS_HREF = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(ADDRESS)}`;

export function waHref(message: string) {
  return `https://wa.me/91${PHONE}?text=${encodeURIComponent(message)}`;
}

export const WA_GENERAL = waHref(
  "Hello, I want to enquire about yarn from Giriraaj Textiles.\nProduct:\nCount:\nColour:\nMonthly volume:",
);
export const WA_POLYESTER = waHref(
  "Hello, I want to enquire about polyester yarn (3-ply, counts 10/12/15).\nRecycled or virgin:\nCount:\nColour:\nMonthly volume:",
);
export const WA_PP = waHref(
  "Hello, I want to enquire about polypropylene (PP) yarn.\nDetails:",
);
