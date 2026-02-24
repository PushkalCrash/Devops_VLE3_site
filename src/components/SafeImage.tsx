import { useState, CSSProperties } from "react";

interface SafeImageProps {
  src: string;
  alt?: string;
  className?: string;
  style?: CSSProperties;
}

/**
 * SafeImage
 * - Prevents broken-image icons
 * - Shows a solid fallback block instead
 * - Accepts style prop (required for parallax transforms)
 */
const SafeImage = ({
  src,
  alt = "",
  className = "",
  style,
}: SafeImageProps) => {
  const [hasError, setHasError] = useState(false);

  // If image fails to load, render a solid block instead
  if (hasError || !src) {
    return (
      <div
        className={`bg-card ${className}`}
        style={style}
        aria-label={alt}
      />
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      style={style}
      loading="lazy"
      onError={() => setHasError(true)}
    />
  );
};

export default SafeImage;
