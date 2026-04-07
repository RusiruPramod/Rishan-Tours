/**
 * Valid image names available in /assets/ folder
 */
export type ImageName = 
  | "elephant"
  | "galle-fort"
  | "galle-library"
  | "lotus-tower"
  | "mirissa-beach"
  | "nine-arch-bridge-real"
  | "nine-arch-bridge"
  | "ocean-boats"
  | "palm-beach"
  | "sigiriya-aerial"
  | "sigiriya"
  | "tea-plantation"
  | "temple-kandy"
  | "waterfall-friends";

/**
 * Gets the image source path from /assets/ folder
 * @param imageName - Name of image without extension
 * @returns path to the JPG image
 */
export function getMainSource(imageName: ImageName): string {
  return `/assets/${imageName}.jpg`;
}
