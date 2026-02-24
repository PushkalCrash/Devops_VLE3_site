export type GallerySize =
  | "small"
  | "medium"
  | "large"
  | "thin"
  | "thick";

export type GalleryImage = {
  src: string;
  alt: string;
  size: GallerySize;

  /**
   * object-position
   * examples:
   * "center"
   * "center top"
   * "center 30%"
   */
  focus?: string;

  /**
   * Vertical parallax strength (px)
   * positive = down
   * negative = up
   */
  speed?: number;

  /**
   * Manual vertical framing (px)
   * positive = move image DOWN
   * negative = move image UP
   */
  vOffset?: number;

  /**
   * Manual horizontal framing (px)
   * positive = move image RIGHT
   * negative = move image LEFT
   */
  hOffset?: number;
};
export const GALLERY_IMAGES: GalleryImage[] = [
  {
    src: "/gallery/RoadPerformance.jpeg",
    alt: "Road Performance",
    size: "large",
    focus: "center 75%",
    speed: 30,
    vOffset: 50,

  },

  {
    src: "/gallery/Performance1.jpeg",
    alt: "Live Performance",
    size: "thin",
    focus: "center 35%",
    speed: -25,
    vOffset: 5,
  },

  {
    src: "/gallery/Studio.jpeg",
    alt: "Studio Setup",
    size: "small",
    focus: "center",
    speed: 12,
    hOffset: -10,
  },

  {
    src: "/gallery/StudioSession1.jpeg",
    alt: "Recording Vocals",
    size: "thin",
    focus: "center right",
    speed: -18,
    hOffset: 35,
    vOffset: 6,
  },

  {
    src: "/gallery/Performance2.jpeg",
    alt: "Live Guitar",
    size: "medium",
    focus: "center top",
    speed: -28,
    vOffset: -40,
  },

  {
    src: "/gallery/StudioSession2.jpeg",
    alt: "Guitar Recording",
    size: "thin",
    focus: "center",
    speed: 22,
    hOffset: -8,
  },
];
