import React, { imgHTMLAttributes, useState } from "react";
import { getMainSource, ImageName } from "@/lib/image-optimization";

interface ResponsiveImageProps extends Omit<imgHTMLAttributes<HTMLImageElement>, "src"> {
  /** Image name without extension (e.g., 'sigiriya', 'galle-fort') */
  imageName: ImageName;
  /** Alt text (required for accessibility) */
  alt: string;
  /** Loading strategy: 'lazy' for below-the-fold, 'eager' for above-the-fold */
  loading?: "lazy" | "eager";
  /** CSS width - optional, useful with aspect ratio classes */
  width?: number;
  height?: number;
  /** Additional className */
  className?: string;
  /** Default fallback image name (defaults to 'palm-beach') */
  fallbackImage?: ImageName;
}

/**
 * ResponsiveImage Component
 *
 * Automatically handles:
 * - Original JPG image display
 * - Lazy loading for non-critical images
 * - Proper alt text for accessibility
 * - Fallbacks for missing images
 * - Error handling with default image display
 *
 * @example
 * ```tsx
 * <ResponsiveImage
 *   imageName="sigiriya"
 *   alt="Sigiriya Rock Fortress"
 *   loading="lazy"
 *   className="rounded-xl w-full object-cover"
 *   fallbackImage="palm-beach"
 * />
 * ```
 */
const ResponsiveImage = React.forwardRef<HTMLImageElement, ResponsiveImageProps>(
  (
    {
      imageName,
      alt,
      loading = "lazy",
      className,
      fallbackImage = "palm-beach" as ImageName,
      ...props
    },
    ref
  ) => {
    const [hasError, setHasError] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    // Use fallback image if primary image fails or is not found
    const currentImageName = hasError ? fallbackImage : imageName;
    const mainSrc = getMainSource(currentImageName);

    // If even fallback image fails, show a placeholder gradient
    if (!mainSrc) {
      return (
        <div
          className={`${className} bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center`}
          role="img"
          aria-label={alt}
        >
          <span className="text-gray-500 text-sm">Image unavailable</span>
        </div>
      );
    }

    return (
      <img
        ref={ref}
        src={mainSrc}
        alt={alt}
        loading={loading}
        className={className}
        decoding="async"
        onError={() => {
          console.error(`Failed to load image: ${imageName}, using fallback: ${fallbackImage}`);
          setHasError(true);
        }}
        onLoad={() => setIsLoading(false)}
        {...props}
      />
    );
  }
);

ResponsiveImage.displayName = "ResponsiveImage";

export default ResponsiveImage;
