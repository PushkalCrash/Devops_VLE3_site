import { Play, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useParallax";
import { ALBUMS } from "@/config/albums";

const ReleasesSection = () => {
  const [titleRef, titleInView] = useInView(0.2);

  return (
    <section className="py-24 ">
      <div className="container mx-auto px-6">
        <div
          ref={titleRef}
          className={`mb-16 transition-all duration-700 ${
            titleInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="section-eyebrow">Discography</p>
          <h2 className="section-title">RELEASES</h2>

        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {ALBUMS.map((album, index) => (
            <ReleaseCard key={album.id} album={album} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ReleaseCard = ({ album, index }) => {
  const [ref, isInView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      {/* Cover */}
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 group-hover:glow-gold">
        <img
          src={album.cover}
          onError={(e) => (e.currentTarget.src = "/albums/fallback.jpg")}
          alt={album.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition">
          <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center">
            <Play className="w-7 h-7 text-black ml-1" />
          </button>
        </div>

        {/* Type badge */}
        <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-primary text-black">
          {album.type.toUpperCase()}
        </div>

        {/* Year */}
        <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-black/70 text-xs">
          {album.year}
        </div>
      </div>

      <h3 className="font-display text-lg text-white group-hover:text-primary">
        {album.title}
      </h3>

      <p className="text-sm text-muted-foreground">
        {album.tracks} {album.tracks === 1 ? "track" : "tracks"}
      </p>

      <div className="mt-2 flex items-center gap-2 text-xs text-muted-foreground">
        <ExternalLink className="w-4 h-4" />
        Stream
      </div>
    </div>
  );
};

export default ReleasesSection;
