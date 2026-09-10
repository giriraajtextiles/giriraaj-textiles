import Image from "next/image";
import { cn } from "@/lib/utils";

type ProductCoverImageProps = {
  src: string;
  alt: string;
  lineId: "polyester" | "pp";
  className?: string;
  sizes?: string;
};

/** PP cones are tall — use contain + padding so they are not cropped in wide frames. */
export function ProductCoverImage({
  src,
  alt,
  lineId,
  className,
  sizes = "(max-width: 640px) 100vw, 50vw",
}: ProductCoverImageProps) {
  const isPp = lineId === "pp";

  return (
    <div
      className={cn(
        "relative aspect-[16/10] overflow-hidden",
        isPp ? "bg-neutral-200" : "bg-neutral-900",
        className,
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={
          isPp
            ? "object-contain p-6 sm:p-8"
            : "object-cover opacity-80 transition-opacity group-hover:opacity-90"
        }
      />
    </div>
  );
}

export function ProductReferenceImage({
  src,
  alt,
  lineId,
}: {
  src: string;
  alt: string;
  lineId: "polyester" | "pp";
}) {
  const isPp = lineId === "pp";

  return (
    <div
      className={cn(
        "relative overflow-hidden bg-neutral-200",
        isPp ? "aspect-[3/4]" : "aspect-[4/3]",
      )}
    >
      <Image
        src={src}
        alt={alt}
        fill
        sizes="256px"
        className={isPp ? "object-contain p-4" : "object-cover opacity-80"}
      />
    </div>
  );
}
