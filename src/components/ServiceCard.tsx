import { Service } from "@/config/services";
import {
  Music,
  Mic,
  Guitar,
  Headphones,
  Radio,
  ArrowUpRight,
} from "lucide-react";

const ICONS = {
  music: Music,
  mic: Mic,
  guitar: Guitar,
  headphones: Headphones,
  radio: Radio,
};

type Props = {
  service: Service;
};

const ServiceCard = ({ service }: Props) => {
  const Icon = ICONS[service.icon];

  return (
    <a
      href={service.linkUrl || "#"}
      className="
        group
        relative
        w-[260px] sm:w-[300px]
        h-[220px]
        flex-shrink-0
        rounded-2xl
        border
        p-6
        transition-all duration-300
      "
      style={{
        backgroundColor: "hsla(var(--card) / 0.85)",
        borderColor: "hsla(var(--border) / 1)",
      }}
    >
      {/* Hover glow */}
      <div
        className="
          absolute inset-0 rounded-2xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-300
          pointer-events-none
        "
        style={{
          boxShadow:
            "0 0 14px hsl(0 85% 55% / 0.35), 0 0 28px hsl(0 85% 55% / 0.2)",
        }}
      />

      {/* Icon */}
      <div
        className="
          mb-4
          w-11 h-11
          rounded-xl
          flex items-center justify-center
          transition-all duration-300
        "
        style={{
          border: "1px solid hsla(var(--primary) / 0.4)",
          color: "hsl(var(--primary))",
        }}
      >
        <Icon size={22} />
      </div>

      {/* Title */}
      <h3 className="font-display text-lg text-foreground mb-2">
        {service.title}
      </h3>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {service.description}
      </p>

      {/* Link (desktop only) */}
      {service.linkText && (
        <span
          className="
            hidden md:inline-flex
            absolute bottom-5 left-6
            items-center gap-1
            text-sm
          "
          style={{ color: "hsl(var(--primary))" }}
        >
          {service.linkText}
          <ArrowUpRight size={14} />
        </span>
      )}
    </a>
  );
};

export default ServiceCard;
