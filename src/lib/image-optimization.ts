import metadata from "@/assets/optimized/metadata.json";

export type ImageName = keyof typeof metadata;

/**
 * Generates srcset string for responsive images
 * @param imageName - Name of image without extension (e.g., 'sigiriya')
 * @returns srcset string for use in img tags
 */
export function getSrcSet(imageName: ImageName): string {
  const imageMetadata = metadata[imageName];
  if (!imageMetadata) {
    console.warn(`Image metadata not found for: ${imageName}`);
    return "";
  }

  const srcset = Object.entries(imageMetadata.variants)
    .map(([size, data]) => `${data.path} ${size}`)
    .join(", ");

  return srcset;
}

/**
 * Gets the largest (fallback) image source
 * @param imageName - Name of image without extension
 * @returns path to the largest WebP variant
 */
export function getMainSource(imageName: ImageName): string {
  const imageMetadata = metadata[imageName];
  if (!imageMetadata) {
    console.warn(`Image metadata not found for: ${imageName}`);
    return "";
  }

  // Find the largest variant
  const variants = Object.entries(imageMetadata.variants);
  const [, largestData] = variants.reduce((prev, current) => {
    const prevSize = parseInt(prev[0]);
    const currentSize = parseInt(current[0]);
    return currentSize > prevSize ? current : prev;
  });

  return largestData.path;
}

/**
 * Gets all metadata for an image
 * @param imageName - Name of image without extension
 * @returns Image metadata including dimensions and file sizes
 */
export function getImageMetadata(imageName: ImageName) {
  return metadata[imageName];
}

/**
 * Generates sizes attribute for responsive loading
 * Commonly used sizes attribute for Tailwind breakpoints
 */
export const RESPONSIVE_SIZES = "(max-width: 480px) 100vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 1200px";
