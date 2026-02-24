import { useEffect, useRef, useState } from "react";
import { useInView } from "@/hooks/useParallax";
import type { GalleryImage } from "@/config/gallery";

interface Props {
  image: GalleryImage;
  index: number;
}

const SIZE_CLASSES: Record<GalleryImage["size"], string> = {
  small: "col-span-1 row-span-1",
  medium: "col-span-2 row-span-2",
  large: "col-span-3 row-span-3",
  thin: "col-span-1 row-span-2",
  thick: "col-span-3 row-span-2",
};

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max);

const GalleryImageCard = ({ image, index }: Props) => {
  const [ref, inView] = useInView(0.15);
  const imgRef = useRef<HTMLImageElement>(null);
  const [scrollOffset, setScrollOffset] = useState(0);

  useEffect(() => {
    if (!image.speed) return;

    const onScroll = () => {
      if (!imgRef.current) return;

      const rect = imgRef.current.getBoundingClientRect();
      const progress =
        (window.innerHeight - rect.top) /
        (window.innerHeight + rect.height);

      const rawOffset = progress * image.speed;
      setScrollOffset(clamp(rawOffset, -40, 40));
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [image.speed]);

  const translateX = image.hOffset ?? 0;
  const translateY = scrollOffset + (image.vOffset ?? 0);

  return (
    <div
      ref={ref}
      className={`
        ${SIZE_CLASSES[image.size]}
        relative overflow-hidden rounded-2xl
       style={{
        backgroundColor: "hsla(var(--background) / 0.6)"
        }}

        group
      `}
    >
      <img
        ref={imgRef}
        src={image.src}
        alt={image.alt}
        className={`
          w-full h-full object-cover
          transition-all duration-700 ease-out
          ${inView ? "opacity-100 scale-100" : "opacity-0 scale-105"}
          group-hover:scale-[1.08]
        `}
        style={{
          objectPosition: image.focus ?? "center",
          transform: `translate(${translateX}px, ${translateY}px)`,
        }}
      />

      {/* Hover overlay */}
      <div
        className="
          absolute inset-0
          style={{
            background: `
              linear-gradient(
                to top,
                hsla(var(--background) / 0.7),
                hsla(var(--background) / 0.35),
                hsla(var(--background) / 0)
              )
            `
          }}

          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
        "
      />

      {/* Caption */}
      <div
        className="
          absolute bottom-4 left-4 right-4
          text-sm text-white/90
          opacity-0 translate-y-2
          group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300
        "
      >
        {image.alt}
      </div>
    </div>
  );
};

export default GalleryImageCard;
