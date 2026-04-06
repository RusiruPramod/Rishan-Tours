import React, { imgHTMLAttributes } from "react";
import { getSrcSet, getMainSource, RESPONSIVE_SIZES, ImageName } from "@/lib/image-optimization";

interface ResponsiveImageProps extends Omit<imgHTMLAttributes<HTMLImageElement>, "src" | "srcSet" | "sizes"> {
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
  /** Custom sizes attribute (defaults to responsive sizes) */
  sizes?: string;
}

/**
 * ResponsiveImage Component
 *
 * Automatically handles:
 * - WebP format with proper srcset
 * - Responsive breakpoints (480px, 768px, 1024px, 1200px)
 * - Lazy loading for non-critical images
 * - Proper alt text for accessibility
 * - Fallbacks for older browsers
 *
 * @example
 * ```tsx
 * <ResponsiveImage
 *   imageName="sigiriya"
 *   alt="Sigiriya Rock Fortress"
 *   loading="lazy"
 *   className="rounded-xl w-full object-cover"
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
      sizes = RESPONSIVE_SIZES,
      ...props
    },
    ref
  ) => {
    // Get optimized image data
    const srcSet = getSrcSet(imageName);
    const mainSrc = getMainSource(imageName);

    if (!srcSet || !mainSrc) {
      console.error(`Failed to load image metadata for: ${imageName}`);
      return null;
    }

    return (
      <img
        ref={ref}
        src={mainSrc}
        srcSet={srcSet}
        sizes={sizes}
        alt={alt}
        loading={loading}
        className={className}
        decoding="async"
        {...props}
      />
    );
  }
);

ResponsiveImage.displayName = "ResponsiveImage";

export default ResponsiveImage;
