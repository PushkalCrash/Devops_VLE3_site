export type ReleaseType = "album" | "single" | "ep";

export type Album = {
  id: string;
  title: string;
  type: ReleaseType;
  year: string;
  cover: string;   // URL now
  tracks: number;

  spotify?: string;
};

export const ALBUMS: Album[] = [
  {
    id: "mahakumbh",
    title: "MAHAKUMBH",
    type: "single",
    year: "2025",
    cover: "/albums/album-MAHAKUMBH.jpg",
    tracks: 1,

  },
  {
    id: "merebhole",
   title: "MERE BHOLE",
    type: "single",
    year: "2024",
    cover: "/albums/album-MereBhole.png",
    tracks: 1,

  },
  {
    id: "mazak",
    title: "Mazak",
    type: "single",
    year: "coming soon",
    cover: "/albums/album-Mazak.jpeg",
    tracks: 1,

  },
];
