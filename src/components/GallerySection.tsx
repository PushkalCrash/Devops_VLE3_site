import GalleryImageCard from "./GalleryImageCard";
import { GALLERY_IMAGES } from "@/config/gallery";
import { useInView } from "@/hooks/useParallax";

const GallerySection = () => {
  const [titleRef, titleInView] = useInView(0.2);

  return (
    <section id="gallery" className="py-28">
      <div className="container">
        {/* Title */}
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700
            ${titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
        >
          <p className="section-eyebrow">Behind the Music</p>
          <h2 className="section-title">Gallery</h2>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-4
            auto-rows-[160px]
            md:auto-rows-[220px]
            gap-4
          "
        >
          {GALLERY_IMAGES.map((img, i) => (
            <GalleryImageCard
              key={img.src}
              image={img}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
