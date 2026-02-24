import { Album } from "@/config/albums";
import { Play, ExternalLink } from "lucide-react";
import { useInView } from "@/hooks/useParallax";

export const AlbumCard = ({
  album,
  index,
}: {
  album: Album;
  index: number;
}) => {
  const [ref, isInView] = useInView(0.1);

  return (
    <div
      ref={ref}
      className={`group cursor-pointer transition-all duration-700 ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative aspect-square rounded-xl overflow-hidden mb-4 group-hover:glow-gold transition-shadow duration-500">
        <img
          src={album.cover}
          alt={album.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="w-16 h-16 rounded-full bg-primary flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
            <Play className="w-7 h-7 text-primary-foreground fill-current ml-1" />
          </button>
        </div>

        <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
          {album.year}
        </div>

        <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-xs text-primary-foreground">
          {album.type.toUpperCase()}
        </div>
      </div>

      <h3 className="font-display text-xl text-foreground group-hover:text-primary transition-colors">
        {album.title}
      </h3>

      <p className="text-sm text-muted-foreground">
        {album.tracks} {album.tracks === 1 ? "track" : "tracks"}
      </p>

      {album.spotify && (
        <a
          href={album.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-3 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
        >
          <ExternalLink className="w-4 h-4" />
          Stream Now
        </a>
      )}
    </div>
  );
};
